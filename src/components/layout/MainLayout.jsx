import { memo } from 'react';
import { Header, Footer, NewsLetter } from '../../components'

const MainLayout = (props) => {
    return <>
        <Header />
        <main className="page-main">
            {props.children}
        </main>
        <NewsLetter></NewsLetter>
        <Footer></Footer>
    </>
}

export default memo(MainLayout);