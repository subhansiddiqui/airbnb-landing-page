import { styled } from "@mui/material";

const ContentContainer = styled("div")(({ theme, ...props }) => ({
  maxWidth: "1760px",

  paddingLeft: "8rem",
  paddingRight: "8rem",
  margin: "0 auto",
  [theme.breakpoints.down("lg")]: {
    paddingLeft: "4rem",
    paddingRight: "4rem",
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  [theme.breakpoints.down("sm")]: {
    paddingLeft: "2rem",
    paddingRight: "2rem",
  },
}));
export { ContentContainer };
