<template>
  <div id="wrapper">
    <CloudHeader />
    <Sidebar/>
    <app-main />
  </div>
</template>

<script>
import { Sidebar, CloudHeader, AppMain, Footer } from "./components";
import MusicDetailCard from "@/components/Test";
export default {
  name: "Layout",
  mounted(){
    // 从localStorage中获取数据
    this.$store.state.playList.recentList = JSON.parse(localStorage.getItem("history_list") || "[]")
  },
  components: {
    Sidebar,
    CloudHeader,
    AppMain,
    Footer,
    MusicDetailCard,
  },
};
</script>

<style lang="less">
#wrapper {
  &:after {
    content: "";
    display: table;
    clear: both;
  }
  .header {
    position: fixed;
    height: 60px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
  }
  .sidebar-container {
    position: fixed;
    height: 100%;
    top: 60px;
    bottom: 0;
    left: 0;
    z-index: 9999;
    overflow: hidden;
  }
  .main-container {
    position: relative;
    margin-top: 60px;
    float: left;
    height: 100%;
    width: 100%;
    padding-bottom: 100px;
    &:after {
      content: "";
      display: table;
      clear: both;
    }
  }
  .footer {
    position: fixed;
    width: 100%;
    height: 70px;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 99999;
    background-color: #fff;
    border-top: 1px solid rgba(144, 147, 153, 0.3);
  }
}
</style>
