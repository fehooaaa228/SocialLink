<template>
    <div class="d-flex justify-center">
        <v-card width="600px" class="mt-12 pa-10">
            <v-card-title>
                Войдите в аккаунт
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
                <v-btn style="margin-right: 15px;" @click="authenticate">Войти  </v-btn>
                или
                <v-btn color="secondary" flat variant="text" @click="this.$router.push('/reg')">Зарегистрироваться</v-btn>
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
            authenticate(){
            this.axios.get("http://jsonplaceholder.typicode.com/users/")
                .then(
                    (response) => {
                        let users = response.data;
                        let found = false;
                        for(let i in users){
                            if(users[i].username == this.login){
                                this.$router.push('/users?id=' + users[i].id);
                                found = true;
                                break;
                            }
                        }
                        if(!found){
                            window.alert('Неверный логин или пароль!');
                        }
                    }
                );
            }
        }
    }
</script>