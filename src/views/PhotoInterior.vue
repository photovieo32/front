<template>
  <div>
    <CommonPhoto :category="category" />
  </div>
</template>

<script setup lang="ts">
import CommonPhoto from '@/components/common/CommonPhoto.vue'
import { onMounted, ref } from 'vue'
import { useStore } from '@/stores/store'
const store = useStore()
const category = ref('interiors')
const page = ref(1)
onMounted(async () => {
  await store.getPhotoPost(category.value, page.value)
})
</script>

<style scoped></style>
