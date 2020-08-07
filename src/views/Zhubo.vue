<template>
  <div class="muban">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">合成配音</el-breadcrumb-item>
      <el-breadcrumb-item>配音主播</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="category">
      <ul  class="content">
        <li>分&nbsp;&nbsp;类</li>
        <li  @click="change(-1)">全部主播</li>

        <li v-for="(item,i) of category" :key="i"  @click="change(i)" :class="{active:current==i}">{{item}}</li>
      </ul>

      <ul class="zhubo" v-show="current==-1">
        <li v-for="(item, index) of zhubo" :key="index">
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

      
      <ul class="zhubo" v-for="(items,index) of data" :key="index" v-show="current==index">
        <li v-for="(item, index) of items" :key="index">
            <img class="zhubo-img" :src="require('../assets/images/headPortrait/' +item.name +'.png')" alt=""/>
          <div class="zhubo-item">
            <p>{{ item.character }}</p>
            <p>{{item.name}}</p>
          </div>

            <div class="zhubo-btn1">
              <img src="../assets/images/bofanghui.png" alt="" />
              <p>{{ item[0].name}}-{{ item[0].desc }}</p>
            </div>
            <div class="zhubo-btn1">
              <img src="../assets/images/bofanghui.png" alt="" />
              <p>{{ item[1].name}}-{{ item[1].desc }}</p>
            </div>
            <div class="zhubo-btn3">
              <div class="btn3-img"></div>
              <p>立即制作</p>
            </div>

        </li>
      </ul>


    </div>
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
.content{
  margin-left: 20px;
  margin-bottom: 30px;
}
.content>li:first-child {
  font-size: 20px;
}

.content li {
  display: inline-block;
  font-size: 18px;
  margin: 0px 10px;
}

.content li:hover {
  color: #00c2fc;
  cursor: pointer;
}
.active {
  background: rgba(237, 251, 255, 1);
  border-radius: 10px;
}

</style>
<script>
export default {
  data() {
    return {
      current: 0,
      category: [],
      zhubo: [],
      data:[]
    };
  },
  methods: {
    change(i){
      this.current=i
    },
    getCategory() {
      this.axios({
        method: "post",
        url: "/api/tts/api.php?c=1033&v=1.1&t=1596186983620&a=peiyinapp",
        data: {
          cmd: "GetAnchorType",
        },
      })
        .then((res) => {
          // console.log(res.data.items)
          let arr=res.data.items;
          let result=arr.map((item)=>{
            return item.name
          });
          // console.log(result)
          this.category=result
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getZhubo() {
      this.axios({
        method: "post",
        url: "/api/tts/api.php?c=1032&v=1.1&t=1596186983620&a=peiyinapp",
        data: {
          cmd: "GetAnchorDetail",
        },
      })
        .then((res) => {
          // console.log(res.data.anchors);
          let arr = res.data.anchors;
          this.zhubo = arr;
          let result=arr.map(item=>{
             [].push.apply(item.anchor,item.sample);
             return item.anchor
          })
          // console.log(result);
           var map = {},dest = [];
          for (var i = 0; i < result.length; i++) {
            var ai = result[i];
            if (!map[ai.type]) {
              dest.push({
                type: ai.type,
                data: [ai],
              });
              map[ai.type] = ai;
            } else {
              for (var j = 0; j < dest.length; j++) {
                var dj = dest[j];
                if (dj.type == ai.type) {
                  dj.data.push(ai);
                  break;
                }
              }
            }
          }
          // console.log(dest);
        
        let dest1= dest.filter((item)=>{
          return item.type.match("1")
        })
        let data1=[]
          dest1.map((item,index)=>{
           data1=data1.concat(item.data)
          })
          // console.log(data1)
          this.data.push(data1);

        let dest2= dest.filter((item)=>{
          return item.type.match("2")
        })
        let data2=[]
          dest2.map((item,index)=>{
           data2=data2.concat(item.data)
          })
          // console.log(data2)
          this.data.push(data2);

        let dest3= dest.filter((item)=>{
          return item.type.match("3")
        })
        let data3=[]
          dest3.map((item,index)=>{
           data3=data3.concat(item.data)
          })
          // console.log(data3)
          this.data.push(data3);

        
        let dest4= dest.filter((item)=>{
          return item.type.match("4")
        })
        let data4=[]
          dest4.map((item,index)=>{
           data4=data4.concat(item.data)
          })
          // console.log(data4)
          this.data.push(data4);

        let dest5= dest.filter((item)=>{
          return item.type.match("5")
        })
        let data5=[]
          dest5.map((item,index)=>{
           data5=data5.concat(item.data)
          })
          console.log(data5)
          this.data.push(data5);

        let dest6= dest.filter((item)=>{
          return item.type.match("6")
        })
        let data6=[]
          dest6.map((item,index)=>{
           data6=data6.concat(item.data)
          })
          console.log(data6)
          this.data.push(data6);
        
        console.log(this.data)

        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getZhubo();
    this.getCategory();
  },
};
</script>
