<script setup>
const { $generalStore, $userStore } = useNuxtApp()
defineProps({
    type: {
        type: String,
        default: 'submit',
    },
});
</script>

<template>
    <button
        :disabled="$generalStore.isProcessing"
        :type="type"
        :class="!$generalStore.isProcessing ? 'bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300  dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 ' : 'bg-blue-400 dark:bg-blue-500 cursor-not-allowed'"
        class="w-full text-center text-white  inline-flex items-center font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
        <Spinner v-if="$generalStore.isProcessing"/>
            <slot v-if="!$generalStore.isProcessing"/>
        
    </button>
</template>
