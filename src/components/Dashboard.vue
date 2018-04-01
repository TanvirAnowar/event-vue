<template>
    <div class=''>

        <button class="btn btn-danger" @click="signOut()">Log Out</button>

        <hr/>
        <AddEvent/>
        <hr/>
        <div class="col-md-12">
            <EventItem
                v-for="(event_item,index) in this.$store.state.events"
                :event="event_item"
                key="index"
            />
        </div>
    </div>
</template>
<script>
    import {FirebaseConfig, EventRef} from '../FirebaseConfig'
    import AddEvent from './AddEvent.vue'
    import EventItem from './EventItem.vue'

    export default{

        methods: {
            signOut(){
                this.$store.dispatch('signOut');
                FirebaseConfig.auth().signOut();
            }
        },

        components: {
            AddEvent,
            EventItem
        },

        mounted(){
            EventRef.on('value',snap=>{
                let events = [];

            snap.forEach(event=>{
                events.push(event.val())

                })
            this.$store.dispatch('eventList',events)
            })
        }

    }


</script>