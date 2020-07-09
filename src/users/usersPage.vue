<template>
    <div>
        <em v-if="users.loading">Loading users...</em>
        <span v-if="users.error" class="text-danger">ERROR: {{users.error}}</span>
        <ul v-if="users.items" class="list-inline">
            <li v-for="user in users.items" :key="user.id" class="list-inline-item" >
                Name: {{user.first_name + ' ' + user.last_name}}
                <br>
                <img :src="user.avatar">
                <span v-if="user.deleting"><em> - Deleting...</em></span>
                <span v-else-if="user.deleteError" class="text-danger"> - ERROR: {{user.deleteError}}</span>
                <br>
                <span> - <a @click="deleteUser(user.id)" class="text-danger">Delete</a></span>
                <br>
                <span> - <a @click="updateUser(user.id)" class="text-danger">update</a></span>
            </li>
        </ul>
        <p>
            <router-link to="/login">Logout</router-link>
            <router-link to="/users" class="ml-3">See more</router-link>
            
        </p>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    computed: {
        ...mapState({
            account: state => state.account,
            users: state => state.users.all
        })
    },
    created () {
        this.getAllUsers();
        const asmaa = this.getAllUsers();
        console.log(asmaa);
    },
    methods: {
        ...mapActions('users', {
            getAllUsers: 'getAll',
            deleteUser: 'delete',
            updateUser: 'update'
        })
    }
};
</script>
