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
        id: 'fe31a323-b08a-4e5e-8467-120a6cebb9d9',
        isActive: true,
        roles: expect.any(Array),
      },
    });
  });
});
