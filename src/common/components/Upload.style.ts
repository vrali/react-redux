import { Theme } from "material-ui";

const drawerWidth = 240;
interface IStyle {
  upload: any;
}

export type UploadStyle = keyof IStyle;

export const styles = (theme: Theme) => ({
  upload: {
    width: "100% !important",
    height: "60px !important"
  }
});
