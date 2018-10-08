// for static deployment
module.exports = {
  exportPathMap: function(defaultPathMap) {
    return {
      '/': { page: '/' }
    }
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/cv.js/out' : '',
}