const next = require('next');
const express = require('express');
const wooConfig = require('./Wooconfig')

const WooCommerceAPI = require('woocommerce-api');
const { response } = require('express');
 
const WooCommerce = new WooCommerceAPI({
  url: wooConfig.siteUrl,
  consumerKey: wooConfig.consumerKey,
  consumerSecret: wooConfig.consumerSecret,
  wpAPI: true,
  version: 'wc/v1'
});

const port = 3000
const dev = process.env.NODE_env !== 'production';
const app = next({dev})
const handle = app.getRequestHandler();

app.prepare()
.then(()=>{
    const server = express();

    //GET REQUEST
    server.get('/getProducts', (req,response)=>{
        WooCommerce.get('products', (err,data,res)=>{
            // console.log(res)
            response.json(JSON.parse(res));
        })

    })
    server.get('*',(req,res)=>{
        return handle(req, res);
    });
    server.listen(port, err=>{
        if(err){
            throw err;
        }
        console.log(`Ready on ${port}`);
    })
})
.catch((err)=>{
    console.error(err.stack);
    process.exit(1)
})