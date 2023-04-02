<script setup>
definePageMeta({ middleware: 'auth' })
</script>

<template>
    <NuxtLayout>
        <NuxtLayout name="authenticated">
            users
        </NuxtLayout>
  </NuxtLayout>
</template>