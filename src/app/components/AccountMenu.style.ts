import { Theme } from "material-ui";
interface IStyle {
  popperClose: any;
  profileButton: any;
}

export type AccountMenuStyle = keyof IStyle;
export const styles = (theme: Theme) => ({
  popperClose: {
    pointerEvents: "none"
  },
  profileButton: {
    height: "100%"
  }
});
