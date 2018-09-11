/*
  Sample route. In this sample, provide a Router object that simply prints
  a message.

  This allows you to put JSON endpoints, non-Next.js views, etc.

  You can export anything an Express server can use via server.use(). Routes
  will be loaded before Next.js request handler.

  Any files which name starts with underscore (_) will be ignored. Only
  top-level files are loaded, so subroutes can be organized in folders.
*/
const {Router: router} = require('express')

const route = router()

route.get('/hello', (req, res) => {
  res.send('Hello world!')
})

module.exports = route
