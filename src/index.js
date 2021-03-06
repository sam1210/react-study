import React from 'react'
import ReactDOM from 'react-dom'
import { createStore , applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import reducer from './reducers/reducer'

const store = createStore(
  reducer,
  applyMiddleware(
    thunk,
    logger
  )
)

ReactDOM.render(
  <Provider store={store}> 
    <App />
  </Provider>,
  document.getElementById('root')
)




// import React from 'react'
// import ReactDOM from 'react-dom'
// import { createStore } from 'redux'
// import { Provider } from 'react-redux'

// import App from './components/App'
// import reducer from './reducers/reducer'


// const store = createStore(reducer)

// ReactDOM.render(
//   <Provider store={store}> 
//     <App />
//   </Provider>,
//   document.getElementById('root')
// )