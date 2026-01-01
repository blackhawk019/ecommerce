import { memo } from "react";

const DashboardLayout = (props) => {
    return <>
        <main className="page-main">
            {props.children}
        </main>
    </>
}

export default memo(DashboardLayout);