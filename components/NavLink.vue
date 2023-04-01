<template>
    <li>
        <NuxtLink :to="link" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <Icon :name="icon" />
            <span class="ml-3">{{ linkName }}</span>
        </NuxtLink>
    </li>
</template>

<script setup>

const props = defineProps(['icon', 'linkName','link'])
const { icon, linkName, link } = toRefs(props)

// let icon = ref('')

// if (iconString.value === 'Dashboard') icon.value = 'mdi:view-dashboard'
// if (iconString.value === 'Following') icon.value = 'ci:group'
// if (iconString.value === 'LIVE') icon.value = 'ri:live-line'
</script>