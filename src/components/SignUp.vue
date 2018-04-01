<template>
    <div class='from-inline'>
        <strong>Sign Up</strong>
        <div class="form-group">
            <input type="email" v-model="email">
            <input type="password" v-model="password">
            <button class="btn btn-primary" @click="SignUp()">Sign Up</button>
            <br>
            <router-link to="/signin">Sign In</router-link>
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

            SignUp(){
                FirebaseConfig.auth()
                        .createUserWithEmailAndPassword(this.email, this.password).catch(error => {this.error = error})

            }
        }
    }
</script>
