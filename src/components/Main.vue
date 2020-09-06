
<template>
    <v-container fluid app>
        <div>
        <div v-if="!profile">
            Необходимо авторизоваться через<a href="/login">Google</a>
        </div>
        <div v-else>
            <div>{{profile.name}}&nbsp;<a href="/logout">Выйти</a></div>
                <List :messages="messages" />
            </div>
        </div>
    </v-container>
</template>

<script>
import List from './List'

export default {
    name: 'Main',
    components: { List },
    props: [ 'query' ],
    data() {
        return {
            messages: [],
            profile: []
        }
    }
}
</script>

<style>

</style>