import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/redux-store"
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {setFake} from "./redux/users-reducer";


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
setInterval(()=>{
    store.dispatch(setFake())
},1000)

export const renderTree = () => {
    ReactDOM.render(
        <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
        </BrowserRouter>
        ,
        document.getElementById('root')
    );
}

renderTree()


