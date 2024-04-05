<template>
  <div>
    <span>It`s roullete</span>
  </div>
  <div class="roulette">
    <div v-for="(items,index) in add_to_Roullete" :key="index" class="roulette__content">
    <span>
      content: {{ $store.state.array_roullete }}
    </span>
    </div>
  </div>
  <div>
    <router-link :to="{name: 'Wrapper'}">To Wrapper</router-link> 
  </div>
</template>

<script setup>
import { useStore,mapState } from 'vuex';
import { defineComponent, ref, onMounted } from 'vue';
defineComponent({

    name: 'tRoulette',
    props: {
      array_to_roulette :{
      type: Array,
      required: true
    },
    },
    setup () {
  const props = defineProps({
    array_to_roulette: Array
  });
}
})
  
</script>

<style>

</style>