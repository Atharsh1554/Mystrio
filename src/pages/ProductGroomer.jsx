import React from 'react';
import { ProductDetailView } from '../components/ProductDetailView';
import { PRODUCTS } from '../data/productsData';

export const ProductGroomer = () => {
  return <ProductDetailView product={PRODUCTS['groomer']} />;
};
