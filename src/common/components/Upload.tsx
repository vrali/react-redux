import * as React from "react";
import * as classNames from "classnames";
import {
  Card,
  CardActions,
  CardMedia,
  CardHeader,
  CardContent,
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
import Dropzone from "react-dropzone";
import { UploadStyle, styles } from "./Upload.style";
import * as crypto from "crypto-js";

interface Props {}

class Upload extends React.Component<Props & WithStyles<UploadStyle>> {
  state = {};

  render() {
    const theme = this.props.theme as Theme;
    const classes = this.props.classes;

    return (
      <Dropzone className={classes.upload}>
        {this.props.children || (
          <p>
            Try dropping some files here, or click to select files to upload.
          </p>
        )}
      </Dropzone>
    );
  }
}
const decorate = withStyles(styles as StyleRulesCallback, { withTheme: true });

export default decorate<Props>(Upload);
