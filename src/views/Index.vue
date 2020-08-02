<template>
  <div>
    <!-- 轮播图 -->
    <div class="block">
      <el-carousel height="511px">
        <el-carousel-item v-for="item in 4" :key="item"> </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 静态文字+立即合成跳转 -->
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
    <!-- 样音示例 -->
    <div class="content-muban">
      <!-- <p  class="content-muban-title">样音示例</p> -->
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
    <!-- 在线合成样音模板 -->
    <div class="content-muban2">
      <!-- <p class="content-muban-title">在线合成样音模板</p> -->
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
                  <button class="btn2-play" @click="isRead(item.title,item.mp3url),onclick()">
                    <img src="../assets/images/bofang2.png" alt="" />
                    <p>点击试听</p>
                  </button>
                      <el-dialog :title="forTitle" :visible.sync="PeiDialogVisible" width="30%"  center>
                        <audio id="audio" :src="forSrc" controls >
                        您的浏览器不支持 audio 标签。
                        </audio>
                        <span slot="footer" class="dialog-footer">
                          <el-button type="primary" @click="paused">确 定</el-button>
                        </span>
                      </el-dialog>
                  <button class="btn2-play">
                    <img src="../assets/images/zhizuo.png" alt="" />
                    <p>点击制作</p>
                  </button>
                </div>
            </li>
          </ul>
        </el-tab-pane>
        <el-tab-pane label="广告促销" name="two">
                  <ul class="content-y1">
            <li v-for="(item,index) of dataP2" :key="index">
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
        <el-tab-pane label="专题配音" name="three">
                  <ul class="content-y1">
            <li v-for="(item,index) of dataP3" :key="index">
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
        <el-tab-pane label="美容美发" name="four">
          <ul class="content-y1">
            <li v-for="(item,index) of dataP4" :key="index">
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
        <el-tab-pane label="课件培训" name="five">
          <ul class="content-y1">
            <li v-for="(item,index) of dataP5" :key="index">
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
        <el-tab-pane label="服装特卖" name="six">
          <ul class="content-y1">
            <li v-for="(item,index) of dataP6" :key="index">
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
      </el-tabs>
    </div>

    <!-- 主播 -->
    <div></div>


    <!-- 他们都选择了使用我们培音 -->
    <div class="changWe">
      <p class="changeWe-title">他们都选择使用我们的配音</p>
      <div class="changWe-Middle">
        <div class="changWe-content">
          <img src="../assets/images/meirong.png" alt="">
          <div class="changWe-text">
            <p>某美容美体连锁店   杨经理</p>
            <p>智能合成配音真的很方便，只要输入文字， 选择背景音乐，就可以制作一段慷慨激昂的 广告配音，简单方便。</p>
          </div>
        </div>
        <div class="changWe-content">
          <img src="../assets/images/youeryuan.png" alt="">
          <div class="changWe-text">
            <p>某幼儿园宣传广告   吕园长</p>
            <p>园里要做一个专题宣传片配音，看了好多家， 还是“培音”的主播音质好，性价比也高，语 音合成挺自然的。</p>
          </div>
        </div>
        <div  class="changWe-content">
          <img src="../assets/images/dichan.png" alt="">
          <div class="changWe-text">
            <p>某地产专题广告   王经理</p>
            <p>被人推荐的，主要用来给公司做一个专题的 广告推广，文字转语音的效果像真人，可以 随意挑选发音人。</p>
          </div>
        </div>
      </div>
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
      PeiDialogVisible: false,
      data1: [], //样音选项卡1数据
      data2: [], //样音选项卡2数据,
      dataP1: [], //首页全部配音选项卡数据,
      dataP2: [], 
      dataP3: [], 
      dataP4: [], 
      dataP5: [], 
      dataP6: [], 
      forTitle:"",
      forSrc:""
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
    pagination() {
      this.axios({
        method: "post",
        url: "/api/tts/api.php?c=1025&v=1.1&t=1596186983620&a=peiyinapp",
        data: {
          cmd: "GetTextSamples",
        },
      })
        .then((res) => {
          console.log(res.data.items)
          this.dataP1 = res.data.items.slice(0, 8);
          this.dataP2=res.data.items.slice(10, 18);
          this.dataP3=res.data.items.slice(20, 28);
          this.dataP4=res.data.items.slice(90, 98);
          this.dataP5=res.data.items.slice(130, 138);
          this.dataP6=res.data.items.slice(60, 68);

        })
        .catch((err) => {
          console.log(err);
        });
    },
     isRead(title,src){
        this.forTitle = title;
        this.forSrc = src;     
    },
    onclick(){
      this.PeiDialogVisible = true
    },
    paused(){
      let audio = document.querySelector('#audio');
      audio.pause();
      this.PeiDialogVisible = false;
    }
  },

  mounted() {
    this.getData();
    this.pagination();
  },
};
</script>
