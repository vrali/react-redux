import * as React from 'react';
import * as classNames from 'classnames';
import {Theme, AppBar, Toolbar, List, ListItem, Typography, Divider, IconButton, withStyles, WithStyles, Button, ListItemIcon, ListItemText, Menu, MenuItem, ClickAwayListener, Grow, Paper, MenuList, GridList, GridListTile, StyleRulesCallback } from 'material-ui';
import {ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon, Menu as MenuIcon, 
  Inbox as InboxIcon, Star as StarIcon, Send as SendIcon, Drafts as DraftsIcon, AccountCircle as AccountCircleIcon } from 'material-ui-icons';
import { Manager, Target, Popper } from 'react-popper';
import * as Dropzone from "react-dropzone";
import { styles} from "./Navigation.style";
import SideBar from "./SideBar";
import AccountMenu from "./AccountMenu";
import Roster from "../../roster/components/Roster";
import { Link } from 'react-router-dom';

interface Props{
  auth : Auth
}

const decorate = withStyles(styles as StyleRulesCallback ,{withTheme:true})


class Navigation extends React.Component<Props & WithStyles<"root"|"appFrame"|"brand"|"appBar"|"appBarShift"|"menuButton"|"hide"|"content">> {
  state = {
    openDrawer: false,
  };
  timeout : any;

  handleDrawerToggle = () => {
    this.setState({ openDrawer: !this.state.openDrawer });    
  };

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }  
  render() {
    const theme = this.props.theme as Theme;
    const classes = this.props.classes;
    const {auth} = this.props;    
    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <AppBar className={classNames(classes.appBar)}>
            <Toolbar disableGutters={true}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={this.handleDrawerToggle}
                className={classNames(classes.menuButton)} >
                <MenuIcon />
              </IconButton>
              <Typography className={classes.brand} align="center" variant="title" color="inherit" noWrap>
                App
              </Typography>                   
             {!auth.isAuthenticated && <Link to="/login"><Button variant="flat" color="secondary">
            Login</Button></Link>}          
             {auth.isAuthenticated &&<AccountMenu></AccountMenu>}
            </Toolbar>
          </AppBar>

          {auth.isAuthenticated && (<SideBar openDrawer={this.state.openDrawer} ></SideBar>)}
          <main className={classes.content}> 
          {this.props.children}
          </main>
        </div>
      </div>
    ); 
  }
}


export default decorate<Props>(Navigation)