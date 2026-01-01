
import { memo } from "react";

const AuthLayout = (props) => {
    return <>
        <main className="page-main">
            {props.children}
        </main>
    </>
}

export default memo(AuthLayout);