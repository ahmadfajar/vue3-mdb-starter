<script setup lang="ts">
defineProps<{ title?: string; text?: string }>();
</script>

<template>
  <BsCard>
    <div v-if="$slots.media" class="flex justify-between">
      <BsCardBody class="flex flex-col">
        <BsCardContent type="title">{{ title }}</BsCardContent>
        <BsCardContent class="flex-fill text-truncate opacity-75">
          <slot name="text">{{ text }}</slot>
        </BsCardContent>
        <slot name="button" />
      </BsCardBody>
      <slot name="media" />
    </div>
    <BsCardBody v-else class="flex flex-col">
      <BsCardContent type="title">{{ title }}</BsCardContent>
      <BsCardContent class="flex-fill text-truncate opacity-75" type="text">
        <slot name="text">{{ text }}</slot>
      </BsCardContent>
      <slot name="button" />
    </BsCardBody>
  </BsCard>
</template>
