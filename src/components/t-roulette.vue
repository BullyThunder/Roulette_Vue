<template>
  <div class="roulette">
    <span>It's roulette</span>
    <span class="roulette__arrow">&#11015;</span>
    <div class="roulette__container" ref="rouletteContainer">
      <div v-for="item in rouletteItems" :key="item.id" :class="[item.class]">{{ item.content }}</div>
    </div>
    <div class="roulette__spin">
      <button @click="spinRoulette">Spin</button>
    </div>
  </div>
  <div>
    <router-link :to="{ name: 'Wrapper' }">To Wrapper</router-link> 
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { ref } from 'vue';

const store = useStore();

const rouletteItems = store.getters.getItems;
let number_item = rouletteItems.length;
const rouletteContainer = ref(null);

const spinRoulette = () => {
  const num = Math.ceil(Math.random() * 1000) + 360 * 5; // Добавляем дополнительные обороты
  rouletteContainer.value.style.transition = 'transform 5s ease-in-out';
  rouletteContainer.value.style.transform = `rotate(${num}deg)`;
  
  setTimeout(() => {
    const rotation_angle = num % 360;
    const index_Of_element = Math.ceil(rotation_angle / (360 / number_item)) % number_item;
    alert(index_Of_element);
  }, 5000); // Время анимации
}
</script>

<style>
/* Стили */
</style>