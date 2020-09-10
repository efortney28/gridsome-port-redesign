<template>
  <Layout>
    <div class="hero">
    </div>
    <div class="info container-fluid">
      <h1 class="title">Hey there!</h1>
      <h2 class="subtitle">I'm Eric Fortney! I take pictures and build websites!</h2>
      <p class="cta-text">Click one of the buttons below to find out more information about me! :)</p>
      <div class="row button-group justify-content-md-center">
        <div>
          <b-button pill size="lg" class="select-button dev" href="/development">Development</b-button>
        </div>
        <div>
          <b-button pill size="lg" class="select-button photo" href="/photography">Photography</b-button>
        </div>
      </div>
    </div>
    <Social />
    <div class="banner text-center">
      <h2 class="banner-text">Interested in working together? Contact me below!</h2>
    </div>
    <ContactForm />
  </Layout>
</template>

<script>
import Social from "../components/Social.vue"
import ContactForm from "../components/ContactForm.vue"

export default {
  metaInfo: {
    title: 'Home'
  },
  components: {
    Social,
    ContactForm,
  }
}
</script>

<style scoped>
.hero {
  background-image: url('../../static/hero.jpg');
  height: 200px;
  background-size: cover;
}
.info {
  background-color: #222831;
  font-family: "Poppins", sans-serif;
  color: #EEE;
}
.title{
  font-size: 14px;
  font-weight: 400;
  padding: 1em 1em 0.25em 1em;
}
.subtitle{
  font-size: 12px;
  font-weight: 300;
  padding: 0.25em 1em;
}
.cta-text{
  font-size: 10px;
  font-weight: 300;
  padding: 0.25em 1em;
}
.select-button {
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  font-weight: 300;
  margin: 0.25em 1em 1.5em 1.75em;

}
.dev {
  background-color: #2DC583;
}
.photo {
  background-color: #FF5722;
}
.social {
  background-color: #2D4059;
}
.banner {
  background-color: #2DC583;
  padding: 1.5em 1em 1em 1em;
}
.banner-text {
  font-family: "Poppins", sans-serif;
  color: #EEE;
  font-weight: 300;
  font-size: 12px;
}
@media screen and (min-width: 800px) {
  .hero {
    min-height: 800px;
  }
  .title {
    font-size: 1.5em;

  }
  .subtitle {
    font-size: 1.25em;
    padding-left: 1.25em;

  }
  .cta-text {
    font-size: 0.85em;
    padding-left: 1.75em;

  }
  .button-group {
    margin: 0 auto;
  }
  .select-button {
    margin: 2em;
    padding: 1em;
    font-size: 15px;
  }
  .banner {

  }
  .banner-text {
    font-size: 18px;
  }
}
</style>
