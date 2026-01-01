
import { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Grid, Box, Container, Typography } from "@mui/material";
import { MainLayout, VideoCardSection, ImageSlider, ProductCard } from "../../components";
import { lookups } from "../../shared";

const useStyles = makeStyles(theme => {
    return {
        featured_products_box: {
            borderTop: `1px solid ${theme.palette.common.gray}`,
            backgroundColor: `${theme.palette.gray[50]} !important`
        },
        featured_products_container: {
            padding: '4rem 1.5rem !important'
        },
        featured_section_heading: {
            margin: '0rem auto 4rem auto !important',
            position: 'relative !important',
            width: 'fit-content !important',
            textAlign: 'center',
            [theme.breakpoints.up('md')]: {
                '&:before': {
                    width: '4rem !important',
                    content: '""',
                    height: '2px !important',
                    position: 'absolute !important',
                    top: 'calc(52% - 0.1rem)',
                    right: '-6rem',
                    backgroundColor: `${theme.palette.common.black} !important`
                },
                '&:after': {
                    width: '4rem !important',
                    content: '""',
                    height: '2px !important',
                    position: 'absolute !important',
                    top: 'calc(52% - 0.1rem)',
                    left: '-6rem',
                    backgroundColor: `${theme.palette.common.black} !important`
                }
            }
        },
    }
})

const Home = (props) => {
    // page variables
    const classes = useStyles()

    // page states

    // page methods

    return <>
        <MainLayout>
            <ImageSlider
                itemsList={lookups?.slides}
                autoSlide={true}
                showIndicators={false}
                slideTimeout={5000}
            />
            <VideoCardSection
                itemsList={lookups?.owlVideos}
            />
            <Box className={classes.featured_products_box}>
                <Container className={classes.featured_products_container} maxWidth={false}>
                    <Typography variant="h4" className={classes.featured_section_heading}>Featured Products</Typography>
                    <Grid container spacing={'1.5rem'}>
                        {
                            (lookups?.productsFeatured || [])?.map((product) => {
                                return <Grid key={product?.key} item xs={12} sm={6} md={4} lg={3}>
                                    <ProductCard
                                        productDetails={product}
                                    />
                                </Grid>
                            })
                        }
                    </Grid>
                </Container>
            </Box>
        </MainLayout>
    </>
}

export default Home;