import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';
import PortfolioContainer from "./components/PortfolioContainer";
import App from './App';
// const App = () => <PortfolioContainer />;

ReactDOM.render(<PortfolioContainer />, document.getElementById('root'));
