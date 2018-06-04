<template>
  <div class="carousel-wrap" id="carousel"  :class="Options.bannerwidth">
    <transition-group tag="ul" name="list" class="slide-ul">
      <li v-for="(list,index) in Options.slideList" :key="index" :show="index === currentIndex" @mouseenter="stop" @mouseleave="go">
        <a :href="list.clickUrl">
          <img :src="list.image" :alt="list.desc"/>
        </a>
      </li>
    </transition-group>
    <div class="carousel-items" v-if="Options.slideList.length>1">
      <span v-for="(item,index) in Options.slideList.length" :class="{'active':index===currentIndex}" @mouseover="change(index)"></span>
    </div>
  </div>

</template>

<script>
    export default {
        data(){
          return {
            currentIndex: 0,
            timer: ''
          }
        },
      props:{
          Options:{
            bannerwidth:'',
            slideList:[]
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
          if (this.currentIndex > this.Options.slideList.length - 1) {
            this.currentIndex = 0
          }
        }
      },
    }
</script>

<style scoped>

</style>
