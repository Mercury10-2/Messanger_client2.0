
<template>
    <div style="position: relative; width: 300px;">
        <Form :messages="messages" :messageAttr="message" />
        <Row v-for="message in messages"
                     v-bind:key="message.id"
                     v-bind:message="message"
                     v-bind:editMessage="editMessage"
                     v-bind:deleteMessage="deleteMessage"
                     v-bind:messages="messages" />
    </div>
</template>

<script>
import Row from './Row.vue'
import Form from './Form.vue'
import Service from '../service/service.js'

export default {
    name: 'List',
    props: ['messages'],
    components: { Row, Form },
    data() {
        return {
            message: null
        }
    },
    methods: {
        editMessage(message) {
            this.message = message
        },
        deleteMessage(message) {
            //this.$resource('/message{/id}').remove({id: message.id}).then(result => {
            Service.delete(message.id).then(response => {
                if (response.ok)
                    this.messages.splice(this.messages.indexOf(message), 1)
            })
        }
    }
}
</script>

<style>

</style>