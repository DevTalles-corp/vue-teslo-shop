import path from 'path';
import fs from 'fs';

import { tesloApi } from '@/api/tesloApi';
import { loginAction } from '@/modules/auth/actions';
import { createUpdateProductAction } from '@/modules/products/actions';
import type { Product } from '@/modules/products/interfaces/product.interface';

describe('createUpdateProductAction', () => {
  beforeAll(async () => {
    const resp = await loginAction('test1@google.com', 'Abc123');
    if (!resp.ok) {
      throw new Error('Failed to login');
    }

    localStorage.setItem('token', resp.token);
  });

  test('should create a new product', async () => {
    const product: Product = {
      id: '',
      title: 'Test Product',
      price: 100,
      description: 'Test description',
      slug: 'test_product',
      stock: 10,
      sizes: [],
      gender: 'kid',
      tags: [],
      images: [],
      user: {} as any,
    };

    const resp = await createUpdateProductAction(product);

    await tesloApi.delete(`/products/${resp.id}`);

    expect(resp).toEqual({
      description: 'Test description',
      gender: 'kid',
      id: expect.any(String),
      images: [],
      price: 100,
      sizes: [],
      slug: 'test_product',
      stock: 10,
      tags: [],
      title: 'Test Product',
      user: {
        email: 'test1@google.com',
        fullName: 'Test One',
        id: expect.any(String),
        isActive: true,
        roles: expect.any(Array),
      },
    });
  });

  test('should update a product', async () => {
    const products = await tesloApi.get<Product[]>('/products');
    const product = products.data[0];
    const productId = product.id;

    const updatedProduct = {
      ...product,
      title: 'Updated Product',
      description: 'Updated Description',
      stock: 10,
    };

    const resp = await createUpdateProductAction(updatedProduct);

    expect(resp).toEqual(
      expect.objectContaining({
        ...product,
        id: productId,
        title: 'Updated Product',
        description: 'Updated Description',
        stock: 10,
      }),
    );
  });

  test('should upload product image', async () => {
    const imagePath = path.join(__dirname, '../../../fake', 't-shirt.jpg');
    const imageBuffer = fs.readFileSync(imagePath);

    const imageFile = new File([imageBuffer], 't-shirt.jpg', { type: 'image/jpeg' });

    const product: Product = {
      id: '',
      title: 'Test Product',
      price: 100,
      description: 'Test description',
      slug: 'test_product',
      stock: 10,
      sizes: [],
      gender: 'kid',
      tags: [],
      images: [imageFile] as any,
      user: {} as any,
    };

    const { images, id } = await createUpdateProductAction(product);

    const [img1] = images;
    expect(typeof img1).toBe('string');

    await tesloApi.delete(`/products/${id}`);
  });
});
