import { memo } from "react"
import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Virtual, Navigation, Autoplay, EffectFade } from "swiper/modules";
import { useStyles } from "../../hooks";
import 'swiper/swiper-bundle.css'

const ImageSlider = (props) => {
    // component props 
    const { itemsList, autoSlide, showIndicators, slideTimeout } = props

    // component variables
    const classes = useStyles('ImageSlider')

    return <>
        <Box>
            <Swiper
                direction="horizontal"
                slidesPerView={2}
                modules={[Pagination, Navigation, Virtual, Autoplay, EffectFade]}
                effect="fade"
                speed={500}
                pagination={{ clickable: true, enabled: showIndicators, dynamicBullets: true }}
                autoplay={{ delay: slideTimeout || 3000, enabled: autoSlide }}
                loop={true}
            >
                {
                    (itemsList || [])?.map((item) => {
                        return <SwiperSlide key={item?.key}>
                            <img className={classes.swiper_slide_image} src={item?.src} title={item?.title} alt={item?.alt} />
                        </SwiperSlide>
                    })
                }
            </Swiper>
        </Box>
    </>
}

export default memo(ImageSlider);