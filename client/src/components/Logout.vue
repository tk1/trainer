<template>
    <div class="col-sm-4">
        <h2>Log out succeded</h2>
    </div>
</template>

<script>
export default {
    created() {
        this.$store.commit('logout') // <1>
    }
}
</script>