import * as React from 'react';
import * as classNames from 'classnames';
import { Card, CardActions, CardMedia, CardHeader, CardContent, Theme, Drawer, AppBar, Toolbar, List, ListItem, Typography, Divider, IconButton, withStyles, WithStyles, Button, ListItemIcon, ListItemText, Menu, MenuItem, ClickAwayListener, Grow, Paper, MenuList, GridList, GridListTile } from 'material-ui';
import {ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon, Menu as MenuIcon, 
  Inbox as InboxIcon, Star as StarIcon, Send as SendIcon, Drafts as DraftsIcon, AccountCircle as AccountCircleIcon } from 'material-ui-icons';
import { Manager, Target, Popper } from 'react-popper';
import Dropzone from "react-dropzone";
import { IStyle, styles} from "./Upload.style";
import * as crypto from 'crypto-js';

interface Props{

}

class Upload extends React.Component<Props & WithStyles> {
  state = {
   
  };

  render() {
    const theme = this.props.theme as Theme;
    const classes = (this.props as any).classes as IStyle;
    
    

    return (
          <Dropzone className={classes.upload} >
            {this.props.children|| (<p>Try dropping some files here, or click to select files to upload.</p>)}
          </Dropzone>
    ); 
  }
}
const decorate = withStyles(styles ,{withTheme:true})

export default  decorate(Upload as any);