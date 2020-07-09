<template>
    <div>
        <h1>Successful Login !</h1>
        <H2>Resources</H2>
        <em v-if="resources.loading">Loading Resources...</em>
        <span v-if="resources.error" class="text-danger">ERROR: {{resources.error}}</span>
        <ul v-if="resources.items" >
            <li  v-for="resource in resources.items" :key="resource.id"  v-on:click="handleClick(resource)">
                {{resource.name}}
                <router-link to= "/resource">show details</router-link>
                <!-- <span v-if="resource.deleting"><em> - Deleting...</em></span>
                <span v-else-if="user.deleteError" class="text-danger"> - ERROR: {{user.deleteError}}</span>
                <span v-else> - <a @click="deleteUser(user.id)" class="text-danger">Delete</a></span> -->
            </li>
        </ul>
        <p>
            <router-link to="/login">Logout</router-link>
            <router-link to="/users" class="ml-3">Users</router-link>
        </p>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { bus } from '../index';

export default {
    data () {
        return {

            resourceId:null
        }
    },
    computed: {
        ...mapState({
            account: state => state.account,
            resources: state => state.resources.all

         
        })
    },
    created () {
        this.getAllResources();
        const asmaa = this.getAllResources();
      
    },
    methods: {
        ...mapActions('resources', {
            getAllResources: 'getAll',
        }),
        handleClick(resource){
            bus.$emit('myEvent',resource.id);
            console.log(resource.id)
           
           
        }    
        
    }
};
</script>