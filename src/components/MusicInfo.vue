<script setup lang="ts">
defineProps({
  title: String,
  text: String,
});
</script>

<template>
  <BsCard border-off>
    <div v-if="$slots.media" class="d-flex justify-content-between">
      <BsCardBody class="d-flex flex-column">
        <BsCardContent type="title">{{ title }}</BsCardContent>
        <BsCardContent class="flex-fill text-truncate opacity-50">
          <slot name="text">{{ text }}</slot>
        </BsCardContent>
        <slot name="button"></slot>
      </BsCardBody>
      <slot name="media"></slot>
    </div>
    <BsCardBody v-else class="d-flex flex-column">
      <BsCardContent type="title">{{ title }}</BsCardContent>
      <BsCardContent type="text" class="flex-fill text-truncate opacity-50">
        <slot name="text">{{ text }}</slot>
      </BsCardContent>
      <slot name="button"></slot>
    </BsCardBody>
  </BsCard>
</template>
