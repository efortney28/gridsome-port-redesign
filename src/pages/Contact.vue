<template>
  <Layout class="dark-bg">
    <p class="contact-text">Fill out the form below and I will get back to you as soon as possible!</p>
    <ContactForm />
  </Layout>
</template>

<script>
import ContactForm from "../components/ContactForm.vue"
export default {
  components: {
    ContactForm,
  }

}
</script>

<style scoped>
.dark-bg {
  background: #222831;
}
.contact-text {
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-size: 14px;
  color: #EEE;
  background: #222831;
  padding: 2em 1em 0 1em;
}

</style>