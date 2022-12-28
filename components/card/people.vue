<template>
  <article class="group w-full">
    <div class="border-2 bg-black bg-opacity-50 border-swyellow p-6 rounded-3xl space-y-10  transition-all transition-500 group group-hover:scale-110">
    <div class="flex justify-between">
      <div>
<p class="title text-swyellow"><span v-html="item.name"></span></p>
    <p class="basetxt">Occhi: <span v-html="item.eye_color"></span></p>
    </div>
     <figure class="flex-none w-20 h-40 rounded-full overflow-hidden">
 <img :src="require('~/assets/img/' + itemImage+'.jpeg')" alt="item.name" class="object-cover object-center w-full h-full ">
    </figure>
      </div>
    <slot class="group group-hover:scale-150"></slot>
    </div>
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
