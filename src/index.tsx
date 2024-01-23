import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store, {RootStateType, StoreType} from "./redux/state"


export const renderTree = (state:RootStateType) => {
    ReactDOM.render(
        <App store={store} state={state} addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store) }/>,
        document.getElementById('root')
    );
}


renderTree(store.getState())
store.subscribe(renderTree)
