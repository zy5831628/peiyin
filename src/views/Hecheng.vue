<template>
  <div class="hecheng">
    <div class="hecheng-title">
      <p>在线合成样音模版</p>
      <p>更多模板>></p>
    </div>
    <div class="hecheng-content">
        <ul>
          <li>
              <img src="../assets/images/zhubo.png" alt="">
              <div class="imgtag">更换主播</div>
          </li>
          <li>
              <p>背景音乐:</p>
              <div class="bg-choose button-bg">
                  <a href="javascript:;">选择/上传音乐</a>
              </div>
              <div class="bg-choose button-adre" style="display: none;">
                  <a class="button-bg" href="javascript:;" style="display: block;">添加背景音乐</a>
                      <a href="javascript:;" class="bg-name">欢快悠扬音乐1（Sweet Butterfly）</a>
                      <input type="hidden" class="bgmusic_no" name="bgmusicNo" value="">
                      <input type="hidden" class="bgmusic_url" name="bgmusic_url" value="">
                      <input type="hidden" class="bgMusicDestPercent" value="">
                      <input type="hidden" class="headFadeDownDuration" value="">
                      <input type="hidden" class="endFadeDownDuration" value="">
                  <i></i>
              </div>
              <p>朗读速度:</p>
              <div class="make-bar">
                  <div class="speed">
                      <div class="speedm">慢</div>
                      <div class="speedk">快</div>
                      <a href="javascript:; " class="sp1" val="-200"><span class="scale1 "></span></a>
                      <a href="javascript:; " class="sp2 checked" val="-100"><span class="scale2 "></span></a>
                      <a href="javascript:;" class="sp3" val="0"><span class="scale3 "></span></a>
                      <a href="javascript:; " class="sp4" val="100"><span class="scale4 "></span></a>
                      <a href="javascript:;" class="sp5" val="200"><span class="scale5 "></span></a>
                      <input type="hidden" value="-100" class="speedValue">
                  </div>

                  <div class="speed-name">
                      <span class="sn1">0.6x</span>
                      <span class="sn2">0.8x</span>
                      <span class="sn3">1.0x</span>
                      <span class="sn4">1.2x</span>
                      <span class="sn5">1.4x</span>
                  </div>
              </div>
          </li>
          <li class="make-bg">
              <p style="float:left;margin-top: 0px;">音乐音量：<span id="chrome-tip" style="font-size: 12px; color: rgb(102, 102, 102);"></span></p>
                <div class="chanebig">小</div>
              <div class="inputdiv" style="top: 0px;">
                  <input class="bgmuzsize" max="100" min="0" value="20" type="range">
                  <div class="sizenum" style="left: 8%;">10</div>
              </div>
              <div class="changesmall">大</div>
              <div class="bgdefault defaultsize">默认大小</div>
              <p style="float:left;clear: left;margin-top: 30px;">主播音量：</p>
              <div class="sizeload" style="display: none;">
                  <div class="spinner">
                      <div class="spinner-container container1">
                          <div class="circle1"></div>
                          <div class="circle2"></div>
                          <div class="circle3"></div>
                          <div class="circle4"></div>
                      </div>
                      <div class="spinner-container container2">
                          <div class="circle1"></div>
                          <div class="circle2"></div>
                          <div class="circle3"></div>
                          <div class="circle4"></div>
                      </div>
                      <div class="spinner-container container3">
                          <div class="circle1"></div>
                          <div class="circle2"></div>
                          <div class="circle3"></div>
                          <div class="circle4"></div>
                      </div>
                  </div>
              </div>
              <style>
              </style>
              <div class="chanebig1 chanebig1-1">小</div>
              <div class="inputdiv" style="top: 56px;;">
                  <input style="margin-top: 16px" class="anchorsize" max="100" min="0" value="50" type="range">
                  <div class="sizenum1">50</div>
              </div>
              <div class="changesmall1">大</div>
              <div class="anchordefault defaultsize">默认大小</div>



              <p style="margin-top: 45px;float:left;clear: left;margin-top: 30px;">主播语调：</p>
              <div class="chanebig2 change-into">低</div>
              <div class="inputdiv" style="top: 120px;">
                  <input style="margin-top: 16px" class="intonationsize" max="100" min="0" value="50" type="range">
                  <div class="intonationsize-sizenum2">50</div>
              </div>
              <div class="changesmall2">高</div>
              <div class="intonationdefault defaultsize">默认大小</div>


          </li>
          <div style="clear: both"></div>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.hecheng{
  width:1000px;
  height:936px;
  border:2px solid rgba(237,237,237,1);
  border-radius:10px;
  margin: 0 auto;
}
.hecheng-title:after {
  content: '';
  display: block;
  clear: both;
 }
.hecheng-title{
  border-bottom:2px solid rgba(237,237,237,1);
  padding: 20px;
}
.hecheng-title >p:first-child{
  color:rgba(60,60,60,1);
  font-size: 18px;
  float: left;
}
.hecheng-title >p:last-child{
  float:right;
}
.step{
  width: 400px;
  height: 20px;
}
.imgtag{
    height: 22px;
    line-height: 22px;
    font-size: 12px;
    color: #fff;
    background: #1080FF;
    width: 72px;
    text-align: center;
    cursor: pointer;
}
</style>
<script>
export default {
  data(){
    return{
      value1:0
    }
  },
  methods:{

  }
}
</script>