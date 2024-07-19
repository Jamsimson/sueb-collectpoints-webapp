<template>
  <q-page class="flex flex-center">
    <div class="point-home flex flex-center">
      <div class="text-h1 text-weight-bold">
        {{ point }}
      </div>
      <br />
      <div class="text-h6">Points</div>
    </div>
    <div class="qr-home">
      <q-btn
        class="button-home"
        round
        size="xl"
        color="dark"
        icon="qr_code"
        @click="$router.push({ name: 'qrcode' })"
      />
    </div>
  </q-page>
</template>

<script setup>
import { api } from "src/boot/axios";
import { ref } from "vue";
import { LocalStorage } from "quasar";
var point = ref(0);
defineOptions({
  name: "HomePage",
  data() {
    return {
      info: [],
    };
  },

  async mounted() {
    api
      .get(`read/${LocalStorage.getItem("eiei")}`)
      .then((response) => (this.info = response))
      .catch((error) => console.log(error));
  },
});
console.log("Local storage: ", LocalStorage.getItem("eiei"));
</script>

<style>
.point-home {
  height: 400px;
  width: 250px;
  flex-direction: column;
  border-style: solid;
  border-width: 1px;
  border-radius: 25px;
}
.qr-home {
  position: fixed;
  bottom: 50px;
  left: 40%;
  text-align: center;
  align-self: center;
}
</style>
