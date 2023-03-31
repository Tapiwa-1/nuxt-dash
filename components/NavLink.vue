<template>

        <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <Icon :name="icon" :color="colorString" :size="sizeString" />
            <span
             :class="`text-[${colorString}]`" 
             class="ml-3">
                 {{ iconString }}
            </span>
        </a>
   
</template>

<script setup>

const props = defineProps(['iconString', 'colorString', 'sizeString'])
const { iconString, colorString, sizeString } = toRefs(props)

let icon = ref('')

if (iconString.value === 'Dashboard') icon.value = 'ci:group'
if (iconString.value === 'Following') icon.value = 'ci:group'
if (iconString.value === 'LIVE') icon.value = 'ri:live-line'
</script>