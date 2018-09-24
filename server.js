require('sharo-scripts/util/load-dotenv')() // Loads .env.

const sharo = require('sharo-scripts')

sharo()
  .then(app => {
    const port = parseInt(process.env.PORT, 10) || 3000
    app.listen(port, () => {
      app.log.info(`Server listening at port ${port}`)
    })
  })
  .catch(error => {
    console.error(error)
    process.exitCode = 1
  })
