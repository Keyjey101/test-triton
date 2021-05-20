import React from "react";
import { Container, Grid } from "@material-ui/core";
import ProductList from "../utilits/Products";
import ProductItem from "../components/ProductItem";


const Catalogue = () => {
 

  return (
    <Container>
      <Grid
        container
        
        direction="row"
        justify="center"
        alignItems="center"
        spacing={4}
      >
        {ProductList.map((x, id) => {
          return <ProductItem name={x.name} id={x.id} price={x.price} key={x.id}/>;
        })}
      </Grid>
    </Container>
  );
};

export default Catalogue;
