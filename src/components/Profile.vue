
<template>
    <v-container fluid app>
    <v-row>
        <v-dialog v-model="dialog" max-width="400px">
            <template v-slot:activator="{ on, attrs }">
                <v-btn text small v-bind="attrs" v-on="on">
                    Профиль
                </v-btn>
            </template>
            <v-card>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="4">
                                <p>Имя:</p>
                            </v-col>
                            <v-col cols="8">
                                <p>{{ currentUser.username }}</p>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="4">
                                <p>Статус:</p>
                            </v-col>
                            <v-col cols="8">
                                <p>{{ currentUser.role }}</p>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="4">
                                <p>Пол:</p>
                            </v-col>
                            <v-col cols="8">
                                <p>{{ currentUser.gender }}</p>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="4">
                                <p>Почта:</p>
                            </v-col>
                            <v-col cols="8">
                                <p>{{ currentUser.email }}</p>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="4">
                                <p>Регистрация:</p>
                            </v-col>
                            <v-col cols="8">
                                <p>{{ currentUser.created }}</p>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
            </v-card>
        </v-dialog>
    </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'Profile',
    data() {
        return {
            dialog: false,
        }
    },
    computed: {
        currentUser() {
            return this.$store.state.auth.user
        }
    }
}
</script>

<style>

</style>