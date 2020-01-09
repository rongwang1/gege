<template>
  <div class="main-content">
    <div class="card" v-for="item in comment" :key="item.id">
        {{item.content}}
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeCard',
  props: {
    comment: Array
  }
}
</script>
<style lang="scss">
.main-content {
  display: flex;
  flex-wrap: wrap;
  flex: left;
  .card {
    width: 250px;
    height: 150px;
    background-color: fff;
    border: 1px solid #cccccc;
    padding: 10px;
    margin: 10px;
  }
}
</style>
