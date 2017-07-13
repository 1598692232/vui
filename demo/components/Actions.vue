<template>
  <div>
    <head-top title="Actions" left-url="#/"></head-top>
      <button v-action="{actionList:acts, actionEvent: actionClick}" class="v-btn">显示action</button>
  </div>
</template>

<script>

  import action from '@/components/actions'
  import Toast from '@/components/toast/index'
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
          {id: 0, value: 0, template: '<span style="color:#007aff">action0</span>'},
          {id: 1, value: 1, template: '<span style="color:#007aff">action1</span>'},
          {id: 2, value: 2, template: '<span style="color:#007aff">action2</span>'},
          {id: 3, value: 3, template: '<span style="color:#007aff">action3</span>'}
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
              Toast.show(JSON.stringify(item) + ';' + index, 2000)
          }
      }
  }
</script>
