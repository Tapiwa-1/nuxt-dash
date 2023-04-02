<template>
    
<div class="w-full max-w-sm bg-transparent dark:bg-gray-800">
    <div class="flex justify-end px-4 pt-4">
        
    </div>
    <div class="flex flex-col items-center pb-10">
        <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://picsum.photos/200" alt="Bonnie image"/>
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{{ $userStore.name }}</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">User Role</span>
        <div class="flex mt-4 space-x-3 md:mt-6">
            <NuxtLink to="/profile" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit</NuxtLink>
            <DangerButton @click="logout()">
                logout
            </DangerButton>
        </div>
        
    </div>
</div>

</template>
<script setup>
const { $userStore, $generalStore } = useNuxtApp()
// const route = useRoute()
const router = useRouter()

const logout = () => {
    try {
        $userStore.logout()
        router.push('/login')
    } catch (error) {
        console.log(error)
    }
}
</script>
