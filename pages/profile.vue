<template>
  <main>
    <div class="container-fluid c-section">
      <div class="row">

        <div class="col-sm-3"></div>

        <div class="col-sm-6">
          <div class="a-spacing-top-medium"></div>
          <h2>Profile Page</h2>
          <a href="#" @click="onLogout">Log out</a>
          <form>
            <!-- Name -->
            <div class="a-spacing-top-medium">
              <label>Name</label>
              <input
                v-model="name"
                :placeholder="$auth.$state.user.name"
                type="text"
                class="a-input-text"
                style="width: 100%;"
              >
            </div>

            <!-- Email -->
            <div class="a-spacing-top-medium">
              <label>Email</label>
              <input
                v-model="email"
                :placeholder="$auth.$state.user.email"
                type="text"
                class="a-input-text"
                style="width: 100%;"
              >
            </div>

            <!-- Password -->
            <div class="a-spacing-top-medium">
              <label>Password</label>
              <input
                v-model="password"
                type="text"
                class="a-input-text"
                style="width: 100%;"
              >
            </div>
            <!-- Button -->
            <hr>
            <div class="a-spacing-top-large">
              <span class="a-button-register">
                <span class="a-button-inner">
                  <span class="a-button-text" @click="onUpdateProfile">Update Profile</span>
                </span>
              </span>
            </div>
          </form>
          <br>
        </div>
        <div class="col-sm-3"></div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    async onUpdateProfile () {
      let data = {
        name: this.name,
        email: this.email,
        password: this.password
      }
      try {
        let response = await this.$axios.$put('/api/auth/user', data);
        if (response.success) {
          this.name = '';
          this.email = '';
          this.password = '';

          await this.$auth.fetchUser();
        }
      } catch (err) {
        console.log(err);
      }
    },
    async onLogout () {
      await this.$auth.logout();
    }
  }
}
</script>
