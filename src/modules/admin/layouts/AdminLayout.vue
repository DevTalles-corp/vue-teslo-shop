<template>
  <!-- component -->
  <div class="flex w-screen h-screen text-gray-700">
    <!-- Component Start -->
    <div class="flex flex-col items-center w-16 pb-4 overflow-auto border-r border-gray-300">
      <a class="flex items-center justify-center flex-shrink-0 w-full h-16 bg-gray-300" href="#">
        <svg
          class="w-8 h-8"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          />
        </svg>
      </a>
      <a
        class="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded hover:bg-gray-300"
        href="#"
      >
        <svg
          class="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      </a>
      <a
        class="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded hover:bg-gray-300"
        href="#"
      >
        <svg
          class="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      </a>
      <a
        class="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded hover:bg-gray-300"
        href="#"
      >
        <svg
          class="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
          />
        </svg>
      </a>
      <a
        class="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded hover:bg-gray-300"
        href="#"
      >
        <svg
          class="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </a>
      <a
        class="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded hover:bg-gray-300"
        href="#"
      >
        <svg
          class="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>
      </a>
      <a
        class="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 mt-auto rounded hover:bg-gray-300"
        href="#"
      >
        <svg
          class="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </a>
    </div>
    <div class="flex flex-col w-56 border-r border-gray-300">
      <button class="relative text-sm focus:outline-none group">
        <div
          class="flex items-center justify-between w-full h-16 px-4 border-b border-gray-300 hover:bg-gray-300"
        >
          <span class="font-medium"> Dropdown </span>
          <svg
            class="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div
          class="absolute z-10 flex-col items-start hidden w-full pb-1 bg-white shadow-lg group-focus:flex"
        >
          <a class="w-full px-4 py-2 text-left hover:bg-gray-300" href="#">Menu Item 1</a>
          <a class="w-full px-4 py-2 text-left hover:bg-gray-300" href="#">Menu Item 1</a>
          <a class="w-full px-4 py-2 text-left hover:bg-gray-300" href="#">Menu Item 1</a>
        </div>
      </button>
      <div class="flex flex-col flex-grow p-4 overflow-auto">
        <RouterLink
          class="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-300"
          to="/admin"
        >
          <span class="leading-none">Dashboard</span>
        </RouterLink>
        <RouterLink
          class="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-300"
          to="/admin/products"
        >
          <span class="leading-none">Productos</span>
        </RouterLink>
        <a
          class="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-300"
          href="#"
        >
          <span class="leading-none">Item 3</span>
        </a>
        <a
          class="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-300"
          href="#"
        >
          <span class="leading-none">Item 4</span>
        </a>
        <a
          class="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-300"
          href="#"
        >
          <span class="leading-none">Item 5</span>
        </a>
        <a
          class="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-300"
          href="#"
        >
          <span class="leading-none">Item 6</span>
        </a>
        <RouterLink
          to="/admin/products/create"
          class="flex items-center flex-shrink-0 h-10 px-3 mt-auto text-sm font-medium bg-blue-500 rounded hover:bg-blue-700 text-white"
        >
          <svg
            class="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          <span class="ml-2 leading-none">Nuevo</span>
        </RouterLink>
      </div>
    </div>
    <div class="flex flex-col flex-grow">
      <div class="flex items-center flex-shrink-0 h-16 px-8 border-b border-gray-300">
        <h1 class="text-lg font-medium">{{ username }}</h1>
        <button
          class="flex items-center justify-center h-10 px-4 ml-auto text-sm font-medium rounded hover:bg-gray-300"
        >
          Action 1
        </button>
        <button
          class="flex items-center justify-center h-10 px-4 ml-2 text-sm font-medium bg-gray-200 rounded hover:bg-gray-300"
        >
          Action 2
        </button>
        <button class="relative ml-2 text-sm focus:outline-none group">
          <div class="flex items-center justify-between w-10 h-10 rounded hover:bg-gray-300">
            <svg
              class="w-5 h-5 mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </div>
          <div
            class="absolute right-0 flex-col items-start hidden w-40 pb-1 bg-white border border-gray-300 shadow-lg group-focus:flex"
          >
            <a class="w-full px-4 py-2 text-left hover:bg-gray-300" href="#">Menu Item 1</a>
            <a class="w-full px-4 py-2 text-left hover:bg-gray-300" href="#">Menu Item 1</a>
            <a class="w-full px-4 py-2 text-left hover:bg-gray-300" href="#">Menu Item 1</a>
          </div>
        </button>
      </div>
      <div class="flex-grow p-6 overflow-auto bg-gray-200">
        <RouterView />
      </div>
    </div>
    <!-- Component End  -->
  </div>
</template>

<script lang="ts" setup>
import { useAuthStore } from '@/modules/auth/stores/auth.store';
import { storeToRefs } from 'pinia';

const { username } = storeToRefs(useAuthStore());
</script>
