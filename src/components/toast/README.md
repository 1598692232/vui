swiper
==========
轮播

## Type
组件

## Example

```html
<template>
    <div>
        <button @click="showToast">显示toast</button>
    </div>
</template>
<style>

</style>
<script>
    import Toast from '@/components/toast/index'
    export default {
      methods: {
        showToast() {
          Toast.show('mammamamam', 2000)
        }
      }
    }
</script>


```

## Options

| 选项 | 默认值 | 必填 | 说明 |
|----------|----------|----------|----------|
|msg | / | Y | 弹出信息|
| timeout | 0 | N | 几秒后消失，以s计算|






