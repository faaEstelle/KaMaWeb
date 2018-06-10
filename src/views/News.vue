<template>
<div class="page-box">
  <Nav :NavValue="currentNav"></Nav>
  <Banner :Options="BannerData"></Banner>
  <div class="container">
    <div class="page-inner-title">
      <p>{{$t("Nav.news")}}</p>
      <hr/>
    </div>
    <NewsList :Options="NewsData"></NewsList>
    <ul class="news-page">
      <li class="last-page" :class="currentPage===1?'disabled':''" @click="lastPage"></li>
      <li :class="currentPage == pageNum?'active':''">{{pageNum}}</li>
      <li :class="currentPage == (pageNum + 1)?'active':''">{{pageNum + 1}}</li>
      <li :class="currentPage == (pageNum + 2)?'active':''">{{pageNum + 2}}</li>
      <li class="next-page" :class="currentPage===totalNum?'disabled':''" @click="nextPage"></li>
    </ul>
  </div>
  <Footer></Footer>
</div>
</template>

<script>
  import Nav from '../components/Nav'
  import Banner from '../components/Banner'
  import NewsList from '../components/NewsList'
  import Footer from '../components/Footer'
    export default {
      data(){
        return{
          currentNav:5,
          BannerData:{
            bannerwidth:'small-width',
            slideList: [
              {
                "clickUrl": "#",
                "desc": "nhwc",
                "image": "/static/img/smallbanner.png"
              },
            ]
          },
          NewsData:{
            num:3,
            data:[
              {date:'05/10',year:'2018',title:'红橡山AAA级',imgUrl:'/static/img/news-1.png',content:' 东莞市卡玛木业供应大量北美木材，现供应红橡山纹AAA级，品质保证，价格实惠，欢迎新老客户前来咨询、洽谈，我们卡玛木业将以最优惠的价格供你考虑，也可来本店亲自挑选你所需要的产品，卡玛木业一直是以专注。真诚为核心的销售理念，为未来品牌打造良好的开端，欢迎有意向者的朋友前来购买'},
              {date:'05/10',year:'2018',title:'红橡山AAA级',imgUrl:'/static/img/news-2.png',content:' 东莞市卡玛木业供应大量北美木材，现供应红橡山纹AAA级，品质保证，价格实惠，欢迎新老客户前来咨询、洽谈，我们卡玛木业将以最优惠的价格供你考虑，也可来本店亲自挑选你所需要的产品，卡玛木业一直是以专注。真诚为核心的销售理念，为未来品牌打造良好的开端，欢迎有意向者的朋友前来购买'},
              {date:'05/10',year:'2018',title:'红橡山AAA级',imgUrl:'/static/img/news-3.png',content:' 东莞市卡玛木业供应大量北美木材，现供应红橡山纹AAA级，品质保证，价格实惠，欢迎新老客户前来咨询、洽谈，我们卡玛木业将以最优惠的价格供你考虑，也可来本店亲自挑选你所需要的产品，卡玛木业一直是以专注。真诚为核心的销售理念，为未来品牌打造良好的开端，欢迎有意向者的朋友前来购买'},
            ]
          },
          pageNum:1,
          currentPage:1,
          totalNum:5
        }
      },
      components:{
        Nav,
        Banner,
        NewsList,
        Footer
      },
      methods:{
        lastPage(){
          if(this.currentPage === 1){

          }else if(this.currentPage > this.pageNum ){
            this.currentPage --
          }else{
            this.currentPage --
            this.pageNum --
          }
        },
        nextPage(){
          if(this.currentPage === this.totalNum){

          }else if(this.pageNum+2>this.currentPage){
            this.currentPage ++
          }else{
            this.currentPage ++
            this.pageNum ++
          }
        }
      }
    }
</script>

<style scoped>

</style>
