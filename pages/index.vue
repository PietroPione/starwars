<template>
  <div class="min-h-screen px-20">
    <transition name="popup" :duration="1000">
      <info-popup v-if="$store.state.popup.url"></info-popup>
    </transition>
    <div>
      <div class="border-2 border-swyellow px-10 py-4 rounded-3xl">
        <div class="flex justify-between items-center">
          <ul class="flex gap-x-2 items-center">
            <li class="text-white pr-2">Filtra per</li>
            <li
              v-for="item in [
                { name: 'Personaggi', type: 'people' },
                { name: 'Pianeti', type: 'planets' },
                { name: 'Astronavi', type: 'starships' },
              ]"
              :key="item.type"
            >
              <button class="yellowbutton" @click="startQuery(item.type)">
                {{ item.name }}
              </button>
            </li>
          </ul>
          <ul>
            <button class="yellowbutton" @click="getGrid()">Griglia</button>
            <button class="yellowbutton" @click="getList()">Lista</button>
          </ul>
        </div>
      </div>
      <div class="basetxt mt-6">
        <div v-if="this.navstyle == 'grid' || this.navstyle == null">
          <div class="grid grid-cols-3 gap-10" v-if="result">
            <div
              class="flex"
              v-for="(item, index) in result.results.slice(0, 6)"
              :key="'item-' + index"
            >
              <component :is="'card-' + picked" :item="item">
                <button
                  @click="togglePopup(item.url, picked)"
                  class="yellowbutton"
                >
                  Scopri <span v-html="item.name"></span></button
              ></component>
            </div>
          </div>
        </div>
        <div v-if="this.navstyle == 'list'">
          <div class="space-y-4 " v-if="result">
            <div
              class="flex"
              v-for="(item, index) in result.results.slice(0, 6)"
              :key="'item-' + index"
            >
              <component :is="'card-' + picked + '-list'" :item="item">
                <button
                  @click="togglePopup(item.url, picked)"
                  class="yellowbutton"
                >
                  Scopri <span v-html="item.name"></span></button
              ></component>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      result: null,
      picked: null,
      navstyle: null,
    }
  },
  methods: {
    async startQuery(item) {
      this.picked = item
      await this.$axios.$get('https://swapi.dev/api/' + item).then(
        (e) => {
          this.result = e
        },
        (error) => {
          this.result = false
        }
      )
    },
    async getGrid() {
      this.navstyle = 'grid'
    },
    async getList() {
      this.navstyle = 'list'
    },
    async fullInfo() {
      await this.$axios
        .$get('https://swapi.dev/api/' + this.picked + '/' + this.index)
        .then(
          (e) => {
            this.result = e
          },
          (error) => {
            this.result = 'Dioffa se sei scarso'
          }
        )
    },
    togglePopup(url, picked) {
      this.$store.commit('setPopupUrl', url)
      this.$store.commit('setPopupType', picked)
    },
  },
}
</script>
