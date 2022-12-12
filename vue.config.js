
module.exports = {
  configureWebpack(config){
    // eval-cheap-module-source-map
    console.log(config.devtool)
    config.devtool = 'cheap-module-source-map'
  }
}