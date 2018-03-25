import * as React from 'react';
import * as classNames from 'classnames';
import { Card, CardActions, CardMedia, CardHeader, CardContent, Theme, Drawer, AppBar, Toolbar, List, ListItem, Typography, Divider, IconButton, withStyles, WithStyles, Button, ListItemIcon, ListItemText, Menu, MenuItem, ClickAwayListener, Grow, Paper, MenuList, GridList, GridListTile, StyleRulesCallback } from 'material-ui';
import {ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon, Menu as MenuIcon, 
  Inbox as InboxIcon, Star as StarIcon, Send as SendIcon, Drafts as DraftsIcon, AccountCircle as AccountCircleIcon } from 'material-ui-icons';
import { Manager, Target, Popper } from 'react-popper';
import * as Dropzone from "react-dropzone";
import { styles} from "./Roster.style";

interface Props{

}

class Roster extends React.Component<Props & WithStyles<"root"|"content"|"card"|"media"|"tile"|"upload">> {
  state = {   
  };

  render() {
    const theme = this.props.theme as Theme;
    const classes = this.props.classes;
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
    ]

    return ( 
            <div className={classes.root}>
              <GridList cellHeight={'auto'} cols={5}>
                {tileData.map(tile => (
                  <GridListTile key={tile.img} cols={tile.cols || 1} >
                  <Card className={classes.tile}>
                    <CardHeader title={tile.title} subheader="this is the sub header" ></CardHeader>
                    <CardMedia>
                      <img src={tile.img} className={classes.media} />
                    </CardMedia>
                    <CardContent>
                      <Typography paragraph variant="body2" >
                      This is the card content
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button color="secondary" centerRipple variant="raised" > Action1 </Button>

                    </CardActions>
                    
                  </Card>
                  </GridListTile>
                ))}
              </GridList>
            </div>  
    ); 
  }
}
const decorate = withStyles(styles  as StyleRulesCallback ,{withTheme:true})

export default  decorate<Props>(Roster);