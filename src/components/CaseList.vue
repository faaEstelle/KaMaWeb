<template>
  <ul class="case-list">
    <li class="col-lg-3 col-md-3 col-sm-3 col-xs-6" v-for="(item,index) in Options.data" v-if="index < Options.num">
      <div>
        <a :href="item.caseUrl">
          <img :src="item.imgUrl">
          <p class="font-size-16">{{item.caseName}}</p>
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

