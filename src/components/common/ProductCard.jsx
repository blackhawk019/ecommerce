import { memo } from "react"
import { Box, Stack, Typography, Chip } from "@mui/material";
import { useStyles } from "../../hooks";
import { useNavigate } from "react-router-dom";

const ProductCard = (props) => {

    // component props
    const { productDetails } = props

    // component variables
    const classes = useStyles('ProductCard')

    // component methods
    const onProductImageEnter = (e) => {
        if (e?.currentTarget?.querySelector('.product_image'))
            e.currentTarget.querySelector('.product_image').src = productDetails?.imgHoverSrc
    }
    const onProductImageLeave = (e) => {
        if (e?.currentTarget?.querySelector('.product_image'))
            e.currentTarget.querySelector('.product_image').src = productDetails?.imgSrc
    }
    const onProductCardClick = (e)=>{
        const navigate = useNavigate()
        navigate('/collections')
    }

    return <>
        <Box className={classes.product_card}
            onMouseEnter={onProductImageEnter}
            onMouseLeave={onProductImageLeave}
            onClick={onProductCardClick}
        >
            <Stack direction={'column'}>
                <div className={classes.product_img_container}>
                    <img className={`${classes.product_img} product_image`}
                        src={productDetails?.imgSrc}
                        alt={productDetails?.imgAlt || ""}

                    />
                    {
                        productDetails?.isOnSale && <Chip size="small" className={classes.product_status_chip} color={productDetails?.inStock ? "error" : "primary"} label={productDetails?.inStock ? `-${productDetails?.discountPercent}%` : 'Sold Out'} />
                    }
                </div>
                <Typography variant='h6' className={classes.product_title}>{productDetails?.title}</Typography>
                <Stack direction='row' justifyContent='center' className={classes.product_pricing_container}>
                    <Typography className={`${classes.product_original_price}${productDetails?.isOnSale ? ' has_discount' : ''}`} variant="body1">{`${productDetails?.currency} ${productDetails?.originalPrice}`}</Typography>
                    <Typography className={classes.product_discounted_price} variant="body1">{`${productDetails?.currency} ${productDetails?.discountedPrice}`}</Typography>
                </Stack>
            </Stack>
        </Box>
    </>
}

export default memo(ProductCard);