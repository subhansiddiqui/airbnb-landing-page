import { styled, Typography, Button } from "@mui/material";
//*=======Importing Icons from Mui =======
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import TuneIcon from "@mui/icons-material/Tune";

const NavSectionStyled = styled("header")(({ theme }) => ({
  overflow: "hidden",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  width: "100%",
  background: theme.palette.common.white,
  borderBottom: "1px solid #DDDDDD",

  zIndex: 999,

  // ".main__container": {
  //   maxWidth: theme.breakpoints.lg,
  //   // width: "0 auto",

  //   padding: "0 2rem",
  //   // position : 'sticky',
  //   // top : 10
  //   position: "fixed",
  //   left: "50%",
  //   transform: "translateX(-50%)",
  // },
  // nav: {
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "space-between",
  //   padding: "2rem 0",

  //   ".logo": {
  //     display: "flex",
  //     alignItems: "center",
  //     ".logo__text": {
  //       fontSize: "2.5rem",
  //       color: "#fff",
  //       marginLeft: "1.6rem",
  //     },
  //   },

  //   ul: {
  //     display: "flex",
  //     alignItems: "center",
  //     gap: "6.7rem",

  //     li: {
  //       color: "red",
  //       listStyle: "none",

  //       a: {
  //         textDecoration: "none",
  //         color: "#fff",
  //         fontSize: "1.4rem",
  //       },
  //     },
  //   },
  // },
}));

const NavStyled = styled("nav")(({ theme, ...props }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "space-between",
  paddingTop: "0.8rem",
  paddingBottom: "0.8rem",
}));

const LogoTextStyled = styled(Typography)(({ theme, ...props }) => ({
  fontSize: "2.5rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "2rem",
  },
  color: props.color ? theme.palette.common.black : theme.palette.common.white,
  [theme.breakpoints.down("xs")]: {
    display: "hidden",
    visibility: "hidden",
    pointerEvents: "none",
  },
}));

const NavLinksWrapperStyled = styled("ul")(({ theme, ...props }) => ({
  display: "flex",
  alignItems: "center",
  gap: "6.7rem",
  listStyleType: "none",
  flexDirection: props.direction,
}));

const NavLinkContainer = styled("li")(({ theme }) => ({
  color: "red",
}));
const LinkTextStyled = styled("a")(({ theme, ...props }) => ({
  textDecoration: "none",
  color: props.color ? theme.palette.common.black : theme.palette.common.white,
  fontSize: "1.4rem",
}));
const LogoImageWrapperStyled = styled("div")(({ theme }) => ({
  width: "12rem",
  height: "6.2rem",
}));

const HeaderDialog = styled("header")(({ theme }) => ({}));
const Img = styled("img")(({ theme }) => ({}));
const DialogNavStyled = styled("nav")(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50% , -50%)",
}));
const UserOptionsContainerStyled = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "1.4rem",
  alignItems: "center",
}));
const HostButttonStyled = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  ...theme.typography.p,
  textTransform: "none",
  borderRadius: "2.2rem",
  transition: "all 0.4s",
  padding: "1rem 1rem",

  "&:hover": {
    background: theme.palette.shades.grey.light,
  },
}));

const IconLanguage = styled(LanguageIcon)(({ theme }) => ({
  fontSize: "1.8rem",
  color: theme.palette.text.primary,
}));
const UserOptionMenuButtonStyled = styled(Button)(({ theme }) => ({
  border: "1px solid #DDDDDD",
  backgroundColor: theme.palette.common.white,
  color: theme.palette.text.secondary,
  borderRadius: "2.2rem",
  padding: "0.4rem 0.8rem",
  "&:hover": {
    boxShadow: "0px 5px 5px #dddd",
    backgroundColor: theme.palette.common.white,
  },
}));
const IconMenu = styled(MenuIcon)(({ theme }) => ({
  fontSize: "1.6rem",
  color: theme.palette.text.primary,
}));
//   box-shadow: [horizontal offset] [vertical offset] [blur radius] [optional spread radius] [color];
const IconUserAccount = styled(AccountCircleIcon)(({ theme, ...props }) => ({
  fontSize: "2.8rem !important",
  color: props.color
    ? theme.palette.text.secondary
    : theme.palette.text.primary,
}));
const IconWishlist = styled(FavoriteBorderIcon)(({ theme }) => ({
  fontSize: "1.6rem",
  color: theme.palette.text.secondary,
}));
const SearchBarBtnsContainerStyled = styled("div")(({ theme }) => ({
  borderRadius: "2.1rem",
  overflow: "hidden",
  border: "1px solid #DDDDDD",

  "&:hover": {
    boxShadow: "0px 5px 5px #dddd",
    backgroundColor: theme.palette.common.white,
  },
}));
const SearchBarBtnStyled = styled(Button)(({ theme, ...props }) => ({
  padding: "0.6rem  1.2rem",
  color: props.textcolor
    ? theme.palette.text.secondary
    : theme.palette.text.primary,
  borderRadius: "0px !important",
  textTransform: "none",
  ...theme.typography.p,
  fontWeight: 400,
  "&:hover": {
    backgroundColor: theme.palette.common.white,
  },
}));
const LineBetweenStyled = styled("span")(({ theme, ...props }) => ({
  height: "24px",
  width: "1px",
  backgroundColor: theme.palette.text.secondary,
  position: "absolute",
  left: props.left && props.left,
  right: props.right && props.right,
  bottom: "50%",
  transform: "translateY(50%)",
  "&:hover": {
    backgroundColor: theme.palette.text.secondary,
  },
}));

