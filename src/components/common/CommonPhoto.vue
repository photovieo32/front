<template>
  <section class="photo">
    <div class="containerView">
      <div class="photo__wrapper">
        <div class="photo__menu">
          <div class="photo__contentLogo">
            <logoMenu style="width: 100%; height: 100%" />
          </div>
          <itemMenu />
        </div>
      
 
  <MasonryGrid class="photo__content" >
    <MasonryGridItem 
      v-for="photoCatalog in filteredList"
      :key="photoCatalog.id"
        class="photo__contentItem"
    >
      <page-product :photoCatalog="photoCatalog" />
    </MasonryGridItem>
  </MasonryGrid>
</div>
<Pagination 
   :current-page="currentPage"
   :total-pages="totalPage"
   @page-change="(newPage) => store.getPhotoPost(category, newPage)"
   />
      </div>
  </section>
</template>

<script setup lang="ts">
import itemMenu from '@/views/ui/ItemPhoto.vue'
import logoMenu from '@/views/ui/logoMenu.vue'
import { onMounted, computed } from 'vue'
import { useStore } from '@/stores/store'
import PageProduct from '@/views/ui/PageProduct.vue'
import Pagination from '@/views/ui/Pagination.vue'
import { MasonryGrid, MasonryGridItem } from 'vue3-masonry-css';
const store = useStore()

defineProps<{ category: string }>() // Получение категории из props

const currentPage = computed(() => {
  return store.currentPage
})
const totalPage = computed(() => {
  return store.totalPage 
})
const filteredList = computed(() => {
  return store.listPosts
})


onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<style scoped lang="scss">
.photo {
  background-color: black;
  min-height: 100vh;
  &__wrapper {
    padding: 100px 0;
    display: grid;
    grid-template-columns: 10% 87%;
    gap: 3%;
  }

  &__contentLogo {
    margin-bottom: 70px;
    display: flex;
    justify-content: center;
  }
  &__content {
  display: grid;
  gap: 16px; /* Отступы между элементами */
}

  &__contentItem {
    display: grid;
    gap: 15px;
    align-items: center;
  }
}
</style>
