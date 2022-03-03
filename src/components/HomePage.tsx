import { Grid, Typography, Button } from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./HomePageStyle";
import Pagination from "material-ui-flat-pagination";
import { useQuery } from "@apollo/client";

export default function HomePage({ category, type }) {
  const classes = useStyles();
  const [offset, setOffset] = useState(0);
  const perPage = 10;

  return (
    <>
      <Grid container className={classes.root} spacing={2}>
        {category.slice(offset, offset + perPage).map((data, index) => (
          <Grid
            item
            lg={3}
            sm={4}
            xs={6}
            key={`chairs-image-${index}`}
            style={{
              paddingBottom: "50px",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <img
                src={data.image ? data.image : "/assets/no-image.png"}
                alt={data.name}
                className={classes.img}
              />
            </div>
            <Grid className={classes.prodInfo}>
              <Typography variant="h5" className={classes.title}>
                Name:
                <span style={{ fontWeight: "400" }}>{data.name}</span>
              </Typography>
              <Typography variant="h5" className={classes.title}>
                Type:
                <span style={{ fontWeight: "400" }}>{data.type}</span>
              </Typography>
            </Grid>
            <Link
              to={`/${type.toLowerCase()}/${data.id}`}
              className={classes.viewAllLink}
            >
              <Button className={classes.viewAllButton}>
                View Full Details
              </Button>
            </Link>
          </Grid>
        ))}
      </Grid>
      <Pagination
        limit={perPage}
        offset={offset}
        total={category.length}
        onClick={(e, off) => setOffset(off)}
        size="large"
        centerRipple={true}
        nextPageLabel="Next"
        previousPageLabel="Prev"
        classes={{
          label: classes.paginationLabel,
          rootCurrent: classes.paginationRoot,
        }}
      />
    </>
  );
}
