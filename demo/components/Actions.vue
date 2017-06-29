<template>
  <div>
    <head-top title="Actions" left-url="#/"></head-top>
    <button v-action="{actionList:acts, actionEvent:actionClick}">action</button>
    <button v-action="{actionList:acts2, actionEvent:actionClick}">action2</button>
  </div>
</template>
<script>
  import action from '@/components/actions'
  import headTop from './header'
  export default{
      directives: {
          action
      },

      components: {
          headTop
      },

      data () {
          return {
              acts: [
          {id: 0, value: 0},
          {id: 1, value: 1},
          {id: 2, value: 2},
          {id: 3, value: 3}
              ],
              acts2: [
          {id: 4, value: 4},
          {id: 5, value: 5},
          {id: 6, value: 6},
          {id: 7, value: 7}
              ]
          }
      },
      methods: {
          actionClick(item, index) {
              console.log(item, index)
          }
      }
  }
</script>
