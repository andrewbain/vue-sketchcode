<template>
    <div v-bind:style="pageStyle">
    	
    	<el-row>
    		<el-col :span=12>
        	<canvas style="border: 1px solid black;" id="draw" width="600" height="600" @mousedown="down" @mouseout="isDrawing=false" @mouseup="isDrawing=false" @mousemove="draw" ></canvas>
        	<div v-bind:style="buttonsStyle">
	            <button v-bind:style="buttonStyle" @click="clearCanvas">Clear Canvas</button>
	            <button v-bind:style="buttonStyle" @click="addComponent">Add component</button>
	            <button v-bind:style="buttonStyle" @click="viewHtml">Full page</button>
        	</div>
        	</el-col>
        	<el-col :span=12>
        	<div class="html-container">
				<code-block :markup="markup"></code-block>
        	</div>
        	</el-col>
        </el-row>
        
    </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
import VueFrame from 'vue-frame'

export default {
    mounted() {
		this.canvas = document.getElementById('draw');
	    this.ctx = this.canvas.getContext('2d');
	    this.canvas.width = 600;
		this.canvas.height = 600;
		this.ctx.fillStyle = "#ffffff";
		this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
		this.ctx.strokeStyle = '#000000';
		this.ctx.lineJoin = 'round';
		this.ctx.lineCap = 'round';
		this.ctx.lineWidth = 10;
    },
    components: { VueFrame },
    data: function(){
   		return{
   			lastX: 0,
   			lastY: 0,
   			isDrawing: false,
   			canvas: '',
   			ctx: '',
   			buttonsStyle:{
   				marginTop: '50px',
   				display: 'flex',
   				justifyContent: 'center'
   			},
			buttonStyle: {
			    background: '#BA1414',
			  	padding: '20px',
			  	fontSize: '1.5em',
			  	border: '0',
			  	cursor: 'pointer',
			  	margin: '10px 5px'
			},
			pageStyle:{
    			margin:0,
    			border:0,
    			maxHeight: '100%'
			},
			markup:[],
			iframeSrc: ''
   		}
    },
   	methods: {
	    draw: function (e){
	    	if (!this.isDrawing) return; // stop the fn from running when they are not moused down
			  this.ctx.beginPath();
			  // start from
			  this.ctx.moveTo(this.lastX, this.lastY);
			  // go to
			  this.ctx.lineTo(e.offsetX, e.offsetY);
			  this.ctx.stroke();
			  [this.lastX, this.lastY] = [e.offsetX, e.offsetY];
	    },
	    down: function(e){
				this.isDrawing = true;
				[this.lastX, this.lastY] = [e.offsetX, e.offsetY];
		},
		clearCanvas(){
			this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
			this.ctx.fillStyle = "#ffffff";
			this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
		},
		addComponent: function(){
			 const config = {
	            headers: {
			      'Access-Control-Allow-Origin': '*',
			      'Content-Type': 'application/json',
			    }
	        }
			let image = this.canvas.toDataURL("image/jpeg");
			axios.post(`http://0.0.0.0:5000/api`, {image:image}, config)
				  		.then((response) => {
				  			this.markup.push(response.data)
				  			this.clearCanvas()
				  		})
				  		.catch(error => console.log(error))

		},
		viewHtml: function(){
			let data = JSON.stringify(this.markup)
			let routeData = this.$router.resolve({name: 'Code', query: {data: data}});
			htmlWindow = window.open(routeData.href, 'code');
			htmlWindow.location.href = routeData.href	
		}

  	}
}
</script>
<style scoped>
	.canvasStyle{
		display: flex;
		flex-direction: row;
		overflow: scroll;

	}
	.html-container{
		width: 100%;
		text-align: center;
		height: 100%;
		overflow: scroll;
	}
	canvas{

	}
</style>
