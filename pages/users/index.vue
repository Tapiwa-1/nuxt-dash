<script setup>
const { $generalStore } = useNuxtApp()

definePageMeta({ middleware: 'auth' })

$generalStore.hasSessionExpired();
</script>

<template>
    <NuxtLayout>
        <NuxtLayout name="authenticated">
            users
        </NuxtLayout>
  </NuxtLayout>
</template>