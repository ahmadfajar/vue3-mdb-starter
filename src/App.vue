<script setup lang="ts">
import { ref } from 'vue';
import { useBreakpointMax } from 'vue-mdbootstrap';

const leftDrawer = ref(true);

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
        <BsButton mode="icon" icon="notifications" color="secondary" flat />
        <BsButton mode="icon" icon="settings" color="secondary" flat />
        <BsAvatar img-src="/images/avatar.jpg" class="ms-2" size="46" circle />
      </BsAppbarItems>
    </BsAppbar>
    <BsSideDrawer v-model:open="leftDrawer" position="left" clipped fixed-layout>
      <BsListView color="stylish-color-dark" space-around="both" item-rounded-pill>
        <BsListNav>
          <BsListNavItem icon="home" label="Home" path="/" />
          <BsListNavItem icon="redeem" label="Products" path="/products" />
          <BsListNavItem icon="assignment" label="Orders" path="/orders" />
          <BsListNavItem icon="account_box" label="Customers" path="/customers" />
        </BsListNav>
      </BsListView>
    </BsSideDrawer>
    <BsContainer app class="y-overflow-hidden bg-rgba-blue-grey-slight" @resize="onContainerResize">
      <main class="container-fluid px-lg-4">
        <RouterView v-slot="{ Component }">
          <Transition name="fade-fast" mode="out-in">
            <component :is="Component" />
          </Transition>
        </RouterView>
      </main>
    </BsContainer>
  </BsAppContainer>
</template>
