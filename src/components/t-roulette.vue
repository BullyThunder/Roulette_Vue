<template>
  <div class="roulette">
    <span>It's roulette</span>
    <span class="roulette__arrow">&#11015;</span>
    <div class="roulette__container" ref="rouletteContainer">
      <div v-for="item in rouletteItems" :key="item.id" :class="[item.class]" :style="{ transform: `rotate(${item.angle}deg)` }">{{ item.content }}</div>
    </div>
    <div class="popup">
      <span></span>
      <button class= "button is-link is-light close_popup__btn" @click="close_popup()">Close</button>
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
const close_popup = () => {
  const popup = document.querySelector('.popup');
  popup.style.display = 'none';
}
const spinRoulette = () => {
  const popup = document.querySelector('.popup');
  const num = Math.random() * 10 + 1; // Генерируем случайное число от 1 до 3 для угла
  const rpm = Math.random() * 360 + 5 * 360;
  rouletteContainer.value.style.transition = 'transform 5s ease-in-out';
  rouletteContainer.value.style.transform = `rotate(${rpm + num}deg)`; // Добавляем случайное число к углу вращения
  setTimeout(() => {
    const rotation_angle = (rpm + num) % 360; // Вычисляем угол поворота, учитывая случайное число
    let normalized_angle = (360 - rotation_angle) % 360; // Нормализуем угол, чтобы он был от 0 до 360
    if (normalized_angle < 0) normalized_angle += 360; // Обрабатываем отрицательные углы
    const index_Of_element = Math.ceil(Math.ceil(normalized_angle / (360 / rouletteItems.length)));
    const Selected_element = rouletteItems[index_Of_element].content;
    popup.querySelector('span').textContent = `Your task is ${Selected_element}`;
    popup.style.display = 'flex'; // Показать модальное окно
  popup.style.fontSize = '30px';
  }, 5000); // Время анимации
  const close_popup = () => {
    popup.style.display = 'none';
   }
}
</script>

<style>
.popup{
  display: none;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5); /* Полупрозрачный черный цвет */
  top: 0;
  left: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 10px;
  z-index: 9999; /* Положение поверх остального контента */
  color: white; /* Цвет текста внутри модального окна */
    }
    .close_popup__btn{
      max-width: 200px;
    }
</style>