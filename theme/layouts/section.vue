<script setup lang="ts">
defineProps({
    reversed: {
        type: Boolean,
        default: false,
    },
});
</script>

<template>
  <div class="slidev-layout section w-full h-full grid" :class="{ reversed }">
    <div class="my-auto text-center">
      <slot />
    </div>
  </div>
</template>
