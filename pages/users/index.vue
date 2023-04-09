<script setup>
const { $generalStore } = useNuxtApp()

definePageMeta({ middleware: 'auth' })

$generalStore.hasSessionExpired();
</script>

<template>
    <NuxtLayout>
        <NuxtLayout name="authenticated">
            
            <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Icon
                            </th>
                            <th scope="col" class="px-6 py-3">
                                username
                            </th>
                            <th scope="col" class="px-6 py-3">
                               email
                            </th>
                            <th scope="col" class="px-6 py-3">
                                view
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <img src="https://picsum.photos/200" width="30" class="rounded-full" alt="">
                            </th>
                            <td class="px-6 py-4">
                                username
                            </td>
                            <td class="px-6 py-4">
                                email here
                            </td>
                            <td class="px-6 py-4">
                                <PrimaryButton @click="$generalStore.isShowUserProfileOpen = true" >Open</PrimaryButton>
                            </td>
                        </tr>
                
                    </tbody>
                </table>
                </div>

        </NuxtLayout>
  </NuxtLayout>
</template>