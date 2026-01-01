import { useMemo } from "react"

const useValidations = () => {
    return {
        validateNumber: (num, min, max) => {
            if ((num || num == 0) && (/^(-|\+)?\d+(\.\d+)?$/gi.test(num))) {
                if ((!min || ((min || min == 0) && parseFloat(number) >= parseFloat(min))) && (typeof max != 'number' || ((max || max == 0) && parseFloat(number) <= parseFloat(max))))
                    return true
                else
                    return false
            }
            else
                return false
        }
    }
}

export default useValidations;