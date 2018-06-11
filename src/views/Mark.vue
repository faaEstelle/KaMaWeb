<template>
    <div class="page-box">
      <a id="top"></a>
      <Nav :NavValue="currentNav"></Nav>
      <Banner :Options="BannerData"></Banner>
      <AsideBtn></AsideBtn>
      <div class="container">
        <p class="inner-nav"><a href="/">{{$t("Nav.index")}}</a><span class="left-arrow"></span>{{cnMarkType[markType]}} </p>

        <div class="mark-content">
          <p>{{$t("doorMarket.title")}}</p>
          <div class="mark-map"></div>
          <div class="mark-info-box">
            <div class="mark-info" v-html="language=='cn'?cnMarkInfo[markType]:enMarkInfo[markType]">
              {{language=='cn'?cnMarkInfo[markType]:enMarkInfo[markType]}}
            </div>
          </div>
        </div>
        <div class="mark-recruit">
          <p>{{$t("doorMarket.recruit")}}</p>
          <ul>
            <li class="operate">
              <router-link :to="'/Recruit/'+ markType+'/1'" >
                <p>{{$t("doorMarket.operate")}}</p>
              </router-link>
            </li>
            <li class="sale">
              <router-link :to="'/Recruit/'+ markType+'/2'">
                <p>{{$t("doorMarket.sale")}}</p>
              </router-link>
            </li>
            <li class="design">
              <router-link :to="'/Recruit/'+ markType+'/3'">
                <p>{{$t("doorMarket.design")}}</p>
              </router-link>
            </li>
            <li class="program">
              <router-link :to="'/Recruit/'+ markType+'/4'">
                <p>{{$t("doorMarket.program")}}</p>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
</template>

<script>
  import Nav from '../components/Nav'
  import Banner from '../components/Banner'
  import Footer from '../components/Footer'
  import AsideBtn from '../components/AsideBtn'
    export default {
      data(){
        return{
          language:this.$i18n.locale,
          markType:this.$route.params.Mark,
          currentNav:1,
          BannerData:{
            bannerwidth:'big-width',
            slideList: [
              {
                "clickUrl": "#",
                "desc": "nhwc",
                "image": "/static/img/banner-2.jpg"
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
          },
          cnMarkType:{
            chengdu:'成都卡玛皮木',
            shanghai:'上海卡玛皮木',
            dongguan:'东莞卡玛皮木',
            jiashan:'嘉善卡玛皮木'
          },
          enMarkType:{
            chengdu:'成都卡玛皮木',
            shanghai:'上海卡玛皮木',
            dongguan:'东莞卡玛皮木',
            jiashan:'嘉善卡玛皮木'
          },
          cnMarkInfo: {
            chengdu:'<p>地址：<span>四川省成都市新都区新繁镇运开市场B区2栋61-64号</span></p><p>电话：<span>028-64121277</span></p><p>传真：<span>028-64121500</span></p>',
            shanghai:'<p>地址：<span>四川省成都市新都区新繁镇运开市场B区2栋61-64号</span></p><p>电话：<span>028-64121277</span></p><p>传真：<span>028-64121500</span></p>',
            dongguan:'<p>地址：<span>四川省成都市新都区新繁镇运开市场B区2栋61-64号</span></p><p>电话：<span>028-64121277</span></p><p>传真：<span>028-64121500</span></p>',
            jiashan:'<p>地址：<span>四川省成都市新都区新繁镇运开市场B区2栋61-64号</span></p><p>电话：<span>028-64121277</span></p><p>传真：<span>028-64121500</span></p>',
          },
          enMarkInfo:  {
            chengdu:'<p>地址：<span>四川省成都市新都区新繁镇运开市场B区2栋61-64号</span></p><p>电话：<span>028-64121277</span></p><p>传真：<span>028-64121500</span></p>',
            shanghai:'<p>地址：<span>四川省成都市新都区新繁镇运开市场B区2栋61-64号</span></p><p>电话：<span>028-64121277</span></p><p>传真：<span>028-64121500</span></p>',
            dongguan:'<p>地址：<span>四川省成都市新都区新繁镇运开市场B区2栋61-64号</span></p><p>电话：<span>028-64121277</span></p><p>传真：<span>028-64121500</span></p>',
            jiashan:'<p>地址：<span>四川省成都市新都区新繁镇运开市场B区2栋61-64号</span></p><p>电话：<span>028-64121277</span></p><p>传真：<span>028-64121500</span></p>',
          },
        }
      },
      computed:{

      },
      components:{
        Nav,
        Banner,
        Footer,
        AsideBtn
      }

    }
</script>

<style scoped>

</style>
