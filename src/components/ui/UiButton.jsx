import { memo } from "react";
import { Button } from "@mui/material"

const UiButton = (props) => {
    return <>
        <Button >{props.children}</Button>
    </>
}

export default memo(UiButton);