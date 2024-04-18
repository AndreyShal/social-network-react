import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/redux-store"
import {Provider} from "react-redux";
import {BrowserRouter, HashRouter} from "react-router-dom";

// export const renderTree = (state: any) => {
//     ReactDOM.render(
//         <Provider store={store}>
//             <App/>
//         </Provider>
//         ,
//         document.getElementById('root')
//     );
// }
//
// renderTree(store.getState()) // 1-м рендере
// store.subscribe(() => {
//     let state = store.getState()
//     renderTree(state)
// })
//

export const renderTree = () => {
    ReactDOM.render(
        <HashRouter>
        <Provider store={store}>
            <App/>
        </Provider>
        </HashRouter>
        ,
        document.getElementById('root')
    );
}

renderTree()


