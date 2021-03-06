import * as React from "react";
import * as classNames from "classnames";
import {
  Card,
  CardActions,
  CardMedia,
  CardHeader,
  Theme,
  Drawer,
  AppBar,
  Toolbar,
  List,
  ListItem,
  Typography,
  Divider,
  IconButton,
  withStyles,
  WithStyles,
  Button,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  ClickAwayListener,
  Grow,
  Paper,
  MenuList,
  GridList,
  GridListTile,
  StyleRulesCallback
} from "material-ui";
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Menu as MenuIcon,
  Inbox as InboxIcon,
  Star as StarIcon,
  Send as SendIcon,
  Drafts as DraftsIcon,
  AccountCircle as AccountCircleIcon
} from "material-ui-icons";
import { Manager, Target, Popper } from "react-popper";
import * as Dropzone from "react-dropzone";
import { SideBarStyle, styles } from "./SideBar.style";
import { Link } from "react-router-dom";

interface Props {
  openDrawer: boolean;
}

const decorate = withStyles(styles as StyleRulesCallback, { withTheme: true });

export default decorate<Props>(
  class extends React.Component<Props & WithStyles<SideBarStyle>> {
    render() {
      const theme = this.props.theme as Theme;
      const classes = this.props.classes;

      return (
        <Drawer
          variant="permanent"
          classes={{
            paper: classNames(
              classes.drawerPaper,
              !this.props.openDrawer && classes.drawerPaperClose
            )
          }}
          open={this.props.openDrawer}
        >
          <div className={classes.drawerInner}>
            <div className={classes.drawerHeader}>
              <IconButton>
                {theme.direction === "rtl" ? (
                  <ChevronRightIcon />
                ) : (
                  <ChevronLeftIcon />
                )}
              </IconButton>
            </div>
            <Divider />
            <List>
              <ListItem button>
                <ListItemIcon>
                  <Link to="/roster">
                    {" "}
                    <InboxIcon />
                  </Link>
                </ListItemIcon>
                <ListItemText primary="Inbox" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <SendIcon />
                </ListItemIcon>
                <ListItemText primary="Send mail" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Drafts" />
              </ListItem>
            </List>
          </div>
        </Drawer>
      );
    }
  }
);
