<script setup lang="ts">
import MusicInfo from '@/components/MusicInfo.vue';
import { useTouchOrWheel } from '@/mixins/sharedApi.ts';
import { reactive, ref } from 'vue';
import { useGenerateId } from 'vue-mdbootstrap';

const scrollOffset = ref<number>(0);
const slider = reactive({
  contentId: useGenerateId(),
  contentWidth: 0,
  wrapperWidth: 0,
});

const { touchHandler, wheelHandler } = useTouchOrWheel(slider, scrollOffset);
</script>

<template>
  <div class="music-slider g-3">
    <div
      v-touch="{ left: touchHandler, right: touchHandler }"
      class="slider-container"
      @wheel="wheelHandler"
    >
      <div :id="slider.contentId" class="slider-wrapper">
        <div class="slider-item">
          <MusicInfo
            class="bg-deep-purple-700 text-light h-full"
            text="Listen to your favorite artists and albums whenever and wherever, online and offline."
            title="Unlimited music now"
          >
            <template #button>
              <BsButton
                color="default"
                size="sm"
                @click="$notification.add('You can implement LISTEN NOW on your own.')"
              >
                LISTEN NOW
              </BsButton>
            </template>
          </MusicInfo>
        </div>
        <div class="slider-item">
          <MusicInfo class="bg-cyan-900 text-light h-full" text="Foster the People" title="Supermodel">
            <template #button>
              <BsButton
                color="light"
                outlined
                size="sm"
                @click="$notification.add('You can implement START RADIO on your own.')"
              >
                START RADIO
              </BsButton>
            </template>
            <template #media>
              <div class="card-image">
                <img alt="Supermodel" class="rounded" src="/images/foster.jpg" />
              </div>
            </template>
          </MusicInfo>
        </div>
        <div class="slider-item">
          <MusicInfo class="bg-dark-pink text-light h-full" text="Ellie Goulding" title="Halcyon Days">
            <template #button>
              <div>
                <BsButton
                  color="light"
                  icon="play_arrow"
                  mode="icon"
                  outlined
                  size="sm"
                  @click="$notification.add('You can implement this on your own.')"
                />
              </div>
            </template>
            <template #media>
              <div class="card-image">
                <img alt="Halcyon Days" class="rounded" src="/images/halcyon.jpg" />
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

  .md-card {
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
