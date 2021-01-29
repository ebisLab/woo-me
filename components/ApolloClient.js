import fetch from 'node-fetch';
import clientConfig from './../client-config'

import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";

import {ErrorLink, onError} from '@apollo/client/link/error'

//error catching system
const errorLink = onError(({graphqlErrors, networkError})=>{
    if(graphqlErrors){
        graphqlErrors.map(({message, location, path})=>{
            alert(`Graphql errors here--> ${message}`)
        })
    }
})


const link = from([
    errorLink,
    new HttpLink({uri: clientConfig.graphqlUrl})
])
const client = new ApolloClient({
    cache: new InMemoryCache(),
    link:link,
})

export default client
