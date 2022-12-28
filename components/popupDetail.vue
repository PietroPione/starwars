<template>
  <div class="space-y-4">
    <div v-if="!result">
      <div v-for="(item, index) in item" :key="index">
        <span v-html="index"></span> : {{ item }}
      </div>
    </div>
    <div v-else>
     
    </div>
<div> 

</div>
    <button class="yellowbutton" @click="randomCharacter()">
      Random
    </button>
  </div>
</template>
<script>
import random from 'lodash/random'
export default {
  props: ['item'],
  data() {
    return {
      result: null,
    }
  },
  methods: {
    async randomCharacter() {
      await this.$axios
        .$get('https://swapi.dev/api/' + this.$store.state.popup.type + '/' + random(1, this.$store.state.counters[`${this.$store.state.popup.type}`]))
        .then(
          (e) => {
            this.result = e
          },
          (error) => {
            this.result = false
          }
        )
    },
  },
}
</script>
