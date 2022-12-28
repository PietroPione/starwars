
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