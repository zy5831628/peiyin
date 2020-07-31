<template>
  <div class="">
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
      <p  class="content-muban-title">样音示例</p>
      <div class="content-peiyin">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="推荐样音" name="first">
            <ul class="content-m1">
              <li v-for="(item, index) of data1" :key="index">
                <img :src="item.imgurl" alt="" />
                <p class="content-m1-title">{{ item.title }}</p>
                <div class="content-m2">
                  <img src="../assets/images/xiaoyun.png" alt="" />
                  <p class="content-m2-title">{{ item.anchorName }}</p>
                  <p class="content-m2-title">{{ item.musicName }}</p>
                </div>
                <button class="btn-play">
                  <img src="../assets/images/bofang2.png" alt="" />
                  <p>点击试听</p>
                </button>
              </li>
            </ul>
          </el-tab-pane>
          <el-tab-pane label="广告推销" name="second">
            <ul class="content-m1">
              <li v-for="(item, index) of data2" :key="index">
                <img :src="item.imgurl" alt="" />
                <p class="content-m1-title">{{ item.title }}</p>
                <div class="content-m2">
                  <img src="../assets/images/xiaoyun.png" alt="" />
                  <p class="content-m2-title">{{ item.anchorName }}</p>
                  <p class="content-m2-title">{{ item.musicName }}</p>
                </div>
                <button class="btn-play" >
                  <img src="../assets/images/bofang2.png" alt="" />
                  <p>点击试听</p>
                </button>
              </li>
            </ul>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <div class="content-muban2">
      <p class="content-muban-title">在线合成样音模板</p>
      <el-tabs v-model="activeP" @tab-click="handleClick">
        <el-tab-pane label="全部配音" name="one">
          <ul class="content-y1">
            <li v-for="(item,index) of dataP1" :key="index">
                <p class="content-y1-title">{{item.title}}</p>
                <div class="content-y2">
                  <img src="../assets/images/xiaoyun.png" alt="" />
                  <p class="content-y2">{{item.anchorname}}</p>
                  <p class="content-y2">{{item.bgname}}</p>
                </div>
                <div class="content-y3">
                  <button class="btn2-play">
                    <img src="../assets/images/bofang2.png" alt="" />
                    <p>点击试听</p>
                  </button>
                  <button class="btn2-play">
                    <img src="../assets/images/zhizuo.png" alt="" />
                    <p>点击制作</p>
                  </button>
                </div>
            </li>
          </ul>
        </el-tab-pane>
        <el-tab-pane label="广告促销" name="two">配置管理</el-tab-pane>
        <el-tab-pane label="专题配音" name="three">角色管理</el-tab-pane>
        <el-tab-pane label="彩铃配音" name="four">彩铃配音</el-tab-pane>
        <el-tab-pane label="课件培训" name="five">彩铃配音</el-tab-pane>
        <el-tab-pane label="英文配音" name="six">彩铃配音</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<style>
.el-tabs__item {
  font-size: 1.25rem !important;
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
      activeName: "first", //样音选项卡
      activeP: "one", //配音选项卡
      data1: [], //样音选项卡1数据
      data2: [], //样音选项卡2数据,
      dataP: [], //配音总数据,
      dataP1: [], //分页保存数据
    };
  },
  methods: {
    //全部样音数据
    getData() {
      let t = new Date().getTime();
      this.axios({
        method: "post",
        url: "/api/tts/api.php?c=1028&v=1.1&t=" + this.t + "&a=peiyinapp",
        data: {
          cmd: "GetHomeSamples",
        },
      })
        .then((res) => {
          let arr1 = res.data.items.slice(0, 8);
          let arr2 = res.data.items.slice(25, 33);
          // console.log(arr2)
          this.data1 = arr1;
          this.data2 = arr2;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //卡片切换
    handleClick(tab, event) {
      // console.log(tab, event);
    },

    //配音分页数据
    pagination(pageNo) {
      this.axios({
        method: "post",
        url: "/api/tts/api.php?c=1025&v=1.1&t=1596186983620&a=peiyinapp",
        data: {
          cmd: "GetTextSamples",
        },
      })
        .then((res) => {
          let arr = res.data.items;
          // 获取切片的起始位置
          let origin = (pageNo - 1) * 8;
          // 判断起始切片加要切的元素数量加在一起是否大于数组的长度,如果大于,说明没有更多历史记录了,返回空数组即可或者返回
          let currentPage = arr.slice(origin, origin + 8);
          this.dataP1 = currentPage;
          console.log(this.dataP1);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },

  mounted() {
    this.getData();
    this.pagination(1);
  },
};
</script>
