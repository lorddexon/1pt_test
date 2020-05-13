import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import {sorting} from '../helpers/sorting.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        actionUrl: 'http://localhost:3000',
        users: [],
        usersOnPage: 20,
        sortType: 'firstname',
        sortDirection: 1,
        page: 1,
    },
    getters: {
        getUsers: state => {
            let filteredUsers = state.users.sort(sorting(state.sortDirection, state.sortType));
            return {
                allUsers: filteredUsers,
                users: [...filteredUsers].splice(state.usersOnPage * (state.page - 1), state.usersOnPage),
                // if we use https://hr.oat.taocloud.org/v1/users?limit=20&offset=0 type of url,
                // so instead of splice we just pass offset and limit in actionUrl as additional params
            }
        },
        getUser: state => login => {
            return state.users.find(user => user.login === login)
        },
        getSortType: state => {
            return state.sortType;
        },
        getSortDirection: state => {
            return state.sortDirection;
        },
        getPage: state => {
            return state.page;
        },
        getUsersOnPage: state => {
            return state.usersOnPage;
        }
    },
    mutations: {
        GO_PREV_PAGE(state) {
            state.page--;
        },
        GO_NEXT_PAGE(state) {
            state.page++;
        },
        SET_SORT_TYPE(state, sortType) {
            if (state.sortType === sortType[0]) {
                state.sortDirection *= -1;
            }
            state.sortType = sortType[0];
        }
    },
    actions: {    
        loadUsers({ state }) {
            axios.get(`${state.actionUrl}`).then(response => {
                state.users = response.data;
            }).catch(e => {
                console.warn(e);
            })
        }
    }
})