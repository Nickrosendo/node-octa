const
  app = require('./config/express'),
  port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Escutando na porta : ${port}`);
});