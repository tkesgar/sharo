const sharo = require('sharo-scripts')

sharo()
  .then(app => {
    const port = process.env.PORT || 3000
    app.listen(port, () => {
      app.log.info(`Server listening at port ${port}`)
    })
  })
  .catch(error => {
    throw error
  })
