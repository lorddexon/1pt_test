<template>
    <div class="users">
        <div class="users__header">
            <div @click="sortUsers('firstname')">
                <span>First Name</span>
                <span v-if="getSortType === 'firstname'">{{sortType}}</span>
            </div>
            <div @click="sortUsers('lastname')">
                <span>Last Name</span>
                <span v-if="getSortType === 'lastname'">{{sortType}}</span>
            </div>
        </div>
        <div class="users__list">
            <transition name="fade" mode="out-in">
                <div class="users__loading"
                    v-if="isLoading" :key='1'></div>
            </transition>
            <user 
                v-for="(user, index) in getUsers.users" 
                :key="index"
                :user="user"/>
        </div>
        <div class="users__pagination"
            v-if="getUsers.users.length > 0">
            <div>
                <span
                    v-if="getPage > 1"
                    @click="changePage('GO_PREV_PAGE')">Prev</span>
            </div>
            <div>{{ getPage }}</div>
            <div>
                <span
                    v-if="getPage * getUsersOnPage < getUsers.allUsers.length"
                    @click="changePage('GO_NEXT_PAGE')">Next</span>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UserIntro from './UserIntro'
export default {
    data() {
        return {
            isLoading: false
        }
    },
    components: {
        'user': UserIntro
    },
    computed: {
        ...mapGetters(['getUsers', 'getPage', 'getUsersOnPage', 'getSortType', 'getSortDirection']),
        sortType() {
            return this.getSortDirection === 1 ? '˄' : '˅'
        }
    },
    methods: {
        sortUsers(sortType) {
            if (this.isLoading) return false;
            this.toggleLoading('SET_SORT_TYPE', sortType)
        },
        changePage(action) {            
            if (this.isLoading) return false;
            this.toggleLoading(action)
        },
        toggleLoading(action, ...args) {
            this.isLoading = true
            setTimeout(() => {
                this.isLoading = false
                this.$store.commit(action, args)
            }, 200)
        }
    }
}
</script>

<style lang="scss" scoped>
    .users {
        width: 100%;
        min-height: 100vh;
        position: relative;
        padding-bottom: 60px;
    }
    .users__header {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #fff;
        margin: 0;
        padding: 20px 0 15px;
        box-shadow: 0 0 10px #ccc;
        z-index: 2;
        & > div {
            width: 50%;
            cursor: pointer;
            span {
                &:nth-of-type(2) {
                    color:blue;
                    margin-left:10px;
                }
            }
        }
    }
    .users__list {
        position: relative;
        margin-top: 10px;
    }
    .users__loading {
        height: 100%;
        width: 100%;
        background: #fff;
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
    }
    .users__empty {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .users__pagination {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        justify-content: center;         
        align-items: center;
        display: flex;
        width: 300px;
        max-width: 100%;
        background: #fff;
        height: 50px;
        margin: 0 auto;
        padding: 0;
        box-shadow: 0 0 10px #ccc;
        & > div {
            width: 20%;
            span {
                font-weight: bold;
                cursor: pointer;
                user-select: none;
                &:hover {
                    transition: all 0.1s;
                    color: #61918F;
                }
            }
        }
    }
</style>