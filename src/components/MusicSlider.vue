<script setup lang="ts">
import MusicInfo from '@/components/MusicInfo.vue';
import { onMounted, reactive, ref, shallowRef } from 'vue';
import {
  Helper,
  useGenerateId,
  useVueMdbNotification,
  type INotificationProvider
} from 'vue-mdbootstrap';

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
    slider.contentWidth = el?.clientWidth ?? slider.contentWidth;
    const parent = el.parentElement;
    slider.wrapperWidth = parent?.clientWidth ?? slider.wrapperWidth;
    const newOffset = scrollOffset.value + evt.deltaX * -1;
    const deltaW = slider.contentWidth - slider.wrapperWidth;
    const deltaW1 = deltaW + 200;
    scrollOffset.value =
      newOffset > 200 ? 200 : Math.abs(newOffset) > deltaW1 ? -deltaW1 : newOffset;
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

const provider = shallowRef<INotificationProvider>();

onMounted(() => {
  provider.value = useVueMdbNotification();
});
</script>

<template>
  <div class="music-slider g-3">
    <div class="slider-container" @wheel="wheelHandler">
      <div :id="slider.contentId" class="slider-wrapper">
        <div class="slider-item">
          <MusicInfo
            class="bg-mdb-color darken-1 h-100"
            title="Unlimited music now"
            text="Listen to your favorite artists and albums whenever and wherever, online and offline."
          >
            <template #button>
              <BsButton
                color="purple"
                size="sm"
                @click="provider?.add('You can implement LISTEN NOW on your own.')"
              >
                LISTEN NOW
              </BsButton>
            </template>
          </MusicInfo>
        </div>
        <div class="slider-item">
          <MusicInfo class="bg-cyan darken-4 h-100" title="Supermodel" text="Foster the People">
            <template #button>
              <BsButton
                color="light"
                size="sm"
                outlined
                @click="provider?.add('You can implement START RADIO on your own.')"
              >
                START RADIO
              </BsButton>
            </template>
            <template #media>
              <div class="card-image">
                <img src="/images/foster.jpg" alt="Supermodel" class="rounded" />
              </div>
            </template>
          </MusicInfo>
        </div>
        <div class="slider-item">
          <MusicInfo class="bg-pink-darken h-100" title="Halcyon Days" text="Ellie Goulding">
            <template #button>
              <div>
                <BsButton
                  color="light"
                  mode="icon"
                  icon="play_arrow"
                  size="sm"
                  outlined
                  @click="provider?.add('You can implement this on your own.')"
                />
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
    </div>
  </div>
</template>

<style lang="scss">
// Some css already covers by component: BoardSlider.vue
.music-slider {
  width: 100%;
  position: relative;

  .card {
    --bs-card-color: #fff;
    width: 356px;
  }

  .card-image {
    padding: 1rem 1rem 1rem 0.25rem;

    > img {
      height: 120px;
      width: 120px;
    }
  }
}
</style>
