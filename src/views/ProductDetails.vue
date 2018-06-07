<template>
<div class="page-box">
  <Nav :NavValue="currentNav"></Nav>
  <div class="container">
    <p class="inner-nav">
      <a href="/About">{{$t("Nav.product")}}</a>
      <span class="left-arrow"></span>{{$t("ProductKind.main")}}
      <span class="left-arrow"></span>{{$route.params.productName}}
    </p>
    <div class="product-details">
      <div class="product-info box-border">
        <div class="product-img">
          <img :src="PreviewImg">
          <div class="product-preview">
            <a class="box-border preview-last"></a>
            <ul class="preview-list">
              <li v-for="img in ProductMsg.imgList"><img :src="img"/></li>
            </ul>
            <a class="box-border preview-next"></a>
          </div>

        </div>
        <div class="product-text">
          <p>{{$t("ProductDetail.name")}}：<span>{{$route.params.productName}}</span></p>
          <p>{{$t("ProductDetail.kind")}}：<span>{{$t("ProductDetail.kindName")}}</span></p>
          <p>{{$t("ProductDetail.version")}}：<span></span></p>
          <p>{{$t("ProductDetail.times")}}：<span>1029</span></p>
          <p>{{$t("ProductDetail.phone")}}：<span>{{$t("ProductDetail.phoneNumber")}}</span></p>
          <hr />
          <button>{{$t("ProductDetail.order")}}</button> <a class="online-order">{{$t("ProductDetail.onlineOrder")}}</a>
          <p class="last-next"><a>{{$t("ProductDetail.last")}}</a> <a>{{$t("ProductDetail.next")}}</a></p>
          <p class="product-share">
            <a class="weChat"></a>
            <a class="weChat-circle "></a>
            <a class="qq"></a>
            <a class="qq-circle"></a>
            <a class="micro-blog"></a>
            <a class="share"></a>
          </p>
        </div>
      </div>
      <div class="product-describe">
        <p class="describe-title">{{$t("ProductDetail.describeTitle")}}</p>
        <p class="box-border describe-text">{{language=='cn'?ProductMsg.cnDescription:ProductMsg.enDescription}}</p>
      </div>
    </div>
    <div class="product-order-tab">
      <p class="orderTitle">{{$t("ProductDetail.orderTitle")}}</p>
      <hr/>
      <div>
        <span>{{$t("ProductDetail.contacts")}}：</span>
        <input name="contacts" type="text"/>
        <span>{{$t("ProductDetail.call")}}：</span>
        <input name="call" type="number"/>
        <span>{{$t("ProductDetail.mail")}}：</span>
        <input name="mail" type="email"/>
        <span>{{$t("ProductDetail.address")}}：</span>
        <input name="address" type="text"/>
      </div>
      <div>
        <textarea></textarea>
        <span>{{$t("ProductDetail.identifying")}}</span>
        <input name="identifying" type="text"/><span class="identifying-img"></span>
      </div>
      <div class="order-btn">
        <button class="submit">{{$t("ProductDetail.submit")}}</button>
        <button class="reset">{{$t("ProductDetail.reset")}}</button>
      </div>
    </div>
  </div>
  <Footer></Footer>
</div>
</template>

<script>
  import Nav from '../components/Nav'
  import Footer from  '../components/Footer'
    export default {
      data(){
        return{
          language:this.$i18n.locale,
          currentNav:3,
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
          ProductMsg:{
            imgList:['/static/img/hongxiang.jpg','/static/img/hongxiang.jpg','/static/img/hongxiang.jpg'],
            productName:'红橡',
            enName:'',buyUrl:'#',
            cnDescription:'颜色:乳白到本白。有时带轻淡红棕色，西部木材多数呈淡灰棕色。特征:木材紧密、纹理均匀、抛光性佳，偶有轻淡绿灰色之矿质纹路，易涂装。木质:强度适中，质量木质细腻。用此品种铺装地面，舒适、温柔、明亮、大方。',
            enDescription:''
          },
          PreviewImg:'/static/img/hongxiang.jpg'
        }
      },
      components:{
        Nav,
        Footer
      }
    }
</script>

<style scoped>

</style>
