<template>
  <div class="vui-ranger">
    <slot name="label-min">
        <span class="vui-ranger-lmin">{{range[0]}}</span>
    </slot>
    <slot name="label-max">
      <span class="vui-ranger-lmax">{{range[1]}}</span>
    </slot>
    <div v-if="valShow">
      <slot name="label-value">
        <div class="vui-ranger-value" v-if="sliderNum==1">
          {{value[1]}}
        </div>
        <div class="vui-ranger-value" v-else>
          {{value[0]}} - {{value[1]}}
        </div>
      </slot>
    </div>
    <div class="vui-ranger-content">
      <div class="vui-ranger-body" ref="ranger_body">
        <div class="vui-ranger-cover1" :class="{'vui-setting':setting}" ref="cover1"  v-if="sliderNum==2"></div>
        <div class="vui-ranger-connect-line"></div>
        <div class="vui-ranger-cover2" :class="{'vui-setting':setting}" ref="cover2" ></div>
        <div class='vui-drag1' ref="drag1" v-draggable="{axis: 'x'}"
             @draging="onDraging" @drag:end="onDragEnd" :class="{'vui-setting':setting}"
             v-if="sliderNum==2"></div>
        <div class='vui-drag2' ref="drag2" v-draggable="{axis: 'x'}"
             @draging="onDraging" @drag:end="onDragEnd" :class="{'vui-setting':setting}"
        ></div>
      </div>
    </div>

  </div>
</template>
<style>
  .vui-ranger {
    position: relative;
    font-size: 0.13rem;
  }

  .vui-ranger .vui-ranger-value {
    position: absolute;
    width: 200px;
    left: 50%;
    top: -15px;
    margin-left: -100px;
    text-align: center;
  }

  .vui-ranger .vui-ranger-content {
    width: 100%;
    height: 28px;
    box-sizing: border-box;
    padding: 0 12px;
    position: relative;
  }

  .vui-ranger .vui-ranger-lmin {
    display: inline-block;
    position: absolute;
    left: 0;
    top: -15px
  }

  .vui-ranger .vui-ranger-lmax {
    display: inline-block;
    position: absolute;
    right: 0;
    top: -15px
  }

  .vui-ranger .vui-ranger-content > .vui-ranger-body {
    width: 100%;
    position: relative;
  }

  .vui-ranger .vui-ranger-connect-line {
    position: absolute;
    top: 12px;
    left: 0;
    height: 3px;
    width: 100%;
    background: #6281C2;
    border-radius: 2px;
  }

  .vui-ranger .vui-ranger-cover2 {
    position: absolute;
    right: 0;
    top: 12px;
    height: 3px;
    z-index: 1;
    background: #e1e1e1;
  }

  .vui-ranger .vui-ranger-cover1 {
    position: absolute;
    left: 0;
    top: 12px;
    height: 3px;
    z-index: 1;
    background: #e1e1e1;
  }
  .vui-ranger .vui-drag1{
    left: -12px;
  }
  .vui-ranger .vui-drag2{
    right: -13px;
  }
  .vui-ranger .vui-drag1, .vui-ranger .vui-drag2 {
    position: absolute;
    top: 0;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: #fff;
    border: 1px solid #e1e1e1;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
    z-index: 1
  }
  .vui-ranger .vui-setting{
    transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1) 0ms
  }
</style>
<script>
  import draggable from '../draggable'
  import _ from '../helper'
