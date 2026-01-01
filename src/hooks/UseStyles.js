import { customStyles } from "../theme/styles"

const useStyles = (key) => {
    return customStyles[key]()
}

export default useStyles