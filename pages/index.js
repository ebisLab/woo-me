import Layout from '../components/Layout'
import clientConfig from '../client-config'
import axios from 'axios'

import fetch from  'isomorphic-unfetch'
import Products from '../components/Products'

const Index=(props)=>{
    console.warn(props)
    const {products}=props
    return (
        <div>
            <Layout>
                {products.length?(
                    products.map(item=><Products key={item.id} products={item}/>)

                ):''}
                
                </Layout>
        </div>
    )

}

Index.getInitialProps = async () =>{
    //isomorphic unfetch
    const res = await fetch(`${clientConfig.siteUrl}/getProducts`);
    const productsData = await res.json();

    return {
        products: productsData
    }


}
export default Index;