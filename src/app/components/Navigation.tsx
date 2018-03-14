import * as React from 'react';
import * as classNames from 'classnames';
import {Theme, AppBar, Toolbar, List, ListItem, Typography, Divider, IconButton, withStyles, WithStyles, Button, ListItemIcon, ListItemText, Menu, MenuItem, ClickAwayListener, Grow, Paper, MenuList, GridList, GridListTile } from 'material-ui';
import {ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon, Menu as MenuIcon, 
  Inbox as InboxIcon, Star as StarIcon, Send as SendIcon, Drafts as DraftsIcon, AccountCircle as AccountCircleIcon } from 'material-ui-icons';
import { Manager, Target, Popper } from 'react-popper';
import * as Dropzone from "react-dropzone";
import { IStyle, styles} from "./Navigation.style";
import SideBar from "./SideBar";
import AccountMenu from "./AccountMenu";
import Roster from "../../roster/components/Roster";
import Account from "../../account/containers/accountContainer"
// import Login from "../Account/Login";
// import Register from "../Account/Register";

interface Props{
  auth : AuthState
}

const decorate = withStyles(styles ,{withTheme:true})

export default decorate(
class extends React.Component<Props & WithStyles<"root"|"appFrame"|"brand"|"appBar"|"appBarShift"|"menuButton"|"hide"|"content">> {
  state = {
    openDrawer: false,
    openProfileMenu : false
  };
  timeout : any;

  handleDrawerToggle = () => {
    this.setState({ openDrawer: !this.state.openDrawer });    
  };
  handleMenu = event => {
    this.setState({ openProfileMenu: !this.state.openProfileMenu });
  };
  handleClose = () => {
    if (!this.state.openProfileMenu) {
      return;
    }

    // setTimeout to ensure a close event comes after a target click event
    this.timeout = setTimeout(() => {
      this.setState({ open: false });
    });
  };
  componentWillUnmount() {
    clearTimeout(this.timeout);
  }  
  render() {
    const theme = this.props.theme as Theme;
    const classes = this.props.classes;
    const openProfileMenu = this.state.openProfileMenu;
    const {auth} = this.props;
    const tileData = [
      {
        img:"../content/images/download.jpg",
        title: "Title 1",
        data: "dsfsddsf",
        cols:1
      },
      {
        img:"../content/images/download1.jpg",
        title: "Title 2",
        data: "dsfsddsf",
        cols:1
      },
      {
        img:"../content/images/download2.jpg",
        title: "Title 3",
        data: "dsfsddsf",
        cols:1
      },
      {
        img:"../content/images/download3.jpg",
        title: "Title 3",
        data: "dsfsddsf",
        cols:1
      }
    ];

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
             {auth && (<AccountMenu></AccountMenu>)}
            </Toolbar>
          </AppBar>
          <SideBar></SideBar>
          <main className={classes.content}>  
          
          {auth && (<Roster></Roster>)}        
                  
          {!auth && (<Account account={this.props.auth}  ></Account> )}
           {/* <Register></Register> */}
          </main>
        </div>
      </div>
    ); 
  }
})