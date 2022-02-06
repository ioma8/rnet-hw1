<template>
  <div>
    <h1>Klienti</h1>
    <SearchButton @onSearch="onSearch" />
    <div class="d-flex mt-4">
      <CompanyList
        class="flex-grow-1"
        :rows="rows"
        :selected="selectedCompanyId"
        @onSelected="onSelected"
      />
      <CompanyDetail class="ms-3" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

import apiCall from "@/composables/apiCall";
import SearchButton from "@/components/SearchButton.vue";
import CompanyList from "@/components/CompanyList.vue";
import CompanyDetail from "@/components/CompanyDetail.vue";

export default {
  name: "Companies",
  components: {
    SearchButton,
    CompanyList,
    CompanyDetail,
  },
  props: {
    perPage: String,
  },
  setup() {
    let rows = ref([]);
    let selectedCompanyId = ref(-1);
    let fulltext = ref("");

    const reloadData = () => {
      selectedCompanyId.value = -1;
      let data = {};
      if (fulltext.value != "") {
        data = {
          fulltext: fulltext.value,
        };
      }
      apiCall("company", data).then((response) => {
        if (response.data.success) {
          rows.value = response.data.data;
        }
      });
    };

    const onSelected = (companyId) => {
      selectedCompanyId.value = companyId;
    };

    const onSearch = (text) => {
      fulltext.value = text.trim();
      reloadData();
      console.error(text);
    };

    reloadData();

    return {
      rows,
      selectedCompanyId,
      onSelected,
      fulltext,
      onSearch,
    };
  },
};
</script>

<style scoped>
h1 {
  font-size: 28px;
  line-height: 40px;
  font-weight: 300;
  color: #262a32;
  margin-bottom: 20px;
}
</style>
