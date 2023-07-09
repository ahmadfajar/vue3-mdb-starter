<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  message: {
    type: String,
    required: true
  },
  quote: String,
  badgeColor: String
});

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
} else {
  props.message;
}
</script>

<template>
  <p>
    {{ msgStart || message }}
    <BsBadge v-if="badge" :color="badgeColor" type="label">{{ badge }}</BsBadge>
    {{ msgEnd }}
  </p>
  <blockquote v-if="quote" class="blockquote">{{ quote }}</blockquote>
</template>
