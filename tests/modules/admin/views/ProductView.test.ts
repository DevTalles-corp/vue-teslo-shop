import ProductView from '@/modules/admin/views/ProductView.vue';
import { useMutation, useQuery } from '@tanstack/vue-query';
import { shallowMount } from '@vue/test-utils';
import { fakeProducts } from '../../../fake/products.fake';
import type { Mock } from 'vitest';
import { ref } from 'vue';
import { createRouter, createWebHistory, useRouter } from 'vue-router';

vi.mock('@tanstack/vue-query');

vi.mock('vue-router', async (original) => {
  const originalImpl = await original();

  return {
    ...(originalImpl as any),
    useRouter: vi.fn(),
  };
});

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: ProductView,
    },
  ],
});

describe('<ProductView />', () => {
  const fakeProduct = fakeProducts.at(0)!;
  const mutateSpy = vi.fn();
  const replaceSpy = vi.fn();

  (useMutation as Mock).mockReturnValue({
    mutate: mutateSpy,
    isPending: ref(false),
    isSuccess: ref(false),
    data: ref(fakeProduct),
  });

  (useRouter as Mock).mockReturnValue({
    replace: replaceSpy,
  });

  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('should redirect to products if id not found', () => {
    (useQuery as Mock).mockReturnValue({
      data: ref({}),
      isError: ref(true),
      isLoading: ref(false),
      refetch: vi.fn(),
    });

    shallowMount(ProductView, {
      props: {
        productId: 'XXXXX',
      },
      global: {
        plugins: [router],
      },
    });

    expect(replaceSpy).toHaveBeenCalledWith('/admin/products');
  });

  test('should render page with a product', () => {
    (useQuery as Mock).mockReturnValue({
      isLoading: ref(false),
      isError: ref(false),
      refetch: vi.fn(),
      data: ref(fakeProduct),
    });

    const wrapper = shallowMount(ProductView, {
      props: {
        productId: 'ABC123',
      },
      global: {
        plugins: [router],
      },
    });

    const customInputs = wrapper.findAllComponents({ name: 'CustomInput' });
    const customTextAreas = wrapper.findAllComponents({ name: 'CustomTextArea' });
    const productValues = Object.values(fakeProduct);
    const sizeButtons = wrapper.findAll('button.flex-1');

    expect(customInputs.length).toBe(4);
    customInputs.forEach((input) => {
      const modelValue = input.props('modelValue');
      expect(productValues).toContain(modelValue);
    });

    customTextAreas.forEach((textArea) => {
      const modelValue = textArea.props('modelValue');
      expect(productValues).toContain(modelValue);
    });

    sizeButtons.forEach((button) => {
      if (fakeProduct.sizes.includes(button.text())) {
        expect(button.classes()).toContain('bg-blue-500');
      } else {
        expect(button.classes()).toContain('bg-blue-100');
      }
    });
  });

  test('should submit a form if data is valid', async () => {
    (useQuery as Mock).mockReturnValue({
      isLoading: ref(false),
      isError: ref(false),
      refetch: vi.fn(),
      data: ref(fakeProduct),
    });

    const wrapper = shallowMount(ProductView, {
      props: {
        productId: 'ABC123',
      },
      global: {
        plugins: [router],
      },
    });

    const form = wrapper.find('form');
    await form.trigger('submit');

    await new Promise((r) => setTimeout(r, 100));

    expect(mutateSpy).toHaveBeenCalled();
    expect(mutateSpy).toHaveBeenCalledWith(fakeProduct);
  });

  test('should not called submit a form if data is invalid', async () => {
    (useQuery as Mock).mockReturnValue({
      isLoading: ref(false),
      isError: ref(false),
      refetch: vi.fn(),
      data: ref(fakeProduct),
    });

    const wrapper = shallowMount(ProductView, {
      props: {
        productId: 'ABC123',
      },
      global: {
        plugins: [router],
      },
    });

    const titleInput = wrapper.findComponent({ name: 'CustomInput' });
    titleInput.vm.$emit('update:modelValue', '');

    const form = wrapper.find('form');
    await form.trigger('submit');

    await new Promise((r) => setTimeout(r, 100));

    expect(mutateSpy).not.toHaveBeenCalled();
  });
});
