import { getProductsAction } from '@/modules/products/actions';

describe('getProductsAction', async () => {
  const products = await getProductsAction(1, 10);

  test('should return expected', async () => {
    expect(products.length).toBe(10);
    expect(products.at(0)).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        title: expect.any(String),
        price: expect.any(Number),
        description: expect.any(String),
        slug: expect.any(String),
        stock: expect.any(Number),
        sizes: expect.any(Array),
        gender: expect.any(String),
        tags: expect.any(Array),
        images: expect.any(Array),
        user: expect.anything(),
      }),
    );
  });

  test('products should have a full image url', () => {
    products.forEach((product) => {
      product.images.forEach((image) => {
        expect(image).toContain(`${import.meta.env.VITE_TESLO_API_URL}/files/product`);
      });
    });
  });
});
