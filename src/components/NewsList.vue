<template>
    <ul class="news-list">
      <li class="col-lg-4 col-md-4 col-sm-12 col-xs-12" v-for="(item,index) in Options.data" v-if="index < Options.num">
        <a>
          <p class="date">{{item.date}}<span>{{item.year}}</span></p>
          <p class="title">{{item.title}}</p>
          <img :src="item.imgUrl">
          <p class="content">{{item.content}}</p>
        </a>
      </li>
    </ul>
</template>

<script>
    export default {
        data(){
          return{
          }
        },
      props:{
          Options:{
            num:0,
            data:[]
          }
      }
    }
</script>

<style scoped>

</style>
