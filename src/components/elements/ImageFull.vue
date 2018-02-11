<template>
	<div class="image-container" :style="{ backgroundImage: 'url(' + image + ')' }">
		<div :style="contentStyle">
			<h1 v-if="content == 'title'" style="font-size: 60px; color:#fff">TITLE</h1>
			<button v-if="content == 'button'" :style="buttonStyle">Find out more</button>
		</div>
	</div>
</template>
<script>

import randImage from '@/assets/images'

export default {
    computed: {
      image(){
      	return randImage()
      }
    },
    data(){
    	return{
    		contentStyle:{
    			display:'flex', 
    			justifyContent: this.justify, 
    			alignItems:this.align, 
    			height:'100%'
    		},
    		buttonStyle: {
			    background: '#BA1414',
			  	padding: '20px',
			  	fontSize: '1.5em',
			  	border: '0',
			  	cursor: 'pointer',
			  	margin: '10px 5px'
			}
    	}
    },
    props:['content', 'justify', 'align']
  }
</script>
<style>
	.image-container{
		content: '';
		height: 300px;
		width: 100%;
		margin: 0;
		padding: 0;
		border: 0;
		width: 100%;
		background-size: cover;
		background-position: center;
	}
</style>