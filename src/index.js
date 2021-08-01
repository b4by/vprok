import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import TagManager from 'react-gtm-module'
import { StoreProvider } from 'store/index'

const tagManagerArgs = {
    gtmId: 'GTM-P9V3936',
}

TagManager.initialize(tagManagerArgs)

ReactDOM.render(
    <StoreProvider>
        <App />
    </StoreProvider>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
