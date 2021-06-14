import React, { useContext, useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import ProductList from './ProductList';
import { observer } from 'mobx-react-lite';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { RootStoreContext } from '../../../app/stores/rootStore';
import "./ProductDashboard.css";

const ProductDashboard: React.FC = () => {

  const rootStore = useContext(RootStoreContext);
  const {loadProducts, loadingInitial} = rootStore.productStore;

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  if (loadingInitial)
    return <LoadingComponent content='Loading products' />;

  return (
    <div className="home">
    <img
        className="home__image"
        src ="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
        ></img>
                <div className="home__row">

      </div>
    </div>

    // <Grid>
    //   <Grid.Column width={10}>
    //     <ProductList />
    //   </Grid.Column>
    //   <Grid.Column width={6}>
    //     <h2>Product filters</h2>
    //   </Grid.Column>
    // </Grid>
  );
};

export default observer(ProductDashboard);
