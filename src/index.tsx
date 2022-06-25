/*
 * @Descripttion: 
 * @version: 18.1.2
 * @Author: Harleens
 * @Date: 2022-06-22 22:02:57
 * @LastEditors: Harleens
 * @LastEditTime: 2022-06-25 15:58:15
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import "@/assets/base.less"
import Router from '@/router'
import store from '@/store'
import {Provider} from 'react-redux'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
        <Provider store={store}>
        <Router />
    </Provider>,
);
