<script setup lang="ts">
defineProps<{ title?: string; text?: string }>();
</script>

<template>
  <BsCard>
    <div v-if="$slots.media" class="h-full flex justify-between">
      <BsCardBody class="flex flex-col">
        <BsCardContent type="title">{{ title }}</BsCardContent>
        <BsCardContent class="text-wrap opacity-75">
          <slot name="text">{{ text }}</slot>
        </BsCardContent>
        <div class="flex flex-grow flex-col justify-end">
          <slot name="button" />
        </div>
      </BsCardBody>
      <slot name="media" />
    </div>
    <BsCardBody v-else class="flex flex-col">
      <BsCardContent type="title">{{ title }}</BsCardContent>
      <BsCardContent class="text-wrap opacity-75 small" type="text">
        <slot name="text">{{ text }}</slot>
      </BsCardContent>
      <slot name="button" />
    </BsCardBody>
  </BsCard>
</template>
