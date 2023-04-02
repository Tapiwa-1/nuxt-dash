<script setup>
definePageMeta({ middleware: 'auth' })
$generalStore.hasSessionExpired();
</script>

<template>
    <NuxtLayout>
        <NuxtLayout name="authenticated">
            employees
        </NuxtLayout>
  </NuxtLayout>
</template>
