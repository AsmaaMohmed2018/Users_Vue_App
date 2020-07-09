<template>
    <div>       
        <div v-if="resources.item">
            <div>{{resources.item.name}}</div>
            <div>{{resources.item.year}}</div>
            <div>{{resources.item.color}}</div>
            <div>{{resources.item.pantone_value}}</div>

        </div>
        
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    
    created () {
        this.getResource();
        
      
    },
    computed: {
        ...mapState({
            resources: state => state.resources.all

         
        })
    },
    methods: {
        ...mapActions('resources', {
            getResource: 'getById',
        })
         
        
    }
};
</script>

