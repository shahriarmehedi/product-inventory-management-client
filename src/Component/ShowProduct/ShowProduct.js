import { Container, Grid } from '@mui/material';
import React, { useEffect, useState }  from 'react';
import AdminDashboard from '../Dashboard/AdminDashboard/AdminDashboard';


const ShowProduct = () => {
   
    const[products,setProducts]=useState([])
useEffect(()=>{
    fetch('http://localhost:5000/products')
    .then(res=>res.json())
    .then(data=>setProducts(data))
})
    return (
        <div>
            <Container>
           
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
           
   
           {
            products.map(products=><AdminDashboard
                products={products}
             ></AdminDashboard>)
               
           }
            
         
       </Grid>
       </Container>    
        </div>
    );
};

export default ShowProduct;