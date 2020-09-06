<!--
Заголовок:
Spring Security REST API

v-router
vuex
unit tests
websockets
spring security
-->
<template>
	<v-app app>
		<v-app-bar app>
			<Bar v-bind:setQuery="setQuery"/>
		</v-app-bar>
		<v-main>
			<v-container app>
				<Main v-bind:query="query"/>
				{{ users }}
			</v-container>
		</v-main>
		<v-footer app>
		</v-footer>
	</v-app>
</template>

<script>
import Bar from './components/Bar'
import Main from './components/Main'
import Service from './service/service.js'

export default {
	name: 'App',
	components: { Bar, Main },
	data() {
		return {
			query: 'all-time',		//	перевести всё в store
			user: null,
			users: []
		}
	},
	methods: {
		setQuery(arg) {
			this.query = arg
		}
	},
	created () {
		this.$vuetify.theme.dark = true
		Service.getUsers()
			.then(response => {
				this.users = response.data
			})
	}
}
</script>

<style>
* {
	text-transform: none !important;
}
#app {
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
}
</style>

<!--

<v-icon large>fab fa-pagelines</v-icon>
<v-icon class="mdi-36px">mdi-leaf</v-icon>
eco

-->