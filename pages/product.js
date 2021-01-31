import Layout from '../components/Layout';
import {withRouter} from 'next/router';
import client from '../components/ApolloClient'
import gql from 'graphql-tag';

const Product = (props)=>{
    console.log("PROPS", props)
    return(
        <div>
            product
            {/* query */}

        </div>
    )
}

//getInitialProps function gets excecuted in both client side and server side, first in server side
Product.getInitialProps = async (context)=>{ //context comes from server side, bring it to the client side
    let {query:{slug}}=context;
    const id=slug? parseInt(slug.split('-').pop()): context.query.id //parseInt(slug.split('-')) used to split words or numbers that are separeted with space or any symbols like "-"

    console.log("trying to get initial props")
    //Graphql Query

    const PRODUCT_QUERY = gql` query Product($id: ID!){
        product(id: $id, idType: DATABASE_ID) {
            id
            productId
            averageRating
            slug
            description
            name
            image{
                uri
                title
                srcSet
                sourceUrl
            }
            ... on SimpleProduct {
                id
                name
                price
              }
        }
    }
    `;

    const res= await client.query({
        query: PRODUCT_QUERY,
        variables:{id}
    });

    return {
        product: res.data.product
    }
}

export default withRouter(Product);