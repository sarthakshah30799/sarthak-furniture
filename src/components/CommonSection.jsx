import { Container, Box, Grid, Typography, Button } from '@material-ui/core'
import React from 'react'
import { useStyles } from './CommonStyle';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Link } from 'react-router-dom';

function SampleNextArrow(props) {
    const { style, onClick } = props;
    return (
        <div
            style={{
                ...style, display: "block", position: 'absolute', background: `linear-gradient(315deg, #000000 0%, #7f8c8d 74%)`, borderRadius: '50%',
                padding: '22px',
                bottom: '39%',
                right: '0',
                cursor: "pointer"
            }}
            onClick={onClick}
        >
            <ArrowForwardIcon style={{ color: "white" }} />
        </div>
    )
}

function SamplePrevArrow(props) {
    const { style, onClick } = props;
    return (
        <div
            style={{ ...style, display: "block", background: `linear-gradient(315deg, #000000 0%, #7f8c8d 74%)`, borderRadius: '50%', padding: '22px', left: "0", position: 'absolute', top: "40%", cursor: "pointer", zIndex: '100' }}
            onClick={onClick}
        >
            <ArrowBackIcon onClick={onClick} style={{ color: "white" }} />
        </div>
    );
}
export default function CommonSection({ SliderContent, slideToShow }) {
    const classes = useStyles();
    const settings = {
        arrows: true,
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: slideToShow,
        slidesToScroll: 1,
        centerPadding: "60px",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <>
            <Container className={classes.root} id={(SliderContent.title).toLowerCase()}>
                <Grid>
                    <Typography variant="h1" style={{ color: 'black' }}>{SliderContent.title}</Typography>
                    <div className={classes.sliderContainer}>
                        <Slider {...settings}>
                            {SliderContent.sliderImage.map((image, index) => (

                                <Container key={`${image.title}-${index}`}>
                                    <Grid className={classes.cardContent}>
                                        <img src={image.image} alt={image.title} className={classes.imgStyle} />
                                    </Grid>
                                </Container>
                            ))}
                        </Slider>

                        <Box display='flex' justifyContent="flex-end">
                            <Link to={`/${SliderContent.title}`}>
                                <Button className={classes.viewAllButon}>
                                    View All <ArrowForwardIcon style={{ paddingLeft: '7px' }} />
                                </Button>
                            </Link>
                        </Box>
                    </div>
                </Grid>
            </Container>
        </>
    );
}