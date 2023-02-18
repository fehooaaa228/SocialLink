<template>
    <div class="d-flex justify-center">
        <v-card width="600px" class="mt-12 pa-10">
            <v-card-title>
                Зарегистрируйтесь
            </v-card-title>

            <v-text-field
                label="Введите логин"
                v-model="login"
                outlined
            ></v-text-field>

            <v-text-field
                label="Введите пароль"
                v-model="password"
                outlined
            ></v-text-field>

            <v-container>
                <v-btn style="margin-right: 15px;" @click="register">Зарегистрироваться</v-btn>
                или
                <v-btn color="secondary" flat variant="text" @click="this.$router.push('/')">Войти</v-btn>
            </v-container>
        </v-card>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                password: '',
                login: ''
            }
        },
        methods: {
            register(){
                this.axios.put('https://mocki.io/v1/1ad20b21-67ed-4f6d-b9dc-f7d33f2caf1d', {login: this.login, password: this.password})
                    .then(this.$router.push('/'));
            }
        }
    }
</script>