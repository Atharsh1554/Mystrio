import React from 'react';
import { ProductDetailView } from '../components/ProductDetailView';
import { PRODUCTS } from '../data/productsData';

export const ProductFoodshare = () => {
  return <ProductDetailView product={PRODUCTS['foodshare']} />;
};
