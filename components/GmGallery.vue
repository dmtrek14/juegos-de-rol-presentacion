<template>
    <GameGallery :categories="gmCategories" :category-index="categoryIndex" />
</template>

<script setup lang="ts">
import { gmCategories } from "../data/gm";

const props = defineProps<{ categoryIndex?: number }>();
</script>
