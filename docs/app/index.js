import React from 'react'
import ReactDOM from 'react-dom'
import Router from './routes'

const mountNode = document.createElement('div')
document.body.appendChild(mountNode)

const render = (NewApp) => ReactDOM.render(<NewApp />, mountNode)

if (module.hot) {
  module.hot.accept('./routes', () => {
    const { scrollLeft, scrollTop } = document.scrollingElement
    ReactDOM.unmountComponentAtNode(mountNode)

    try {
      render(require('./routes').default)
      document.scrollingElement.scrollTop = scrollTop
      document.scrollingElement.scrollLeft = scrollLeft
    } catch (e) {
      console.error(e) 
    }
  })
}

render(Router)
