import { memo } from "react"
import { useState, useRef } from "react";
import { Box, Container, IconButton, List, ListItem, Stack, Typography } from "@mui/material";
import { ChevronRight, ChevronLeft } from "@mui/icons-material";
import { useStyles } from "../../hooks";

const VideoCardSection = (props) => {

    // component props
    const { itemsList } = props

    // component variables
    const classes = useStyles('VideoCardSection')

    // component states
    const [hideIndicator, setHideIndicator] = useState({ left: true, right: false })

    // component references
    const scrollElement = useRef()

    // component methods
    const handleVideoScroll = (e) => {
        let scrollDirection = e?.currentTarget?.attributes?.scroll?.nodeValue
        let scrollWidth = (scrollElement?.current?.scrollWidth - scrollElement?.current?.clientWidth);
        let scrolledWidth = scrollElement?.current?.scrollLeft;
        let scrolledPercent = (scrolledWidth / (scrollWidth - 1)) * 100;
        setHideIndicator({ left: scrolledPercent > 2 ? false : true, right: scrolledPercent >= 100 ? true : false })
        if (scrollDirection)
            scrollElement.current.scrollLeft = scrollDirection == 'right' ? scrolledWidth + 300 > scrollWidth ? scrollWidth : scrolledWidth + 300 : scrollDirection == 'left' ? scrolledWidth - 300 < 0 ? 0 : scrolledWidth - 300 : scrollElement?.current?.scrollLeft;

    }

    const handleVideoHover = (e) => {
        if (e?.currentTarget?.tagName == 'VIDEO') {
            if (e?.type == 'mouseenter') e.currentTarget.play();
            else e.currentTarget.pause();
        }
    }

    return <Box className={classes.video_section_main}>
        <Container maxWidth={false}>
            <Typography variant="h4" className={classes.video_section_heading}>Latest Fashion Arrivals</Typography>
            <Stack className={classes.video_section_stack} direction={'row'}>
                {
                    !hideIndicator?.left &&
                    <IconButton className={classes.video_section_indicator} sx={{ left: '0.5rem' }} scroll='left' onClick={handleVideoScroll} disableRipple>
                        <ChevronLeft className={classes.video_section_indicator_icons} scroll='left' />
                    </IconButton>
                }

                <List className={classes.video_section_list} ref={scrollElement} onScroll={handleVideoScroll}>
                    {
                        (itemsList || [])?.map((video) => {
                            return <ListItem key={video?.key} className={classes.video_section_list_item}>
                                <video
                                    className={classes.video_section_list_item_video}
                                    autoPlay={video?.autoplay}
                                    loop={video?.loop}
                                    src={video?.src}
                                    title={video?.title}
                                    muted={video?.muted ? true : false}
                                    onMouseEnter={handleVideoHover}
                                    onMouseLeave={handleVideoHover}
                                />
                            </ListItem>
                        })
                    }
                </List>

                {
                    !hideIndicator?.right &&
                    <IconButton className={classes.video_section_indicator} sx={{ right: '0.5rem' }} scroll='right' onClick={handleVideoScroll} disableRipple>
                        <ChevronRight className={classes.video_section_indicator_icons} scroll='right' />
                    </IconButton>
                }
            </Stack>
        </Container>
    </Box>
}

export default memo(VideoCardSection);