import { Grid } from "@material-ui/core";
import React from "react";
import { useStyles } from "./DisplayItemStyle";
import { useQuery } from "react-query";
import CommonSlider from "../HeroSection/CommonSlider";
import chairFactory from "../../API_CALL/Factory/chairFactory";

export default function DisplayItem({ id }) {
  const classes = useStyles();
  console.log("components", id);
  const { data, isLoading } = useQuery(id, () => chairFactory.get(id));
  if (isLoading) {
    return <>loading...</>;
  }
  console.log("data", data);

  return (
    <>
      <Grid className={classes.productDetails}>
        <CommonSlider
          slideToShow={1}
          sliderContent={data}
          action={data.chair_id}
        />
        {/* <div className={classes.sliderContainer}>
          <Slider {...settings}>
            {ChairSection.sliderImage.map((image, index) => (
              <Container key={`${image.title}-${index}`}>
                <Grid className={classes.cardContent}>
                  <img
                    src={image.image}
                    alt={image.title}
                    className={classes.imgStyle}
                  />
                </Grid>
              </Container>
            ))}
          </Slider>
        </div> */}
      </Grid>
      {/* <img
          src="./assets/chair-section/chair-image-1.jpeg"
          alt="chairs"
          className={classes.imgStyle}
        /> */}
      <Grid>Name: Brio Net Chair</Grid>
      {/* {data.data.map((data, index) => {
          {
            console.log("single chair", data);
          }
          const data_img = data.chair_img.data.toString("base64");
          return <img src={data_img} alt="chair" />;
        })} */}
      {/* </Grid> */}
    </>
  );
}
