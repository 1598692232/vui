<template>
  <div class="demo">
    <button v-overlay.id="'a1'" :actions="true">modal</button>
    <actions aid="a1" :actions="acts"></actions>
  </div>
</template>
<script>
  import actions from '../../src/components/actions/index.vue'
  export default{
    data () {
      return {
        acts: [
          {id: 0, value: 0, callback: (a, b, c) => { console.log(a, b); c() }},
          {id: 1, value: 1, callback: (a, b) => { console.log(a, b) }},
          {id: 2, value: 2, callback: (a, b) => { console.log(a, b) }},
          {id: 3, value: 3, callback: (a, b) => { console.log(a, b) }}
        ]
      }
    },
    components: {
      actions
    },
    methods: {
    }
  }
</script>
