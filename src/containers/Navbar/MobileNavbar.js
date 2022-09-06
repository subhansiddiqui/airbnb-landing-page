import React from "react";
import { ContentContainer } from "../../components/Common/ContentContainer/styled";
import {
  MobileNavWrapperStyled,
  MobileNavContainer,
  NavOptionsContainerStyled,
  NavOptionTextStyled,
  NavOptionStyled,
  IconWishlist,
  IconSearch,
  IconUserAccount,
} from "./styled";
import "./mobileNavbar.css";
//!   ======  IMPORTING Static data  ======
import navbarContent from "../../site-data/NavbarContent";
function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = React.useState(null);

  React.useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    };
  }, [scrollDirection]);

  return scrollDirection;
}

const MobileNavbar = () => {
  const scrollDirection = useScrollDirection();

  return (
    <MobileNavWrapperStyled
      className={`header ${scrollDirection === "down" ? "hide" : "show"}`}
    >
      <ContentContainer>
        <MobileNavContainer>
          <NavOptionsContainerStyled>
            <NavOptionStyled>
              <IconSearch
                color="true"
                style={{ fontSize: "2.8rem" }}
              ></IconSearch>
              <NavOptionTextStyled href="#">
                {navbarContent.mobileBtnTexts[0]}
              </NavOptionTextStyled>
            </NavOptionStyled>

            <NavOptionStyled>
              <IconWishlist style={{ fontSize: "2.8rem" }}></IconWishlist>
              <NavOptionTextStyled href="#">
                {navbarContent.mobileBtnTexts[1]}
              </NavOptionTextStyled>
            </NavOptionStyled>
            <NavOptionStyled>
              <IconUserAccount
                color="true"
                style={{ fontSize: "2.8rem" }}
              ></IconUserAccount>
              <NavOptionTextStyled href="#">
                {navbarContent.mobileBtnTexts[2]}
              </NavOptionTextStyled>
            </NavOptionStyled>
          </NavOptionsContainerStyled>
        </MobileNavContainer>
      </ContentContainer>
    </MobileNavWrapperStyled>
  );
};

export default MobileNavbar;
