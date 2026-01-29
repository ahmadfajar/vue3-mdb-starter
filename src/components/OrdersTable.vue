<script setup lang="ts">
import {
  badgeOrderStatusColor,
  badgeOrderStatusIcon,
  badgePaymentColor,
  badgePaymentIcon,
  type TOrderRecord,
} from '@/stores/orderStores';
import type { TButtonOptionProps } from 'vue-mdbootstrap';

defineProps<{ sources: TOrderRecord[] }>();

const btnProps = {
  color: 'secondary',
  iconSize: 16,
  mode: 'icon',
  size: 'xs',
  tonal: true,
} satisfies TButtonOptionProps;
</script>

<template>
  <div class="table-responsive rounded-0">
    <table class="table border-t">
      <thead class="table-light">
        <tr style="font-size: 0.92rem">
          <th class="text-nowrap">Order ID</th>
          <th>Date</th>
          <th>Customer</th>
          <th class="text-nowrap" style="width: 130px">Payment Status</th>
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
            <BsBadge
              :color="badgePaymentColor(item)"
              class="badge-tonal inline-flex items-center"
              outlined
              type="pill"
            >
              <BsIcon :icon="badgePaymentIcon(item)" size="18" />
              <span class="ms-2">{{ item.paymentStatus }}</span>
            </BsBadge>
          </td>
          <td class="text-end pe-3">${{ item.total }}</td>
          <td>
            <BsBadge
              v-if="badgeOrderStatusIcon(item)"
              :color="badgeOrderStatusColor(item)"
              class="inline-flex items-center"
            >
              <BsIcon :icon="badgeOrderStatusIcon(item)" size="18" />
              <span class="ms-2">{{ item.orderStatus }}</span>
            </BsBadge>
            <BsBadge v-else :color="badgeOrderStatusColor(item)" class="inline-flex items-center">
              {{ item.orderStatus }}
            </BsBadge>
          </td>
          <td class="text-nowrap">
            <div class="md-button-group" style="gap: 3px">
              <BsButton
                v-bind="btnProps"
                icon="visibility"
                style="border-radius: 15px 6px 6px 15px"
                title="View"
              />
              <BsButton
                v-bind="btnProps"
                icon="edit"
                style="border-radius: 6px 6px 6px 6px"
                title="Edit"
              />
              <BsButton
                v-bind="btnProps"
                color="danger"
                icon="delete"
                style="border-radius: 6px 15px 15px 6px"
                title="Delete"
              />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
