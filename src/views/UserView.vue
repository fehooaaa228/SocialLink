<template>
    <v-app style="padding-left: 50px; background-color: rgb(248, 248, 248);">
        <v-navigation-drawer color="green" expand-on-hover rail permanent location="right" app>
            <v-list nav item-type="shaped" dense>
                <v-list-item prepend-avatar="https://randomuser.me/portraits/men/75.jpg" title="Social Link" subtitle="Dima Marenkov"></v-list-item>
                <v-divider class="my-3"></v-divider>
                <v-list-item prepend-icon="mdi-home-outline" title="Главная"></v-list-item>
                <v-list-item @click="this.$router.push('/')" prepend-icon="mdi-account-arrow-left-outline" title="Выход"></v-list-item>
            </v-list>
        </v-navigation-drawer>

        <div class="mt-4">
            <v-row class="text-left">
                <v-col cols="10">
                    <h1 class="green-text text-darken-2">
                        <v-icon large color="green darken-2">mdi-account-outline</v-icon>
                        {{name}}
                    </h1>
                </v-col>
            </v-row>
            <v-row class="text-left">
                <v-col cols="1" class="align-self-center">
                    <img src="https://randomuser.me/api/portraits/men/75.jpg" style="max-width: 100%;">
                </v-col>
                <v-col cols="10" class="text-left">
                    <p class="ma-4">
                        Веб-сайт: <a href="..." target="_blank">{{web}}</a>
                    </p>
                    <p class="ma-4">
                        E-mail: <a href="mailto:...">{{email}}</a>
                    </p>
                    <p class="ma-4">
                        Город: {{city}}
                    </p>
                    <p class="ma-4">
                        Место работы: {{job}}
                    </p>
                </v-col>
            </v-row>

            <v-divider class="my-5"></v-divider>

            <h2 class="mb-10">Публикации</h2>

            <div v-for="post in posts" :key="post" style="width: 70%; height: 300px; box-shadow: 0px 0px 7px grey; background-color: white; padding: 20px" class="mb-10">
                <v-list-item prepend-avatar="https://randomuser.me/portraits/men/75.jpg" v-model:title="post.title" v-model:subtitle="name" class="mb-4"></v-list-item>
                <p class="mx-6">{{ post.body }}</p>
            </div>
        </div>
    </v-app>
 </template>

<script>
    export default{
        data(){
            return{
                name: "Dimas",
                web: "aboba",
                email: "lalalal@gmail.com",
                city: "London",
                job: "None",
                posts: []
            }
        },

        methods: {
            getData(){
                this.axios.get("http://jsonplaceholder.typicode.com/users/" + window.location.href.split('=')[1])
                .then(
                    (response) => {
                        let data = response.data;
                        this.name = data.name;
                        this.web = data.website;
                        this.email = data.email;
                        this.city = data.address.city;
                        this.job = data.address.street;

                    }
                );
            },

            getPosts(){
                this.axios.get("https://jsonplaceholder.typicode.com/posts?userId=" + window.location.href.split('=')[1])
                    .then(
                        (response) => {
                            this.posts = response.data;
                        }
                    );
            }
        },

        mounted(){
            this.getData();
            this.getPosts();
        }
    }
</script>

<style>
    
</style>