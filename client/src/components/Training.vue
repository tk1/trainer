<template>
    <div>
        <h1>{{title}}</h1>
        <p v-if="error">An error occurred: {{error}}</p>
    
        <div class="problem">
            <h3>Problem {{problem.id}}</h3>
            <p v-if="problem.definition">Calculate {{problem.definition.expression}}</p>
        </div>
    
        <form v-on:submit.prevent="submitAnswer">
            <div class="form-group">
                <label for="i-name">Answer</label>
                <input class="form-control" id="i-name" autocomplete="off" v-model="answer" required></input>
            </div>
            <p v-if="result === true" class="bg-success answer">Your answer is correct.</p>
            <p v-if="result === false" class="bg-danger answer">Your answer is wrong.</p>
            <button :disabled="answerSubmitted" type="submit" class="btn btn-primary">Send</button>
        </form>
        <button :disabled="!answerSubmitted" v-on:click="fetchProblem" class="btn btn-primary">Next Problem</button>
        <answers v-if="answerSubmitted" :problemId="problem.id"></answers>
    </div>
</template>    

<script>
import axios from 'axios'
import { bus } from '../bus.js'
import store from '../store.js'
import answers from './Answers'

export default {
    name: 'training',
    components: {
        answers
    },
    data() {
        return {
            title: 'Training',
            error: null,
            problem: {},
            answer: '',
            answerSubmitted: false,
            result: undefined
        }
    },
    created() {
        this.fetchProblem()
    },
    methods: {
        fetchProblem() {
            var that = this
            that.error = null
            that.result = undefined
            that.answer = ''
            that.answerSubmitted = false
            axios.get('/api/problems/random')
                .then(function (response) {
                    that.problem = response.data.problem
                })
                .catch(function (error) {
                    console.log(error)
                    that.error = error.toString()
                })
        },
        submitAnswer() {
            var that = this
            that.error = null
            that.answerSubmitted = true

            axios.post('/api/answers', {
                text: that.answer,
                problemId: that.problem.id
            })
                .then(response => {
                    that.result = response.data.result
                    store.commit('increment', that.result) // <1>
                    bus.$emit('new-answer', response.data)
                    that.answer = ''
                })
                .catch(error => {
                    that.error = error.message
                })
        }
    }
}
</script>

<style scoped>
form {
    margin-bottom: 20px;
}

.answer {
    padding: 15px;
    margin-top: 10px;
    margin-bottom: 10px;
}

h1,
h2,
h3,
h4 {
    color: #4BB4E6;
}
</style>
