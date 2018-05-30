<template>
  <div class="carousel-wrap" id="carousel"  :class="width">
    <transition-group tag="ul" name="list" class="slide-ul">
      <li v-for="(list,index) in slideList" :key="index" :show="index === currentIndex" @mouseenter="stop" @mouseleave="go">
        <a :href="list.clickUrl">
          <img :src="list.image" :alt="list.desc"/>
        </a>
      </li>
    </transition-group>
    <div class="carousel-items">
      <span v-for="(item,index) in slideList.length" :class="{'active':index===currentIndex}" @mouseover="change(index)"></span>
    </div>
  </div>

</template>

<script>
    export default {
        data(){
          return {
            width:'big-width',
            slideList: [
              {
                "clickUrl": "#",
                "desc": "nhwc",
                "image": "/static/img/banner-1.png"
              },
              {
                "clickUrl": "#",
                "desc": "hxrj",
                "image": "/static/img/banner-1.png"
              },
              {
                "clickUrl": "#",
                "desc": "rsdh",
                "image": "/static/img/banner-1.png"
              }
            ],
            currentIndex: 0,
            timer: ''
          }
        },
      methods: {
        go() {
          this.timer = setInterval(() => {
            this.autoPlay()
          }, 4000)
        },
        stop() {
          clearInterval(this.timer)
          this.timer = null
        },
        change(index) {
          this.currentIndex = index
        },
        autoPlay() {
          this.currentIndex++
          if (this.currentIndex > this.slideList.length - 1) {
            this.currentIndex = 0
          }
        }
      },
    }
</script>

<style scoped>

</style>
