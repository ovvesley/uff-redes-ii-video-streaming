const fs = require("fs");

/**
 * @param {string} video - video name ex: video1
 * @param {string} quality - required quality ex: low, medium, high
 * @returns {string}
 * @description Returns the path to the video file
 */
const getPathByQuality = (video, quality) => {
  const path = __dirname + "/../public/media/" + video + "-" + quality + ".mp4";
  return path;
};

/**
 *
 * @param {string} videoName - video name ex: video1
 * @param {string} quality - required quality ex: low, medium, high
 * @returns {string}
 */
const getVideoFile = (videoName, quality) => {
  const pathToVideo = getPathByQuality(videoName, quality);
  const videoStream = fs.statSync(pathToVideo);
  return videoStream;
};

const getVideoStream = (videoName = "avatar-2", quality = "medium", startChunk) => {
  const videoFile = getVideoFile(videoName, quality);
  const videoPath = getPathByQuality(videoName, quality);

  const videoSize = videoFile.size;

  const endChunk = Math.min(startChunk + 1000000, videoSize - 1);

  const contentLength = endChunk - startChunk + 1;

  const videoChunkStream = fs.createReadStream(videoPath, {
    start: startChunk,
    end: endChunk,
  });

  return {
    startChunk,
    endChunk,
    contentLength,
    videoSize,
    videoChunkStream
  };
};

module.exports = {
  getVideoStream,
};
