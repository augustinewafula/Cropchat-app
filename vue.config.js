// {
//   //pwa configs...

//   {
//     // ...other Workbox options...
//     [
//       {
//         urlPattern: new RegExp(".*(?:cdn2.catapi).com.*$/"),
//         handler: "staleWhileRevalidate"
//       }
//     ];
//   }
// }
var SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')

// var webpackConfig = merge(baseWebpackConfig, {
//   plugins:
  //  [
  //   // service worker caching
  //   new SWPrecacheWebpackPlugin({
  //     cacheId: 'my-vue-app',
  //     filename: 'service-worker.js',
  //     staticFileGlobs: ['dist/**/*.{js,html,css}'],
  //     minify: true,
  //     stripPrefix: 'dist/',
  //     runtimeCaching: [
  //     {
  //       urlPattern: /^https:\/\/fonts\.googleapis\.com\//,
  //       handler: 'cacheFirst'
  //     },
  //     {
  //       urlPattern: /^https:\/\/fonts\.gstatic\.com\//,
  //       handler: 'cacheFirst'
  //     },
  //     {
  //       urlPattern: /^https:\/\/code\.getmdl\.io\//,
  //       handler: 'cacheFirst'
  //     }]
  //   })
  // ]
// })