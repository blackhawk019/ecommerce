import { memo } from "react"
import { Drawer, List, ListItem, ListItemText, ListItemIcon, Divider, Stack, IconButton, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";
import { useStyles } from "../../hooks";

const Sidebar = (props) => {
    // component props
    const { open, onClose } = props

    // component variables
    const classes = useStyles('Sidebar')

    // component states

    return <Drawer open={open} onClose={onClose} variant="temporary">
        <Stack className={classes.drawer_header}>
            <Typography variant="h6" className={classes.drawer_title}>MENU</Typography>
            <IconButton onClick={onClose}>
                <Close />
            </IconButton>
        </Stack>
        <Divider className={classes.drawer_divider} />
        <List className={classes.drawer_list}>

        </List>
    </Drawer>
}

export default memo(Sidebar);