actions
==========
底部弹框

## Type
指令

## Example

```html
<template>
    <div class="demo">
        <div style="margin-top:20px">
            <ranger @input="updating" :val="val1"></ranger>
        </div>

        <div style="margin-top:20px">
            <ranger :slider-num="2" :val="val"></ranger>
        </div>
    </div>
</template>
<style>
    .demo {
        padding:0 15px;
    }
</style>
<script>
    import Ranger from '@/components/ranger'
    export default {
      data() {
        return {
          val: [600, 900],
          val1: 700
        }
      },
      components: {
        Ranger
      },
      methods: {
        updating() {
        }
      }
    }
</script>

```

## Options

| 选项 | 默认值 | 必填 | 说明 |
|----------|----------|----------|----------|
| offset | / | Y |距离顶部高度|

## 事件
| 选项 | 说明 |
|----------|----------|
|onRefresh|隐藏触发|
|onLoad|显示触发|

## Slot
| 选项 | 说明 |
|----------|----------|
|refresh|刷新块|
|loading|分家加载时的块|




