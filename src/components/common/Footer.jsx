import { memo } from "react"
import { Box, Grid, Container, Typography, Stack, Link, Divider } from "@mui/material";
import { Copyright } from "@mui/icons-material";
import { useStyles } from "../../hooks";

const Footer = (props) => {
    const classes = useStyles('Footer')
    return <>
        <footer className="footer">
            <Box className={classes?.footer}>
                <Container maxWidth={false}>
                    <Grid container>
                        <Grid item xs={12} sm={6} md={3} className={classes?.footer_link_grid}>
                            <Stack direction='column' className={classes?.footer_link_stack} >
                                <Typography variant="body1" className={classes.footer_heading}>Customer Service</Typography>
                                <Typography variant="body2" className={classes.footer_typography_link}><Link className={classes?.footer_link}>Track Your Order</Link></Typography>
                                <Typography variant="body2" className={classes.footer_typography_link}><Link className={classes?.footer_link}>Store  Locator</Link></Typography>
                                <Typography variant="body2" className={classes.footer_typography_link}><Link className={classes?.footer_link}>Disclaimer</Link></Typography>
                                <Typography variant="body2" className={classes.footer_typography_link}><Link className={classes?.footer_link}>FAQs</Link></Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} className={classes?.footer_link_grid}>
                            <Stack direction='column' className={classes?.footer_link_stack}>
                                <Typography variant="body1" className={classes.footer_heading}>More from Us</Typography>
                                <Typography variant="body2" className={classes.footer_typography_link}><Link className={classes?.footer_link}>About Us</Link></Typography>
                                <Typography variant="body2" className={classes.footer_typography_link}><Link className={classes?.footer_link}>Contact Us</Link></Typography>
                                <Typography variant="body2" className={classes.footer_typography_link}><Link className={classes?.footer_link}>Blogs</Link></Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} className={classes?.footer_link_grid}>
                            <Stack direction='column' className={classes?.footer_link_stack}>
                                <Typography variant="body1" className={classes.footer_heading}>Policies</Typography>
                                <Typography variant="body2" className={classes.footer_typography_link}><Link className={classes?.footer_link}>Privacy Policy</Link></Typography>
                                <Typography variant="body2" className={classes.footer_typography_link}><Link className={classes?.footer_link}>Shipping & Refund Policy</Link></Typography>
                                <Typography variant="body2" className={classes.footer_typography_link}><Link className={classes?.footer_link}>Exchange Information</Link></Typography>
                                <Typography variant="body2" className={classes.footer_typography_link}><Link className={classes?.footer_link}>Terms & Service</Link></Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} className={classes?.footer_link_grid}>
                            <Stack direction='column' className={classes?.footer_link_stack}>
                                <Typography variant="body1" className={classes.footer_heading}>Get In Touch</Typography>
                                <Typography variant="body2" className={classes.footer_typography_link}><Link className={classes?.footer_link}>Call: +92 300 0000000</Link></Typography>
                                <Typography variant="body2" className={classes.footer_typography_link}><Link className={classes?.footer_link}>Email: harleyquin@mydomain.com</Link></Typography>
                                <Typography variant="body2" className={classes.footer_typography_link}><Link className={classes?.footer_link}>Whatsapp: +92 300 0000000</Link></Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                    <Divider className={classes.footer_copyright_divider} />
                    <Typography variant="body2" className={classes.footer_copyright_typography}><Copyright className={classes.footer_copyright_icon} /> 2024, Fashion Valley</Typography>
                </Container>
            </Box>
        </footer >
    </>
}

export default memo(Footer);