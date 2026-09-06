import React from 'react';
import { ProductDetailView } from '../components/ProductDetailView';
import { PRODUCTS } from '../data/productsData';

export const ProductRemix = () => {
  return <ProductDetailView product={PRODUCTS['remix']} />;
};
