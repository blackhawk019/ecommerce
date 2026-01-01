import store from "./redux/store";
import { useDispatch, useSelector } from "react-redux";
import { lookups } from "./utils/lookups";

const useSharedDispatcher = () => useDispatch()
const useSharedSelector = useSelector

export {
    store,
    useSharedDispatcher,
    useSharedSelector,
    lookups
}
