<template>
   <div class="border-2 border-swyellow px-10 py-4 rounded-3xl flex items-center justify-between w-full">
       <div class="flex items-center space-x-10">
<figure class="flex-none w-12 h-24 rounded-full overflow-hidden">         
 <img :src="require('~/assets/img/' + itemImage +'.jpeg')" alt="item.name" class="object-cover object-center w-full h-full ">
    </figure>
    <div>
<p class="title text-swyellow"><span v-html="item.name"></span></p>
    <p class="basetxt">Classe: <span v-html="item.model"></span></p>
    </div>
       </div>
       
     <slot class="group group-hover:scale-150"></slot>
   </div>
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
