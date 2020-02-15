const env = require('dotenv').config().parsed;
const got = require('got');
const express = require('express');
const cors = require('cors');
const app = express();
const HOST = env.HOST || '127.0.0.1';
const PORT = +env.PORT || 1337;

app.use(cors());

async function randomGif(answer) {
  if (process.env.GIPHY_API_KEY) {
    const apiKey = env.GIPHY_API_KEY;
    const giphyResponse = await got(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${answer}`).json();
    return giphyResponse.data.image_url;
  }
  return '';
}

app.get('/api/yesno', async (req, res) => {
  const answer = Math.random() < .5 ? 'yes' : 'no';
  const gif = await randomGif(answer);
  res.json({
    answer,
    gif
  })
});

app.use(express.static('public'));

app.listen(PORT, HOST, () => console.log(`Server listening at http://${HOST}:${PORT}/`))