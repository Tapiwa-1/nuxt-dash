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
        class="w-full text-center text-white bg-primary-600 inline-flex items-center hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
        <Spinner v-if="$generalStore.isProcessing"/>
            <slot v-if="!$generalStore.isProcessing"/>
        
    </button>
</template>
