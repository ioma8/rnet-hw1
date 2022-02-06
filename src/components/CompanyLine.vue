<template>
  <tbody>
    <tr class="company-line" :class="{ selected: selected == true }">
      <td class="company-name">{{ row.name }}</td>
      <td>{{ rayState[row.state] }}</td>
      <td>{{ rayRole[row.role] }}</td>
      <td>{{ row.rating }}</td>
      <td>{{ row.owner.fullName }}</td>
      <td>{{ row.regNumber }}</td>
      <td>{{ row.contactAddress.address.city }}</td>
      <td>
        <span v-if="row.category" class="badge bg-secondary">{{
          row.category.value
        }}</span>
      </td>
    </tr>
    <tr class="spacer-line">
      <td colspan="8">&nbsp;</td>
    </tr>
  </tbody>
</template>

<script>
import { rayRole, rayState } from "@/composables/rayEnum";

export default {
  name: "CompanyLine",
  props: ["row", "selected"],
  setup() {
    return {
      rayRole,
      rayState,
    };
  },
};
</script>

<style scoped>
.company-line {
  -webkit-box-shadow: 0px 0px 5px 0px rgba(128, 128, 128, 0.1);
  -moz-box-shadow: 0px 0px 5px 0px rgba(128, 128, 128, 0.1);
  box-shadow: 0px 0px 5px 0px rgba(128, 128, 128, 0.1);
  background-color: #ffffff;
  overflow: hidden;
  cursor: pointer;
}
.company-line.selected {
  background-color: #e0fcd4;
}
.company-line td {
  padding: 5px;
}
.company-line td:first-child {
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
}
.company-line td:last-child {
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}
.spacer-line {
  font-size: 0;
  height: 3px;
}
.company-name {
  color: #000000;
  font-weight: 500;
}
</style>
