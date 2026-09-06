import React from 'react';
import { ProductDetailView } from '../components/ProductDetailView';
import { PRODUCTS } from '../data/productsData';

export const ProductBrokerHub = () => {
  return <ProductDetailView product={PRODUCTS['broker-hub']} />;
};
