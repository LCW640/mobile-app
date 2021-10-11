<template>
  <div>
    <!-- 标题栏 -->
    <mt-header title="timu" fixed>
      <div slot="right">
        <router-link class="link" to="/register">注册</router-link>
        &nbsp;
        <router-link class="link" to="/login">登录</router-link>
      </div>
    </mt-header>
    <!-- 导航 -->
    <mt-navbar style="margin-top: 40px;"
      v-model="navactive" fixed>
      <mt-tab-item 
        v-for="(item,i) in cats" :key="i" 
        :id="`${item.id}`">
        {{item.category_name}}
      </mt-tab-item>
    </mt-navbar>
    <!-- 内容面板组 -->
    <mt-tab-container
      style="margin-top:95px; margin-bottom:60px;" >
      <mt-tab-container-item>
        <mt-swipe :style="{height:h}"
                  :speed="200"
                  :auto="4000"
                  :showIndicators="true"
                  :continuous="true" 
                  class="mtswipe">
          <mt-swipe-item>
            <img src="/a.jpg">
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="/b.jpg">
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="/c.jpg">
          </mt-swipe-item>
        </mt-swipe>

        <!-- 单一文章信息开始 -->
        <div class="articleItem"
             v-for="(item,i) in articles" :key="i">
          <!-- 文章标题开始 -->
          <div class="articleItem-header">{{item.subject}}</div>
          <!-- 文章标题结束 -->
          <!-- 文章图文信息开始 -->
          <div class="articleItem-wrapper">
            <!-- 文章图像开始  -->
            <div class="articleImg">
              <img v-if="item.image" :src="`/articles/${item.image}`" />
            </div>
            <!-- 文章图像结束 -->
            <!-- 文章简介开始 -->
            <div class="articleDes">
              {{item.description}}
            </div>
            <!-- 文章简介结束 -->
          </div>
          <!-- 文章图文信息结束 -->
        </div>
        <!-- 单一文章信息结束 -->

      </mt-tab-container-item>
    </mt-tab-container>

    <!-- 底部选项卡 -->
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="main">
        <img v-if="selected=='main'" 
             src="../assets/main_1.png" slot="icon">
        <img v-else src="../assets/main_0.png" slot="icon">
        首页
      </mt-tab-item>
      <mt-tab-item id="me">
        <img v-if="selected=='me'" 
             src="../assets/me_1.png" slot="icon">
        <img v-else src="../assets/me_0.png" slot="icon">            
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navactive: '1',
      selected: 'main',
      h: '210px',     // 轮播图高度
      cats: [],       // 保存类别列表
      articles: []    // 保存当前页面中的文章列表
    }
  },
  watch: {
    selected(){ // 只能变为me
      this.$router.push('/me');
    },
    navactive(newval){  // 监听navactive
      // 将滚动条滚到页面顶部
      window.scrollTo(0, 0);
      console.log('cid:'+newval);  //newval就是相应类别的ID
      // 发送http请求，访问当前类别下的第一页数据
      this.axios.get(
        `/articles?cid=${newval}&page=1`).then(result=>{
          console.log(result);
          // 替换当前文章列表
          this.articles = result.data.results;
      })
    }
  },
  methods: {
    /** 初始化轮播图的高度 */
    initSwipeHeight(){
      let picw = 1242;
      let pich = 698;
      let screenw = window.screen.width; // 屏幕宽度的像素值
      let swipeh = Math.floor(pich*screenw / picw)+'px';
      this.h = swipeh;
    }
  },
  mounted(){
    // 重新根据当前屏幕宽度计算轮播图容器的高度值
    this.initSwipeHeight();

    // 发送http请求，获取类别列表
    this.axios.get('/category').then((result)=>{
      console.log(result);
      // 从响应数据包中引用类别数组数据   赋值给data中的cats变量
      this.cats = result.data.results;
    })

    // 发送http请求，获取UI类别下的首页文章列表数据
    this.axios.get('/articles?cid=1&page=1').then(result=>{
      console.log(result); // 将文章列表存入data.articles
      this.articles = result.data.results;      
    })
  }
}
</script>

<style scoped>
.link{ 
  color:white; 
}
.mtswipe img { 
  width: 100%; 
}
.articleItem {
  padding: 10px 0;
  margin: 0 10px;
  border-bottom: 1px solid #999;
}
.articleItem-header {
  font-weight: 600;
  font-size: 17px;
  color: #1a1a1a;
  line-height: 22px;
}
.articleItem-wrapper {
  display: flex;
  align-items: center;
  padding-top: 10px;
  width: 100%;
}
.articleImg {
  margin-right: 15px;
}
.articleImg img {
  width: 112px;
  height: 74px;
  border-radius: 5px;
}
.articleDes {
  height: 65px;
  font-size: 15px;
  overflow: hidden;
  font-weight: 400;
  text-overflow: ellipsis;
  line-height: 21px;
  letter-spacing: normal;
  color: #444;
}
</style>