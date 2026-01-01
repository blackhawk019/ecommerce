import { memo } from 'react'
import LightGallery from 'lightgallery/react'
import 'lightgallery/css/lightgallery-bundle.min.css'
import lgZoom from 'lightgallery/plugins/zoom'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import { useStyles } from '../../hooks'


const UiLightGallery = (props) => {

    const classes = useStyles('UiLightGallery')

    return <>
        <LightGallery plugins={[lgZoom, lgThumbnail]} addClass={`${classes.light_room_wrapper}`}>
            {props?.children}
        </LightGallery>
    </>
}

export default memo(UiLightGallery);