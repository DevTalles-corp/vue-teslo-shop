<template>
  <!-- component -->
  <!-- Header Navbar -->
  <top-menu />

  <!-- RouterView -->
  <router-view />

  <!-- Footer -->
  <custom-footer />
</template>

<script lang="ts" setup>
import TopMenu from '../components/TopMenu.vue';
import CustomFooter from '../components/CustomFooter.vue';
</script>