const SearchIconContainerStyled = styled("span")(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  padding: "1rem",
  borderRadius: "100%",
  display: "flex",
  justifyContent: "center",
}));
const IconSearch = styled(SearchIcon)(({ theme, ...props }) => ({
  fontSize: "1.4rem",
  color: props.color ? theme.palette.primary.main : theme.palette.common.white,
}));

const MobileNavWrapperStyled = styled("div")(({ theme, ...props }) => ({
  borderTop: "0.8px solid #EBEBEB",
}));
const MobileNavContainer = styled("nav")(({ theme }) => ({}));
const NavOptionsContainerStyled = styled("ul")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "8rem",
  listStyleType: "none",
  padding: "0.6rem 0",
}));
const NavOptionStyled = styled("li")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "0.2rem",
}));
const NavOptionTextStyled = styled("a")(({ theme }) => ({
  ...theme.typography.p,
  fontWeight: 400,
  fontSize: "1rem !important",
  color: theme.palette.text.secondary,
  textDecoration: "none",
  display: "block",
  cursor: "pointer",
}));

const DestinationSearchBoxStyled = styled("div")(({ theme }) => ({
  borderRadius: "2.2rem",
  overflow: "hidden",
  paddingTop: "0.6rem",
  paddingBottom: "0.6rem",
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  paddingLeft: "1rem",
  paddingRight: "1rem",
  marginBottom: "1rem",
  marginTop: "1rem",

  cursor: "pointer",
  boxShadow: "0 3px 10px rgb(0 0 0 / 10%)",
}));
const IconNTextButtonStyled = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "0.6rem",
  paddingLeft: "1rem",
  alignItems: "center",
}));
const TextBoxContentStyled = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "0.2rem",
}));
const TextCTAStyled = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
}));
const TextListsContainerStyled = styled("ul")(({ theme }) => ({
  display: "flex",
  gap: "0.6rem",
  listStyleType: "none",
}));
const ListTextStyled = styled("li")(({ theme }) => ({
  ...theme.typography.p,
  fontSize: "1rem",
  fontWeight: 300,
  color: theme.palette.text.secondary,
}));

const FilterIconContainerStyled = styled("span")(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  padding: "1rem",
  borderRadius: "100%",
  display: "flex",
  justifyContent: "center",
  border: `1px solid ${theme.palette.text.secondary}`,
}));

const IconFilter = styled(TuneIcon)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: "1.8rem",
}));

//flex: 0 0 1px;
// height: 24px;
// width: 1px;
export {
  NavStyled,
  NavLinkContainer,
  NavLinksWrapperStyled,
  LogoTextStyled,
  NavSectionStyled,
  LinkTextStyled,
  LogoImageWrapperStyled,
  Img,
  HeaderDialog,
  DialogNavStyled,
  UserOptionsContainerStyled,
  HostButttonStyled,
  IconLanguage,
  UserOptionMenuButtonStyled,
  IconMenu,
  IconUserAccount,
  SearchBarBtnsContainerStyled,
  SearchBarBtnStyled,
  LineBetweenStyled,
  IconSearch,
  SearchIconContainerStyled,
  MobileNavWrapperStyled,
  MobileNavContainer,
  NavOptionsContainerStyled,
  NavOptionTextStyled,
  NavOptionStyled,
  IconWishlist,
  DestinationSearchBoxStyled,
  IconNTextButtonStyled,
  TextBoxContentStyled,
  TextCTAStyled,
  TextListsContainerStyled,
  ListTextStyled,
  FilterIconContainerStyled,
  IconFilter,
};

//   const  = styled("nav")(({ theme }) => ({
// ,
//   }));

//   const  = styled("nav")(({ theme }) => ({
// ,
//   }));
