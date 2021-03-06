import Head from 'next/head'
import { AppProvider } from './context/AppContext';
import Header from './Header';
import client from './ApolloClient'
import styles from '../styles/Layout.module.css';
import {ApolloProvider} from '@apollo/client'

const Layout =(props)=>{
    return(
        <AppProvider>
            <ApolloProvider client={client}>
            <div>
            <Head>
                <title>
                    WooCommerce React Theme
                    </title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
                <link rel="stylesheet" href="https://bootswatch.com/4/flatly/bootstrap.min.css"/>

            </Head>
            <Header/>
            <div className={styles.title_name}>hello hello</div>
            {props.children}
        </div>
        </ApolloProvider>
        </AppProvider>

    )
}

export default Layout;