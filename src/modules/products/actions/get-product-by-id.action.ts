import { tesloApi } from '@/api/tesloApi';
import type { Product } from '../interfaces/product.interface';
import { getProductImageAction } from './get-product-image.action';

export const getProductById = async (productId: string) => {
  // TODO: pensar la creación de un nuevo producto
  try {
    const { data } = await tesloApi.get<Product>(`/products/${productId}`);

    console.log({ data });
    return {
      ...data,
      images: data.images.map(getProductImageAction),
    };
  } catch (error) {
    console.log(error);
    throw new Error(`Error getting product by id ${productId}`);
  }
};
