<template>
  <div class="login">
    <v-container class="my-5">
      <v-alert
        width="600px"
        class="mx-auto px-3"
        v-if="!isAdmin && signInFail"
        dense
        outlined
        type="error"
      >
        Sign in failed! You are not an admin!
      </v-alert>
      <v-card width="600px" class="mx-auto px-3">
        <v-card-title class="grey--text text--darken-2">
          <h3>Sign in</h3>
        </v-card-title>
        <v-card-text>
          <v-form @submit.prevent="signIn">
            <v-text-field
              v-model="email"
              label="Email"
              outlined
              clearable
            ></v-text-field>

            <v-text-field
              v-model="password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show1 ? 'text' : 'password'"
              class="input-group--focused"
              @click:append="show1 = !show1"
              label="Password"
              outlined
              clearable
            ></v-text-field>
            <v-btn type="submit" dark color="grey darken-4">
              sign in
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      show1: false,
      email: "",
      password: ""
    };
  },
  computed: {
    isAdmin() {
      return this.$store.state.isAdmin;
    },
    signInFail() {
      return this.$store.state.signInFail;
    }
  },
  methods: {
    signIn() {
      this.$store.dispatch("signIn", {
        email: this.email,
        password: this.password
      });
    }
  }
};
</script>

<style></style>
