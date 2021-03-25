<template>
  <div class="home-page">
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
        <input type="hidden" name="form-name" value="expression-of-interest" />
        <p class="form-item">
          <label>Your Email: </label>
          <input type="email" name="email" required class="email-field" />
        </p>
        <p class="form-item">
          <label>Interested For Use In: </label>
          <select name="interest-reason" required class="reason-field">
            <option value="msp-provider">MSP Provider</option>
            <option value="internal-it-team">Internal IT Team</option>
            <option value="personal">Personal</option>
            <option value="other" selected="selected">Other</option>
          </select>
        </p>
        <p class="form-item">
          <label>Deployment Environment: </label>
          <select name="deployment-env" required class="reason-field">
            <option value="managed-cloud" selected="selected">
              Official Managed Cloud Hosting
            </option>
            <option value="onprem">On-Premise</option>
            <option value="private-cloud">Private Cloud</option>
            <option value="other">Other</option>
          </select>
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
    <Modal
      v-show="slackModalVisible"
      title="Join Slack Community"
      @close="slackModalVisible = false"
    >
      <form method="POST" action="/.netlify/functions/invite-to-slack">
        <p class="form-item">
          <label>Your Email: </label>
          <input type="email" name="email" required class="email-field" />
        </p>
        <div class="modal-footer">
          <button
            type="submit"
            class="modal-default-button"
            @click="$emit('close')"
          >
            Add to Slack
          </button>
        </div>
      </form>
    </Modal>
    <div>
      <img src="../../assets/logo.png" alt="Mattrax Dashboard (v1)" height="200px" />
      <h1 class="title">Mattrax</h1>
      <p>Open Source MDM (Mobile Device Management) Solution.</p>
      <p>
        Planning to launch late 2021 with support for managing Windows 10,
        Linux, macOS, Android and IOS devices!
      </p>
      <div class="links">
        <a target="_blank" class="button--green" @click="modalVisible = true">
          Register for Updates
        </a>
        <a
          target="_blank"
          class="button--grey"
          @click="slackModalVisible = true"
        >
          Join Slack
        </a>
        <a
          href="mailto:hello@mattrax.app"
          target="_blank"
          class="button--grey"
        >
          Contact Us
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      modalVisible: false,
      slackModalVisible: false,
    };
  },
  mounted() {
    const params = new URLSearchParams(window.location.search);
    this.modalVisible = params.has("register-updates");
    this.slackModalVisible = params.has("slack");
  },
});
</script>

<style scoped>
.home-page {
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
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
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
