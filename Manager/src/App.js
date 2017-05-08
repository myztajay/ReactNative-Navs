import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Firebase } from './Firebase'
import  LoginForm  from './components/LoginForm'
import reducers from './reducers'
import ReduxThunk from 'redux-thunk'


class App extends Component {

  render(){
    return(
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>

          <LoginForm />

      </Provider>
    )
  }

}
export { App }
