<template>
  <ul class="case-list">
    <li class="col-lg-3 col-md-3 col-sm-3 col-xs-6" v-for="item in caseList">
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
          caseList:[
            {imgUrl:'/static/img/case-1.png',caseName:'皮木拼花地板',caseUrl:'#'},
            {imgUrl:'/static/img/case-2.png',caseName:'木皮地板',caseUrl:'#'},
            {imgUrl:'/static/img/case-3.png',caseName:'木皮墙皮',caseUrl:'#'},
            {imgUrl:'/static/img/case-4.png',caseName:'板式贴木皮家具',caseUrl:'#'},
          ]
        }
      }
    }
</script>

