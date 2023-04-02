<script setup>
definePageMeta({ middleware: 'auth' })
</script>

<template>
    <NuxtLayout>
        <NuxtLayout name="authenticated">
            profile section
        </NuxtLayout>
  </NuxtLayout>
</template>
