<template>
  <div class="router">
   <router-link :to="{name: 'Roulette',}">
      <div class="router__block">
      <span class="router__symbol">&#9851;</span>
      <span>Number of cases : {{ array_roullete.length }}</span>
    </div>
    </router-link>
  </div>
  <div id="app" class="container">
  <div class="t-wrapper t-wrapper__padding">
    <div class="field is-grouped">
      <p class="control is-expanded">
        <input v-model="newItemContent" class="input" type="text" placeholder="">
      </p>
      <p class="control">
        <button @click="add_to_list(list,index)" class="button is-info">
          Add element to list
        </button>
      </p>
    </div>
    <div class="list" v-for="(item,index) in list" :key=item.id>
      <div class="list__content">
        <span>{{ item.content }}</span>
      </div>
      <div class="buttons">
        <button  @click="add_to_Roullete(array_roullete,list,index)" class="button is-success is-light">Add to Roulette</button>
        <button @click="delete_from_wrap(list,index)" class="button is-danger">Delete</button>
        </div>
  </div>
    </div>
</div>
</template>

<script setup>
import { useStore } from 'vuex';
import tRoulette from './t-roulette.vue';
import { defineComponent, ref, onMounted } from 'vue';
 defineComponent({
  name: 'tWrapper', 
  components: {
    tRoulette
  },
})
let number = 1;
const add_to_list = (list) => {
   list.push({
    id: `${number++}`,
    content: newItemContent.value,
    active: false,
   });
   newItemContent.value = ''
}
const newItemContent = ref([]);
const list = ref([{
  id: `${number++}`,
  content: `off tv`,
  active: false,
}
]);
const delete_from_wrap = (list,index) =>{
  list.splice(index,1)
}
const store = useStore ();
const array_roullete = ref([]);
const add_to_Roullete = (list) => {
 list.forEach(item => {
    store.commit('add_to_Roullete', item.content)
  });
};

</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>