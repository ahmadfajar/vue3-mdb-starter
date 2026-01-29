<script setup lang="ts">
import type { TBoardItemProps } from '@/components/types';
import { computed } from 'vue';

const props = defineProps<TBoardItemProps>();
const styles = computed(() => ({
  'background-image': props.imgSrc ? `url(${props.imgSrc})` : undefined,
}));
</script>

<template>
  <BsCard shadow>
    <div :style="styles" class="card-img-top flex items-end p-2">
      <div class="avatar-group">
        <BsAvatar
          v-for="src in avatarSrc"
          :img-src="src"
          :key="src"
          border="1"
          border-color="light"
          circle
          size="32"
        />
      </div>
    </div>
    <BsCardBody>
      <BsCardContent type="title">{{ title }}</BsCardContent>
      <BsCardContent>{{ description }}</BsCardContent>
      <div class="flex text-subtle-secondary">
        <div class="inline-flex items-center">
          <BsFontawesomeIcon icon="list-check" size="16" />
          <span class="small ps-2" style="width: 50px">{{ taskCount }}</span>
        </div>
        <div class="inline-flex items-center">
          <BsFontawesomeIcon icon="comment" size="16" />
          <span class="small ps-2" style="width: 50px">{{ commentCount }}</span>
        </div>
        <div class="inline-flex md-link">
          <BsIcon icon="thumb_up" size="20" />
          <span class="small ps-2" style="width: 50px">{{ likeCount }}</span>
        </div>
        <div class="inline-flex md-link">
          <BsIcon icon="thumb_down" size="20" />
          <span class="small ps-2" style="width: 50px">{{ dislikeCount }}</span>
        </div>
      </div>
    </BsCardBody>
  </BsCard>
</template>
