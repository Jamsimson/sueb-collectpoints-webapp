<template>
  <q-page class="q-pa-md">
    <!--Title: My Qrcode -->
    <div class="text-h6 text-weight-bold row" style="margin: auto">
      <div class="text-right text-dark" @click="this.$router.go(-1)">
        <q-icon name="arrow_back_ios" />
      </div>
      <div style="margin: auto">My Qr code</div>
    </div>
    <br />
    <!-- Qrcode -->
    <section>
      <div style="margin-top: 50px" class="flex flex-center">
        <qrcode-vue :value="qrcodes" :size="size" level="H" />
      </div>
    </section>
    <br />
    <!-- change Accout& back to main mean section -->
    <section class="footter-qrcode">
      <div class="flex flex-center" style="margin-top: 70px; padding-top: 50px">
        <q-btn
          unelevated
          text-color="white"
          color="dark"
          label="Scan QrCode"
          style="width: 350px; border-radius: 10px"
        />
      </div>
    </section>
  </q-page>
</template>

<script>
import { LocalStorage } from "quasar";
import { defineComponent } from "vue";
import { ref } from "vue";
import QrcodeVue from "qrcode.vue";

export default defineComponent({
  name: "QrPage",
  setup() {
    return {
      model: ref(null),
    };
  },
  components: {
    QrcodeVue,
  },
  data() {
    return {
      x: "",
      value: "",
      message: null,
      size: 300,
      accounts: [],
      qrcodes: LocalStorage.getItem("phone"),
      test: [],
    };
  },
});
</script>

<style>
.footter-qrcode {
  position: fixed;
  left: 0;
  bottom: 25px;
  width: 100%;
  text-align: center;
}
</style>
