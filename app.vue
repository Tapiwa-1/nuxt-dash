<template>
  <NuxtPage/>
   <EditProfileOverlay v-if="$generalStore.isEditProfileOpen"/>

</template>
<script setup>
const { $generalStore } = useNuxtApp()

$generalStore.hasSessionExpired();
</script>
