<template>
  <div class="muban">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">合成配音</el-breadcrumb-item>
      <el-breadcrumb-item>配音模板</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="content">
      <span>分&nbsp;&nbsp;类</span>
      <ul>
        <li @click="change(-1)" :class="{active:current==-1}">全部配音</li>

        <li v-for="(item,i) of category" :key="i"  @click="change(i)" :class="{active:current==i}">{{item}}</li>
      
      </ul>
    </div>

      <ul class="content-y1"  v-show="current==-1">
        <li v-for="(item, index) of allData" :key="index">
          <p class="content-y1-title">{{ item.title }}</p>
          <div class="content-y2">
            <img src="../assets/images/xiaoyun.png" alt="" />
            <p class="content-y2">{{ item.anchorname }}</p>
            <p class="content-y2">{{ item.bgname }}</p>
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

    <ul class="content-y1"  v-for="(item,index) of data" :key="index" v-show="current==index">
      <li v-for="(i,index) of item" :key="index">
        <p class="content-y1-title">{{ i.title }}</p>
        <div class="content-y2">
          <img src="../assets/images/xiaoyun.png" alt="" />
          <p class="content-y2">{{ i.anchorname }}</p>
          <p class="content-y2">{{ i.bgname }}</p>
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

   
  </div>
</template>
<style scoped>
.muban {
  background: rgba(248, 248, 248, 1);
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.el-breadcrumb {
  font-size: 18px !important;
  line-height: 2;
}

.el-breadcrumb {
  padding: 10px 20px;
}
.content {
  display: flex;
  padding: 0 20px 10px 20px;
}
.content > span {
  font-size: 18px;
  display: inline-block;
  width: 100px;
  height: 22px;
  margin-top: 10px;
  padding:0 15px;
}
.content li {
  display: inline-block;
  width: 109px;
  text-align: center;
  font-size: 18px;
  margin: 10px 10px;

}

.content li:hover {
  color: #00c2fc;
  cursor: pointer;
}
.active {
  background:rgba(237,251,255,1);
  border-radius:10px;
}

</style>
<script>
export default {
  data() {
    return {
      current: 0,
      category:[],
      allData: [],
      data:[]
    };
  },
  methods: {
    //标签页
    change(index) {
      this.current = index;
    },
    //获取分类
    getCategory(){
      this.axios({
        method: "post",
        url: "/api/tts/api.php?c=1026&v=1.1&t=1596186983620&a=peiyinapp",
        data: {
          cmd: "GetTextSampleType",
        },
      })
        .then((res) => {
          // console.log(res.data.items);
          let arr=res.data.items;
          let result=arr.sort((a,b)=>{
            return a.id-b.id
          });
          let results=result.map((item)=>{
            return item.name
          });
          // console.log(results)
          this.category=results;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //所有数据
    getData() {
      this.axios({
        method: "post",
        url: "/api/tts/api.php?c=1025&v=1.1&t=1596186983620&a=peiyinapp",
        data: {
          cmd: "GetTextSamples",
        },
      })
        .then((res) => {
          // console.log(res.data.items);
          let arr=res.data.items;
          this.allData=arr;
            var map = {},
            dest = [];
          for (var i = 0; i < arr.length; i++) {
            var ai = arr[i];
            if (!map[ai.typeid]) {
              dest.push({
                typeid: ai.typeid,
                data: [ai],
              });
              map[ai.typeid] = ai;
            } else {
              for (var j = 0; j < dest.length; j++) {
                var dj = dest[j];
                if (dj.typeid == ai.typeid) {
                  dj.data.push(ai);
                  break;
                }
              }
            }
          }
          dest.sort((a,b)=>{
           return a.typeid-b.typeid;
          })
          // console.log(dest);
          let result = dest.map((item)=>{
            return item.data
          })    
          // console.log(result.slice(1))
          this.data=result.slice(1)
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
  mounted() {
       this.getData();
       this.getCategory();
    },
};
</script>
