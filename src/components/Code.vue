<template>
    <div class="template-container">
  	    <div v-for="item in markupItems">
  	    	<nav-template v-if="item.type == 'nav_h'" :markup="item.markup"></nav-template>
  	    	<row-template v-if="item.type == 'row'" :markup="item.markup"></row-template>
  	    </div>
    </div>
</template>

<script>
/* eslint-disable */
import NavTemplate from '@/components/NavTemplate'
export default {
  name: 'Code',
  mounted () {
  	if(this.$route.query){
  		this.markupItems = JSON.parse(this.$route.query.data)
  	}
  },
  props:['markup'],
  data () {
    return {
      markupItems: []
    }
  },
  methods:{
  
  },
  watch:{
  	markup: function (newMarkup, oldMarkup) {
      this.markupItems = newMarkup
    },
    '$route.query.data'() {
                this.markupItems = JSON.parse(this.$route.query.data)
    }
  }

}
</script>
<style>
	html, body, #app{
		margin: 0;
		padding: 0;
		border: 0;
	}
</style>
