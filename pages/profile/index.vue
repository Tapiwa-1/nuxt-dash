<script setup>
const { $generalStore } = useNuxtApp()
definePageMeta({ middleware: 'auth' })

</script>

<template>
    <NuxtLayout>
        <NuxtLayout name="authenticated">
            profile section
        </NuxtLayout>
  </NuxtLayout>
</template>
