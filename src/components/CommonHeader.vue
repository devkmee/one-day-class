<template>
  <header>
    <div class="links">
      <router-link to="/classList"></router-link>
      <router-link to="/classList"></router-link>
      <router-link to="/class/create">클래스 등록</router-link>
    </div>
    <div class="logoDiv">
      <router-link to="/classList"
        ><div><img src="@/assets/images/logo.png" alt="logo.png" /></div
      ></router-link>
    </div>
  </header>
</template>

<script setup></script>

<style scoped>
.logoDiv {
  min-height: 330px;
}
.links {
  display: flex;
}
.links a {
  flex: 1;
  font-size: 20px;
  text-align: center;
  line-height: 2;
}
</style>
