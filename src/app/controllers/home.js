export default app => {
  const controller = {}

  controller.index = (req, res) => {
    res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Punserve</title>
          <style>
            body {
              padding: 50px;
              font: 14px "Lucida Grande", Helvetica, Arial, sans-serif;
            }
            a {
              color: #00B7FF;
            }
          </style>
        </head>
        <body>
          <h1>Punserve</h1>
          <p>Welcome to Punserve</p>
        </body>
      </html>
    `)
  }

  return controller
}
