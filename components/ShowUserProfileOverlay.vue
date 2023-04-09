<template>
    <div 
        id="EditProfileOverlay" 
        class="fixed flex justify-center pt-14 md:pt-[105px] z-50 top-0 left-0 w-full h-full bg-black bg-opacity-50 overflow-auto"
    >
        <div 
            class="relative bg-white w-full max-w-[700px] sm:h-[580px] h-[655px] mx-3 p-4 rounded-lg mb-10"
            :class="!uploadedImage ? 'h-[655px]' : 'h-[580px]'"
        >

            <div class="absolute flex items-center justify-between w-full p-5 left-0 top-0 border-b border-b-gray-300">
                <div class="text-[22px] font-medium">
                    Edit profile
                </div>
                <button @click="$generalStore.isShowUserProfileOpen = false">
                    <Icon name="mdi:close" size="25"/>
                </button>
            </div>

            <div class="h-[calc(500px-200px)]" :class="!uploadedImage ? 'mt-16' : 'mt-[58px]'">
                <div v-if="!uploadedImage">
                    <div 
                        id="ProfilePhotoSection" 
                        class="flex flex-col border-b sm:h-[118px] h-[145px] px-1.5 py-2 w-full"
                    >
                        <div class="font-semibold text-[15px] sm:mb-0 mb-1 text-gray-700 sm:w-[160px] sm:text-left text-center">
                            Profile photo
                        </div>

                        <div class="flex items-center justify-center sm:-mt-6">
                            <div class="relative cursor-pointer">
                                <img 
                                    class="rounded-full" 
                                    width="95" 
                                    :src="$userStore.image"
                                >
                                
                            </div>

                        </div>
                    </div>

                    <div 
                        id="UsernameSectionSection" 
                        class="flex flex-col border-b sm:h-[118px]  px-1.5 py-2 mt-1.5  w-full"
                    >
                        <div class="font-semibold text-[15px] sm:mb-0 mb-1 text-gray-700 sm:w-[160px] sm:text-left text-center">
                            Username
                        </div>

                        <div class="flex items-center justify-center sm:-mt-6">
                            <div class="sm:w-[60%] w-full max-w-md">
                                Username here
                            </div>
                        </div>
                    </div>
                     <div 
                        id="EmailSectionSection" 
                        class="flex flex-col border-b sm:h-[118px]  px-1.5 py-2 mt-1.5  w-full"
                    >
                        <div class="font-semibold text-[15px] sm:mb-0 mb-1 text-gray-700 sm:w-[160px] sm:text-left text-center">
                            Email
                        </div>
                        <div class="flex items-center justify-center sm:-mt-6">
                            <div class="sm:w-[60%] w-full max-w-md">
                                email here
                            </div>
                        </div>
                    </div>

                </div>

            </div>
           
        </div>
    </div>
</template>

<script setup>
import { Cropper, CircleStencil } from 'vue-advanced-cropper'
import 'vue-advanced-cropper/dist/style.css';

import { storeToRefs } from 'pinia';
const { $userStore, $generalStore, $profileStore } = useNuxtApp()
const { id ,name, email, image } = storeToRefs($userStore)

const route = useRoute()

onMounted(() => {
    userName.value = name.value
    userEmail.value = email.value
    userImage.value = image.value
})

let file = ref(null)
let cropper = ref(null)
let uploadedImage = ref(null)
let userImage = ref(null)
let userName = ref(null)
let userEmail = ref(null)
let isUpdated = ref(false)

const getUploadedImage = (e) => {
    file.value = e.target.files[0]
    uploadedImage.value = URL.createObjectURL(file.value)
}
const cropAndUpdateImage = async () => {
    const { coordinates } = cropper.value.getResult()
    let data = new FormData();

    data.append('image', file.value || '')
    data.append('height', coordinates.height || '')
    data.append('width', coordinates.width || '')
    data.append('left', coordinates.left || '')
    data.append('top', coordinates.top || '')   

    try {
        await $userStore.updateUserImage(data)
        await $userStore.getUser()
    
        userImage.value = image.value
        uploadedImage.value = null
    } catch (error) {
        console.log(error)
    }
}

const updateUserInfo = async () => {
    try {
        await $userStore.updateUser(userName.value, userEmail.value)
        await $userStore.getUser()
        // await $profileStore.getProfile(route.params.id)

        userName.value = name.value
        userEmail.value = email.value

        setTimeout(() => {
            $generalStore.isEditProfileOpen = false
        }, 100)
    } catch (error) {
        console.log(error)
    }
}

watch(() => userName.value, () => {
    if (!userName.value || userName.value === name.value) {
        isUpdated.value = false
    } else {
        isUpdated.value = true
    }
})

watch(() => userEmail.value, () => {
    if (!userName.value || userEmail.value.length < 1) {
        isUpdated.value = false
    } else {
        isUpdated.value = true
    }
})
</script>