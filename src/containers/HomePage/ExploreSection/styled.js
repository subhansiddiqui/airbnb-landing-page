import { styled, Typography } from "@mui/material";
//*=======Importing Icons from Mui =======

import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import StarIcon from "@mui/icons-material/Star";

const ExploreSectionWrapperStyled = styled("section")(({ theme }) => ({
  marginTop: "10rem",
  marginBottom: "10rem",
}));
const CardWrapperStyled = styled("a")(({ theme }) => ({
  display: "block",
  width: "100%",
  textDecoration: "none",
}));

const CardStyled = styled("div")(({ theme }) => ({}));
const CardImageContainerStyled = styled("div")(({ theme }) => ({
  width: "100%",
  overflowX: "hidden",
  marginBottom: "0.5rem",
}));
const CardImageStyled = styled("img")(({ theme }) => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "25px",
}));
const CardInfoSectionStyled = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "space-between",
}));

const LocationDetailsWrapperStyled = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
}));
const LocationRatingContainerStyled = styled("p")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "0.6rem",
}));
const LocationRatingStyled = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: 300,
}));
const LocationNameStyled = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: 500,

  marginBottom: "0.4rem",
}));
const PlaceDetailsStyled = styled(Typography)(({ theme, ...props }) => ({
  color: theme.palette.text.secondary,
  fontWeight: 500,

  marginBottom: props.margin ? "0.6rem" : "0.4rem",
}));
const PlacePriceStyled = styled(Typography)(({ theme, ...props }) => ({
  color: theme.palette.text.primary,
  fontWeight: props.decweight ? 300 : 500,
}));
const IconMoney = styled(AttachMoneyIcon)(({ theme }) => ({
  fontSize: "2rem",
  color: theme.palette.text.primary,
}));
const IconRatingStar = styled(StarIcon)(({ theme }) => ({
  fontSize: "1.4rem",
  color: theme.palette.text.primary,
}));
export {
  ExploreSectionWrapperStyled,
  CardStyled,
  CardImageStyled,
  PlaceDetailsStyled,
  LocationNameStyled,
  LocationRatingContainerStyled,
  LocationDetailsWrapperStyled,
  PlacePriceStyled,
  IconMoney,
  LocationRatingStyled,
  IconRatingStar,
  CardImageContainerStyled,
  CardInfoSectionStyled,
  CardWrapperStyled,
};
