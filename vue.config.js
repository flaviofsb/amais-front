module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/amais-vue/" : "/",
  transpileDependencies: [
    'vuetify'
  ]
}
