// Phase 2
const {
  getAllArtists,
  getLatestArtist,
  getArtistByArtistId,
  addArtist,
  editArtistByArtistId,
  deleteArtistByArtistId,
  getAlbumsForLatestArtist,
  getAlbumsByArtistId,
  getAlbumByAlbumId,
  addAlbumByArtistId,
  editAlbumByAlbumId,
  deleteAlbumByAlbumId,
  getFilteredAlbums,
  getSongsByArtistId,
  getSongsByAlbumId,
  getSongBySongId,
  addSongByAlbumId,
  editSongBySongId,
  deleteSongBySongId
} = require('./data');

const express = require('express');
const app = express();

// Your code here 
app.use(express.json());

// optional middleware - log of json request body
// app.use((req, res, next) => {
//   console.log('Request Body:', req.body);
//   next(); 
// })

app.get('/artists/latest/albums', (req, res) => {
  res.json(getAlbumsForLatestArtist());
})

app.get('/artists/latest', (req, res) => {
  res.status(200).json(getLatestArtist());
})


// request parameters
app.get('/artists/:artistId/albums', (req, res) => {
  res.json(getAlbumsByArtistId(req.params.artistId));
})

app.post('/artists/:artistId/albums', (req, res) => {
  res.status(201).json(addAlbumByArtistId(req.params.artistId, req.body));
})

app.get('/artists/:artistId/songs', (req, res) => {
  res.json(getSongsByArtistId(req.params.artistId));
})

app.get('/artists/:artistId', (req, res) => {
  res.json(getArtistByArtistId(req.params.artistId));
})

app.put('/artists/:artistId', (req, res) => {
  res.json(editArtistByArtistId(req.params.artistId, req.body));
})

app.patch('/artists/:artistId', (req, res) => {
  res.json(editArtistByArtistId(req.params.artistId, req.body));
})

app.delete('/artists/:artistId', (req, res) => {
  deleteArtistByArtistId(req.params.artistId);
  res.json({ message: 'Successfully deleted' })
})


app.get('/albums/:albumId/songs', (req, res) => {
  res.json(getSongsByAlbumId(req.params.albumId));
})

app.get('/albums/:albumId', (req, res) => {
  res.json(getAlbumByAlbumId(req.params.albumId));
})

app.put('/albums/:albumId', (req, res) => {
  res.json(editAlbumByAlbumId(req.params.albumId, req.body));
})

app.patch('/albums/:albumId', (req, res) => {
  res.json(editAlbumByAlbumId(req.params.albumId, req.body));
})

app.delete('/albums/:albumId', (req, res) => {
  deleteAlbumByAlbumId(req.params.albumId);
  res.json({ message: 'Successfully deleted'});
})

app.post('/albums/:albumId/songs', (req, res) => {
  res.status(201).json(addSongByAlbumId(req.params.albumId, req.body));
})


app.get('/songs/:songId', (req, res) => {
  res.json(getSongBySongId(req.params.songId));
})

app.put('/songs/:songId', (req, res) => {
  res.json(editSongBySongId(req.params.songId, req.body));
})

app.patch('/songs/:songId', (req, res) => {
  res.json(editSongBySongId(req.params.songId, req.body));
})

app.delete('/songs/:songId', (req, res) => {
  deleteSongBySongId(req.params.songId);
  res.json({ "message": "Successfully deleted" });
})


// request query ?
app.get('/albums', (req, res) => {
  res.json(getFilteredAlbums(req.query.startsWith));
})


app.get('/artists', (req, res) => {
  res.json(getAllArtists());
  // console.log("GET /artists");
})

app.post('/artists', (req, res) => {
  res.status(201).json(addArtist(req.body));
})

app.get('/', (req, res) => {
  console.log("GET /")
})

// DO NOT MODIFY
if (require.main === module) {
  const port = 8000;
  app.listen(port, () => console.log('Server is listening on port', port));
} else {
  module.exports = app;
}