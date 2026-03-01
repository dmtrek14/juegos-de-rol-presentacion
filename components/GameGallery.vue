<template>
    <Transition name="view" mode="out-in">
        <!-- CATEGORIES -->
        <div
            v-if="view === 'categories'"
            key="categories"
            class="grid grid-cols-4 gap-4"
        >
            <button
                v-for="(cat, i) in categories"
                :key="cat.id"
                class="aspect-[5/7] rounded-xl flex items-center justify-center text-2xl font-bold transition-all duration-200 hover:brightness-125 hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:outline-none"
                :class="cat.color"
                @click="openCategory(i)"
            >
                {{ cat.label }}
            </button>
        </div>

        <!-- GALLERY -->
        <div v-else-if="view === 'gallery'" key="gallery">
            <div class="flex items-center gap-3 mb-3">
                <button
                    v-if="props.categoryIndex === undefined"
                    class="text-sm hover:opacity-100 focus-visible:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/50 rounded px-1"
                    @click="backToCategories"
                >
                    ← Back
                </button>
                <span
                    v-if="props.categoryIndex === undefined"
                    class="text-sm font-semibold"
                    >{{ currentCat.label }}</span
                >
            </div>
            <div class="grid grid-cols-5 gap-3">
                <button
                    v-for="(game, i) in pagedGames"
                    :key="game.id"
                    class="rounded-lg overflow-hidden transition-all duration-200 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:scale-[1.04]"
                    @click="openGame(page * PAGE_SIZE + i)"
                >
                    <img
                        :src="game.cover"
                        class="w-full object-cover block"
                        :style="{
                            height:
                                currentCat.games.length <= 5
                                    ? '260px'
                                    : '180px',
                        }"
                        :alt="game.title"
                    />
                </button>
            </div>
            <div
                v-if="totalPages > 1"
                class="flex items-center justify-center gap-4 mt-3"
            >
                <button
                    :disabled="page === 0"
                    class="text-sm px-2 py-0.5 rounded transition-opacity disabled:opacity-30 hover:opacity-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/50"
                    @click="page--"
                >
                    ← Prev
                </button>
                <span class="text-xs opacity-60">{{ page + 1 }} / {{ totalPages }}</span>
                <button
                    :disabled="page === totalPages - 1"
                    class="text-sm px-2 py-0.5 rounded transition-opacity disabled:opacity-30 hover:opacity-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/50"
                    @click="page++"
                >
                    Next →
                </button>
            </div>
        </div>

        <!-- DETAIL -->
        <div v-else-if="view === 'detail'" key="detail">
            <button
                class="mb-4 text-sm hover:opacity-100 focus-visible:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/50 rounded px-1"
                @click="backToGallery"
            >
                ← Back to {{ currentCat.label }}
            </button>
            <div class="flex gap-8">
                <img
                    :src="currentGame.cover"
                    class="rounded-xl object-cover flex-shrink-0"
                    style="height: 220px; width: 147px"
                    :alt="currentGame.title"
                />
                <div class="flex flex-col justify-center">
                    <h3 class="text-2xl font-bold mb-3">
                        {{ currentGame.title }}
                    </h3>
                    <p class="leading-relaxed text-sm">
                        {{ currentGame.desc }}
                    </p>
                    <a
                        v-if="currentGame.url"
                        :href="currentGame.url"
                        target="_blank"
                        class="mt-3 text-sm"
                        >{{ currentGame.url }}</a
                    >
                </div>
            </div>
        </div>
    </Transition>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import type { Category } from "../data/solo";

const props = defineProps<{ categories: Category[]; categoryIndex?: number }>();

const PAGE_SIZE = 10;

const view = ref(props.categoryIndex !== undefined ? "gallery" : "categories");
const activeCatIndex = ref(props.categoryIndex ?? 0);
const activeGameIndex = ref(0);
const page = ref(0);

const currentCat = computed(() => props.categories[activeCatIndex.value]);
const currentGame = computed(
    () => currentCat.value.games[activeGameIndex.value],
);
const totalPages = computed(() =>
    Math.ceil(currentCat.value.games.length / PAGE_SIZE),
);
const pagedGames = computed(() =>
    props.categoryIndex !== undefined
        ? currentCat.value.games.slice(page.value * PAGE_SIZE, (page.value + 1) * PAGE_SIZE)
        : currentCat.value.games,
);

function blur() {
    (document.activeElement as HTMLElement)?.blur();
}

function openCategory(i: number) {
    activeCatIndex.value = i;
    view.value = "gallery";
    blur();
}

function openGame(i: number) {
    activeGameIndex.value = i;
    view.value = "detail";
    blur();
}

function backToCategories() {
    view.value = "categories";
    blur();
}

function backToGallery() {
    view.value = "gallery";
    blur();
}
</script>

<!-- UnoCSS safelist: keep these classes so dynamic bg- values are generated -->
<!-- bg-stone-600 bg-zinc-700 bg-slate-800 bg-gray-800 bg-zinc-800 bg-neutral-800 bg-stone-800 bg-red-800 bg-orange-800 bg-amber-800 bg-yellow-800 bg-lime-800 bg-green-800 bg-emerald-800 bg-teal-800 bg-cyan-800 bg-sky-800 bg-blue-800 bg-indigo-800 bg-violet-800 bg-purple-800 bg-fuchsia-800 bg-pink-800 bg-rose-800 bg-slate-700 bg-gray-700 bg-zinc-700 bg-neutral-700 bg-stone-700 bg-red-700 bg-orange-700 bg-amber-700 bg-yellow-700 bg-lime-700 bg-green-700 bg-emerald-700 bg-teal-700 bg-cyan-700 bg-sky-700 bg-blue-700 bg-indigo-700 bg-violet-700 bg-purple-700 bg-fuchsia-700 bg-pink-700 bg-rose-700 bg-slate-900 bg-gray-900 bg-zinc-900 bg-neutral-900 bg-stone-900 bg-red-900 bg-orange-900 bg-amber-900 bg-yellow-900 bg-lime-900 bg-green-900 bg-emerald-900 bg-teal-900 bg-cyan-900 bg-sky-900 bg-blue-900 bg-indigo-900 bg-violet-900 bg-purple-900 bg-fuchsia-900 bg-pink-900 bg-rose-900 -->

<style scoped>
.view-enter-active,
.view-leave-active {
    transition:
        opacity 0.3s ease,
        transform 0.3s ease;
}
.view-enter-from,
.view-leave-to {
    opacity: 0;
    transform: translateY(6px);
}
</style>
