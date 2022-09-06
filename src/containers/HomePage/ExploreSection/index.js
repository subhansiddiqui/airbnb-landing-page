import React from "react";
// !  ======  IMPORTING Common Container  ======
import ContentContainer from "../../../components/Common/ContentContainer/index";

//!   ======  IMPORTING Navbar Component w/styles  ======
import {
  ExploreSectionWrapperStyled,
  CardStyled,
  CardImageStyled,
  PlaceDetailsStyled as PlaceName,
  PlaceDetailsStyled as PlaceDate,
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
} from "./styled";
import cardsData from "./dummyData";

//! ======= IMPORTING MUI COMPONENTS
import { Grid, Typography as Pricing } from "@mui/material";
import { Box } from "@mui/system";

const ExploreSection = () => {
  const data = cardsData;
  return (
    <ExploreSectionWrapperStyled>
      <ContentContainer>
        <Grid container spacing={3}>
          {data.map((item, index) => {
            return (
              <Grid item lg={3} md={4} xl={3} xs={12} sm={6} key={index}>
                <CardWrapperStyled href="#">
                  <CardStyled>
                    <CardImageContainerStyled>
                      <CardImageStyled
                        src={item.locationImage}
                        style={{ aspectRatio: 1 }}
                      />
                    </CardImageContainerStyled>
                    <CardInfoSectionStyled>
                      <LocationDetailsWrapperStyled>
                        <LocationNameStyled variant="p" paragraph>
                          {item.locationName}
                        </LocationNameStyled>
                        <PlaceName variant="p" paragraph>
                          {item.placeName}
                        </PlaceName>
                        <PlaceDate variant="p" paragraph margin="true">
                          {item.date}
                        </PlaceDate>
                        <Box style={{ display: "flex", alignItems: "center" }}>
                          <IconMoney />

                          <Pricing paragraph>
                            <PlacePriceStyled variant="p">
                              {item.price[0]}{" "}
                            </PlacePriceStyled>
                            <PlacePriceStyled variant="p" decweight="true">
                              {item.price[1]}
                            </PlacePriceStyled>
                          </Pricing>
                        </Box>
                      </LocationDetailsWrapperStyled>
                      <LocationRatingContainerStyled>
                        <IconRatingStar />
                        <LocationRatingStyled variant="p">
                          {item.locationRating}
                        </LocationRatingStyled>
                      </LocationRatingContainerStyled>
                    </CardInfoSectionStyled>
                  </CardStyled>
                </CardWrapperStyled>
              </Grid>
            );
          })}
        </Grid>
      </ContentContainer>
    </ExploreSectionWrapperStyled>
  );
};

export default ExploreSection;
