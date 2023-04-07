<template>
  <NuxtPage/>
   <EditProfileOverlay v-if="$generalStore.isEditProfileOpen"/>

</template>
<script setup>
const { $generalStore, $userStore } = useNuxtApp()

onMounted( async() =>{
 isEditProfileOpen.value = false
     try {
        await $generalStore.hasSessionExpired()
        if ($userStore.id) {
            $userStore.getUser()
        }
    } catch (error) {
        console.log(error)
    }
})
</script>
