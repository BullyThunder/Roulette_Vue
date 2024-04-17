<template>
  <div class="roulette">
    <span>It`s roullete</span>
    <span class="roulette__arrow">&#11015;</span>
    <div  class="roulette__container" ref="rouletteContainer">
    <div v-for="item in rouletteItems" :key="item.id" :class="[item.class]">{{ item.content }}</div>
  </div>
  <div class="roulette__spin">
  <button @click="roulette__spin(roulette__container)">spin</button>
</div>
</div>
  <div>
    <router-link :to="{ name: 'Wrapper' }">To Wrapper</router-link> 
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { defineComponent, computed,ref } from 'vue';

const store = useStore();

const rouletteItems = computed(() => store.getters.getItems);

const addToRoullete = (item) => {
  store.commit('add_to_Roullete', item);
};
const rouletteContainer = ref(null);
const roulette__spin = (rouletteItems) => {
  const num = Math.ceil(Math.random(rouletteItems) * 1000);
  rouletteContainer.value.style.transform = `rotate(${num}deg)`;
}

</script>

<style>
/* Стили */
</style>