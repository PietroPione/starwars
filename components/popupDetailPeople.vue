<template>
    <div>
        <div v-for="item,index in item" :key="item">
<span v-html="index"></span> : {{item}}
        </div>
       
        <button class="bg-black text-white" @click="getRandomInt()">
        <span v-html="item.type">

        </span>
         Random
    </button>
    </div>
    
</template>
<script>
export default {
    props: ['item'],
    randomInt: null,
    methods: {
async getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min).then(
        (e) => {
          this.randoInt = e
        },
        (error) => {
          this.randomInt = false
        }
      )
},
async randomCharacter() {
      await this.$axios.$get('https://swapi.dev/api/people/' + getRandomInt()).then(
        (e) => {
          this.result = e
        },
        (error) => {
          this.result = false
        }
      )
    },
}
}



</script>