export default {
      props: {
          range: {
              type: Array,
              default () {
                  return [0, 1000]
              }
          },
          val: {
              type: [Number, Array],
              default () {
                  return [0, 1000]
              }
          },
          sliderNum: {
              type: [Number, String],
              validator (val) {
                  return val === 2 ? 2 : 1
              },
              default: 1
          },
          valShow: {
              type: Boolean,
              default: true
          },

          maxWidth: {
          	type: [String, Number]
          }
      },
      data () {
          return {
              drag2$: {
                  transX: 0
              },
              drag1$: {
                  transX: 0
              },
              clientMaxWidth: 0,
              setting: false,
              rangerNumber: 0
          }
      },
      computed: {
          value () {
              return (typeof this.val) === 'number' || ((typeof this.val) === 'object' && this.val.length === 1) ? [0, this.val] : this.val
          }
      },
      mounted () {
          this.rangerNumber = this.range[1] - this.range[0]
          this._initRanger()
          this.$forceUpdate()
      },
      directives: {
          draggable
      },
      watch: {
          val (val) {
              this.jsToSetVal()
          }
      },
      methods: {
      /*判断value,是否正确*/
          _valueToCorrect () {
              this.value[1] = Math.min(Math.max(this.value[0], this.value[1]), this.range[1])
              this.value[0] = Math.max(Math.min(this.value[0], this.value[1]), this.range[0])
          },

      /* 初始化处理 */
          _initRanger () {
              let rbDom = this.$refs.ranger_body
              this.clientMaxWidth = parseInt(this.maxWidth) || rbDom.offsetWidth
              this._setValue()
              this.$forceUpdate()
          },

          _setValue () {
              this._valueToCorrect()
              this._handleSetDrag2()
              if (parseInt(this.sliderNum) === 2) {
                  this._handleSetDrag1()
              }
          },

          _handleSetDrag2 () {
              this.drag2$.transX =  this.clientMaxWidth * ((this.range[1] - this.value[1]) / this.rangerNumber)
              _.css(this.$refs.drag2, 'transform', 'translate3d(-' + this.drag2$.transX + 'px,0,0)')
              _.css(this.$refs.cover2, 'width', this.clientMaxWidth * (( this.range[1] - this.value[1]) / this.rangerNumber) + 'px')
          },

          _handleSetDrag1 () {
              let vr = this.val[0] - this.range[0]
              this.drag1$.transX = this.clientMaxWidth * (vr / this.rangerNumber)
              _.css(this.$refs.drag1, 'transform', 'translate3d(' + this.drag1$.transX + 'px,0,0)')
              _.css(this.$refs.cover1, 'width', this.clientMaxWidth * (vr / this.rangerNumber) + 'px')
          },

      /*拖动进行时*/
          onDraging (e) {
              e.target.className === 'vui-drag1' ? this._setDrag1AndCover1(e) : this._setDrag2AndCover2(e)
              this._setVal(e)
          },

          _setDrag1AndCover1 (e) {
              if (parseInt(this.sliderNum) !== 2) return

              let $drag1 = this.$refs.drag1
              _.css(this.$refs.cover1, 'width',  Math.abs(e.data.x) + 'px')

              if (e.data.x <= 0) {
                  _.css($drag1, 'transform', 'translate3d(0,0,0)')
                  _.css(this.$refs.cover1, 'width', 0)
              }

              if (this.clientMaxWidth - Math.abs(e.data.x) - Math.abs(this.drag2$.transX) <= 0) {
                  _.css(this.$refs.cover1, 'width', this.clientMaxWidth - Math.abs(this.drag2$.transX))
                  _.css($drag1, 'transform', 'translate3d(' + parseFloat(this.clientMaxWidth - Math.abs(this.drag2$.transX)) + 'px,0,0)')
              }
          },

          _setDrag2AndCover2 (e) {
              let $drag2 = this.$refs.drag2
              _.css(this.$refs.cover2, 'width', Math.abs(e.data.x) + 'px')

              if (e.data.x >= 0) {
                  _.css($drag2, 'transform', 'translate3d(0,0,0)')
                  _.css(this.$refs.cover2, 'width', 0)
              }

              if (this.clientMaxWidth - Math.abs(e.data.x) - Math.abs(this.drag1$.transX) <= 0) {
                  _.css(this.$refs.cover2, 'width', this.clientMaxWidth - Math.abs(this.drag1$.transX))
                  _.css($drag2, 'transform', 'translate3d(-' + parseFloat(this.clientMaxWidth - Math.abs(this.drag1$.transX)) + 'px,0,0)')
              }
          },

          _setVal (e) {
              e.target.className === 'vui-drag2'
        ? this.value[1] = this.rangerNumber * ((this.clientMaxWidth - this.$refs.cover2.offsetWidth) / this.clientMaxWidth) + this.range[0]
          : this.value[0] = this.$refs.cover1.offsetWidth / this.clientMaxWidth * this.rangerNumber + this.range[0]
              this.$emit('updating', parseInt(this.sliderNum) === 1 ? this.value[1] : this.value, e)
              this.$forceUpdate()
          },

          /* 拖动结束 */
          onDragEnd (e) {
              e.target.className === 'vui-drag1' ?  this.drag1$.transX = e.data.x : this.drag2$.transX = e.data.x
              _.css(this.$refs.drag2, 'z-index', '1')
              if (parseInt(this.sliderNum) === 2) {
                  _.css(this.$refs.drag1, 'z-index', '1')
              }
              if (e.target.className === 'vui-drag1' && e.data.x >= this.clientMaxWidth) {
                  _.css(this.$refs.drag1, 'z-index', '10')
              }
              if (e.target.className === 'vui-drag2' && e.data.x <= -this.clientMaxWidth && this.sliderNum === 2) {
                  _.css(this.$refs.drag2, 'z-index', '10')
              }
          },
          /* 手动设置值 */
          jsToSetVal () {
              let self = this
              self._setValue()
              self.setting = true
              self.$el.addEventListener('transitionend', (e) => {
                  self.setting = false
              })
          }
      }
  }
</script>
