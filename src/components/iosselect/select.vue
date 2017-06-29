<template>
  <div vui-select>
    <transition name="vui-select">
      <div class="vui-select">
        <div class="vui-select-header">
          <p class="vui-select-cancel" @click="cancelVal">取消</p>
          <p class="vui-select-ok" @click="sureVal">确定</p>
        </div>
        <div class="vui-select-body">
          <div v-for="(list, i) in selectList" class='vui-select-lists' :style="{width:width + '%'}" >
            <scroller :ref="'select'+i" :snap-height="35" :animation-duration="1" :snapping="true">
              <div class="vui-select-list">
                <div class="vui-select-item" v-for="(it, k) in list">{{it.text}}</div>
              </div>
            </scroller>
          </div>

        </div>
      </div>
    </transition>
  </div>
</template>
<style>
  .vui-select{
    position: fixed;
    left:0;
    bottom:0;
    width: 100%;
    background: #f5f5f5;
    z-index:2;
    /*transition:all 300ms cubic-bezier(0.23, 1, 0.32, 1) 0ms*/
    animation:iosselect-show 300ms cubic-bezier(0.23, 1, 0.32, 1) 0ms forwards;
  }
  .vui-select.active{
    bottom:0
  }
  .vui-select-header{
    box-sizing: border-box;
    padding:0 15px;
    box-shadow: 2px 2px 3px #ddd;
  }
  .vui-select-header:after{
    content:"";
    display: block;
    clear:both;
  }
  .vui-select-cancel {
    float: left;
    line-height:45px;
    color:#666;
    font-size:13px;
  }
  .vui-select-ok {
    float: right;
    color:#ff8447;
    line-height: 45px;
    font-size:13px;
  }
  .vui-select-body{
    height:238px;
  }
  .vui-select-list{
    width:100%;
  }
  .vui-select-list .vui-select-item{
    line-height: 35px;
    height:35px;
    text-align: center;
    opacity: 0.1;
  }
  .vui-select-lists {
    position: relative;
    float: left;
    height:245px;
  }
  .vui-select-enter-active, .vui-select-leave-active {
    transition: all .5s
  }
  .vui-select-enter {
    bottom: -100%
  }
  @keyframes iosselect-show {
    0%{
      transform:translateY(100%)
    }
    100%{
      transform:translateY(0)
    }
  }
  @keyframes iosselect-hide {
     0%{
       transform:translateY(0)
     }
     100%{
       transform:translateY(100%)
     }
  }
</style>
<script>
  import Vue from 'vue'
  import VueScroller from 'vue-scroller'
  import Util from '../../util/util'
  import channel from './channel'
  Vue.use(VueScroller)

  const LINE_HEIGHT = 35
  export default {
      data() {
          return {
              val: [],
              timer: '',
              selectList: [],
              width: '',
//        show: false,
              initVal: []
          }
      },

      beforeDestroy() {
          clearInterval(this.timer)
      },

      destroyed() {
          this.$el.querySelector('.vui-select').style.animation = 'iosselect-hide 300ms cubic-bezier(0.23, 1, 0.32, 1) 0ms forwards'
          setTimeout(() => {
              let util = new Util()
              util.removeElement('[vui-select]', 200)
          }, 300)
      },

      watch: {
          selectList: function(val) {
              this.width = 100 / val.length
          }
      },

      mounted() {
          channel.$emit('init')
      },

      methods: {
          initRender() {
              let _$ = this
              _$.initScrollTop()
              clearInterval(this.timer)
              _$.timer = setInterval(() => {
                  _$.updateSelect()
                  channel.$emit('loopevent', _$.val)
              }, 50)
          },

          initScrollTop() {
              let _$ = this
              _$.selectList.forEach((v, k) => {
                  let $select = _$.$refs['select' + k][0]
                  let active = 0
                  for (let i in v) {
                      if (v[i].value !== undefined && v[i].value === _$.initVal[k]) {
                          active = i
                          break
                      }
                  }
                  $select.scrollTo(0, LINE_HEIGHT * (active - 3), true)
              })
          },

      /* 循环监听设置top */
          updateSelect() {
              let _$ = this
              _$.selectList.forEach((v, k) => {
                  let $select = _$.$refs['select' + k][0]
                  let active =  parseInt($select.getPosition().top / LINE_HEIGHT) + 3
                  _$.handleActiveStyle($select.$el, active)
                  _$.val[k] = _$.selectList[k][active]
              })
          },

      /* 处理样式 */
          handleActiveStyle(el, index) {
              let $item = el.querySelectorAll('.vui-select-item')

              for (let i = 0; i < $item.length; i++) {
                  if (i === index) {
                      $item[i].style.opacity = 1
                  } else if (Math.abs(index - i) === 1) {
                      $item[i].style.opacity = 0.4
                  } else if (Math.abs(index - i) === 2) {
                      $item[i].style.opacity = 0.2
                  } else {
                      $item[i].style.opacity = 0.1
                  }
              }
          },

          sureVal() {
              channel.$emit('selectok', this.val)
          },

          cancelVal() {
              channel.$emit('selectcancel')
          }

      }
  }
</script>
