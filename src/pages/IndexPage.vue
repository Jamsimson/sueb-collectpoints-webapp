<template>
  <q-page class="flex flex-center">
    <div>
      <div class="title-index">Welcome to SUEB collectpoints</div>
      <br />
      <div class="flex form-index">
        <!-- Input username -->

        <q-input
          class="input-index"
          color="dark"
          label-color="dark"
          outlined
          v-model="username"
          label="Username"
        >
          <template v-slot:append>
            <q-icon name="account_circle" color="dark" />
          </template>
        </q-input>
        <!-- Input phone number -->

        <q-input
          class="input-index"
          color="dark"
          label-color="dark"
          outlined
          mask="##########"
          v-model="phone"
          label="Phone Number"
        >
          <template v-slot:append>
            <q-icon name="call" color="dark" />
          </template>
        </q-input>
      </div>
      <q-btn
        @click="createAccount()"
        class="button-index"
        round
        color="dark"
        icon="arrow_forward_ios"
      />
    </div>
  </q-page>
</template>

<script setup>
import { LocalStorage } from "quasar";
import { api } from "src/boot/axios";
import { useRouter } from "vue-router";
const router = useRouter();
import { ref } from "vue";
var username = ref("");
var phone = ref("");
defineOptions({
  name: "IndexPage",
});

const createAccount = async () => {
  console.log(`✨Create new account`);
  if (username.value == "" && phone.value == "") {
    alert("Please type your username and phone number");
  } else {
    const data = {
      username: username.value,
      phonenumber: phone.value,
      point: 0,
    };
    if (!LocalStorage.getItem("eiei")) {
      LocalStorage.set("eiei", phone.value);
      console.log("New eiei", localStorage.getItem("eiei"));
    }
    await api
      .post("create", data)
      .then(
        (response) =>
          console.log("Successful create new account", response.data),

        router.push({ name: "home" })
      )
      .catch((error) => console.log(error));
  }
};
</script>

<style>
.button-index {
  display: flex;
  margin: auto;
}
.form-index {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 10px; /* 16px */
  margin-bottom: 25px;
}
.input-index {
  margin-top: 5px; /* 16px */
  margin-bottom: 5px; /* 16px */
}
.title-index {
  font-size: 1.25rem; /* 20px */
  line-height: 1.75rem; /* 28px */
  font-weight: 600;
}
</style>
