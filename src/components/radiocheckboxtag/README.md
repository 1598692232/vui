Ranger
================================
滑动块（范围取值）

## Type
组件

## example
```html
    <checkbox-tag :tags="tags" @error="handleSelect" :max-number="3"></checkbox-tag>
                
```

## props说明
| 选项 | 默认值 | 必填 | 说明 |
|----------|----------|----------|----------|
| tags | []| Y | 里面对象格式{label: **(显示文字), value: **(值), template: **(html模版), selected: **(初始化是否选中)}|
| max-number | 1| N | 最多选几个 |

## 事件
'error'：选多或选少报错；'toggle'：点击触发





