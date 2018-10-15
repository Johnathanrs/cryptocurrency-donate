import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { browserHistory } from 'react-router';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import classNames from 'classnames';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItemText from '@material-ui/core/ListItemText';
import LOGO from '../../../../assets/img/logo.png';

import callApi from '../../../../util/apiCaller';

// Import Style
import './AdminHeader.css';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  appFrame: {
    height: 430,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    position: 'absolute',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  'appBarShift-left': {
    marginLeft: drawerWidth,
  },
  'appBarShift-right': {
    marginRight: drawerWidth,
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  'content-left': {
    marginLeft: -drawerWidth,
  },
  'content-right': {
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  'contentShift-left': {
    marginLeft: 0,
  },
  'contentShift-right': {
    marginRight: 0,
  },
});

class AdminHeader extends React.Component {
  // const languageNodes = props.intl.enabledLanguages.map(
  //   lang => <li key={lang} onClick={() => props.switchLanguage(lang)} className={lang === props.intl.locale ? styles.selected : ''}>{lang}</li>
  // );
  constructor(props) {
    super(props);
    this.state = {
      isAuth: false,
      open: false,
      anchor: 'left',
    };

    this.navigate = this.navigate.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentWillMount() {
    if (typeof(window) !== "undefined") {
      const token = window.localStorage.getItem('smartprojectadmin');
      this.setState({ isAuth: token != null });
    }
  }

  logout() {
    localStorage.setItem('smartprojectadmin', null);
    this.setState({ ...this.state, isAuth: false });
    browserHistory.push('/');
  }

  navigate = (url) => {
    if (url.includes('admin') && !this.state.isAuth) {
      browserHistory.push('/admin/signin');
    } else {
      browserHistory.push(url);
    }
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleChangeAnchor = event => {
    this.setState({
      anchor: event.target.value,
    });
  };

  render() {
    const { anchor, open } = this.state;
    return (
      <div>
        <div className={styles.appFrame}>
          <AppBar
            className={classNames(styles.appBar, {
              [styles.appBarShift]: open,
              [styles['appBarShift-left']]: open,
            })}
          >
            <Toolbar disableGutters={!open}>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(styles.menuButton, open && styles.hide)}
              >
                <MenuIcon />
              </IconButton>
              <a className="navbar-brand" href="/">
                <img src={LOGO} alt="logo" />
              </a>
            </Toolbar>
          </AppBar>
        <Drawer
          variant="persistent"
          open={open}
          classes={{
            paper: styles.drawerPaper,
          }}
          anchor="left"
          >
          <div className={styles.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
            {
              !this.state.isAuth ? <button onClick={() => this.navigate('/admin/signin')} className="btn btn-lg btn-rounded my-0 bg-light btn-rounded" href="#" >Login</button> : <button onClick={() => this.logout()} className="btn btn-lg btn-rounded my-0 bg-light btn-rounded" href="#" >Logout</button>
            }
          </div>
          <Divider />
          <List>
            <ListItem button onClick={() => this.navigate('/admin/statistics')}>
              <ListItemText primary="Dashboard Statistics" />
            </ListItem>
            <Divider />
            <ListItem button onClick={() => this.navigate('/admin/dashboard')}>
                <ListItemText primary="Browser Projects" />
            </ListItem>
            <ListItem button onClick={() => this.navigate('/admin/project')}>
                <ListItemText primary="Create New Project" />
            </ListItem>
          </List>
          <Divider />
          <ListItem button onClick={() => this.navigate('/admin/users')}>
              <ListItemText primary="Users" />
            </ListItem>
            <Divider />
      </Drawer>
      </div>
      </div>  
    );
  }
}

AdminHeader.contextTypes = {
  router: PropTypes.object,
};

AdminHeader.propTypes = {
  // toggleAddPost: PropTypes.func.isRequired,
  // switchLanguage: PropTypes.func.isRequired,
  // intl: PropTypes.object.isRequired,
};

export default AdminHeader;
