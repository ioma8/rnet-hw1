<template>
  <div class="container-fluid py-4 px-4">
    <div class="left-panel">
      <img src="./assets/buttons-top.svg" alt="Top menu" />
      <img src="./assets/buttons-bottom.svg" alt="Bottom menu" />
    </div>
    <Companies per-page="10" />
  </div>
</template>

<script>
import Companies from "@/components/Companies.vue";

export default {
  name: "App",
  components: {
    Companies,
  },
};
</script>

<style>
@import "../node_modules/typeface-roboto/index.css";

body {
  font-family: "Roboto", sans-serif !important;
  background-color: #f2f4f6 !important;
  color: #7d8698!important;
  font-size: 14px!important;
}
</style>

<style scoped>
.container-fluid {
  padding-left: 120px!important;
  max-width: 2000px;
  margin-left: 0;
}
.left-panel {
  position: fixed;
  top: 0;
  height: 100%;
  left: 0;
  width: 80px;
  background: rgb(0, 70, 85);
  background: linear-gradient(0deg, rgba(0, 70, 85, 1) 0%, rgba(0, 169, 202, 1) 100%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.left-panel img {
  width: 70%;
}
</style>
