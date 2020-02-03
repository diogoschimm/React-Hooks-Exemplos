import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import AppClass from './AppClass';
import AppHooks from './AppHooks';
import AppConst from './AppConst';
import UseEffectComponent from './UseEffectComponent';
import Repositorios from './Repositorios';


ReactDOM.render(
    <>
        <AppClass />
        <AppHooks />
        <AppConst />
        <UseEffectComponent />
        <Repositorios />
    </>
, document.getElementById('root'));
 
