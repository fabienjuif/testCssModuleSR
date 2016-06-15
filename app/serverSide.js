const React = require('react')
const cleanupDom = require('jsdom-global')('<html><div id="app"/></html>')
const Component = require('../index').default

const render = require('react-dom').render

render(
  React.createElement(Component, null)
  , document.getElementById('app')
)

console.log(document.documentElement.innerHTML)

cleanupDom()
