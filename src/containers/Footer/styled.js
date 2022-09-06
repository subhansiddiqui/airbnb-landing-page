import { styled, Typography } from "@mui/material";
//*=======Importing Icons from Mui =======
import LanguageIcon from "@mui/icons-material/Language";

import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const FooterSection = styled("footer")(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  overflow: "hidden",
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  width: "100%",
  zIndex: 999,
  borderTop: "1px solid #DDDDDD",
  [theme.breakpoints.down("md")]: {
    /* * 1. hide it visually */
    opacity: 0,
    /* * 2. make it unaccessible to mouse and keyboard   */
    pointerEvents: "none",
    /* *3. hide it from screen readers  */
    visibility: "hidden",
    display: "none",
  },
}));

const FooterFlexContainerStyled = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "space-between",
  paddingTop: "2rem",
  paddingBottom: "2rem",
}));
const SiteOptionNTextContainerStyled = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "1rem",
  flexWrap: "wrap",
}));
const SiteOptionsWrapper = styled("nav")(({ theme }) => ({}));
const SiteOptionsContainerStyled = styled("ul")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  gap: "1rem",
  listStyleType: "none",
}));
const SiteOptionStyled = styled("li")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  gap: "0.5rem",
  minWidth: "fit-content",
}));
const CopyRightTextStyled = styled(Typography)(({ theme }) => ({
  fontWeight: 300,
}));
const OptionTextStyled = styled("a")(({ theme }) => ({
  ...theme.typography.p,
  color: theme.palette.text.primary,
  fontWeight: 300,
  cursor: "pointer",
  textDecoration: "none",
  transition: "all 0.5s ease-in",

  "&:hover": {
    textDecoration: "underline 1px solid #000",
  },
}));
const OptionDotStyled = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
}));
const IconLanguage = styled(LanguageIcon)(({ theme }) => ({
  fontSize: "1.8rem",
  color: theme.palette.text.primary,
}));
const IconMoney = styled(AttachMoneyIcon)(({ theme }) => ({
  fontSize: "1.8rem",
  color: theme.palette.text.primary,
}));
const IconArrowUp = styled(KeyboardArrowUpIcon)(({ theme }) => ({
  fontSize: "1.8rem",
  color: theme.palette.text.primary,
}));
const OptionText = styled("a")(({ theme }) => ({
  ...theme.typography.p,
  color: theme.palette.text.primary,
  fontWeight: 500,
  cursor: "pointer",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline 1px solid #000",
  },
}));
export {
  FooterSection,
  FooterFlexContainerStyled,
  SiteOptionNTextContainerStyled,
  SiteOptionsWrapper,
  SiteOptionsContainerStyled,
  SiteOptionStyled,
  CopyRightTextStyled,
  OptionTextStyled,
  OptionDotStyled,
  IconLanguage,
  IconMoney,
  IconArrowUp,
  OptionText,
};
