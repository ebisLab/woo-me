import Head from 'next/head'
import { AppProvider } from './context/AppContext';
import Header from './Header'

const Layout =(props)=>{
    return(
        <AppProvider>
            <div>
            <Head>
                <title>WooCommerce React Theme</title>
                <link rel="stylesheet" href="https://bootswatch.com/4/flatly/bootstrap.min.css"/>

            </Head>
            <Header/>
            {props.children}
        </div>
        </AppProvider>

    )
}

export default Layout;