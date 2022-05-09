import { Grid, Box, Typography, Avatar, Button } from "@material-ui/core";
import { get, omit } from "lodash";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { getMockDataForProducts } from "../../utils/getMockDataForProducts";

import { useStyles } from "./DisplayItemStyle";

const basicDetials = ["name", "type", "price", "id"];

export default function DisplayItem() {
  const classes = useStyles();
  const { category, id }: { category: string; id: string } = useParams();

  const mockData = getMockDataForProducts(category);

  const categroyItem = get(mockData, "data", []) as any;
  const itemData = categroyItem.find((data: any) => data.id === id);

  const [previewImageUrl, setPreviewImageUrl] = useState(itemData.images[0]);

  const totalValue = (
    parseInt(itemData["price"]) +
    (parseInt(itemData["price"]) * 18) / 100
  ).toFixed(2);

  return (
    <>
      <Grid container className={classes.root} spacing={3}>
        <Grid item xs={12} md={6}>
          <img
            className={classes.mainImage}
            src={previewImageUrl}
            alt={itemData.name}
          />
          <Box
            display={"flex"}
            alignItems="center"
            maxWidth="450px"
            justifyContent={"space-around"}
            margin={"0 auto"}
          >
            {(itemData.images || []).map((image: string, index: number) => (
              <Box
                style={{ padding: "20px 10px" }}
                onClick={() => {
                  setPreviewImageUrl(image);
                }}
              >
                <img
                  className={`${classes.subImages} ${
                    image === previewImageUrl ? classes.nonSelectedImage : ""
                  }`}
                  key={`item-images-${index}`}
                  src={image}
                  alt={itemData.name}
                />
              </Box>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} md={6} className={classes.detailsContent}>
          <Box>
            {basicDetials
              .filter((b) => b !== "id")
              .map((key, index) => (
                <Typography
                  className={classes.detailTextStyle}
                  key={`basic-info-${index}`}
                >
                  {key} :
                  <span
                    style={{
                      display: "flex",
                      fontWeight: "normal",
                      paddingLeft: "10px",
                    }}
                  >
                    {key === "price" ? (
                      <>
                        <Avatar
                          style={{ maxWidth: 32 }}
                          src={"/icons/currency.svg"}
                        />
                        {`${totalValue} incl. GST(18%)`}
                      </>
                    ) : (
                      itemData[key]
                    )}
                  </span>
                </Typography>
              ))}
            <Box className={classes.buttonGroup}>
              <Button className={classes.addToCartButton}>
                Add to cart
                <Avatar
                  style={{
                    maxHeight: "30px",
                    height: "auto",
                    paddingLeft: "5px",
                  }}
                  src={"/icons/cart.svg"}
                />
              </Button>
              <Button className={classes.buyNowButton}>
                Buy now
                <Avatar
                  style={{
                    maxHeight: "30px",
                    height: "auto",
                    paddingLeft: "5px",
                  }}
                  src={"/icons/right-arrow.svg"}
                />
              </Button>
            </Box>
            <Typography className={classes.deliveryText}>
              *Delivery charges will be applied while checkout
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Box padding="1px" style={{ border: "1px solid #c7b7b7" }} />

      {/**
       * description section
       */}
      <Box padding={"30px 0"}>
        <Typography className={classes.descriptionText}>
          Description:
        </Typography>
        <Box paddingTop={"20px"} marginLeft="50px">
          {mockData.description(omit(itemData, basicDetials))}
        </Box>
      </Box>
    </>
  );
}
