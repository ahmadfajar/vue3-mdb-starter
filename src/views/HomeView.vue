<script setup lang="ts">
import CardItemInfo from '@/components/CardItemInfo.vue';
import CardBoardItem from '@/components/CardBoardItem.vue';
</script>

<template>
  <div class="my-5">
    <div class="col-md-8 mx-auto text-center">
      <img src="/images/logo.png" alt="Vue MDBootstrap" />
      <h1 class="display-1 md-fw-semibold mt-4 lh-sm">Hello Application</h1>
      <p class="lead my-4 fs-3">
        You have successfully implemented Vue MDBootstrap into your apps. Now you can start coding
        and build powerful web apps with amazing UI.
      </p>
    </div>
    <div class="card-gallery row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 mt-5">
      <div class="col">
        <CardItemInfo
          class="bg-mdb-color darken-1 h-100"
          title="Unlimited music now"
          text="Listen to your favorite artists and albums whenever and wherever, online and offline."
        >
          <template #button>
            <BsButton color="light" size="sm" flat>LISTEN NOW</BsButton>
          </template>
        </CardItemInfo>
      </div>
      <div class="col">
        <CardItemInfo class="bg-cyan darken-4 h-100" title="Supermodel" text="Foster the People">
          <template #button>
            <BsButton color="light" size="sm" outlined>START RADIO</BsButton>
          </template>
          <template #media>
            <div class="card-image">
              <img src="/images/foster.jpg" alt="Supermodel" class="rounded" />
            </div>
          </template>
        </CardItemInfo>
      </div>
      <div class="col">
        <CardItemInfo class="bg-pink-darken h-100" title="Halcyon Days" text="Ellie Goulding">
          <template #button>
            <div>
              <BsButton color="light" mode="icon" icon="play_arrow" size="sm" outlined />
            </div>
          </template>
          <template #media>
            <div class="card-image">
              <img src="/images/halcyon.jpg" alt="Halcyon Days" class="rounded" />
            </div>
          </template>
        </CardItemInfo>
      </div>
    </div>
    <h3 class="mt-5">Most Recent Boards</h3>
    <div class="board-slider row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 mt-3">
      <div class="col">
        <CardBoardItem
          :avatar-src="[
            '/images/avatar-1.jpg',
            '/images/avatar-2.jpg',
            '/images/avatar-5.webp',
            '/images/avatar-6.webp'
          ]"
          img-src="https://knowmax.ai/wp-content/uploads/2021/07/Decision-trees-in-Healthcare-call-centers.jpg"
          title="Issue Tickets"
          description="Daily task"
          task-count="44"
          comment-count="12"
          like-count="10"
          dislike-count="4"
        />
      </div>
      <div class="col">
        <CardBoardItem
          :avatar-src="[
            '/images/avatar-1.jpg',
            '/images/avatar-2.jpg',
            '/images/avatar-5.webp',
            '/images/avatar-6.webp'
          ]"
          img-src="https://kmhlabs.com/wp-content/uploads/2021/02/Home-Page-KMH-Quality_1188079282.jpg"
          title="Post Tracking"
          description="Deals Tracking"
          task-count="44"
          comment-count="12"
          like-count="10"
          dislike-count="4"
        />
      </div>
      <div class="col">
        <CardBoardItem
          :avatar-src="[
            '/images/avatar-3.jpg',
            '/images/avatar-7.webp',
            '/images/avatar-5.webp',
            '/images/avatar-6.webp'
          ]"
          img-src="https://i1.chainbulletin.com/img/2020/06/744.jpg"
          title="Rebuilding"
          description="Production Line"
          task-count="44"
          comment-count="12"
          like-count="10"
          dislike-count="4"
        />
      </div>
      <div class="col">
        <CardBoardItem
          :avatar-src="[
            '/images/avatar-7.wepb',
            '/images/avatar-2.jpg',
            '/images/avatar-5.webp',
            '/images/avatar-6.webp'
          ]"
          img-src="https://www.jadeglobal.com/sites/default/files/2019-07/test-automation_1.jpg"
          title="Automation Team"
          description="Remote Team"
          task-count="44"
          comment-count="12"
          like-count="10"
          dislike-count="4"
        />
      </div>
    </div>
  </div>
</template>
