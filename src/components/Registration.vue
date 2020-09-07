
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
                        <v-row>
                            <v-col cols="12">
                                <v-text-field label="Подтвердите пароль" v-model="passwordCheck"></v-text-field>
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
export default {
    name: 'Registration',
    data() {
        return {
            dialog: false,
            username: '',
            password: '',
            passwordCheck: '',          //  Использовать объект User?
            gender: 'мужчина',
            email: '',
            usernameRules: [
                v => !!v || 'Имя не может быть пустым',
                v => (v && v.length > 2 && v.length < 16) || 'От 3 до 15 символов (у вас ' + v.length + ')'
            ],
            passwordRules: [
                v => !!v || 'Неверный формат пароля',
                v => (v && v.length > 5 && v.length < 16) || 'От 6 до 15 символов (у вас ' + v.length + ')'
            ],
            emailRules: [
                v => !!v || 'Необходимо указать почтовый адрес',
                v => (v && v.length <= 25) || 'Максимум 25 символов (у вас ' + v.length + ')'
            ],
            message: ''
        }
    },
    methods: {
        registration() {
            if (this.username.length < 3 || this.username.length > 15)
                this.message = 'Имя должно содержать от 3 до 15 символов'
            else if (this.password.length < 6 || this.password.length > 15)
                this.message = 'Пароль должен содержать от 6 до 15 символов'
            else if (this.password != this.passwordCheck)
                this.message = 'Пароли не совпадают'
            else if (!this.validateEmail())
                this.message = 'Неверный почтовый адрес'
            else {
                if (this.username && this.password && this.gender && this.email) {
                    this.$store.dispatch('auth/register', {
                        username: this.username,
                        password: this.password,
                        gender: this.gender,
                        email: this.email
                    }).then(data => {
                        this.message = data.message
                    },
                    error => {
                        this.message = (error.response && error.response.data) || error.message || error.toString()
                    })
                }
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