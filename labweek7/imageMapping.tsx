const imageMapping = (photoUrl) => {
  const images = {
    "silvi.jpg": require("./assets/silvi.jpg"),
    "shella.jpg": require("./assets/shella.jpg"),
    "mingyu.jpg": require("./assets/Mingyu.jpg"),
    "yoongi.jpg": require("./assets/yoongi.jpg"),
    "wi hajun.jpg": require("./assets/wi hajun.jpg"),
    "jan.jpg": require("./assets/jan.jpg"),
    "davikah.jpg": require("./assets/davikah.jpg"),
    "newwie.jpg": require("./assets/newwie.jpg"),
  };

  // Jika tidak ditemukan, gunakan gambar default
  return images[photoUrl.toLowerCase()] || require("./assets/silvi.jpg");
};

export default imageMapping;
