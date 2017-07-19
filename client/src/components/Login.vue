<template>
    <div class="col-sm-4">
        <h2>Log In</h2>
        <p>Please log in to use the app.</p>
        <div class="alert alert-danger" v-if="error">
            <p>{{ error }}</p>
        </div>
        <form v-on:submit="submit">
            <div class="form-group">
                <label for="i-email">Email</label>
                <input type="text" class="form-control" id="i-email" placeholder="email" v-model="credentials.email" required>
            </div>
            <div class="form-group">
                <label for="i-pw">Password</label>
                <input type="password" class="form-control" id="i-pw" placeholder="password" v-model="credentials.password" required>
            </div>
            <button :disabled="session.authenticated" type="submit" class="btn btn-primary">Log in</button>
        </form>
        <p v-if="session.authenticated" class="bg-success answer">Log in successful.</p>
        <p v-if="!session.authenticated" class="bg-danger answer">Not logged in.</p>
    
    </div>
</template>

<script>
import store from '../store'

export default {
    data() {
        return {
            credentials: {
                email: '',
                password: ''
            }
        }
    },
    computed: {
        error() {
            return store.state.error
        },
        session() {
            return store.state.session
        }

    },
    methods: {
        submit() {
            store.dispatch('login', this.credentials)
        }
    }
}
</script>