<script setup lang="ts">
import BoardItem from '@/components/BoardItem.vue';
import type { TBoardItemProps } from 'env';
import { reactive, ref } from 'vue';
import { useGenerateId } from 'vue-mdbootstrap';

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

const touchOrWheelHandler = (deltaX: number) => {
  const el = document.getElementById(slider.contentId);

  if (el) {
    slider.contentWidth = el?.clientWidth ?? slider.contentWidth;
    const parent = el.parentElement;
    slider.wrapperWidth = parent?.clientWidth ?? slider.wrapperWidth;
    const newOffset = scrollOffset.value + deltaX;
    const deltaW = slider.contentWidth - slider.wrapperWidth;
    const deltaW1 = deltaW + 200;
    scrollOffset.value =
      newOffset > 200 ? 200 : Math.abs(newOffset) > deltaW1 ? -deltaW1 : newOffset;
    el.style.transform = `translateX(${scrollOffset.value}px)`;

    if (scrollOffset.value > 0 || scrollOffset.value < -deltaW) {
      window.requestAnimationFrame(() => {
        if (scrollOffset.value > 0) {
          scrollOffset.value = 0;
          el.style.transform = `translateX(${scrollOffset.value}px)`;
        } else if (scrollOffset.value < -deltaW) {
          scrollOffset.value = -deltaW;
          el.style.transform = `translateX(${scrollOffset.value}px)`;
        }
      });
    }
  }
};

const wheelHandler = (evt: WheelEvent) => {
  (evt.deltaX < 0 || evt.deltaX > 0) && evt.preventDefault();
  window.requestAnimationFrame(() => touchOrWheelHandler(evt.deltaX * -1));
};

const touchHandler = (evt: WheelEvent) => {
  touchOrWheelHandler(evt.deltaX);
};
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
