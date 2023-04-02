<script setup>
definePageMeta({ middleware: 'auth' })
</script>

<template>
    <NuxtLayout>
        <NuxtLayout name="authenticated">
            employees
        </NuxtLayout>
  </NuxtLayout>
</template>
