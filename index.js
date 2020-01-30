const fs = require("fs");
const ffmpeg = require("@ffmpeg/ffmpeg");

(async () => {
  console.log(ffmpeg);
  await ffmpeg.load();
  const data = ffmpeg.transcode("./bird.avi", "mp4");
  fs.writeFileSync("./test.mp4", data);
})();
