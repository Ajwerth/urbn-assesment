module.exports = {
  // added this option to config so the app will use the main.css file
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/scss/main.scss";
        `
      }
    }
  }
};