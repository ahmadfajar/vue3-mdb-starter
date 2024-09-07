<script setup lang="ts">
import { computed } from 'vue';
import { iconComments, iconListCheck } from '@/mixins/icons';

const props = defineProps({
  avatarSrc: {
    type: Array<string>,
  },
  imgSrc: String,
  title: String,
  description: String,
  taskCount: [String, Number],
  commentCount: [String, Number],
  likeCount: [String, Number],
  dislikeCount: [String, Number],
});
const styles = computed(() => ({
  'background-image': props.imgSrc ? `url(${props.imgSrc})` : undefined,
}));
</script>

<template>
  <BsCard shadow>
    <div class="card-img-top d-flex align-items-end p-2" :style="styles">
      <div class="avatar-group">
        <BsAvatar
          v-for="src in avatarSrc"
          :key="src"
          :img-src="src"
          size="32"
          border="1"
          border-color="white"
          circle
        />
      </div>
    </div>
    <BsCardBody>
      <BsCardContent type="title">{{ title }}</BsCardContent>
      <BsCardContent>{{ description }}</BsCardContent>
      <div class="d-flex text-grey-600">
        <div class="d-inline-flex align-items-center">
          <iconListCheck size="18" />
          <span class="ps-2" style="width: 50px">{{ taskCount }}</span>
        </div>
        <div class="d-inline-flex align-items-center">
          <iconComments size="18" />
          <span class="ps-2" style="width: 50px">{{ commentCount }}</span>
        </div>
        <div class="d-inline-flex md-link">
          <BsIcon icon="thumb_up" />
          <span class="ps-2" style="width: 50px">{{ likeCount }}</span>
        </div>
        <div class="d-inline-flex md-link">
          <BsIcon icon="thumb_down" />
          <span class="ps-2" style="width: 50px">{{ dislikeCount }}</span>
        </div>
      </div>
    </BsCardBody>
  </BsCard>
</template>
