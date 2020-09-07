<template>
    <v-container fluid app>
    <v-row>
        <v-dialog v-model="dialog" max-width="300px">
            <template v-slot:activator="{ on, attrs }">
                <v-btn text v-bind="attrs" v-on="on">
                    Войти
                </v-btn>
            </template>
            <v-card>
                <v-card-text>
                    <v-container>
                        <p class="deep-orange--text">{{ message }}</p>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field label="Имя пользователя" v-model="username" v-bind:rules="usernameRules"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field label="Пароль" v-model="password" v-bind:rules="passwordRules"></v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                <v-spacer></v-spacer>
                <div>
                    <v-btn color="blue darken-1" text v-on:click="login()">Войти</v-btn>
                </div>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            dialog: false,
            username: '',
            password: '',
            usernameRules: [
                v => !!v || 'Имя не может быть пустым',
                v => (v && v.length > 2 && v.length <= 15) || 'От 3 до 15 символов (у вас ' + v.length + ')'
            ],
            passwordRules: [
                v => !!v || 'Пароль не может быть пустым',
                v => (v && v.length > 5 && v.length <= 10) || 'От 6 до 15 символов (у вас ' + v.length + ')'],
            message: ''
        }
    },
    methods: {
        login() {
            if (this.username.length < 3 || this.username.length > 15)
                this.message = 'Имя должно содержать от 3 до 15 символов'
            else if (this.password.length < 6 || this.password.length > 15)
                this.message = 'Пароль должен содержать от 6 до 15 символов'
            else {
                if (this.username && this.password) {
                    this.$store.dispatch('auth/login', { username: this.username, password: this.password })
                        .then(() => {
                            this.dialog = false
                        },
                        error => {
                            this.message = (error.response && error.response.data) || error.message || error.toString();
                        })
                }
            }
        }
    }
}
</script>

<style>

</style>