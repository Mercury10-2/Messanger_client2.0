
<template>
    <v-container fluid app>
    <v-row>
        <v-dialog v-model="dialog" max-width="300px">
            <template v-slot:activator="{ on, attrs }">
                <v-btn text v-bind="attrs" v-on="on">
                    Регистрация
                </v-btn>
            </template>
            <v-card>
                <v-card-text>
                    <v-container>
                        <p class="deep-orange--text">{{ incorrectData }}</p>
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
                        <v-row>
                            <v-col cols="12">
                                <v-text-field label="Подтвердите пароль" v-model="passwordCheck" v-bind:rules="passwordRules"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="3">
                                <p>Пол:</p>
                            </v-col>
                            <v-col cols="9">
                                <input type="radio" id="one" value="мужчина" v-model="gender">
                                <label class="ml-3" for="one">Мужчина</label>
                                <br>
                                <input type="radio" id="two" value="женщина" v-model="gender">
                                <label class="ml-3" for="two">Женщина</label>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field label="Почта" v-model="email" v-bind:rules="emailRules"></v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                <v-spacer></v-spacer>
                <div>
                    <v-btn color="blue darken-1" text v-on:click="registration()">Зарегистрировать</v-btn>
                </div>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
    </v-container>
</template>

<script>
import Service from '../service/service.js'

export default {
    name: 'Registration',
    props: [ 'login' ],
    data() {
        return {
            dialog: false,
            username: '',
            password: '',
            passwordCheck: '',
            gender: 'мужчина',
            email: '',
            usernameRules: [
                v => !!v || 'Имя не может быть пустым',
                v => (v && v.length <= 15) || 'Максимум 15 символов (у вас ' + v.length + ')'
            ],
            passwordRules: [
                v => !!v || 'Пароль не может быть пустым',
                v => (v && v.length <= 15) || 'Максимум 15 символов (у вас ' + v.length + ')'
            ],
            emailRules: [
                v => !!v || 'Необходимо указать почтовый адрес',
                v => (v && v.length <= 25) || 'Максимум 25 символов (у вас ' + v.length + ')'
            ],
            incorrectData: ''
        }
    },
    methods: {
        registration() {
            if (this.username.length < 3 || this.username.length > 15)
                this.incorrectData = 'Имя должно содержать от 3 до 15 символов'
            else if (this.password.length < 6 || this.password.length > 15)
                this.incorrectData = 'Пароль должен содержать от 6 до 15 символов'
            else if (this.password != this.passwordCheck)
                this.incorrectData = 'Пароли не совпадают'
            else if (!this.validateEmail())
                this.incorrectData = 'Неверный почтовый адрес'
            else {
                Service.registration(this.username, this.password, this.gender, this.email)
                    .then(response => {/*
                        let user = response.data
                        if (user.verified == false)
                            this.incorrectData = 'Пользователь с таким именем уже существует'
                        else {
                            this.login(user)
                            this.dialog = false
                        }*/
                        console.log(response.data)
                    })
            }
        },
        validateEmail() {
            if (this.email.length == 0)
                return false
            const sample = /\S+@\S+\.\S+/
            return sample.test(this.email)
        }
    }
}
</script>

<style>

</style>