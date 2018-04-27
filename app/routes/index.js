module.exports = app => {
  app.route('/').get((req, res, next) => {
    res.render('index', {
      title: 'Express Handlebars',
      condition: false,
      numbers: [1, 2, 3, 4, 5]
    })
  })
}
