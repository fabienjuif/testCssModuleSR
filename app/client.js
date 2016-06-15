import '!!file?name=[name].[ext]!./index.html'

import React from 'react'
import { render } from 'react-dom'

import Root from './index.js'

render(<Root />, document.getElementById('app'))
