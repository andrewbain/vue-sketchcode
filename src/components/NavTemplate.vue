
<template>
	<div class="navbar">
		<ul>
			<nav-logo></nav-logo>
			<li class="active">Home</li>
			<li>About</li>
			<li>Contact</li>

		</ul>
	</div>
</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '1',
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style scoped>
	.navbar{
		display: flex;
		color: #ffffff;
		background: #333333;
		height: 80px;
		justify-content: flex-start;

	}
	ul{
		
	}
	li{
		display: inline-block;
		list-style: none;
		cursor: pointer;
		padding: 10px;
	}
	li:hover, .active{
		color: #ed5f59
	}

</style>