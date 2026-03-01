<script setup lang="ts">
import { computed } from "vue";
import { handleBackground } from "../layoutHelper";

const props = defineProps({
    background: {
        type: String,
        default: undefined,
    },
    dim: {
        type: Boolean,
        default: false,
    },
});

const style = computed(() => handleBackground(props.background, props.dim));
</script>

<template>
    <div class="slidev-layout default w-full h-full" :style="style">
        <slot />
    </div>
</template>
