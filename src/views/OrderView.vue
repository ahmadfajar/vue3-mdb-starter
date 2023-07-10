<script setup lang="ts">
import OrdersTable from '@/components/OrdersTable.vue';
import { populate, type TOrderRecord } from '@/stores/orderStores';
import { onMounted, ref, shallowRef } from 'vue';

const ordersData = shallowRef<TOrderRecord[]>();
const search = ref<string>();
const paymentMenus = ref([
  {
    text: 'Payment Status',
    label: 'All',
    active: true
  },
  {
    text: 'Paid',
    active: false
  },
  {
    text: 'Unpaid',
    active: false
  },
  {
    text: 'Pending',
    active: false
  },
  {
    text: 'Failed',
    active: false
  }
]);
const orderStatusMenus = ref([
  {
    text: 'Order Status',
    label: 'All',
    active: true
  },
  {
    text: 'Delivered',
    active: false
  },
  {
    text: 'Shipped',
    active: false
  },
  {
    text: 'Processing',
    active: false
  },
  {
    text: 'Cancelled',
    active: false
  }
]);

onMounted(async () => {
  const data = await populate(25);
  data.sort('orderId', 'desc');
  ordersData.value = data.dataItems as TOrderRecord[];
});
</script>

<template>
  <div class="my-4">
    <h1>Orders</h1>
    <div class="mt-4">
      <BsCard border-off class="shadow">
        <BsCardBody>
          <div class="row mb-4 align-items-center">
            <div class="col-xl-4 order-xl-1">
              <div class="d-flex justify-content-end">
                <BsDropdownMenu placement="bottom-right" space="3">
                  <BsButton color="default-color" title="Export order" outlined>Export</BsButton>
                  <template #content>
                    <BsListView space-around="both">
                      <div class="dropdown-menu">
                        <div class="dropdown-header">OPTIONS</div>
                        <a href="#" class="dropdown-item rounded">
                          <BsAvatar class="text-grey-600" icon="content_copy" size="26" />
                          <span class="ms-3">Copy</span>
                        </a>
                        <a href="#" class="dropdown-item rounded">
                          <BsAvatar class="text-grey-600" icon="print_outlined" size="26" />
                          <span class="ms-3">Print</span>
                        </a>
                        <div class="dropdown-divider"></div>
                        <div class="dropdown-header">DOWNLOAD OPTIONS</div>
                        <a href="#" class="dropdown-item rounded">
                          <BsAvatar img-src="/images/excel-icon.svg" size="20" />
                          <span class="ms-3">Excel</span>
                        </a>
                        <a href="#" class="dropdown-item rounded">
                          <BsAvatar img-src="/images/csv-icon.svg" size="20" />
                          <span class="ms-3">.CSV</span>
                        </a>
                        <a href="#" class="dropdown-item rounded">
                          <BsAvatar img-src="/images/pdf-icon.svg" size="20" />
                          <span class="ms-3">PDF</span>
                        </a>
                      </div>
                    </BsListView>
                  </template>
                </BsDropdownMenu>
                <BsButton color="default-color" title="Add new order" icon="add">
                  New Order
                </BsButton>
              </div>
            </div>
            <div class="col-xl-8 mt-3 mt-xl-0">
              <div class="row align-items-center">
                <div class="col-md-6 col-xl-auto order-md-1">
                  <div class="d-flex justify-content-end">
                    <BsDropdownMenu space="2">
                      <BsChip outlined>
                        <span>{{ paymentMenus.find((it) => it.active === true)?.text }}</span>
                        <span class="caret-down ms-2"></span>
                      </BsChip>
                      <template #content>
                        <BsListView>
                          <BsListNav>
                            <BsListNavItem
                              v-for="item in paymentMenus"
                              v-model:active="item.active"
                              :key="item.text"
                              :label="item.label ?? item.text"
                            />
                          </BsListNav>
                        </BsListView>
                      </template>
                    </BsDropdownMenu>
                    <BsDropdownMenu space="2">
                      <BsChip outlined>
                        <span>{{ orderStatusMenus.find((it) => it.active === true)?.text }}</span>
                        <span class="caret-down ms-2"></span>
                      </BsChip>
                      <template #content>
                        <BsListView>
                          <BsListNav>
                            <BsListNavItem
                              v-for="item in orderStatusMenus"
                              v-model:active="item.active"
                              :key="item.text"
                              :label="item.label ?? item.text"
                            />
                          </BsListNav>
                        </BsListView>
                      </template>
                    </BsDropdownMenu>
                  </div>
                </div>
                <div class="col-md-6 col-xl-auto mt-3 mt-md-0">
                  <BsSearchField
                    v-model="search"
                    placeholder="Search orders"
                    style="--md-searchbox-padding-y: 0"
                  />
                </div>
              </div>
            </div>
          </div>
          <OrdersTable :sources="ordersData" />
        </BsCardBody>
      </BsCard>
    </div>
  </div>
</template>
