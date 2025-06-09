<template>
  <div>
    <div class="photo__wrapper">
      <img
        class="photo__img"
        :src="photoCatalog.attributes?.img.data[0]?.attributes.formats.medium.url"        
        alt="image"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { DataItem } from '@/types/photoType'

defineProps({
  photoCatalog: {
    type: Object as PropType<DataItem>,
    required: true
  }
})
</script>

<style scoped lang="scss">
.product__title {
  margin: 0;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 80px;
  font-style: normal;
  font-weight: 400;
  line-height: 124px; /* 155% */
  text-transform: uppercase;
}

.photo__img {
  width: 100%; /* Заполняет ширину родительского элемента */
    height: auto; /* Сохраняет пропорции изображения */
    object-fit: cover; /* Заполняет элемент, сохраняя пропорции */
}
.photo__wrapper {
    text-align: center; /* Центрируем содержимое по горизонтали */
    margin-bottom: 15px;
}
</style>
