<script setup lang="ts">
import type { IArrayStore, TProgressBarOptionProps } from 'vue-mdbootstrap';

defineProps<{ source: IArrayStore }>();

const progressProps = {
  height: '.25rem',
  valuePosition: 'end',
  showValue: true,
} satisfies TProgressBarOptionProps;
</script>

<template>
  <div class="table-responsive">
    <table class="table">
      <thead class="table-light">
        <tr>
          <th>Best Selling Products</th>
          <th>Price</th>
          <th>Orders</th>
          <th>Revenue</th>
        </tr>
      </thead>
      <tbody class="align-middle" style="font-size: 0.875rem">
        <tr v-for="item in source.dataItems" :key="item.id as string">
          <td>
            <div class="flex items-center relative">
              <img :alt="item.product as string" :src="item.image as string" width="60" />
              <div class="ms-3">
                <a class="block font-weight-semibold text-nowrap" href="#">{{ item.product }}</a>
                <div class="text-subtle-secondary">{{ item.category }}</div>
              </div>
            </div>
          </td>
          <td>{{ item.price }}</td>
          <td>{{ item.orders }}</td>
          <td>
            <BsProgressBar
              v-bind="progressProps"
              :model-value="item.revenue as number"
              style="--md-progress-font-size: 0.7rem"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
