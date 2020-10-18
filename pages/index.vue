<template>
  <div class="container">
    <Modal
      v-show="modalVisible"
      title="Register for Updates"
      @close="modalVisible = false"
    >
      <form
        name="expression-of-interest"
        method="POST"
        action="/"
        data-netlify="true"
      >
        <p class="form-item">
          <label
            >Your Email:
            <input type="email" name="email" required class="email-field"
          /></label>
        </p>
        <p class="form-item">
          <label
            >Interested For Use In:
            <select name="interest-reason" required class="reason-field">
              <option value="msp-provider">MSP Provider</option>
              <option value="internal-it-team">Internal IT Team</option>
              <option value="personal">Personal</option>
              <option value="other" selected="selected">Other</option>
            </select></label
          >
        </p>
        <div class="modal-footer">
          <button
            type="submit"
            class="modal-default-button"
            @click="$emit('close')"
          >
            Submit
          </button>
        </div>
      </form>
    </Modal>
    <div>
      <img src="/assets/logo.png" alt="Mattrax Dashboard (v1)" height="200px" />
      <h1 class="title">Mattrax</h1>
      <p>Open Source MDM (Mobile Device Management) Server.</p>
      <p>
        Planning to launch February 2021 with support for managing Windows 10
        and macOS devices!
      </p>
      <div class="links">
        <a target="_blank" class="button--green" @click="modalVisible = true">
          Register for Updates
        </a>
        <a href="https://github.com/mattrax/Mattrax" class="button--grey">
          Codebase
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      modalVisible: false,
    }
  },
})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

form {
  justify-content: left;
  align-items: left;
  text-align: left;
}

.form-item {
  padding: 7px 0px;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.modal-footer {
  padding-top: 15px;
}

.reason-field,
.email-field {
  width: 100%;
  padding: 5px 10px;
  margin: 8p0 0;
  box-sizing: border-box;
}
</style>
