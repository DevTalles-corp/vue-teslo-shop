import { getProductById, getProductsAction } from '@/modules/products/actions';

describe('getProductById', () => {
  test('should return empty product on create argument', async () => {
    const product = await getProductById('create');

    expect(product).toEqual({
      id: '',
      title: '',
      slug: '',
      description: '',
      price: 0,
      stock: 0,
      images: [],
      tags: [],
      sizes: [],
      gender: '' as any,
      user: {} as any,
    });
  });

  test('should return a product if ID is found', async () => {
    const products = await getProductsAction();
    const product = await getProductById(products[0].id);

    product.images.sort((a, b) => a.localeCompare(b));
    products.at(0)!.images.sort((a, b) => a.localeCompare(b));

    expect(product).toEqual(products.at(0));
  });

  test('should return empty product if ID is not found', async () => {
    try {
      await getProductById('XXXXXX');
      expect(true).toBe(false);
    } catch (error: any) {
      expect(error.message).toBe('Error getting product by id XXXXXX');
    }
  });
});
