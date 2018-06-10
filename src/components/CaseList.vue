<template>
  <ul class="case-list">
    <li class="col-lg-3 col-md-3 col-sm-3 col-xs-6" v-for="(item,index) in Options.data" v-if="index < Options.num">
      <div>
        <a>
          <img :src="item.imgUrl">
          <router-link :to="'/Cases/Details/'+item.caseName"><p class="font-size-16">{{item.caseName}}</p></router-link>
        </a>
      </div>
    </li>
  </ul>

</template>

<script>
    export default {
      data(){
        return{
          data(){
            return{
              language:this.$i18n.locale
            }
          }
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

