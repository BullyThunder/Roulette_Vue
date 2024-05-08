<template>
  <div class="router">
    <router-link :to="{ name: 'Roulette' }">
      <div class="router__block">
        <span class="router__symbol">&#9851;</span>
        <span>Number of cases : {{ rouletteItems.length }}</span>
      </div>
    </router-link>
  </div>
  <div id="app" class="container">
    <div class="t-wrapper t-wrapper__padding">
      <div class="t-wrapper__block">
    <div>
      <div class="field is-grouped">
        <p class="control is-expanded">
          <input v-model="newItemContent" class="input" type="text" placeholder="">
        </p>
        <p class="control">
          <button @click="addToList(list)" class="button is-info">Add element to list</button>
        </p>
      </div>
      <div class="list" v-for="(item, index) in list" :key="item.id">
        <div class="list__content">
          <span>{{ item.content }}</span>
        </div>
        <div class="buttons">
          <button @click="addToRoullete(item)" class="button is-success is-light">Add to Roulette</button>
          <button @click="deleteFromWrap(list,index)" class="button is-danger">Delete</button>
        </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { defineComponent, ref, computed } from 'vue';

const store = useStore();
const newItemContent = ref('');
const list = ref([
]);

const addToList = (list) => {
  list.push({
    id: list.length + 1,
    content: newItemContent.value,
    active: false,
  });
  newItemContent.value = '';
}

const deleteFromWrap = (list,index) => {
  list.splice(index, 1);
}

const addToRoullete = (item) => {
  store.commit('add_to_Roullete', item);
}

const rouletteItems = computed(() => store.getters.getItems);
</script>

<style scoped lang="scss">
/* Стили */
</style>