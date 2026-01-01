import { memo } from "react"
import { Box, Container, Toolbar, IconButton, Grid, Typography, Button, TextField, Stack } from "@mui/material"
import { YouTube, Facebook, Twitter, Instagram } from "@mui/icons-material";
import { useStyles } from "../../hooks";

const NewsLetter = (props) => {
    const classes = useStyles('NewsLetter')
    return <Box className={classes.news_letter_main}>
        <Container maxWidth={false}>
            <Typography className={classes.news_letter_heading} variant="h4">Ecommerce Insights: Trends, Tips, and Innovations</Typography>
            <Typography className={classes.news_letter_supportive} variant="body1">Subscribe to our monthly newsletter for the latest trends, expert tips, and innovations in ecommerce to stay ahead and grow your business.</Typography>
            <Stack direction={'row'} className={classes.news_letter_mail_container} justifyContent={'center'}>
                <TextField label="Email Address" className={classes.news_letter_mail_input} />
                <Button className={classes.news_letter_mail_submit} variant="contained">Subscribe</Button>
            </Stack>
            <Stack direction={'row'} gap={'1.5rem'} justifyContent={'center'}>
                <IconButton className={classes.news_letter_icon_button}>
                    <YouTube className={classes.news_letter_button_icon} />
                </IconButton>
                <IconButton className={classes.news_letter_icon_button}>
                    <Facebook className={classes.news_letter_button_icon} />
                </IconButton>
                <IconButton className={classes.news_letter_icon_button}>
                    <Instagram className={classes.news_letter_button_icon} />
                </IconButton>
                <IconButton className={classes.news_letter_icon_button}>
                    <Twitter className={classes.news_letter_button_icon} />
                </IconButton>
            </Stack>
        </Container>
    </Box>
}

export default memo(NewsLetter);