actions
==========
底部弹框

## Type
指令

## Example

```html
<template>
  <div>
    <datepicker @select:ok="selectOk" @select:cancel="selectCancel"></datepicker>
  </div>
</template>
<style>

</style>
<script>
import datepicker from '@/components/datepicker/index.vue'

export default {
  components: {
    datepicker
  },
  methods: {
    selectOk(val) {
      console.log(val, 92929)
    },

    selectCancel() {
      console.log(11111)
    }
  }
}
</script>
```

## Options

| 选项 | 默认值 | 必填 | 说明 |
|----------|----------|----------|----------|
| inputStyle | / | Y | input样式|
| date | / | N | 初始化日期|

## 事件

| 选项 | 说明 |
|----------|----------|
|select:ok|选择之后|
|select:cancel|取消|

#### 注：虽然 datepicker基于iosselect，但并非由select所有props及event


