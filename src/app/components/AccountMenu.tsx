
import * as React from 'react';
import * as classNames from 'classnames';
import {Card,CardActions,CardMedia,CardHeader, Theme, Drawer, AppBar, Toolbar, List, ListItem, Typography, Divider, IconButton, withStyles, WithStyles, Button, ListItemIcon, ListItemText, Menu, MenuItem, ClickAwayListener, Grow, Paper, MenuList, GridList, GridListTile } from 'material-ui';
import {ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon, Menu as MenuIcon, 
  Inbox as InboxIcon, Star as StarIcon, Send as SendIcon, Drafts as DraftsIcon, AccountCircle as AccountCircleIcon } from 'material-ui-icons';
import { Manager, Target, Popper } from 'react-popper';
import * as Dropzone from "react-dropzone";
import { IStyle, styles} from "./AccountMenu.style";
import SideBar from "./SideBar";

interface Props{

}

class AccountMenu extends React.Component<Props & WithStyles> {
  state = {
    openProfileMenu : false
  };
  timeout : any;

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
    const classes = (this.props as any).classes as IStyle
    const openProfileMenu = this.state.openProfileMenu;

    return (                             
              <Manager className={classes.profileButton}>
                <Target>          
                  <IconButton 
                    aria-owns={openProfileMenu ? 'menu-appbar' : null}
                    aria-haspopup="true"
                    onClick={this.handleMenu}
                    color="inherit" >
                  <AccountCircleIcon />
                  </IconButton>
                </Target>
                <Popper
                  placement="bottom-start"
                  eventsEnabled={openProfileMenu}
                  className={classNames({ [classes.popperClose]: !openProfileMenu })} >
                  <ClickAwayListener onClickAway={this.handleClose}>
                    <Grow in={openProfileMenu} >
                      <Paper>
                        <MenuList role="menu">
                          <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                          <MenuItem onClick={this.handleClose}>My account</MenuItem>
                          <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                        </MenuList>
                      </Paper>
                    </Grow>
                  </ClickAwayListener>
                </Popper>
              </Manager>          
    ); 
  }
}
const decorate = withStyles(styles ,{withTheme:true})

export default  decorate(AccountMenu as any);