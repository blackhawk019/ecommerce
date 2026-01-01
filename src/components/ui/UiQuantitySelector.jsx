import { useState, memo } from "react";
import { Box, IconButton, TextField, Stack, FormHelperText } from "@mui/material";
import { RemoveOutlined, AddOutlined } from "@mui/icons-material";
import { useStyles, useValidations } from "../../hooks";

const UiQuantitySelector = (props) => {
    // component variables
    const classes = useStyles('UiQuantitySelector')
    const validations = useValidations()

    // component states
    const [initVal, setInitVal] = useState(0)
    const [validateField, setValidateField] = useState({ error: false, message: '' })

    //component methods
    const handleQuantityFieldChange = (e) => {
        if (validateField?.error)
            setValidateField(prev => ({ ...prev, error: false, message: '' }))

        if (validations?.validateNumber(e?.target?.value || 0, 0))
            setInitVal(e.target.value)
        else
            setValidateField(prev => ({ ...prev, error: true, message: 'Please enter a valid quantity' }))
    }

    const handleSelectorActionButtonsClick = (action) => {
        if (action == 'inc')
            setInitVal(prev => (prev || typeof prev == 'number') ? prev + 1 : 0)
        else
            setInitVal(prev => (prev || typeof prev == 'number') ? prev - 1 : 0)
    }

    return <>
        <Box className={classes.quantity_selection_box}>
            <Stack direction={'row'}>
                <IconButton className={`${classes.quantity_selector_action_btn} remove_btn`} onClick={() => handleSelectorActionButtonsClick('dec')}>
                    <RemoveOutlined />
                </IconButton>
                <TextField size={'medium'} onChange={handleQuantityFieldChange} placeholder="Quantity" value={initVal} className={`${classes.quantity_selector_quantity_field}`} />
                <IconButton className={`${classes.quantity_selector_action_btn} add_btn`} onClick={() => handleSelectorActionButtonsClick('inc')}>
                    <AddOutlined />
                </IconButton>
            </Stack>
            {
                validateField?.error && <FormHelperText className={classes.quantity_selector_quantity_helper}>{validateField?.message}</FormHelperText>
            }
        </Box >
    </>
}

export default memo(UiQuantitySelector);