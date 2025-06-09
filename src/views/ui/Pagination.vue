<template>
    <div class="pagination">
<button class="pagination__button" @click="prev" :disabled="currentPage === 1">Назад</button>
<button class="pagination__button" v-for="page in totalPages" :key="page" @click="toPage(page)" :class="{ active: page === currentPage }">{{ page }}</button>
<button class="pagination__button" @click="next" :disabled="currentPage === totalPages">Вперед</button>
    </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps<{
    currentPage: number
    totalPages: number
}>()

const emit = defineEmits(['page-change'])

const prev = () => {
    if(props.currentPage > 1) {
        emit('page-change', props.currentPage - 1)
    }
}
const next = () => {
    if( props.currentPage < props.totalPages) {
        emit('page-change', props.currentPage + 1)
    }
}
const toPage = (page: number) => {
    emit('page-change', page)
}
</script>

<style scoped lang="scss">
.pagination {
    padding: 20px 0;
    display: flex;
    justify-content: center;
    border-radius: 8px;
}

.pagination__button {
    padding: 10px 15px;
    margin: 0 5px;
    border: none;
    border-radius: 5px;
    background-color: #333; // Темный фон кнопок
    color: #fff; // Белый текст
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;

    &:hover {
        background-color: #444; // Цвет кнопки при наведении
        transform: scale(1.05); // Эффект увеличения
    }

    &:disabled {
        background-color: #555; // Цвет для отключенных кнопок
        cursor: not-allowed;
    }

    &.active {
        background-color: #70767c; // Цвет активной страницы
        color: #fff; // Белый текст для активной страницы
    }
}
</style>