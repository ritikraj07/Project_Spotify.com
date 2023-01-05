import getKeys from "./keys.js";

const keys = getKeys();

async function getToken() {
  const clientId = keys.CLIENT_ID;
  const clientSecret = keys.CLIENT_SECRET;

  const result = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
    },
    body: "grant_type=client_credentials",
  });

  const data = await result.json();
  return data.access_token;
}

async function refreshToken() {
  let newToken = await getToken();
  console.log(newToken)
  localStorage.setItem("spotify_token", newToken);
}
async function getPlaylists(category, limit, TOKEN) {
  let response = await fetch(
    `https://api.spotify.com/v1/browse/categories/${category}/playlists?country=IN&offset=5&limit=${limit}`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
  let data = await response.json();
  return data.playlists.items;
}

async function getTrack(playlistID, TOKEN) {
  let res = await fetch(
    `https://api.spotify.com/v1/playlists/${playlistID}/tracks?offset=0&limit=20`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
  let data = await res.json();
  return data;
}

async function getAlbumTrack(albumID, TOKEN) {
  let res = await fetch(
    `https://api.spotify.com/v1/albums/${albumID}/tracks?offset=0&limit=20`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
  let data = await res.json();
  return data;
}

async function getAllSearchResults(query, type, limit, TOKEN) {
  let response = await fetch(
    `https://api.spotify.com/v1/search?type=${type}&q=${query}?offset=5&limit=${limit}`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
  let data = await response.json();
  return data;
}

async function getCategoryPlaylists(category, offset, limit, TOKEN) {
  let response = await fetch(
    `https://api.spotify.com/v1/browse/categories/${category}/playlists?country=IN&offset=${offset}&limit=${limit}`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
  let data = await response.json();
  return data.playlists.items;
}

export {
  refreshToken,
  getPlaylists,
  getTrack,
  getAllSearchResults,
  getAlbumTrack,
  getCategoryPlaylists,
};

