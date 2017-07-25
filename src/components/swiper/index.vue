<template>
  <div class="vui-swiper" :id="id"
  @touchstart="onTouchStart"
  @touchmove="onTouchMove"
  @touchend="onTouchEnd"
  >
    <ul>
      <li v-for="(it,index) in newData" :class="{'all-left':!it.left}"
          :style="{background:it.color,left:it.left,transition:touching?'all 0s cubic-bezier(0.23, 1, 0.32, 1)':it.transition,'z-index':it.zIndex}"
      ><slot :item="it"></slot></li>
    </ul>
  </div>
</template>
<style scoped>
  .vui-swiper ul li{
    list-style: none;
  }
  .vui-swiper {
    width: 100%;
    min-height: 200px;
    overflow: hidden;
    position: relative;
    font-size:0.13rem;
  }
  .vui-swiper ul{
    position:absolute;
    height:100%;
    width:100%;
  }
  .vui-swiper ul li{
    position: absolute;
    top:0;
    width:100%;
    height:100%;
    background-color: #0a9dc7;
    z-index:-1;
  }
</style>

<script>
  export default{

      props: {
          data: {
              type: Array,
              require: true
          },
          delay: {
              type: Number,
              default: 5000
          },
          sliderShift: {
              type: Number,
              default: 50
          },
          speed: {
              type: Number,
              default: 0.3
          },
          auto: {
              type: Boolean,
              default: true
          }
      },

      data () {
          return {
              id: 'swiper-' + Math.ceil(Math.random() * 100),
              newData: [],
              touchStartX: '',
              moveX: '',
              activeIndex: 0,
              maxWidth: '',
              touching: false,
              touchend: false,
              transition: false,
              clearTime: false
          }
      },

      mounted () {
          this.maxWidth = this.$el.offsetWidth
          this.initData()
          this.autoPlay()
      },

      created () {
      },

      methods: {

          initData () {
        /* 初始化数据 */
              let _$ = this
              this.data.forEach((v, k) => {
                  let obj = v
                  if (obj.id === undefined) {
                      obj.id = k
                  }
                  v.left = this.maxWidth + 'px'
                  v.transition = 'all ' + _$.speed + 's cubic-bezier(0.23, 1, 0.32, 1)'
                  v.zIndex = -1
                  _$.newData.push(v)
              })
              this.newData[this.newData.length - 1].left = '-' + this.maxWidth + 'px'
              this.newData[this.activeIndex].left = 0
//        this.activeIndex = 0
//        this.transition = false
//        this.touching = false
              this.$forceUpdate()
          },

      /* touchStart事件 */
          onTouchStart (e) {
              clearInterval(this.clearTime)
              if (this.transition || this.touching) return
              this.touchStartX = e.touches[0].pageX
              this.touching = true
              this.$emit('ontouchstart', this.activeIndex, this.moveX, this.newData)
              e.preventDefault()
          },

      /* touchMove事件 */
          onTouchMove (e) {
              if (this.transition) return
              this.moveX = e.touches[0].pageX - this.touchStartX
              this.newData[this.activeIndex].left = '-50px'
              if (this.isLeftOrRight() === -1) {
                  this.touchingMoveNext()
              } else {
                  this.touchingMovePrev()
              }
              this.$emit('ontouchmove', this.activeIndex, this.moveX, this.newData)
              e.preventDefault()
          },

      /* touchend事件 */
          onTouchEnd (e) {
              if (this.transition) return
              if (Math.abs(this.moveX) > this.maxWidth) {
          /* 异常处理：滑动距离超过maxWidth */
                  if (this.isLeftOrRight() === -1) {
                      this.touchEndSpecialNext()
                  } else {
                      this.touchEndSpecialPrev()
                  }
              } else {
          /* 正常处理：滑动距离小于maxWidth */
                  if (this.isLeftOrRight() === -1) {
                      this.touchEndNext()
                  } else {
                      this.touchEndPrev()
                  }
              }
              this.$emit('ontouchend', this.activeIndex, this.moveX, this.newData)
              e.preventDefault()
          },

          touchEndSpecialNext () {
              this.touching = false
              this.touchend = true
              if (this.activeIndex === this.newData.length - 1) {
                  this.activeIndex = 0
              } else {
                  this.activeIndex++
              }
              this.newData[this.activeIndex].left = 0
              this.newData[this.activeIndex].zIndex = 1
              this.$forceUpdate()
              let _$ = this
              this.$el.addEventListener('transitionend', () => {
                  _$.renderEnd()
              })
          },

          touchEndSpecialPrev () {
              this.touching = false
              this.touchend = true
              if (this.activeIndex === 0) {
                  this.activeIndex = this.newData.length - 1
              } else {
                  this.activeIndex--
              }
              this.newData[this.activeIndex].left = 0
              this.newData[this.activeIndex].zIndex = 1
              this.$forceUpdate()
              let _$ = this
              this.$el.addEventListener('transitionend', () => {
                  _$.renderEnd()
              })
          },

      /* touchmove右滑处理事件 */
          touchingMovePrev () {
              this.newData[this.activeIndex].left = this.moveX + 'px'
              if (this.activeIndex === 0) {
                  this.newData[this.newData.length - 1].left = (-this.maxWidth + this.moveX) + 'px'
              } else {
                  this.newData[this.activeIndex - 1].left = (-this.maxWidth + this.moveX) + 'px'
              }
              this.$forceUpdate()
          },

      /* touchmove左滑处理事件 */
          touchingMoveNext () {
              this.newData[this.activeIndex].left = this.moveX + 'px'
              if (this.activeIndex === this.newData.length - 1) {
                  this.newData[0].left = (this.maxWidth + this.moveX) + 'px'
              } else {
                  this.newData[this.activeIndex + 1].left = (this.maxWidth + this.moveX) + 'px'
              }
              this.$forceUpdate()
          },

      /* touchend右滑结束处理 */
          touchEndPrev () {
              this.touching = false
              this.touchend = true
              if (this.moveX > this.sliderShift) {
                  this.handleSureToPrev()
              } else {
                  this.handleDoubtToPrev()
              }
              this.$forceUpdate()
          },

      /* touchend左滑结束处理 */
          touchEndNext () {
//        let _$ = this
              this.touching = false
              this.touchend = true
              if (this.moveX < -this.sliderShift) {
                  this.handleSureToNext()
              } else {
                  this.handleDoubtToNext()
              }
              this.$forceUpdate()
          },

          handleSureToNext () {
        /* 滑动距离大于50 */
              if (this.activeIndex === this.newData.length - 1) {
                  this.activeIndex = 0
              } else {
                  this.activeIndex++
              }
              this.newData[this.activeIndex].left = 0
              this.newData[this.activeIndex].zIndex = 1
              if (this.activeIndex === 0) {
                  this.newData[this.newData.length - 1].zIndex = 1
                  this.newData[this.newData.length - 1].left = '-' + this.maxWidth + 'px'
              } else {
                  this.newData[this.activeIndex - 1].zIndex = 1
                  this.newData[this.activeIndex - 1].left = '-' + this.maxWidth + 'px'
              }

              let _$ = this
              _$.$emit('renderstart', _$.activeIndex, _$.moveX, _$.newData)
              this.$el.addEventListener('transitionstart', () => {
                  if (_$.transition) return
                  _$.transition = true
              })

        /* 动画完成后处理 */
              this.$el.addEventListener('transitionend', () => {
                  _$.moveX = 0
                  _$.newData.forEach((v, k) => {
                      if (k !== _$.activeIndex && this.newData.length - 1 !== _$.activeIndex) {
                          v.left = _$.maxWidth + 'px'
                          v.zIndex = -1
                      }
                  })
                  _$.transition = false
                  _$.renderEnd()
              })
          },

          handleDoubtToNext () {
        /* 滑动距离小于50 */
              let _$ = this
              this.newData.forEach((v, k) => {
                  if (k !== _$.activeIndex - 1 || k !== _$.activeIndex) {
                      v.left = _$.maxWidth + 'px'
                  }
              })
              this.newData[this.newData.length - 1].left = '-' + this.maxWidth + 'px'
              this.newData[this.activeIndex].left = 0
        /* 处理li闪屏 */
              if (this.activeIndex === this.newData.length - 1) {
                  this.newData[0].zIndex = 1
                  this.newData[0].left = this.maxWidth + 'px'
              } else {
                  this.newData[this.activeIndex + 1].zIndex = 1
                  this.newData[this.activeIndex + 1].left = this.maxWidth + 'px'
              }
              this.$el.addEventListener('transitionend', () => {
                  _$.renderEnd()
              })
          },

      /* 确定之前的一个 */
          handleSureToPrev () {
        /* 滑动距离大于50 */
              if (this.activeIndex === 0) {
                  this.activeIndex = this.newData.length - 1
              } else {
                  this.activeIndex--
              }
              this.newData[this.activeIndex].left = 0
              this.newData[this.activeIndex].zIndex = 1
              if (this.activeIndex === this.newData.length - 1) {
                  this.newData[0].zIndex = 1
                  this.newData[0].left = this.maxWidth + 'px'
              } else {
                  this.newData[this.activeIndex + 1].zIndex = 1
                  this.newData[this.activeIndex + 1].left = this.maxWidth + 'px'
              }
              let _$ = this
              _$.$emit('renderstart', _$.activeIndex, _$.moveX, _$.newData)
              this.$el.addEventListener('transitionstart', () => {
                  if (_$.transition) return
                  _$.transition = true
              })
        /* 动画完成后处理 */
              this.$el.addEventListener('transitionend', () => {
                  _$.moveX = 0
          /* 处理闪屏问题 */
                  if (this.activeIndex === 0) {
                      this.newData[this.newData.length - 1].zIndex = 1
                      this.newData[this.newData.length - 1].left = '-' + this.maxWidth + 'px'
                  } else {
                      this.newData[this.activeIndex - 1].zIndex = 1
                      this.newData[this.activeIndex - 1].left = '-' + this.maxWidth + 'px'
                  }
                  _$.transition = false
                  _$.renderEnd()
              })
          },

      /* touchend之后距离不够的时候的回弹处理 */
          handleDoubtToPrev () {
              clearInterval(this.clearTime)
              this.autoPlay()
        /* 滑动距离小于50 */
              let _$ = this
              this.newData.forEach((v, k) => {
                  if (k !== _$.activeIndex - 1 || k !== _$.activeIndex) {
                      v.left = _$.maxWidth + 'px'
                  }
              })
              this.newData[this.newData.length - 1].left = '-' + this.maxWidth + 'px'
              this.newData[this.activeIndex].left = 0
        /* 处理li闪屏 */
              if (this.activeIndex === 0) {
                  this.newData[this.newData.length - 1].zIndex = 1
                  this.newData[this.newData.length - 1].left = '-' + this.maxWidth + 'px'
              } else {
                  this.newData[this.activeIndex - 1].zIndex = 1
                  this.newData[this.activeIndex - 1].left = '-' + this.maxWidth + 'px'
              }
              this.$el.addEventListener('transitionend', () => {
                  _$.renderEnd()
              })
          },

      /* 自动滑动 */
          autoPlay () {
              let _$ = this
              if (!this.auto) return
              _$.clearTime = setInterval(() => {
                  _$.handleSureToNext()
                  _$.$forceUpdate()
              }, this.delay)
          },

      /* transition完成后 */
          renderEnd () {
              this.$emit('renderend', this.activeIndex, this.moveX, this.newData)
              clearInterval(this.clearTime)
              this.autoPlay()
          },

      /* 判断左滑还是右滑 */
          isLeftOrRight () {
              return this.moveX > 0 ? 1 : -1
          },

      /*手动设置activeIndex*/
          setActive(i) {
              let _$ = this
              if (i < 0) i = 0
              if (i > _$.newData.length - 1) i = _$.newData.length - 1
              _$.activeIndex = i
              _$.newData[this.activeIndex].left = 0
              _$.newData[this.activeIndex].zIndex = 1
              _$.$forceUpdate()
          }
      }
  }
</script>
