<template>
    <div class='from-inline'>
        <strong>Sign In</strong>
        <div class="form-group">
            <input type="email" v-model="email">
            <input type="password" v-model="password">
            <button class="btn btn-primary" @click="SignIn()">Sign In</button>
            <br>
            <router-link to="/signup">Sign Up Now !</router-link>
        </div>
        <hr/>
        <p>
            {{error.message}}
        </p>
    </div>
</template>
<script>

    import {FirebaseConfig} from '../FirebaseConfig.js'

    export default {
        data(){
            return {
                email: '',
                password: '',

                error:{
                    message:''
                }
            }
        },

        methods: {

            SignIn(){
                FirebaseConfig.auth()
                        .signInWithEmailAndPassword(this.email, this.password).catch(error => {this.error = error})
            }
        }
    }
</script>
