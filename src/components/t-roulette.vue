<template>
  <div class="roulette">
    <span>It`s roullete</span>
    <div v-for="item in rouletteItems" :key="item.id" class="roulette__content">
    <span >{{ item.content }}</span>
  </div>
  </div>
  <div>
    <router-link :to="{ name: 'Wrapper' }">To Wrapper</router-link> 
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { defineComponent, computed } from 'vue';

const store = useStore();

const rouletteItems = computed(() => store.getters.getItems);

const addToRoullete = (item) => {
  store.commit('add_to_Roullete', item);
};
</script>

<style>
/* Стили */
</style>