<template>
    <div>
        <strong>Add an Event <input type="checkbox" v-model="isEventOn"></strong>
        <div class="form" v-if="isEventOn">
            <div class="form-group">
                <label>Event Name</label>
                <input type="text" class="form-control" v-model="event.name">
            </div>
            <div class="form-group">
                <label>Location</label>
                <input type="text" class="form-control" v-model="event.location">
            </div>
            <div class="form-group">
                <label>Date</label>
                <input type="date" class="form-control" v-model="event.date">
                <br/>
                <button class="btn btn-primary" @click="addEvent">Add Event</button>
            </div>
        </div>
    </div>
</template>
<script>
    import {EventRef} from '../FirebaseConfig'
    export default{
        data(){
            return {
                event: {
                    name: '',
                    date: '',
                    location: '',
                    email: ''
                },
                isEventOn: false
            }
        },

        methods:{
            addEvent()
            {

                this.event.email = this.$store.state.user.email;
                EventRef.push(this.event);


            }
        }
    }
</script>