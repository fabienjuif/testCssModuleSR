import '!!file?name=[name].[ext]!./index.html'
import '!!file?name=[name].[ext]!normalize.css/normalize.css'

import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'

import Component from './Component'

render(
  <Component />
  , document.getElementById('app')
)
