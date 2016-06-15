const html = require('./reactToString')

const phantom = require('phantom')

let phInstance
phantom.create()
  .then(instance => {
    phInstance = instance
    return instance.createPage()
  })
  .then(page => {
    page.setContent(html, 'http://google.fr')
    page.render('build/react.pdf')
    phInstance.exit()
  })
