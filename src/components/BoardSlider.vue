<script setup lang="ts">
import BoardItem from '@/components/BoardItem.vue';
import type { TBoardItemProps } from '@/components/types';
import { useTouchOrWheel } from '@/mixins/sharedApi.ts';
import { reactive, ref } from 'vue';
import { useGenerateId } from 'vue-mdbootstrap';

defineProps<{ items: TBoardItemProps[] }>();

const scrollOffset = ref<number>(0);
const slider = reactive({
  contentId: useGenerateId(),
  contentWidth: 0,
  wrapperWidth: 0,
});

const { touchHandler, wheelHandler } = useTouchOrWheel(slider, scrollOffset);
</script>

<template>
  <div class="board-slider g-3">
    <div
      v-touch="{ left: touchHandler, right: touchHandler }"
      class="slider-container"
      @wheel="wheelHandler"
    >
      <div :id="slider.contentId" class="slider-wrapper">
        <div v-for="(item, idx) in items" :key="item.imgSrc + '-' + idx" class="slider-item">
          <BoardItem
            :avatar-src="item.avatarSrc"
            :comment-count="item.commentCount"
            :description="item.description"
            :dislike-count="item.dislikeCount"
            :img-src="item.imgSrc"
            :like-count="item.likeCount"
            :task-count="item.taskCount"
            :title="item.title"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.slider-container {
  display: flex;
  flex: 1 1 auto;
  contain: content;
  overflow-x: hidden;
  position: relative;

  > .slider-wrapper {
    display: flex;
    flex: 1 0 auto;
    position: relative;
    white-space: nowrap;
    transition: transform 0.6s cubic-bezier(0.25, 0.8, 0.5, 1);

    > .slider-item {
      padding: 0 calc(var(--bs-gutter-x) * 0.5) calc(var(--bs-gutter-y) * 0.5);

      &:first-child {
        padding-left: 2px;
      }
    }
  }
}

.board-slider {
  width: 100%;
  position: relative;

  .md-card {
    width: 356px;

    > .card-img-top {
      height: 140px;
      background-size: cover;
      background-repeat: no-repeat;
    }
  }
}

.avatar-group {
  .md-avatar ~ .md-avatar {
    margin-left: -0.5rem;
  }
}
</style>
