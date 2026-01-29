<script setup lang="ts">
import BestSellingProduct from '@/components/BestSellingProduct.vue';
import { topSelling } from '@/stores/topSelling';
</script>

<template>
  <div class="my-4">
    <h1>Products</h1>
    <div class="mt-4">
      <BestSellingProduct :source="topSelling" />
    </div>
  </div>
</template>
