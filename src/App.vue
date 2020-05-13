<template>
	<div id="app">
		<transition name="fade" mode="out-in">
			<router-view/>
		</transition>
	</div>
</template>

<script>
export default {
	name: 'App',
	created() {
		this.$store.dispatch('loadUsers')
	}
}
</script>

<style>
* {
	box-sizing: border-box;
}

body {
	margin: 0;
	padding: 0;
}

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	width: 600px;
	margin: 0 auto;
	max-width: 100%;
}
.fade-enter-active, .fade-leave-active {
	transition: opacity 0.2s
}
.fade-enter, .fade-leave-to {
		opacity: 0
}
</style>
