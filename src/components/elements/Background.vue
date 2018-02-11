<template>
	<div v-bind:style="backgroundStyle">
		<div v-bind:style="contentStyle" v-if="content == 'text'">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</div>
	</div>
</template>
<script>
  export default {
  	props:['content', 'background'],
    data(){
    	return {
    		backgroundStyle:{
    			background: this.background,
    			height: '300px'
    		},
    		contentStyle:{
    			padding: '25px',
    			textAlign: 'left',
    			height: '100%'
    		}
    	} 
    },
    
  }
</script>