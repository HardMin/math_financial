// Container 

import React, {StrictMode} from 'react';
import { Render } from './router/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import './assets/font/font-face.css';
import './style/css/style.css';

export class App extends React.Component{

render(){
    return(
        <StrictMode>
            <BrowserRouter>
                <Render/>       
            </BrowserRouter>
        </StrictMode>
        );
    }
}
