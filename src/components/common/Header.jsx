import { memo } from "react"
import { useState } from "react";
import { AppBar, Container, IconButton, Stack, Link, Badge } from "@mui/material";
import { Menu, Search, PersonOutlineRounded, ShoppingBagOutlined } from "@mui/icons-material";
import { useStyles } from "../../hooks";
import Sidebar from './Sidebar'


const Header = (props) => {
    // component variables
    const classes = useStyles('Header')

    // component states
    const [openSideMenu, setOpenSideMenu] = useState(false)

    // component methods
    const handleSideMenu = () => {
        setOpenSideMenu(!openSideMenu)
    }

    return <>
        <AppBar className={classes.header_appbar} component="nav" position="sticky">
            <Container maxWidth={false}>
                <Stack direction={'row'} justifyContent={'space-between'}>
                    <Stack direction={'row'} gap={'0.625rem'}>
                        <IconButton className={classes.header_appbar_iconbutton} onClick={handleSideMenu} disableFocusRipple disableRipple>
                            <Menu className={classes.header_appbar_menu_icon} />
                        </IconButton>
                        <IconButton disableFocusRipple disableRipple>
                            <PersonOutlineRounded />
                        </IconButton>
                    </Stack>
                    <Link href={'/'} className={classes.header_brand_link}>
                        Fashion Valley
                    </Link>
                    <Stack direction={'row'} gap={'0.625rem'}>
                        <IconButton disableFocusRipple disableRipple>
                            <Search />
                        </IconButton>
                        <IconButton disableFocusRipple disableRipple>
                            <Badge badgeContent={5} className={classes.header_bag_quantity_badge} color='error'>
                                <ShoppingBagOutlined />
                            </Badge>
                        </IconButton>
                    </Stack>
                </Stack>
            </Container>
        </AppBar>
        <Sidebar open={openSideMenu} onClose={handleSideMenu} />
    </>
}

export default memo(Header);