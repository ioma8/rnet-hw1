<template>
  <div class="company-detail p-3">
    <div v-if="companyData && showDetail">
      <span v-if="companyData.category" class="badge bg-secondary me-2">{{
        companyData.category.value
      }}</span>
      <span v-if="companyData.role">{{ rayRole[companyData.role] }}</span>
      <h2 class="mt-2">{{ companyData.name }}</h2>
      <div class="d-flex mb-3">
        <img v-if="logoDataUri" :src="logoDataUri" class="company-logo me-3" />
        <div class="company-adress">
          <div v-if="companyData.regNumber" class="mb-3">
            IČ {{ companyData.regNumber }}
          </div>
          <div v-if="companyData.primaryAddress.address.street">
            {{ companyData.primaryAddress.address.street }}
          </div>
          <div v-if="companyData.primaryAddress.address.zipCode">
            {{ companyData.primaryAddress.address.zipCode }}
          </div>
          <div v-if="companyData.primaryAddress.city">
            {{ companyData.primaryAddress.city }}
          </div>
          <div v-if="companyData.primaryAddress.address.country">
            {{ companyData.primaryAddress.address.country }}
          </div>
          <div
            class="mt-2"
            v-if="
              companyData.primaryAddress.address.lat &&
              companyData.primaryAddress.address.lng
            "
          >
            <a
              :href="
                'https://maps.google.com/?q=' +
                companyData.primaryAddress.address.lat +
                ',' +
                companyData.primaryAddress.address.lng
              "
              target="_blank"
              >Zobrazit na mapě</a
            >
          </div>
        </div>
      </div>
      <div class="mb-3">
        {{ noticeStripped }}
      </div>
      Vlastník: <strong>{{ companyData.owner.fullName }}</strong>
    </div>
    <div v-else>Vyberte firmu ze seznamu.</div>
    <div class="spinner" v-if="spinner"></div>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import apiCall from "@/composables/apiCall";
import { rayRole } from "@/composables/rayEnum";

export default {
  name: "CompanyDetail",
  props: ["companyId"],
  components: {},
  setup(props) {
    const logoDataUri = ref("");
    const companyData = ref("");
    const spinner = ref(false);
    const noticeStripped = ref("");
    const showDetail = ref(false);
    watch(
      () => props.companyId,
      (newVal) => {
        logoDataUri.value = "";
        companyData.value = "";
        showDetail.value = false;
        if (newVal == -1) {
          return;
        }
        spinner.value = true;
        apiCall("company/" + newVal)
          .then((response) => {
            if (response.data.success) {
              companyData.value = response.data.data;
              companyData.value.notice =
                companyData.value.notice == null ? "" : companyData.value.notice;
              noticeStripped.value = companyData.value.notice.replace(
                /<\/?[^>]+(>|$)/g,
                ""
              );
              if (companyData.value.logo) {
                const logoId = companyData.value.logo.id;
                apiCall("image/" + logoId)
                  .then((response) => {
                    if (response.data.imgData) {
                      logoDataUri.value = response.data.imgData;
                    }
                  })
                  .catch((error) => {
                    console.error(error);
                  })
                  .finally(() => {
                    spinner.value = false;
                    showDetail.value = true;
                  });
              } else {
                logoDataUri.value = "";
                spinner.value = false;
                showDetail.value = true;
              }
            }
          })
          .catch((error) => {
            console.error(error);
          });
      }
    );

    return { logoDataUri, companyData, spinner, noticeStripped, rayRole, showDetail };
  },
};
</script>

<style scoped>
.company-detail {
  -webkit-box-shadow: 0px 0px 5px 0px rgba(128, 128, 128, 0.1);
  -moz-box-shadow: 0px 0px 5px 0px rgba(128, 128, 128, 0.1);
  box-shadow: 0px 0px 5px 0px rgba(128, 128, 128, 0.1);
  background-color: #ffffff;
  width: 30%;
  border-radius: 3px;
}

.company-logo {
  width: 30%;
}

.spinner {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-image: url(../assets/spinner.gif);
  background-position: center center;
  background-repeat: no-repeat;
  background-color: rgba(255, 255, 255, 0.7);
}

h2 {
  font-size: 28px;
  color: #000000;
}
</style>
