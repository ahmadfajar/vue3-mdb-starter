<script setup lang="ts">
import PopupNotification from '@/components/PopupNotification.vue';
import { ref } from 'vue';
import { useBreakpointMax } from 'vue-mdbootstrap';

const leftDrawer = ref(true);
const notifOpen = ref(false);

function onContainerResize() {
  if (useBreakpointMax('lg')) {
    leftDrawer.value = false;
  }
}

function toggleSideDrawer(value: boolean) {
  leftDrawer.value = !value;
}
</script>

<template>
  <BsApp viewport-height>
    <BsAppbar fixed-top class="md-shadow">
      <BsButton
        color="secondary"
        flat
        icon="menu"
        mode="icon"
        @click="toggleSideDrawer(leftDrawer)"
      />
      <div class="app-logo d-none d-md-flex">
        <img alt="Vue MDBootstrap" rel="preload" src="/images/logo.png" />
      </div>
      <BsAppbarTitle class="d-none d-lg-flex">My Application</BsAppbarTitle>
      <BsSpacer />
      <BsAppbarItems class="pe-3">
        <BsButton color="secondary" flat icon="search" mode="icon" />
        <BsDropdownMenu
          v-model:open="notifOpen"
          :content-click-close="false"
          placement="bottom-right"
          space="4"
        >
          <BsButton color="secondary" flat icon="notifications" mode="icon" />
          <template #content>
            <PopupNotification @close="notifOpen = false" />
          </template>
        </BsDropdownMenu>
        <BsButton color="secondary" flat icon="settings" mode="icon" />
        <BsAvatar circle class="ms-2" img-src="/images/avatar-2.jpg" size="46" />
      </BsAppbarItems>
    </BsAppbar>
    <BsSideDrawer v-model:open="leftDrawer" clipped fixed-layout position="left">
      <BsListView item-rounded-pill space-around="both">
        <div class="d-lg-none">
          <div class="flex" style="margin: 0.5rem 0.5rem 1rem 1rem">
            <BsAvatar circle img-src="/images/avatar-2.jpg" size="82" />
            <div class="flex flex-col justify-center ms-3">
              <div class="h4">John Wick</div>
              <BsButton size="sm" outlined>Logout</BsButton>
            </div>
          </div>
          <BsDivider />
        </div>
        <BsListNav>
          <BsListNavItem icon="home_outlined" label="Home" path-name="home" />
          <BsListNavItem icon="redeem" label="Products" path-name="products" />
          <BsListNavItem icon="assignment_outlined" label="Orders" path-name="orders" />
          <BsListNavItem icon="account_box_outlined" label="Customers" path-name="customers" />
        </BsListNav>
      </BsListView>
    </BsSideDrawer>
    <BsContainer app @resize="onContainerResize">
      <BsContent>
        <main class="container-fluid px-lg-4 px-xl-5">
          <RouterView v-slot="{ Component }">
            <Transition mode="out-in" name="fade-fast">
              <component :is="Component" />
            </Transition>
          </RouterView>
        </main>
      </BsContent>
    </BsContainer>
    <BsNotification />
  </BsApp>
</template>
