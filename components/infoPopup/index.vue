<template>
  <section
    class="fixed w-full h-screen z-40 left-0 inset-y-0 bg-opacity-25  flex items-center justify-center"
    @click.self="closePopup()"
  >
    <div class="absolute z-50 right-10 top-10 pointer-events-none flex flex-col">
      <img src="~/assets/img/close.png" alt="close button" class="h-20 bg-black rounded-full">
    </div>
    <!-- Perchè se al padre metto il click ma al figlio pointer event none non funziona? -->
    <transition name="popupinner">
    <div
    v-if="!$fetchState.pending"
      class="bg-black basetxt border-swyellow border-2 py-8 w-10/12 h-10/12 md:w-1/2 px-8 flex justify-center items-center rounded-3xl space-y-6 "
    >
      <component :is="'popup-detail'" :item="item"> </component>
    </div>
    </transition>
  </section>
</template>
<script>
export default {
  data() {
    return {
      item: {},
      planet: null,
      otherPeople: [],
    }
  },
  async fetch() {
    this.item = await this.$axios.$get(this.$store.state.popup.url)
    this.planet = await this.$axios.$get(this.item.homeworld)
  },
  created() {
    this.$store.dispatch('showHideScroll', true)
  },
  beforeDestroy() {
    this.$store.dispatch('showHideScroll', false)
  },
  methods: {
    closePopup() {
      this.$store.commit('setPopupUrl', null)
    },
  },
}
</script>
