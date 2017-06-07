actions
==========
底部弹框

## Type
指令

## Example

```html
<template>
    <div>
        <button  style="display: inline-block;float: left;margin:0 20px;" @click="show()">弹出modal</button>
    </div>
</template>
<style>

</style>
<script>
    import $managerModal from '@/components/modal/index.js'
    import MutileModal from './MutileModal'
    export default {
      data() {
        return {
          list: [1, 2, 3, 4],
          modal: null
        }
      },

      created () {
        window.modal = null
      },

      methods: {
        show() {
          $managerModal.createModalParent(MutileModal, {
            title: '这里是标题1',
            theme: '#f00',
            render() {
              console.log('render')
            },
            onHide() {
              console.log('onHide')
            }
          }).then((modal) => {
            console.log(modal, 7575)
            window.modal = modal
          })
        }
      }
    }
</script>
```

## Options

| 选项 | 默认值 | 必填 | 说明 |
|----------|----------|----------|----------|
| component | / | Y | modal里的内容，以vue组件方式传递|
| options | / | N | 所需要的一些参数（title:标题，theme：背景颜色，direction：进入方向(left,right,up,bottom)）|

## 事件
| 选项 | 说明 |
|----------|----------|
|onHide|隐藏触发|
|reander|显示触发|



