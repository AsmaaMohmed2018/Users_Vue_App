import { resourceService } from '../_services';

const state = {
    all: {}
};


const actions = {
    getAll({ commit }) {
        commit('getAllRequest');

        resourceService.getAll()  
            .then(
                resources => commit('getAllSuccess', resources),
                error => commit('getAllFailure', error)
            );
    },
    getById({ commit }) {
        commit('getByidRequest');

        resourceService.getById()
            .then(
                resource => commit('getByIdSuccess', resource),
                error => commit('getByIdFailure', error)
                
            );
    }
    
        
    
};

const mutations = {
    getAllRequest(state) {
        state.all = { loading: true };
    },
    getByidRequest(state) {
        state.all = { loading: true };
    },
    getAllSuccess(state,resources) {
        state.all = { items: resources };
        console.log()
    },
    getByIdSuccess(state,resource) {
        state.all = { item: resource}
    },

    getAllFailure(state, error) {
        state.all = { error };
    },
    getByIdFailure(state, error) {
        state.all = { error };
    }
};
    
export const resources = {
    namespaced: true,
    state,
    actions,
    mutations
};

