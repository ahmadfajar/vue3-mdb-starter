<script setup lang="ts">
import type { TBoardItemProps } from 'env';
import { reactive, ref } from 'vue';
import { Helper, useGenerateId } from 'vue-mdbootstrap';
import BoardItem from './BoardItem.vue';

defineProps({
  items: {
    type: Array<TBoardItemProps>
  }
});

const scrollOffset = ref<number>(0);
const slider = reactive({
  contentId: useGenerateId(),
  contentWidth: 0,
  wrapperWidth: 0
});

const wheelHandler = (evt: WheelEvent) => {
  (evt.deltaX < 0 || evt.deltaX > 0) && evt.preventDefault();
  evt.relatedTarget;
  const el = document.getElementById(slider.contentId);

  if (el) {
    slider.contentWidth = el?.clientWidth ?? 0;
    const parent = el.parentElement;
    slider.wrapperWidth = parent?.clientWidth ?? 0;
    const newOffset = scrollOffset.value + evt.deltaX * -1;
    const deltaW = slider.contentWidth - slider.wrapperWidth;
    const deltaW1 = deltaW + 200;
    // console.info('scrolll:', newOffset);
    // scrollOffset.value = newOffset > 0 ? 0 : Math.abs(newOffset) > deltaW ? -deltaW : newOffset;
    scrollOffset.value = newOffset > 200 ? 200 : Math.abs(newOffset) > deltaW1 ? -deltaW1 : newOffset;
    el.style.transform = `translateX(${scrollOffset.value}px)`;

    Helper.defer(() => {
      if (scrollOffset.value > 0) {
        scrollOffset.value = 0;
        el.style.transform = `translateX(${scrollOffset.value}px)`;
      } else if (scrollOffset.value < -deltaW) {
        scrollOffset.value = -deltaW;
        el.style.transform = `translateX(${scrollOffset.value}px)`;
      }
    }, 150);
  }
};
</script>

<template>
  <div class="board-slider g-3">
    <div class="slider-container" @wheel="wheelHandler">
      <div :id="slider.contentId" class="slider-wrapper">
        <div v-for="(item, idx) in items" :key="item.imgSrc + '-' + idx" class="board-item">
          <BoardItem
            :avatar-src="item.avatarSrc"
            :img-src="item.imgSrc"
            :title="item.title"
            :description="item.description"
            :task-count="item.taskCount"
            :comment-count="item.commentCount"
            :like-count="item.likeCount"
            :dislike-count="item.dislikeCount"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.board-slider {
  width: 100%;
  position: relative;

  .slider-container {
    display: flex;
    flex: 1 1 auto;
    contain: content;
    overflow-x: hidden;
    position: relative;
  }

  .slider-wrapper {
    display: flex;
    flex: 1 0 auto;
    position: relative;
    white-space: nowrap;
    transition: transform 0.6s cubic-bezier(.25, .8, .50, 1);

    > .board-item {
      padding: 0 calc(var(--bs-gutter-x) * 0.5) calc(var(--bs-gutter-y) * 0.5);

      &:first-child {
        padding-left: 2px;
      }
    }
  }

  .card {
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