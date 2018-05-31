<template>
    <ul class="news-list">
      <li v-for="item in newsList">
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
            newsList:[
              {date:'05/10',year:'2018',title:'红橡山AAA级',imgUrl:'/static/img/news-1.png',content:' 东莞市卡玛木业供应大量北美木材，现供应红橡山纹AAA级，品质保证，价格实惠，欢迎新老客户前来咨询、洽谈，我们卡玛木业将以最优惠的价格供你考虑，也可来本店亲自挑选你所需要的产品，卡玛木业一直是以专注。真诚为核心的销售理念，为未来品牌打造良好的开端，欢迎有意向者的朋友前来购买'},
              {date:'05/10',year:'2018',title:'红橡山AAA级',imgUrl:'/static/img/news-2.png',content:' 东莞市卡玛木业供应大量北美木材，现供应红橡山纹AAA级，品质保证，价格实惠，欢迎新老客户前来咨询、洽谈，我们卡玛木业将以最优惠的价格供你考虑，也可来本店亲自挑选你所需要的产品，卡玛木业一直是以专注。真诚为核心的销售理念，为未来品牌打造良好的开端，欢迎有意向者的朋友前来购买'},
              {date:'05/10',year:'2018',title:'红橡山AAA级',imgUrl:'/static/img/news-3.png',content:' 东莞市卡玛木业供应大量北美木材，现供应红橡山纹AAA级，品质保证，价格实惠，欢迎新老客户前来咨询、洽谈，我们卡玛木业将以最优惠的价格供你考虑，也可来本店亲自挑选你所需要的产品，卡玛木业一直是以专注。真诚为核心的销售理念，为未来品牌打造良好的开端，欢迎有意向者的朋友前来购买'},
              ]
          }
        }
    }
</script>

<style scoped>

</style>
