import React, { Component } from 'react'

import { Provider } from 'react-redux'

import dva from './dva';
import models from './model';

import 'taro-ui/dist/style/index.scss'

const dvaApp = dva.createApp({
  initialState: {},
  models,

});
const store = dvaApp.getStore();



class App extends Component {

  componentDidMount() { }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }

  // this.props.children 是将要会渲染的页面
  render() {
    return <Provider store={store}>

      {this.props.children}

    </Provider>


  }
}

export default App
