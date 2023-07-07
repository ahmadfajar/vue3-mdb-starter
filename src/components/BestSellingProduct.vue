<script setup lang="ts">
import type { Prop } from 'vue';
import type { IArrayStore, TProgressBarOptionProps } from 'vue-mdbootstrap';

defineProps({
  source: {
    type: Object
  } as Prop<IArrayStore>
});

const progressProps: TProgressBarOptionProps = {
  height: '.25rem',
  valuePosition: 'end',
  showValue: true
};
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
        <tr v-for="item in source?.dataItems" :key="item?.id">
          <td>
            <div class="d-flex align-items-center position-relative">
              <img :src="item.image" width="60" :alt="item.product" />
              <div class="ms-3">
                <div class="md-fw-semibold text-nowrap">
                  <a class="text-dark stretched-link" href="#!">{{ item.product }}</a>
                </div>
                <div class="text-grey-600 small">{{ item.category }}</div>
              </div>
            </div>
          </td>
          <td>{{ item.price }}</td>
          <td>{{ item.orders }}</td>
          <td>
            <BsProgressBar :model-value="item.revenue" v-bind="progressProps" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
