<template>
  <div class="company-list">
    <table>
      <tr class="table-header">
        <th>Název</th>
        <th>Stav</th>
        <th>Vztah</th>
        <th>Rating</th>
        <th>Vlastník</th>
        <th>IČ</th>
        <th>Město</th>
        <th>Kategorie</th>
      </tr>
      <CompanyLine
        v-for="row in rows"
        :row="row"
        :key="row.id"
        :selected="selected == row.id"
        @click="selectCompany(row.id)"
      />
    </table>
  </div>
</template>

<script>
import CompanyLine from "@/components/CompanyLine.vue";

export default {
  name: "CompanyList",
  components: {
    CompanyLine,
  },
  props: ["rows", "selected"],
  // eslint-disable-next-line no-unused-vars
  setup(props, {emit}) {
    const selectCompany = (companyId) => {
      emit("onSelected", companyId);
    };

    return { selectCompany };
  },
};
</script>

<style scoped>
table {
  width: 100%;
}

.table-header th {
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 600;
  padding: 10px 5px;
}
</style>
