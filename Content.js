const url = "https://cdn.vox-cdn.com/thumbor/WAVESAmwUdxWYZKuUr48zpid3nA=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19187243/joker2.jpg";

const images = document.getElementsByTagName("img");
setInterval(() => {
  for (let i = 0; i < images.length; i++) {
    const element = images[i];
    element.src = url
  }
}, 3000);