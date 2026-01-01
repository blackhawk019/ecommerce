import { useState, memo } from "react";
import { Button, Stack, Tooltip } from "@mui/material";
import { useStyles } from "../../hooks";
import { cloneDeep } from "lodash";

const UiCheckButtons = ({ options, allowMultiple, direction, selectedOption, className }) => {

    // component variables
    const classes = useStyles('UiCheckButtons')

    // component states
    const [checkButtonOptions, setCheckButtonOptions] = useState(cloneDeep(options))

    // component methods
    const updateSelected = (e, option) => {
        let data = cloneDeep(checkButtonOptions?.map(elm => elm?.id == option?.id ? { ...elm, isSelected: !elm?.isSelected } : allowMultiple ? elm : { ...elm, isSelected: false }))
        selectedOption(data?.filter(elm => elm?.isSelected))
        setCheckButtonOptions(data)
    }

    return <>
        <Stack direction={direction || 'row'} flexWrap={'wrap'} gap={12} className={`custom_ui_checkbutton${className ? ' ' + className : ''}`}>
            {
                (checkButtonOptions || []).map(option => {
                    return <>
                        <Tooltip title={option?.title} placement="top" key={option?.key} >
                            <div>
                                <Button
                                    size={'large'}
                                    variant='outlined'
                                    className={option?.isSelected ? `${classes.check_button} selected` : classes.check_button}
                                    onClick={(e) => updateSelected(e, option)}
                                    disabled={option?.disabled}
                                    disableRipple
                                    disableFocusRipple
                                >
                                    {option?.name}
                                </Button>
                            </div>
                        </Tooltip >
                    </>
                })
            }
        </Stack >
    </>
}

export default memo(UiCheckButtons);