const config = {
  MYSQL_HOST: "localhost",
  MYSQL_USER: "root",
  MYSQL_PASS: "root",
  MYSQL_DB: "images",
  IMAGE_PATH: process.env.IMAGE_PATH || "/tmp"
  GIF_CAPTION_SVC: process.env.GIF_CAPTION_SVC || "localhost:4000"
}

module.exports = config;
