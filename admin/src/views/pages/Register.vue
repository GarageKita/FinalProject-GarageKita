<template>
  <div class="c-app d-flex align-items-center min-vh-100" :class="{ 'c-dark-theme': $store.state.darkMode }">
    <CContainer fluid>
      <CRow class="justify-content-center">
        <CCol md="6">
          <CCard class="mx-4 mb-0">
            <CCardBody class="p-4">
              <CForm @submit.prevent="register">
                <h1>Register</h1>
                <p class="text-muted">Create your account</p>
                <!-- <CInput
                  placeholder="Username"
                  autocomplete="username"
                >
                  <template #prepend-content><CIcon name="cil-user"/></template>
                </CInput> -->
                <CInput placeholder="Email" autocomplete="email" prepend="@" v-model="email" />
                <CInput placeholder="Password" type="password" autocomplete="new-password" v-model="password">
                  <template #prepend-content><CIcon name="cil-lock-locked"/></template>
                </CInput>
                <!-- <CInput
                  placeholder="Repeat password"
                  type="password"
                  autocomplete="new-password"
                  class="mb-4"
                >
                  <template #prepend-content><CIcon name="cil-lock-locked"/></template>
                </CInput> -->
                <CButton color="success" block @click="register">Create Account</CButton>
              </CForm>
            </CCardBody>
            <CCardFooter class="p-4">
              <CRow>
                <CCol col="6">
                  <CButton block color="facebook">
                    Facebook
                  </CButton>
                </CCol>
                <CCol col="6">
                  <CButton block color="twitter">
                    Twitter
                  </CButton>
                </CCol>
              </CRow>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    register() {
      this.$store.dispatch('users/register', {
        email: this.email,
        password: this.password,
      });
      // .then(() => {
      //   this.email = '';
      //   this.password = '';
      // });
    },
  },
};
</script>
