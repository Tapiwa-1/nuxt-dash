<script setup>

definePageMeta({ middleware: 'auth' })

</script>

<template>
    <NuxtLayout>
        <NuxtLayout name="authenticated">
            Index
        </NuxtLayout>
  </NuxtLayout>
</template>