<template>
    <div class='from-inline'>
        <div class="form-group item-box" >
            <label>{{event.name}}</label>
            <br/>
            <label>{{event.location}}</label>
            <br/>

            <label>{{event.email}}</label>
            <br/>

            <label>{{event.date}}</label>
            <br/>

        </div>
    </div>

</template>
<script>
    export default {
        props: ['event']
    }
</script>
