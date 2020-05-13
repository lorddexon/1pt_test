<template>
    <div class="user">
        <div class="user__info" @click="openUser">{{user.firstname | capitalize}}</div>
        <div class="user__info" @click="openUser">{{user.lastname | capitalize}}</div>
    </div>
</template>

<script>
export default {
    props: {
        user: {
            default: null,
            required: false
        }
    },
    filters: {
        capitalize(title) {
            return title.charAt(0).toUpperCase() + title.slice(1);
        },
    },
    methods: {
        openUser() {
            this.$router.push({ name: 'User', params: { login: this.user.login } })
        }
    }
}
</script>
<style lang="scss" scoped>
    .user {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px 0;
        &:hover {
            & > div {
                color: blue;
            }
        }
    }
    .user__info {
        width: 50%;
        cursor: pointer;
        transition: all 0.1s;
    }
</style>