<script setup lang="ts">
import { ref } from 'vue';
import type { TContextColor } from 'vue-mdbootstrap';

const props = defineProps<{ message: string; quote?: string; badgeColor?: TContextColor }>();

const msgStart = ref<string>();
const msgEnd = ref<string>();
const badge = ref<string>();
const badgePos = props.message.indexOf('<badge>');

if (badgePos > -1) {
  msgStart.value = props.message.substring(0, badgePos);
  const substr = props.message.substring(badgePos + 7);
  const posEnd = substr.indexOf('</badge>');
  badge.value = substr.substring(0, posEnd);
  msgEnd.value = substr.substring(posEnd + 8);
}
</script>

<template>
  <p class="mb-0">
    {{ msgStart || message }}
    <BsBadge v-if="badge" :color="badgeColor" type="pill">{{ badge }}</BsBadge>
    {{ msgEnd }}
  </p>
  <blockquote v-if="quote" class="blockquote">{{ quote }}</blockquote>
</template>
