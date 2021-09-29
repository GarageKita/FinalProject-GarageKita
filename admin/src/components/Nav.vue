<template>
  <nav>
    <v-app-bar flat app class="grey lighten-4">
      <v-app-bar-nav-icon
        v-if="isSignIn"
        class="grey--text text--darken-1"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text text--darken-1">
        <span class="font-weight-bold">garage</span>
        <span class="font-weight-light">kita</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-if="isSignIn" text color="grey darken-1" @click="signOut">
        <span>Sign Out</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-if="isSignIn"
      v-model="drawer"
      app
      class="grey darken-4"
    >
      <v-list>
        <div>
          <v-list-item
            v-for="link in links"
            :key="link.text"
            router
            :to="link.route"
          >
            <v-list-item-action>
              <v-icon class="white--text">{{ link.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="white--text">{{
                link.text
              }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>
        <!-- <v-spacer></v-spacer>
        <div>
          <v-list-item>
            <v-list-item-action>
              <v-icon class="white--text">mdi-exit-to-app</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="white--text"
                >Sign Out</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </div> -->
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        { icon: "mdi-view-dashboard", text: "Dashboard", route: "/" },
        { icon: "mdi-archive", text: "Category", route: "/categories" },
        { icon: "mdi-account-multiple", text: "Accounts", route: "/accounts" }
      ]
    };
  },
  computed: {
    isSignIn() {
      return this.$store.state.isSignIn;
    }
  },
  methods: {
    signOut() {
      localStorage.clear();
      this.$store.commit("SET_IS_SIGNIN", false);
      this.$store.commit("SET_IS_ADMIN", false);
      this.$router.push("/login");
    }
  }
};
</script>

<style></style>
