import { useState, useCallback, memo } from "react";
import { makeStyles } from "@mui/styles";
import { Grid, Box, Container, Typography, Divider, Stack, FormLabel } from "@mui/material";
import { MainLayout, UiCheckButtons, UiQuantitySelector, UiLightGallery } from "../../components";

import { lookups } from "../../shared";
import { product_1, product_2 } from "../../assets";

const useStyles = makeStyles(theme => {
    return {
        product_box: {
            backgroundColor: `${theme.palette.gray[50]} !important`
        },
        product_grid_images_container: {
            [theme.breakpoints.down('md')]: {
                display: 'none !important'
            }
        },
        product_grid_images_stack: {
            height: '100% !important'
        },
        product_thumb_image: {
            width: "100% !important"
        },
        product_full_image: {
            width: '100% !important',
        },
        product_container: {
            padding: `4rem 0rem!important`
        },
        product_title: {
            marginBottom: '1rem !important'
        },
        product_price: {
            color: 'red'
        },
        product_selection_option: {
            margin: '0.5rem 0rem 1.5rem 0rem !important'
        }
    }
})

const ProductDetail = (props) => {
    // component variables
    const classes = useStyles();

    // component states
    const [userSelection, setUserSelections] = useState({
        size: [],
        type: [],
        quantity: 0
    })

    // component methods
    const updateUserSelection = useCallback((key, value) => {
        if (key)
            setUserSelections(prev => ({ ...prev, [key]: value }))
    }, [userSelection])

    return <>
        <MainLayout>
            <Box className={classes.product_box}>
                <Container maxWidth={false} className={classes.product_container}>
                    <Grid container spacing={'3rem'}>
                        <Grid item md={12} lg={7} >
                            <Grid container spacing={'1rem'}>
                                <Grid item xs={12} lg={2} className={classes.product_grid_images_container} alignItems={'center'} justifyContent={'center'}>
                                    <Stack direction={'column'} spacing={'1rem'} className={classes.product_grid_images_stack}>
                                        <img className={classes.product_thumb_image} src={product_1} alt={'product'} />
                                        <img className={classes.product_thumb_image} src={product_2} alt={'product'} />
                                        <img className={classes.product_thumb_image} src={product_1} alt={'product'} />
                                        <img className={classes.product_thumb_image} src={product_2} alt={'product'} />
                                    </Stack>
                                </Grid>
                                <Grid item xs={12} lg={10}>
                                    <Box>
                                        <UiLightGallery>
                                            <a className="gallery-item" href={product_2}>
                                                <img className={`${classes.product_full_image} gallery__item`} alt={'product description'} src={product_2} />
                                            </a>
                                        </UiLightGallery>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={12} lg={5}>
                            <Stack direction={'column'}>
                                <Typography className={classes.product_title} variant="h4">Sample Product Name</Typography>
                                <Typography className={classes.product_price} variant="h6">PKR 18999</Typography>
                            </Stack>

                            <Divider />

                            <FormLabel>Type:</FormLabel>
                            <UiCheckButtons
                                options={lookups?.productTypes}
                                selectedOption={(value) => updateUserSelection('type', value)}
                                className={classes.product_selection_option}
                            />

                            <FormLabel>Size:</FormLabel>
                            <UiCheckButtons
                                options={lookups?.productSizes}
                                selectedOption={(value) => updateUserSelection('size', value)}
                                className={classes.product_selection_option}
                                allowMultiple={false}
                            />

                            <FormLabel>Quantity:</FormLabel>
                            <UiQuantitySelector />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </MainLayout>
    </>
}

export default memo(ProductDetail);