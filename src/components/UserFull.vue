<template>
    <div class="user__full" v-if="user">
        <div class="user">
            <div class="user__info">{{user.title | capitalize}}</div>
            <div class="user__info">{{user.firstname | capitalize}}</div>
            <div class="user__info">{{user.lastname | capitalize}}</div>
            <div class="user__info">{{user.login}}</div>
            <div class="user__info">{{user.password}}</div>
            <div class="user__info">{{user.gender}}</div>
            <div class="user__info">{{user.email}}</div>
            <div class="user__info user__info--long">{{user.address}}</div>
            <div class="user__info"><img :src="user.picture"></div>
        </div>
        <div class="user__navination" @click="goBack">
            <div>Back</div>
        </div>
    </div>

</template>

<script>
export default {    
    computed: {
        user() {
            return this.$store.getters.getUser(this.$route.params.login)
        }
    },
    filters: {
        capitalize(title) {
            return title.charAt(0).toUpperCase() + title.slice(1);
        },
    },
    methods: {
        goBack() {
            this.$router.back();
        }
    }
}
</script>

<style lang="scss" scoped>
    .user__full {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .user {
        padding: 10px;
        display: flex;
        flex-wrap: wrap;
    }
    .user__info {
        width: 30%;
        margin-bottom: 10px;
        text-align: left;
        &--long {
            width: 100%;
        }
    }
    .user__navination {
        box-shadow: 0 0 10px #ccc;
        cursor: pointer;
        width: 70px;
        padding: 5px 0;
        transition: all 0.1s;
        &:hover {
            box-shadow: 0 0 5px #ccc;
        }
    }    
    @media all and (max-width: 600px) {
        .user {
            flex-direction: column;
        }
        .user__info {
            width: 100%;
        }
    }
</style>