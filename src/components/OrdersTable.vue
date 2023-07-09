<script setup lang="ts">
import {
  badgeOrderStatusColor,
  badgeOrderStatusIcon,
  badgePaymentColor,
  badgePaymentIcon,
  type TOrderRecord
} from '@/stores/orderStores';
import type { Prop } from 'vue';
import type { TButtonOptionProps } from 'vue-mdbootstrap';

defineProps({
  sources: {
    type: Array<TOrderRecord>
  } as Prop<TOrderRecord[]>
});

const btnProps: TButtonOptionProps = {
  color: 'grey',
  iconSize: 16,
  mode: 'icon',
  flat: true,
  size: 'xs'
};
</script>

<template>
  <div class="table-responsive">
    <table class="table">
      <thead class="table-light">
        <tr style="font-size: 0.92rem">
          <th class="text-nowrap">Order ID</th>
          <th>Date</th>
          <th>Customer</th>
          <th style="width: 130px">Payment Status</th>
          <th class="text-end pe-3">Total</th>
          <th style="width: 125px">Order Status</th>
          <th class="text-center" style="width: 100px">Action</th>
        </tr>
      </thead>
      <tbody class="align-middle" style="font-size: 0.875rem">
        <tr v-for="item in sources" :key="item?.orderId">
          <td>#{{ item.orderId }}</td>
          <td class="text-nowrap">
            {{ item.orderDate.toLocaleString('en-US', { dateStyle: 'medium' }) }}
          </td>
          <td class="text-nowrap">{{ item.customer }}</td>
          <td>
            <BsChip
              :color="badgePaymentColor(item)"
              :icon="badgePaymentIcon(item)"
              icon-variant="outlined"
              size="sm"
              readonly
            >
              {{ item.paymentStatus }}
            </BsChip>
          </td>
          <td class="text-end pe-3">${{ item.total }}</td>
          <td>
            <BsChip
              :color="badgeOrderStatusColor(item)"
              :icon="badgeOrderStatusIcon(item)"
              icon-variant="outlined"
              size="sm"
              readonly
            >
              {{ item.orderStatus }}
            </BsChip>
          </td>
          <td class="text-nowrap">
            <BsButton v-bind="btnProps" icon="visibility" title="View" />
            <BsButton v-bind="btnProps" icon="edit" title="Edit" />
            <BsButton v-bind="btnProps" icon="delete" title="Delete" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
