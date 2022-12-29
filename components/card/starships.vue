<template>
  <article class="border-2 bg-black bg-opacity-50 border-swyellow p-6 rounded-3xl space-y-4  transition-all transition-500 group group-hover:scale-110 w-full">
    <div class="flex justify-between">
       <div class="pt-8 md:pt-0">
<p class="title text-swyellow"><span v-html="item.name"></span></p>
    <p class="basetxt">Classe: <span v-html="item.model"></span></p>
    </div>
     <figure class="flex-none w-40 h-40 rounded-full overflow-hidden">
 <img :src="require('~/assets/img/' + itemImage+'.jpeg')" alt="item.name" class="object-contain object-center w-full h-full ">
    </figure>
      </div>

   
   
    <slot></slot>
  </article>
</template>
<script>
import kebabCase from 'lodash/kebabCase'
export default {
  props: ['item'],
  computed: {
    itemImage () {
      return kebabCase(this.item.name)
    }
  }
}
</script>
