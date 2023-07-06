<script setup lang="ts">
import BoardSlider from '@/components/BoardSlider.vue';
import MusicInfo from '@/components/MusicInfo.vue';
import type { TBoardItemProps } from 'env';

const boardItems: TBoardItemProps[] = [
  {
    avatarSrc: [
      '/images/avatar-1.jpg',
      '/images/avatar-2.jpg',
      '/images/avatar-5.webp',
      '/images/avatar-6.webp'
    ],
    imgSrc:
      'https://knowmax.ai/wp-content/uploads/2021/07/Decision-trees-in-Healthcare-call-centers.jpg',
    title: 'Issue Tickets',
    description: 'Daily task',
    taskCount: 44,
    commentCount: 12,
    likeCount: 10,
    dislikeCount: 4
  },
  {
    avatarSrc: [
      '/images/avatar-1.jpg',
      '/images/avatar-2.jpg',
      '/images/avatar-5.webp',
      '/images/avatar-6.webp'
    ],
    imgSrc: 'https://kmhlabs.com/wp-content/uploads/2021/02/Home-Page-KMH-Quality_1188079282.jpg',
    title: 'Post Tracking',
    description: 'Deals Tracking',
    taskCount: 44,
    commentCount: 12,
    likeCount: 10,
    dislikeCount: 4
  },
  {
    avatarSrc: [
      '/images/avatar-3.jpg',
      '/images/avatar-7.webp',
      '/images/avatar-5.webp',
      '/images/avatar-6.webp'
    ],
    imgSrc: 'https://i1.chainbulletin.com/img/2020/06/744.jpg',
    title: 'Rebuilding',
    description: 'Production Line',
    taskCount: 44,
    commentCount: 12,
    likeCount: 10,
    dislikeCount: 4
  },
  {
    avatarSrc: [
      '/images/avatar-7.webp',
      '/images/avatar-2.jpg',
      '/images/avatar-5.webp',
      '/images/avatar-6.webp'
    ],
    imgSrc: 'https://www.jadeglobal.com/sites/default/files/2019-07/test-automation_1.jpg',
    title: 'Automation Team',
    description: 'Remote Team',
    taskCount: 44,
    commentCount: 12,
    likeCount: 10,
    dislikeCount: 4
  }
];
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
    <div class="music-slider g-3 mt-5">
      <div class="music-item">
        <MusicInfo
          class="bg-mdb-color darken-1 h-100"
          title="Unlimited music now"
          text="Listen to your favorite artists and albums whenever and wherever, online and offline."
        >
          <template #button>
            <BsButton color="light" size="sm" flat>LISTEN NOW</BsButton>
          </template>
        </MusicInfo>
      </div>
      <div class="music-item">
        <MusicInfo class="bg-cyan darken-4 h-100" title="Supermodel" text="Foster the People">
          <template #button>
            <BsButton color="light" size="sm" outlined>START RADIO</BsButton>
          </template>
          <template #media>
            <div class="card-image">
              <img src="/images/foster.jpg" alt="Supermodel" class="rounded" />
            </div>
          </template>
        </MusicInfo>
      </div>
      <div class="music-item">
        <MusicInfo class="bg-pink-darken h-100" title="Halcyon Days" text="Ellie Goulding">
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
        </MusicInfo>
      </div>
    </div>
    <h3 class="mt-5">Most Recent Boards</h3>
    <BoardSlider class="mt-4" :items="boardItems" />
  </div>
</template>
