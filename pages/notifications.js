import React from 'react';
import sheep from 'react-sheep';
import Router from 'next/router';
import Loader from '../components/Loader';
import Header from '../containers/Notifications/Header';
import Main from '../containers/Notifications/Main';
import Footer from '../containers/Notifications/Footer';

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.sheep = sheep(this);
    this.Header = Header;
    this.Main = Main;
    this.Footer = Footer;
  }

  goToPage = (route)=> {
    this.sheep.setEnabled("loader")();
    setTimeout(()=> Router.push(route), 800);
  }

  render = ()=> {
    let {Header, Main, Footer} = this;
    let {enabled, setEnabled} = this.sheep;
    
    return (
      <Loader.Blank show={enabled("loader")}>
        <Header parent={this}/>
        <Main parent={this}/>
        <Footer parent={this}/>
      </Loader.Blank>
    )
  }
}

export default Notifications;