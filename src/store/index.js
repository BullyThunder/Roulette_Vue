import { createStore } from 'vuex'

export default createStore({
  state: {
    array_roullete:[]
  },
  getters: {
    getItems (state){
      return state.array_roullete
    }
  },
  mutations: {
    add_to_Roullete (state,item){
      state.array_roullete.push(item)
    }
  },
  actions: {
  },
  modules: {
  }
})
