<template>
  <div>
    <div class="block">
      <el-carousel height="511px">
        <el-carousel-item v-for="item in 4" :key="item"> </el-carousel-item>
      </el-carousel>
    </div>
    <div class="content-text">
      <div class="text-top">文字转语音</div>
      <div class="text-middle">——输入文字，立即合成配音——</div>
      <div class="content-middle">
        <div>
          <img src="../assets/images/feiyong.png" alt="" />
          <p>费用低</p>
          <p>价格远低于真人</p>
        </div>
        <div>
          <img src="../assets/images/duoyuyan.png" alt="" />
          <p>音色众多</p>
          <p>普通话、英语等百款主播</p>
        </div>
        <div>
          <img src="../assets/images/fuwu.png" alt="" />
          <p>优质服务</p>
          <p>尽职尽责服务用户</p>
        </div>
        <div>
          <img src="../assets/images/sudu.png" alt="" />
          <p>高效便捷</p>
          <p>输入文字秒变声音</p>
        </div>
      </div>
      <div class="btn-hecheng">
        <router-link to="">立即合成配音</router-link>
      </div>
    </div>
    <div class="content-muban">
      <p>样音示例</p>
      <div class="content-peiyin">
          <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="推荐样音" name="first">
            <ul class="content-m1">
              <li v-for="(item,index) of data1" :key="index">
                <img :src="item.imgurl" alt="" />  
                <p>{{item.title}}</p>
                <div class="content-m2">
                  <img src="../assets/images/xiaoyun.png" alt="">
                  <p>{{item.anchorName}}</p>
                  <p>{{item.musicName}}</p>
                </div>
                <button class="btn-play" @click="playAudio">
                    <audio :src="item.url" controls="controls"></audio>
                     <img src="../assets/images/bofang2.png" alt="">
                    <p>点击试听</p>
                </button>
              </li>
            </ul>
          </el-tab-pane>
          <el-tab-pane label="广告推销" name="second">
            <ul class="content-m1">
              <li v-for="(item,index) of data2" :key="index">
                <img :src="item.imgurl" alt="" />  
                <p>{{item.title}}</p>
                <div class="content-m2">
                  <img src="../assets/images/xiaoyun.png" alt="">
                  <p>{{item.anchorName}}</p>
                  <p>{{item.musicName}}</p>
                </div>
                <button class="btn-play" @click="playAudio">
                    <audio :src="item.url" controls="controls"></audio>
                     <img src="../assets/images/bofang2.png" alt="">
                    <p>点击试听</p>
                </button>
              </li>
            </ul>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <div class="content-muban2">
      <p>样音示例</p>
      
    </div>
  </div>
</template>

<style >
.el-tabs__item{
  font-size: 20px !important;
}
.el-carousel__item:nth-child(2n) {
  background: url(../assets/images/banner1.png) center 0 no-repeat;
}

.el-carousel__item:nth-child(2n + 1) {
  background: url(../assets/images/banner1.png) center 0 no-repeat;
}
</style>
<script>
export default {
  data() {
    return {
      activeName: 'first',
      activeNameTwo:'one',
      data1:[],
      data2:[]
      }
  },
  methods: {
    //全部样音数据
    getData() {
      let t=new Date().getTime();
      this.axios({
        method: "post",
        url: "/api/tts/api.php?c=1028&v=1.1&t="+this.t+"&a=peiyinapp",
        data:
          {
            "cmd": "GetHomeSamples"
          }
      })
        .then((res) => {
          let arr1=res.data.items.slice(0,8);
          let arr2 =res.data.items.slice(25,33);
          console.log(arr2)
          this.data1=arr1;
          this.data2=arr2;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //卡片切换
    handleClick(tab, event) {
        // console.log(tab, event);
      },
    playAudio(){
      this.$refs.audio.play()
    }
  },

  mounted() {
      this.getData();
    }
};
</script>
