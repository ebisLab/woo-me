import Layout from '../components/Layout'
// import clientConfig from '../client-config'
import client from './../components/ApolloClient'

import fetch from  'isomorphic-unfetch'
import Products from '../components/Products'
import gql from 'graphql-tag' //parses graphql query string into abstract syntax


const PRODUCTS_QUERY = gql`query{
    products(first: 10) {
        edges {
          node {
            id
            name
            productId
            averageRating
            slug
            description
            image {
              uri
              title
              srcSet
              sourceUrl
            }
            link
            ... on SimpleProduct {
              price
            }
          }
        }
      }      
}`;


const Index=(props)=>{
    console.warn(props)
    const {products}=props
    return (
        <div>
            <Layout>
                <div className="container">
                  
                    {products.length?(products.map(item=><Products key={item.node.id} products={item.node}/>)):""}
            
                </div>
                
                </Layout>
        </div>
    )

}

// hello rom the other side
//get static props
//revalidate

Index.getInitialProps = async () =>{
    //isomorphic unfetch
    // const res = await fetch(`${clientConfig.siteUrl}/getProducts`);
    // const productsData = await res.json();

    const res = await client.query({query:PRODUCTS_QUERY});
    return {
        products:res.data.products.edges
    }
}

export default Index;