import React from 'react';
import { Switch, Route } from 'react-router';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Crown from './pages/crown/src/App_xx';
import Shop_xx from './pages/crown/src/pages/ShopPage_xx';
import Contact_xx from './pages/crown/src/pages/ContactPage_xx';
import Signin_xx from './pages/crown/src/pages/SigninPage_xx';
import Menu from './pages/menu/src/App_xx';

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/Crown" component={Crown} />
        <Route exact path="/Crown/api_xx/shop_xx" component={Shop_xx} />
        <Route exact path="/Crown/contact_xx" component={Contact_xx} />
        <Route exact path="/Crown/signin_xx" component={Signin_xx} />
        <Route exact path="/Menu" component={Menu} />
      </Switch>
    </div>
  );
}

export default App;
