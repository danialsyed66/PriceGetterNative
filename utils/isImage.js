export default url =>
  /http(|s):(.*?).(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
