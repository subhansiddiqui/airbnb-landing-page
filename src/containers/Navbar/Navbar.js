import React from "react";
// !  ======  IMPORTING MOBILE NAVBAR  ======
import MobileNavbar from "./MobileNavbar";

// !  ======  IMPORTING Common Container  ======
import ContentContainer from "../../components/Common/ContentContainer";

//!   ======  IMPORTING Navbar Component w/styles  ======
import {
  NavStyled,
  NavSectionStyled,
  LogoImageWrapperStyled,
  UserOptionsContainerStyled,
  Img as LogoImage,
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
  DestinationSearchBoxStyled,
  IconNTextButtonStyled,
  TextBoxContentStyled,
  TextCTAStyled,
  TextListsContainerStyled,
  ListTextStyled,
  FilterIconContainerStyled,
  IconFilter,
} from "./styled.js";
//!   ======  IMPORTING Static data  ======
import navbarContent from "../../site-data/NavbarContent";
//! ======= IMPORTING MUI COMPONENTS
import { IconButton, useMediaQuery, useTheme } from "@mui/material";
import "./mobileNavbar.css";

export default function Navbar(props) {
  const theme = useTheme();
  const ifMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div style={{ position: "relative" }}>
      <NavSectionStyled>
        <ContentContainer>
          {!ifMobile && (
            <NavStyled>
              <LogoImageWrapperStyled>
                <LogoImage
                  src={navbarContent.logoImageDesktop}
                  alt="bless chef logo"
                  width={"100%"}
                  height={"100%"}
                />
              </LogoImageWrapperStyled>
              {/* <NavLinksWrapperStyled direction="row">
            {["home", "abount", "recipes"].map((item, index) => {
              return (
                <NavLinkContainer key={index}>
                  <LinkTextStyled>{item}</LinkTextStyled>
                </NavLinkContainer>
              );
            })}
          </NavLinksWrapperStyled> */}
              <SearchBarBtnsContainerStyled>
                <SearchBarBtnStyled>
                  {navbarContent.buttonTexts.text1}
                </SearchBarBtnStyled>
                <SearchBarBtnStyled
                  startIcon={<LineBetweenStyled left="0px" />}
                  endIcon={<LineBetweenStyled right="0px" />}
                >
                  {navbarContent.buttonTexts.text2}
                </SearchBarBtnStyled>
                <SearchBarBtnStyled
                  textcolor={true}
                  endIcon={
                    <SearchIconContainerStyled>
                      <IconSearch />
                    </SearchIconContainerStyled>
                  }
                >
                  {navbarContent.buttonTexts.text3}
                </SearchBarBtnStyled>
              </SearchBarBtnsContainerStyled>

              <UserOptionsContainerStyled>
                <HostButttonStyled variant="text">
                  {navbarContent.buttonTexts.text4}
                </HostButttonStyled>
                <IconButton aria-label="language icon">
                  <IconLanguage></IconLanguage>
                </IconButton>
                <UserOptionMenuButtonStyled
                  startIcon={<IconMenu />}
                  endIcon={<IconUserAccount />}
                ></UserOptionMenuButtonStyled>
              </UserOptionsContainerStyled>
            </NavStyled>
          )}
          {ifMobile && (
            <DestinationSearchBoxStyled>
              <IconNTextButtonStyled>
                <IconSearch
                  color="text.primary"
                  style={{ fontSize: "1.8rem" }}
                />
                <TextBoxContentStyled>
                  <TextCTAStyled>
                    {navbarContent.searchBarTexts[0]}
                  </TextCTAStyled>
                  <TextListsContainerStyled>
                    <ListTextStyled>
                      {navbarContent.searchBarTexts[1]}
                    </ListTextStyled>
                    <ListTextStyled>
                      {navbarContent.searchBarTexts[2]}
                    </ListTextStyled>
                    <ListTextStyled>
                      {navbarContent.searchBarTexts[3]}
                    </ListTextStyled>
                  </TextListsContainerStyled>
                </TextBoxContentStyled>
              </IconNTextButtonStyled>

              <FilterIconContainerStyled>
                <IconFilter></IconFilter>
              </FilterIconContainerStyled>
            </DestinationSearchBoxStyled>
          )}
        </ContentContainer>
      </NavSectionStyled>

      {ifMobile && <MobileNavbar></MobileNavbar>}
    </div>
  );
}
