Iosselect
==========
选择框

## Type
组件

## Example

```html
<template>
  <div class="demo">
    <div style="margin-bottom:30px;">
      <ios-select name="" id="" :select-list="selectAll" ref="iosselect" @loop:event="getValue"></ios-select>
    </div>

    <div style="margin-bottom:30px;">
      <ios-select name="" id="" :select-list="selectAll2" ref="iosselect1" @loop:event="getValue" :initVal="[4,5,6,7]"></ios-select>
    </div>
  </div>
</template>
<script>
  import iosSelect from '@/components/iosselect/index'
  export default{
    data () {
      return {
        selectAll: [[
          {value: 1, text: 1},
          {value: 2, text: 2},
          {value: 3, text: 3},
          {value: 4, text: 4},
          {value: 5, text: 5},
          {value: 6, text: 6},
          {value: 7, text: 7},
          {value: 8, text: 8},
          {value: 9, text: 9},
          {value: 10, text: 10},
          {value: 11, text: 11},
          {value: 12, text: 12},
          {value: 13, text: 13},
          {value: 14, text: 14},
          {value: 15, text: 15}

        ], [
          {value: 1, text: 1},
          {value: 2, text: 2},
          {value: 3, text: 3},
          {value: 4, text: 4},
          {value: 5, text: 5},
          {value: 6, text: 6},
          {value: 7, text: 7},
          {value: 8, text: 8},
          {value: 9, text: 9},
          {value: 10, text: 10},
          {value: 11, text: 11},
          {value: 12, text: 12},
          {value: 13, text: 13},
          {value: 14, text: 14},
          {value: 15, text: 15}
        ], [
          {value: 1, text: 1},
          {value: 2, text: 2},
          {value: 3, text: 3},
          {value: 4, text: 4},
          {value: 5, text: 5},
          {value: 6, text: 6},
          {value: 7, text: 7},
          {value: 8, text: 8},
          {value: 9, text: 9},
          {value: 10, text: 10},
          {value: 11, text: 11},
          {value: 12, text: 12},
          {value: 13, text: 13},
          {value: 14, text: 14},
          {value: 15, text: 15}
        ], [
          {value: 1, text: 1},
          {value: 2, text: 2},
          {value: 3, text: 3},
          {value: 4, text: 4},
          {value: 5, text: 5},
          {value: 6, text: 6},
          {value: 7, text: 7},
          {value: 8, text: 8},
          {value: 9, text: 9},
          {value: 10, text: 10},
          {value: 11, text: 11},
          {value: 12, text: 12},
          {value: 13, text: 13},
          {value: 14, text: 14},
          {value: 15, text: 15}
        ]],
        selectAll2: [[
          {value: 1, text: 1},
          {value: 2, text: 2},
          {value: 3, text: 3},
          {value: 4, text: 4},
          {value: 5, text: 5},
          {value: 6, text: 6},
          {value: 7, text: 7},
          {value: 8, text: 8},
          {value: 9, text: 9},
          {value: 10, text: 10},
          {value: 11, text: 11},
          {value: 12, text: 12},
          {value: 13, text: 13},
          {value: 14, text: 14},
          {value: 15, text: 15},
          {value: 16, text: 16},
          {value: 17, text: 17},
          {value: 18, text: 18},
          {value: 19, text: 19},
          {value: 20, text: 20}
        ], [
          {value: 1, text: 1},
          {value: 2, text: 2},
          {value: 3, text: 3},
          {value: 4, text: 4},
          {value: 5, text: 5},
          {value: 6, text: 6},
          {value: 7, text: 7},
          {value: 8, text: 8},
          {value: 9, text: 9},
          {value: 10, text: 10},
          {value: 11, text: 11},
          {value: 12, text: 12},
          {value: 13, text: 13},
          {value: 14, text: 14},
          {value: 15, text: 15},
          {value: 16, text: 16},
          {value: 17, text: 17},
          {value: 18, text: 18},
          {value: 19, text: 19},
          {value: 20, text: 20}
        ], [
          {value: 1, text: 1},
          {value: 2, text: 2},
          {value: 3, text: 3},
          {value: 4, text: 4},
          {value: 5, text: 5},
          {value: 6, text: 6},
          {value: 7, text: 7},
          {value: 8, text: 8},
          {value: 9, text: 9},
          {value: 10, text: 10},
          {value: 11, text: 11},
          {value: 12, text: 12},
          {value: 13, text: 13},
          {value: 14, text: 14},
          {value: 15, text: 15},
          {value: 16, text: 16},
          {value: 17, text: 17},
          {value: 18, text: 18},
          {value: 19, text: 19},
          {value: 20, text: 20}
        ], [
          {value: 1, text: 1},
          {value: 2, text: 2},
          {value: 3, text: 3},
          {value: 4, text: 4},
          {value: 5, text: 5},
          {value: 6, text: 6},
          {value: 7, text: 7},
          {value: 8, text: 8},
          {value: 9, text: 9},
          {value: 10, text: 10},
          {value: 11, text: 11},
          {value: 12, text: 12},
          {value: 13, text: 13},
          {value: 14, text: 14},
          {value: 15, text: 15},
          {value: 16, text: 16},
          {value: 17, text: 17},
          {value: 18, text: 18},
          {value: 19, text: 19},
          {value: 20, text: 20}
        ]]
      }
    },
    components: {
      iosSelect
    },
    mounted() {
      let _$ = this
      setTimeout(() => {
        _$.selectAll[2] = [
          {value: 1, text: 1},
          {value: 2, text: 2},
          {value: 3, text: 3},
          {value: 4, text: 4},
          {value: 5, text: 5},
          {value: 6, text: 6},
          {value: 7, text: 7},
          {value: 8, text: 8},
          {value: 9, text: 9},
          {value: 10, text: 10}
        ]
        this.$refs.iosselect.listRender(2)
      }, 3000)
    },
    methods: {
      getValue(val) {
//        console.log(val)
      }
    }
  }
</script>



```

## Options

| 选项 | 默认值 | 必填 | 说明 |
|----------|----------|----------|----------|
| select-list | / | Y | 选项（Array里面每个选项对象的结构为{value:'',text:''})|
| valConnect | / | N | 选项选择之后字符链接符号|
| inputStyle | / | N | input框样式|
| initVal | / | N | 初始值|

## Methods

| 选项 | 说明 |
|----------|----------|
|listRender|重新渲染列表|

## 事件

| 选项 | 说明 |
|----------|----------|
|loop:event|循环监听|
|select:init|select框弹出时|
|select:ok|选择之后|
|select:before|弹出之前|
|select:cancel|取消|


