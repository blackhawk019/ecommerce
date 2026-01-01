
import { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Grid, Box, Container, Stack, Typography, Divider, Select, MenuItem, IconButton, FormControl, InputLabel, Button } from "@mui/material";
import { MainLayout, ProductCard } from "../../components";
import { ViewColumn } from "@mui/icons-material";
import { lookups } from "../../shared";


const useStyles = makeStyles(theme => {
    return {
        product_list_box: {
            backgroundColor: `${theme.palette.gray[50]} !important`,
            position: 'relative !important'
        },
        product_list_container: {
            padding: '4rem 0rem !important'
        },
        product_heading_section_container: {
            width: '100% !important',
            backgroundColor: `${theme.palette.common.white}`,
            color: `${theme.palette.gray[600]} !important`,
            paddingBottom: '1.5rem !important',
            borderBottom: `1px solid ${theme.palette.gray[100]}`
        },
        product_heading_sort_by_select: {
            minWidth: '10rem !important'
        },
        product_heading_view_iconbutton: {
            borderRadius: '0px !important'
        },
        product_list_heading: {
            width: "100%",
            position: 'relative !important',
            textAlign: 'center',
            margin: "3.5rem 0rem 2rem 0rem !important"
        },
        product_sidebar_stack: {
            minWidth: '25rem !important',
            overflow: 'hidden !important',
            transitionDuration: '200ms',
            '&.collapsed': {
                minWidth: '0rem !important',
                width: '0rem !important',
            }
        },
        product_filters_box: {
            backgroundColor: `${theme.palette.common.white} !important`,
            border: `1px solid ${theme.palette.gray[100]}`,
            width: '100% !important',
            padding: '2rem !important'
        }
    }
})

const ProductListing = (props) => {
    // page variables
    const classes = useStyles()

    // page states
    const [columnViews] = useState({
        1: { xs: 12, md: 12, lg: 12 },
        2: { xs: 12, md: 6, lg: 6 },
        3: { xs: 12, md: 6, lg: 4 },
        4: { xs: 12, md: 4, lg: 3 }
    })
    const [showFilters, setShowFilters] = useState(false)
    const [currentView, setCurrentView] = useState(3)

    // page methods
    const handleOnFilterButtonClick = (e) => {
        setShowFilters(!showFilters)
    }

    const handleViewChange = (val) => {
        setCurrentView(val)
    }

    return <>
        <MainLayout>
            <Box className={classes.product_list_box}>
                <Stack className={classes.product_heading_section_container} justifyContent={'center'}>
                    <Typography className={classes.product_list_heading} variant="h3">COLLECTIONS</Typography>
                    <Divider />
                    <Container maxWidth={false}>
                        <Stack direction={'row'} justifyContent={'space-between'}>
                            <Stack direction={'row'} spacing={20}>
                                <Button onClick={handleOnFilterButtonClick} size="medium" variant={showFilters ? 'contained' : 'outlined'}>Filters</Button>
                                <FormControl>
                                    <InputLabel id="product_heading_sort_by_select_label">Sort By</InputLabel>
                                    <Select
                                        labelId="product_heading_sort_by_select_label"
                                        size="medium"
                                        label="Sort By"
                                        className={classes.product_heading_sort_by_select}>
                                        <MenuItem value={10}>Price</MenuItem>
                                        <MenuItem value={11}>Discount</MenuItem>
                                        <MenuItem value={12}>Collection</MenuItem>
                                    </Select>
                                </FormControl>
                            </Stack>
                            {
                                <Stack direction={'row'} spacing={10}>
                                    <IconButton onClick={() => handleViewChange(2)} className={classes.product_heading_view_iconbutton}>
                                        <ViewColumn />
                                    </IconButton>
                                    <IconButton onClick={() => handleViewChange(3)} className={classes.product_heading_view_iconbutton}>
                                        <ViewColumn />
                                    </IconButton>
                                    <IconButton onClick={() => handleViewChange(4)} className={classes.product_heading_view_iconbutton}>
                                        <ViewColumn />
                                    </IconButton>
                                </Stack>
                            }

                        </Stack>
                    </Container>
                </Stack>
                <Container maxWidth={false} className={classes.product_list_container}>
                    <Stack direction={'row'} spacing={showFilters ? '3rem' : '0rem'}>
                        <Stack className={`${classes.product_sidebar_stack}${showFilters ? '' : ' collapsed'}`} direction={'column'}>
                            <Box className={classes.product_filters_box}>
                                <Typography variant="h6">Filters</Typography>
                            </Box>

                        </Stack>
                        <Stack direction={'column'}>
                            <Grid container spacing={'1.5rem'}>
                                {
                                    (lookups?.products || []).map(product => {
                                        return <Grid key={product.key} item {...columnViews[currentView]}>
                                            <ProductCard
                                                productDetails={product}
                                            />
                                        </Grid>
                                    })
                                }
                            </Grid>
                        </Stack>
                    </Stack>
                </Container>
            </Box>
        </MainLayout >
    </>
}

export default ProductListing;