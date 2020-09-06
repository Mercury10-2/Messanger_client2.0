
<template>
    <div>
        <input type="text" placeholder="Write something" v-model="text" />
        <input type="button" value="Save" v-on:click="save()" />
    </div>
</template>

<script>
import Service from '../service/service.js'

function getIndex(list, id) {
    for (let i = 0; i < list.length; i++ ) {
        if (list[i].id === id)
            return i
    }
    return -1
}
export default {
    name: 'Form',
    props: ['messages', 'messageAttr'],
    data() {
        return {
            text: '',
            id: ''
        }
    },
    watch: {
        messageAttr(newVal) {
            this.text = newVal.text
            this.id = newVal.id
        }
    },
    methods: {
        save() {
            const message = { text: this.text }
            if (this.id) {
                //this.$resource('/message{/id}').update({id: this.id}, message).then(result =>
                Service.update(this.id, message).then(response =>
                    response.json().then(data => {
                        const index = getIndex(this.messages, data.id)
                        this.messages.splice(index, 1, data)
                        this.text = ''
                        this.id = ''
                    })
                )
            } else {
                //this.$resource('/message{/id}').save({}, message).then(result =>
                Service.save({}, message).then(response =>
                    response.json().then(data => {
                        this.messages.push(data)
                        this.text = ''
                    })
                )
            }
        }
    }
}
</script>

<style>

</style>