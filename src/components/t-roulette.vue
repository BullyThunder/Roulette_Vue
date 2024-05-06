<template>
  <div class="roulette">
    <span>It's roulette</span>
    <span class="roulette__arrow">&#11015;</span>
    <div class="roulette__container" ref="rouletteContainer">
      <div v-for="item in rouletteItems" :key="item.id" :class="[item.class]" :style="{ transform: `rotate(${item.angle}deg)` }">{{ item.content }}</div>
    </div>
    <div class="roulette__spin">
      <button class="button is-success is-dark" @click="spinRoulette">Spin</button>
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

const rouletteItems = store.getters.getItems.map((item,index) => ({ 
  ...item,
  angle: index * (360/store.getters.getItems.length),
}))
let rouletteContainer = ref(null);

const spinRoulette = () => {
  const num = Math.random() * 2 + 1; // Генерируем случайное число от 1 до 3 для угла
  const rpm = Math.random() * 360 + 5 * 360;
  rouletteContainer.value.style.transition = 'transform 5s ease-in-out';
  rouletteContainer.value.style.transform = `rotate(${rpm + num}deg)`; // Добавляем случайное число к углу вращения
  setTimeout(() => {
    const rotation_angle = (rpm + num) % 360; // Вычисляем угол поворота, учитывая случайное число
    let normalized_angle = (360 - rotation_angle) % 360; // Нормализуем угол, чтобы он был от 0 до 360
    if (normalized_angle < 0) normalized_angle += 360; // Обрабатываем отрицательные углы
    const index_Of_element = Math.ceil((normalized_angle / (360 / rouletteItems.length)));
    const Selected_element = rouletteItems[index_Of_element].content;
    alert(Selected_element.content);
  }, 5000); // Время анимации
}
</script>

<style>
/* Стили */
</style>