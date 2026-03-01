<template>
    <GameGallery :categories="coopCategories" :category-index="categoryIndex" />
</template>

<script setup lang="ts">
import { coopCategories } from "../data/coop";

const props = defineProps<{ categoryIndex?: number }>();
</script>
