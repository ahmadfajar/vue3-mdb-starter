<script setup lang="ts">
import { ref } from 'vue';
import { useBreakpointMax } from 'vue-mdbootstrap';
import PopupNotification from './components/PopupNotification.vue';

const leftDrawer = ref(true);
const notifOpen = ref(false);

function onContainerResize() {
  if (useBreakpointMax('xl')) {
    leftDrawer.value = false;
  }
}

function toggleSideDrawer(value: boolean) {
  leftDrawer.value = !value;
}
</script>

<template>
  <BsAppContainer viewport-height>
    <BsAppbar fixed-top shadow>
      <BsButton
        color="secondary"
        icon="menu"
        mode="icon"
        flat
        @click="toggleSideDrawer(leftDrawer)"
      />
      <div class="app-logo d-none d-md-flex">
        <img src="/images/logo.png" alt="Vue MDBootstrap" rel="preload" />
      </div>
      <BsAppbarTitle class="d-none d-lg-flex">My Application</BsAppbarTitle>
      <BsSpacer />
      <BsAppbarItems class="pe-3">
        <BsButton mode="icon" icon="search" color="secondary" flat />
        <BsDropdownMenu
          v-model:open="notifOpen"
          :content-click-close="false"
          placement="bottom-right"
          space="4"
        >
          <BsButton mode="icon" icon="notifications" color="secondary" flat />
          <template #content>
            <PopupNotification @close="notifOpen = false" />
          </template>
        </BsDropdownMenu>
        <BsButton mode="icon" icon="settings" color="secondary" flat />
        <BsAvatar img-src="/images/avatar-2.jpg" class="ms-2" size="46" circle />
      </BsAppbarItems>
    </BsAppbar>
    <BsSideDrawer v-model:open="leftDrawer" position="left" clipped fixed-layout>
      <BsListView color="stylish-color" space-around="both" item-rounded-pill>
        <div class="d-lg-none">
          <div class="d-flex" style="margin: 0.5rem 0.5rem 1rem 1rem">
            <BsAvatar img-src="/images/avatar-2.jpg" size="82" circle />
            <div class="d-flex flex-column justify-content-center ms-3">
              <div class="h5 text-white">John Wick</div>
              <a href="#" class="text-grey-500 text-decoration-none">Logout</a>
            </div>
          </div>
          <BsDivider />
        </div>
        <BsListNav>
          <BsListNavItem icon="home_outlined" label="Home" path="/" />
          <BsListNavItem icon="redeem" label="Products" path="/products" />
          <BsListNavItem icon="assignment_outlined" label="Orders" path="/orders" />
          <BsListNavItem icon="account_box_outlined" label="Customers" path="/customers" />
        </BsListNav>
      </BsListView>
    </BsSideDrawer>
    <BsContainer app @resize="onContainerResize">
      <BsContent>
        <main class="container-fluid px-lg-4 px-xl-5">
          <RouterView v-slot="{ Component }">
            <Transition name="fade-fast" mode="out-in">
              <component :is="Component" />
            </Transition>
          </RouterView>
        </main>
      </BsContent>
    </BsContainer>
    <BsNotification />
  </BsAppContainer>
</template>
