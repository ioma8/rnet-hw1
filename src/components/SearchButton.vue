<template>
  <div class="search-button">
    <button @click="search">S</button
    ><input
      type="text"
      placeholder="Hledat..."
      v-model="searchText"
      @keyup.enter="search"
      @blur="search"
    />
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "SearchButton",
  // eslint-disable-next-line no-unused-vars
  setup(props, { emit }) {
    const searchText = ref("");
    const search = () => {
      emit("onSearch", searchText.value);
    };
    return { searchText, search };
  },
};
</script>

<style scoped>
.search-button {
  border: 1px solid #c4c6ca;
  height: 31px;
  width: 160px;
  border-radius: 16px;
  border: 1px solid transparent;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(128, 128, 128, 0.1);
  -moz-box-shadow: 0px 0px 5px 0px rgba(128, 128, 128, 0.1);
  box-shadow: 0px 0px 5px 0px rgba(128, 128, 128, 0.1);
}
input {
  border: none;
  width: 124px;
  height: 100%;
  background: transparent;
  color: #262a32;
  font-size: 12px;
  line-height: 14px;
  padding-left: 10px;
}

button {
  border: none;
  width: 33px;
  height: 30px;
  background-color: transparent;
  background-image: url(../assets/search-icon.svg);
  font-size: 0;
  background-position: center center;
  background-repeat: no-repeat;
}
</style>
