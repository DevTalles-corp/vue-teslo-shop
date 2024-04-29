import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

export const usePagination = () => {
  const route = useRoute();
  const page = ref(Number(route.query.page || 1));

  watch(
    () => route.query.page,
    (newPage) => {
      page.value = Number(newPage || 1);

      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
  );

  return {
    page,
  };
};
