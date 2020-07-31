<template>
    <el-row type="flex" justify="space-around">
      <el-col :span="4" class="logo">
        <a href="">
          <img src="../assets/images/logo.png" alt="" />
        </a>
      </el-col>
      <el-col :span="16" class="nav">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item index="1">网站首页</el-menu-item>
          <el-submenu index="2">
            <template slot="title">合成配音</template>
            <el-menu-item index="2-1">合成配音1</el-menu-item>
            <el-menu-item index="2-2">合成配音2</el-menu-item>
            <el-menu-item index="2-3">合成配音3</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">配音资讯</template>
            <el-menu-item index="3-1">配音资讯1</el-menu-item>
            <el-menu-item index="3-2">配音资讯2</el-menu-item>
            <el-menu-item index="3-3">配音资讯3</el-menu-item>
          </el-submenu>
          <el-menu-item index="4">手机App</el-menu-item>
          <el-menu-item index="5"
            ><a href="javascript:;" target="_blank">联系我们</a></el-menu-item
          >
          <el-menu-item index="6"
            ><a href="javascript:;" target="_blank">在线充值</a></el-menu-item
          >
        </el-menu>
      </el-col>
      <el-col :span="4" class="sign">
        <el-row>
          <el-button type="primary">登录</el-button>
          <el-button type="primary">注册</el-button>
        </el-row>
      </el-col>
    </el-row>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
