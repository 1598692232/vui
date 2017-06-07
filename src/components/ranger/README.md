Ranger
================================
滑动块（范围取值）

## Type
组件

## example
```html
   <div style="margin-top:20px">
          <ranger  @input="updating"  ></ranger>
      </div>
  
  <div style="margin-top:20px">
      <ranger  @input="updating" :slider-num="2" :val="val"></ranger>
  </div>
                
```

## props说明
| 选项 | 默认值 | 必填 | 说明 |
|----------|----------|----------|----------|
| range | [300,1000]| N | 范围|
| slider-num | 1| N | 滑块个数|
| val-show | true| N | 是否需要头部数值标签块|
| val |/| N | 可手动设置值|

## 事件
'input'

## slot
label-min：label块左侧
label-max：label块右侧
label-value：label块值显示




