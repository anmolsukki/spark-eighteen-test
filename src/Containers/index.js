import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Routes from '../Router/routes';
import Navbar from './Toolbars/Toolbar';
import SideDrawer from './SideDrawer/SideDrawer';
import Backdrop from './BackDrop/BackDrop';

class Main extends React.Component {
  state = {
    sideDrawerOpen: false,
    navData: [
      {
        title: 'Home',
        isSelected: this.props.location.pathname === '/home' ? true : false,
        link: '/home',
      },
      {
        title: 'My Portfolio',
        isSelected: this.props.location.pathname === '/portfolio' ? true : false,
        link: '/portfolio',
      },
      {
        title: 'Client',
        isSelected: this.props.location.pathname === '/client' ? true : false,
        link: '/client',
      },
      {
        title: 'Get In Touch',
        isSelected: this.props.location.pathname === '/touch' ? true : false,
        link: '/touch',
      },
    ],
  };

  loading = () => (<div>Loading...</div>);

  drawerToggleClickHandler = async () => {
    await this.setState((prevState) => {
      return {
        sideDrawerOpen: !prevState.sideDrawerOpen,
      };
    });
  };

  handleClick = async (index) => {
    let navData = JSON.parse(JSON.stringify(this.state.navData));
    for (let i in navData) {
      if (navData[i].link === index.link) {
        navData[i].isSelected = true;
      } else navData[i].isSelected = false;
    }
    await this.setState({ navData });
  };

  render() {
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.drawerToggleClickHandler} />;
    }
    return (
      <div>
        <Navbar
          drawerClickHandler={this.drawerToggleClickHandler}
          navClass={this.state.navData}
          addClass={this.handleClick}
        />
        <SideDrawer
          show={this.state.sideDrawerOpen}
          bacDrawer={this.drawerToggleClickHandler}
          navClass={this.state.navData}
          addClass={this.handleClick}
        />
        {backdrop}
        <main>
          <Suspense fallback={this.loading()}>
            <Switch>
              {Routes.map((route, idx) => {
                return route.component ? (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={(props) => <route.component {...props} />}
                  />
                ) : null;
              })}
              <Redirect from="/" to="/home" />
            </Switch>
          </Suspense>
        </main>
      </div>
    );
  }
}

export default Main;
