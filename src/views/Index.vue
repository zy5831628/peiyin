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
      <div class="muban-content">
        <p class="muban-title">样音示例</p>
        <ul class="tab">
          <li @mouseenter="change(0)">全部样音</li>
          <li>|</li>
          <li @mouseenter="change(1)">广告促销</li>
          <div style="clear:both;"></div>
        </ul>
      </div>
      <div>
        <div v-if="i == 0" class="tab-item">
          <div v-for="(item, index) of data.slice(0,8)" :key="index" class="tab-content">
            <img :src="item.imgurl" alt="" />
            <p class="content1-title">{{ item.title }}</p>
            <div class="content-m2">
              <img :src="require('../assets/images/headPortrait/' +item.anchorName+'.png')" alt="" />
              <p class="content-m2-title">{{ item.anchorName }}</p>
              <p class="content-m2-title">{{ item.musicName }}</p>
            </div>
            <button class="btn-play">
              <img src="../assets/images/bofang2.png" alt="" />
              <p>点击试听</p>
            </button>
          </div>
        </div>

        <div v-else class="tab-item">
          <div v-for="(item, index) of data.slice(25,33)" :key="index" class="tab-content">
            <img :src="item.imgurl" alt="" />
            <p class="content1-title">{{ item.title }}</p>
            <div class="content-m2">
              <img :src="require('../assets/images/headPortrait/' +item.anchorName+'.png')" alt="" />
              <p class="content-m2-title">{{ item.anchorName }}</p>
              <p class="content-m2-title">{{ item.musicName }}</p>
            </div>
            <button class="btn-play">
              <img src="../assets/images/bofang2.png" alt="" />
              <p>点击试听</p>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- 在线合成样音模板-->
    <div class="content-muban2">
      <div>
        <div class="muban-content1">
        <p class="muban-title1">在线合成样音模板</p>
        <ul class="tab1">
          <li @mouseenter="change(2)">全部配音</li>
          <li>|</li>
          <li @mouseenter="change(3)">广告促销</li>
          <li>|</li>
          <li @mouseenter="change(4)">专题配音</li>
          <li>|</li>
          <li @mouseenter="change(5)">美容美发</li>
          <li>|</li>
          <li @mouseenter="change(6)">课件培训</li>
          <li>|</li>
          <li @mouseenter="change(7)">服装特卖</li>
          <div style="clear:both;"></div>
        </ul>
        </div>
        <ul class="content-y1" v-if="i==2">
          <li v-for="(item, index) of dataP.slice(0, 8)" :key="index">
            <p class="content-y1-title">{{ item.title }}</p>
            <div class="content-y2">
              <img :src="require('../assets/images/headPortrait/' +item.anchorname+'.png')" alt="" />
              <p class="content-y2">{{ item.anchorname }}</p>
              <p class="content-y2">{{ item.bgname }}</p>
            </div>
            <div class="content-y3">
              <button
                class="btn2-play"
                @click="isRead(item.title, item.mp3url), onclick()"
              >
                <img src="../assets/images/bofang2.png" alt="" />
                <p>点击试听</p>
              </button>
              <el-dialog
                :title="forTitle"
                :visible.sync="PeiDialogVisible"
                width="30%"
                center
              >
                <audio id="audioPlayer" :src="forSrc" controls>
                  您的浏览器不支持 audio 标签。
                </audio>
                <span slot="footer" class="dialog-footer">
                  <el-button type="primary" @click="pauseAudio">确 定</el-button>
                </span>
              </el-dialog>
              <button class="btn2-play">
                <img src="../assets/images/zhizuo.png" alt="" />
                <p>点击制作</p>
              </button>
            </div>
          </li>
        </ul>

        <ul class="content-y1" v-else-if="i==3">
          <li v-for="(item, index) of dataP.slice(10, 18)" :key="index">
            <p class="content-y1-title">{{ item.title }}</p>
            <div class="content-y2">
              <img :src="require('../assets/images/headPortrait/' +item.anchorname+'.png')" alt="" />
              <p class="content-y2">{{ item.anchorname }}</p>
              <p class="content-y2">{{ item.bgname }}</p>
            </div>
            <div class="content-y3">
              <button
                class="btn2-play"
                @click="isRead(item.title, item.mp3url), onclick()"
              >
                <img src="../assets/images/bofang2.png" alt="" />
                <p>点击试听</p>
              </button>
              <el-dialog
                :title="forTitle"
                :visible.sync="PeiDialogVisible"
                width="30%"
                center
              >
                <audio id="audioPlayer"  :src="forSrc" controls>
                  您的浏览器不支持 audio 标签。
                </audio>
                <span slot="footer" class="dialog-footer">
                  <el-button type="primary" @click="pauseAudio">确 定</el-button>
                </span>
              </el-dialog>
              <button class="btn2-play">
                <img src="../assets/images/zhizuo.png" alt="" />
                <p>点击制作</p>
              </button>
            </div>
          </li>
        </ul>

        <ul class="content-y1" v-else-if="i==4">
          <li v-for="(item, index) of dataP.slice(20, 28)" :key="index">
            <p class="content-y1-title">{{ item.title }}</p>
            <div class="content-y2">
              <img :src="require('../assets/images/headPortrait/' +item.anchorname+'.png')" alt="" />
              <p class="content-y2">{{ item.anchorname }}</p>
              <p class="content-y2">{{ item.bgname }}</p>
            </div>
            <div class="content-y3">
              <button
                class="btn2-play"
                @click="isRead(item.title, item.mp3url), onclick()"
              >
                <img src="../assets/images/bofang2.png" alt="" />
                <p>点击试听</p>
              </button>
              <el-dialog
                :title="forTitle"
                :visible.sync="PeiDialogVisible"
                width="30%"
                center
              >
                <audio id="audioPlayer" :src="forSrc" controls>
                  您的浏览器不支持 audio 标签。
                </audio>
                <span slot="footer" class="dialog-footer">
                  <el-button type="primary" @click="pauseAudio">确 定</el-button>
                </span>
              </el-dialog>
              <button class="btn2-play">
                <img src="../assets/images/zhizuo.png" alt="" />
                <p>点击制作</p>
              </button>
            </div>
          </li>
        </ul>

        <ul class="content-y1" v-else-if="i==5">
          <li v-for="(item, index) of dataP.slice(90, 98)" :key="index">
            <p class="content-y1-title">{{ item.title }}</p>
            <div class="content-y2">
              <img :src="require('../assets/images/headPortrait/' +item.anchorname+'.png')" alt="" />
              <p class="content-y2">{{ item.anchorname }}</p>
              <p class="content-y2">{{ item.bgname }}</p>
            </div>
            <div class="content-y3">
              <button
                class="btn2-play"
                @click="isRead(item.title, item.mp3url), onclick()"
              >
                <img src="../assets/images/bofang2.png" alt="" />
                <p>点击试听</p>
              </button>
              <el-dialog
                :title="forTitle"
                :visible.sync="PeiDialogVisible"
                width="30%"
                center
              >
                <audio id="audioPlayer"  :src="forSrc" controls>
                  您的浏览器不支持 audio 标签。
                </audio>
                <span slot="footer" class="dialog-footer">
                  <el-button type="primary" @click="pauseAudio">确 定</el-button>
                </span>
              </el-dialog>
              <button class="btn2-play">
                <img src="../assets/images/zhizuo.png" alt="" />
                <p>点击制作</p>
              </button>
            </div>
          </li>
        </ul>

        <ul class="content-y1" v-else-if="i==6">
          <li v-for="(item, index) of dataP.slice(130, 138)" :key="index">
            <p class="content-y1-title">{{ item.title }}</p>
            <div class="content-y2">
              <img :src="require('../assets/images/headPortrait/' +item.anchorname+'.png')" alt="" />
              <p class="content-y2">{{ item.anchorname }}</p>
              <p class="content-y2">{{ item.bgname }}</p>
            </div>
            <div class="content-y3">
              <button
                class="btn2-play"
                @click="isRead(item.title, item.mp3url), onclick()"
              >
                <img src="../assets/images/bofang2.png" alt="" />
                <p>点击试听</p>
              </button>
              <el-dialog
                :title="forTitle"
                :visible.sync="PeiDialogVisible"
                width="30%"
                center
              >
                <audio :src="forSrc" controls id="audioPlayer">
                  您的浏览器不支持 audio 标签。
                </audio>
                <span slot="footer" class="dialog-footer">
                  <el-button type="primary" @click="pauseAudio">确 定</el-button>
                </span>
              </el-dialog>
              <button class="btn2-play">
                <img src="../assets/images/zhizuo.png" alt="" />
                <p>点击制作</p>
              </button>
            </div>
          </li>
        </ul>

        <ul class="content-y1" v-else>
          <li v-for="(item, index) of dataP.slice(60, 68)" :key="index">
            <p class="content-y1-title">{{ item.title }}</p>
            <div class="content-y2">
              <img :src="require('../assets/images/headPortrait/' +item.anchorname+'.png')" alt="" />
              <p class="content-y2">{{ item.anchorname }}</p>
              <p class="content-y2">{{ item.bgname }}</p>
            </div>
            <div class="content-y3">
              <button
                class="btn2-play"
                @click="isRead(item.title, item.mp3url), onclick()"
              >
                <img src="../assets/images/bofang2.png" alt="" />
                <p>点击试听</p>
              </button>
              <el-dialog
                :title="forTitle"
                :visible.sync="PeiDialogVisible"
                width="30%"
                center
              >
                <audio id="audioPlayer"  :src="forSrc" controls>
                  您的浏览器不支持 audio 标签。
                </audio>
                <span slot="footer" class="dialog-footer">
                  <el-button type="primary" @click="pauseAudio">确 定</el-button>
                </span>
              </el-dialog>
              <button class="btn2-play">
                <img src="../assets/images/zhizuo.png" alt="" />
                <p>点击制作</p>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!-- 主播 -->
    <div class="content-zhubo">
      <div>
        <div class="muban-content2">
            <p class="muban-title2">合成主播</p>
          <ul class="tab2">
            <li @mouseenter="change(8)">全部主播</li>
            <li>|</li>
            <li @mouseenter="change(9)">磁性男生</li>
            <li>|</li>
            <li @mouseenter="change(10)">温柔女声</li>
            <li>|</li>
            <li @mouseenter="change(11)">方言主播</li>
            <li>|</li>
            <li @mouseenter="change(12)">英文主播</li>
            <li>|</li>
            <li @mouseenter="change(13)">童声</li>
            <div style="clear:both;"></div>
          </ul>
        </div>
        <div>
         
          <ul class="zhubo" v-if="i==8">
            <li v-for="(item,index) of zhubo.slice(0,4)" :key="index">
              <img class="zhubo-img" :src="require('../assets/images/headPortrait/' +item.anchor.name +'.png')" alt=""/>
                <div class="zhubo-item">
                  <p>{{ item.anchor.character }}</p>
                  <p>{{ item.anchor.name }}</p>
                </div>
                  <div class="zhubo-btn1">
                    <img src="../assets/images/bofanghui.png" alt="" />
                    <p>{{ item.sample[0].name }}-{{ item.sample[0].desc }}</p>
                  </div>
                  <div class="zhubo-btn1">
                    <img src="../assets/images/bofanghui.png" alt="" />
                    <p>{{ item.sample[1].name }}-{{ item.sample[1].desc }}</p>
                  </div>
                  <div class="zhubo-btn3">
                    <div class="btn3-img"></div>
                    <span>立即制作</span>
                  </div>
              </li>
      </ul>

          <ul class="zhubo" v-else-if="i==9">
            <li v-for="(item,index) of zhubo.slice(4,8)" :key="index">
               <img class="zhubo-img" :src="require('../assets/images/headPortrait/' +item.anchor.name +'.png')" alt=""/>
                <div class="zhubo-item">
                  <p>{{ item.anchor.character }}</p>
                  <p>{{ item.anchor.name }}</p>
                </div>
                  <div class="zhubo-btn1">
                    <img src="../assets/images/bofanghui.png" alt="" />
                    <p>{{ item.sample[0].name }}-{{ item.sample[0].desc }}</p>
                  </div>
                  <div class="zhubo-btn1">
                    <img src="../assets/images/bofanghui.png" alt="" />
                    <p>{{ item.sample[1].name }}-{{ item.sample[1].desc }}</p>
                  </div>
                  <div class="zhubo-btn3">
                    <div class="btn3-img"></div>
                    <span>立即制作</span>
                  </div>
              </li>
          </ul>

          <ul class="zhubo" v-else-if="i==10">
            <li v-for="(item,index) of zhubo.slice(11,15)" :key="index">
              <img class="zhubo-img" :src="require('../assets/images/headPortrait/' +item.anchor.name +'.png')" alt=""/>
                <div class="zhubo-item">
                  <p>{{ item.anchor.character }}</p>
                  <p>{{ item.anchor.name }}</p>
                </div>
                  <div class="zhubo-btn1">
                    <img src="../assets/images/bofanghui.png" alt="" />
                    <p>{{ item.sample[0].name }}-{{ item.sample[0].desc }}</p>
                  </div>
                  <div class="zhubo-btn1">
                    <img src="../assets/images/bofanghui.png" alt="" />
                    <p>{{ item.sample[1].name }}-{{ item.sample[1].desc }}</p>
                  </div>
                  <div class="zhubo-btn3">
                    <div class="btn3-img"></div>
                    <span>立即制作</span>
                  </div>
              </li>
          </ul>


          <ul class="zhubo" v-else-if="i==11">
            <li v-for="(item,index) of zhubo.slice(37,41)" :key="index">
               <img class="zhubo-img" :src="require('../assets/images/headPortrait/' +item.anchor.name +'.png')" alt=""/>
                <div class="zhubo-item">
                  <p>{{ item.anchor.character }}</p>
                  <p>{{ item.anchor.name }}</p>
                </div>
                  <div class="zhubo-btn1">
                    <img src="../assets/images/bofanghui.png" alt="" />
                    <p>{{ item.sample[0].name }}-{{ item.sample[0].desc }}</p>
                  </div>
                  <div class="zhubo-btn1">
                    <img src="../assets/images/bofanghui.png" alt="" />
                    <p>{{ item.sample[1].name }}-{{ item.sample[1].desc }}</p>
                  </div>
                  <div class="zhubo-btn3">
                    <div class="btn3-img"></div>
                    <span>立即制作</span>
                  </div>
              </li>
           </ul>

          <ul class="zhubo" v-else-if="i==12">
            <li v-for="(item,index) of zhubo.slice(43,47)" :key="index">
               <img class="zhubo-img" :src="require('../assets/images/headPortrait/' +item.anchor.name +'.png')" alt=""/>
                <div class="zhubo-item">
                  <p>{{ item.anchor.character }}</p>
                  <p>{{ item.anchor.name }}</p>
                </div>
                  <div class="zhubo-btn1">
                    <img src="../assets/images/bofanghui.png" alt="" />
                    <p>{{ item.sample[0].name }}-{{ item.sample[0].desc }}</p>
                  </div>
                  <div class="zhubo-btn1">
                    <img src="../assets/images/bofanghui.png" alt="" />
                    <p>{{ item.sample[1].name }}-{{ item.sample[1].desc }}</p>
                  </div>
                  <div class="zhubo-btn3">
                    <div class="btn3-img"></div>
                    <span>立即制作</span>
                  </div>
              </li>
          </ul>

         <ul class="zhubo" v-else>
            <li v-for="(item,index) of zhubo.slice(55,59)" :key="index">
               <img class="zhubo-img" :src="require('../assets/images/headPortrait/' +item.anchor.name +'.png')" alt=""/>
                <div class="zhubo-item">
                  <p>{{ item.anchor.character }}</p>
                  <p>{{ item.anchor.name }}</p>
                </div>
                  <div class="zhubo-btn1">
                    <img src="../assets/images/bofanghui.png" alt="" />
                    <p>{{ item.sample[0].name }}-{{ item.sample[0].desc }}</p>
                  </div>
                  <div class="zhubo-btn1">
                    <img src="../assets/images/bofanghui.png" alt="" />
                    <p>{{ item.sample[1].name }}-{{ item.sample[1].desc }}</p>
                  </div>
                  <div class="zhubo-btn3">
                    <div class="btn3-img"></div>
                    <span>立即制作</span>
                  </div>
              </li>
          </ul>


        </div>
      </div>
    </div>

    <!-- 他们都选择了使用我们培音 -->
    <div class="changWe">
      <p class="changeWe-title">他们都选择使用我们的配音</p>
      <div class="changWe-Middle">
        <div class="changWe-content">
          <img src="../assets/images/meirong.png" alt="" />
          <div class="changWe-text">
            <p>某美容美体连锁店 杨经理</p>
            <p>
              智能合成配音真的很方便，只要输入文字，
              选择背景音乐，就可以制作一段慷慨激昂的 广告配音，简单方便。
            </p>
          </div>
        </div>
        <div class="changWe-content">
          <img src="../assets/images/youeryuan.png" alt="" />
          <div class="changWe-text">
            <p>某幼儿园宣传广告 吕园长</p>
            <p>
              园里要做一个专题宣传片配音，看了好多家，
              还是“培音”的主播音质好，性价比也高，语 音合成挺自然的。
            </p>
          </div>
        </div>
        <div class="changWe-content">
          <img src="../assets/images/dichan.png" alt="" />
          <div class="changWe-text">
            <p>某地产专题广告 王经理</p>
            <p>
              被人推荐的，主要用来给公司做一个专题的
              广告推广，文字转语音的效果像真人，可以 随意挑选发音人。
            </p>
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
      i: 0,
      PeiDialogVisible: false,
      data:[],
      dataP: [], //首页全部配音选项卡数据,
      isPlay:true,//是否正在播放
      forTitle: "",
      forSrc: "",
      zhubo:[],
    };
  },
  methods: {
    //全部样音数据
    getData() {
      this.axios({
        method: "post",
        url: "/api/tts/api.php?c=1028&v=1.1&t=1596186983620&a=peiyinapp",
        data: {
          cmd: "GetHomeSamples",
        },
      })
        .then((res) => {
          this.data= res.data.items
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //选项卡切换
    change(i) {
      this.i = i;
    },
    pauseAudio(){
      document.getElementById('audioPlayer').pause();
      this.isPlay=false;
      this.PeiDialogVisible = false;
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
          // console.log(res.data.items);
          this.dataP=res.data.items;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    
    getZhubo(){
      this.axios({
        method: "post",
        url: "/api/tts/api.php?c=1032&v=1.1&t=1596186983620&a=peiyinapp",
        data: {
          cmd: "GetAnchorDetail",
        },
      })
        .then((res) => {
          // console.log(res.data.anchors);
          let arr=res.data.anchors;
          let result=arr.sort((a,b)=>{
            return a.anchor.type.slice(0,1)-b.anchor.type.slice(0,1)
          })
          console.log(result);
          this.zhubo=result;
    })
        .catch((err) => {
          console.log(err);
        });
    },

    isRead(title, src) {
      this.forTitle = title;
      this.forSrc = src;
    },
    onclick() {
      this.PeiDialogVisible = true;
    }
  },

  mounted() {
    this.getData();
    this.pagination();
    this.getZhubo();
  },
};
</script>
