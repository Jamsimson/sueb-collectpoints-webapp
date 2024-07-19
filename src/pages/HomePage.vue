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
import { LocalStorage } from "quasar";
import { ref } from "vue";
// import { service } from "src/services/api";

defineOptions({
  name: "HomePage",
  data() {
    return {
      point: LocalStorage.getItem("point"),
    };
  },
  methods: {
    async fetchData() {
      try {
        const res = await api
          .get(`read/${LocalStorage.getItem("eiei")}`)
          .then((response) => LocalStorage.set("point", response.data.point));
      } catch (error) {
        console.log("erro", error);
      }
    },
  },
  async mounted() {
    setInterval(this.fetchData, 900000);
  },
});

// const fetchData = async () => {
//   try {
//     const res = await api
//       .get(`read/${LocalStorage.getItem("eiei")}`)
//       .then((response) => (this.point = response.data.point));
//   } catch (error) {
//     console.log("erro", error);
//   }
// };

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
