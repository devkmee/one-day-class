<template>
  <div>Item List</div>
  <ul>
    <li>
      <a href="/itemView/1">item 1</a>
    </li>
    <li>
      <a href="/itemView/2">item 2</a>
    </li>
  </ul>
</template>

<script setup></script>

<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
}
ul li {
  flex: 1;
  height: 40px;
  text-align: center;
}
</style>
