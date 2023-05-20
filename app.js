const express = require("express");
const fs = require("fs");
const streamingVideoService = require("./services/StreamingVideoService");
const { STATUS_CODES } = require("http");


const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/streaming-video", (req, res) => {
  const range     = req.headers.range;
  const videoName = req.query.videoName
  const quality   = req.query.quality

  if (!videoName) return res.status(400).send("Requires videoName");
  if (!quality)   return res.status(400).send("Requires quality");
  if (!range)     return res.status(400).send("Requires Range header");

  const startRange = Number(range.replace(/\D/g, "")) || 0;

  const {
          videoChunkStream, 
          startChunk, 
          endChunk, 
          videoSize, 
          contentLength
        } = streamingVideoService.getVideoStream(videoName, quality, startRange);
  

  const headers = {
    "Content-Range": `bytes ${startChunk}-${endChunk}/${videoSize}`,
    "Accept-Ranges": "bytes",
    "Content-Length": contentLength,
    "Content-Type": "video/mp4",
  };

  res.writeHead(206, headers);
  
  videoChunkStream.pipe(res);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
