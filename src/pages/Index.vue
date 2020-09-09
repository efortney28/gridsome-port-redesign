<template>
  <Layout>
    <div class="hero">
    </div>
    <div class="info">
      <h1 class="title">Hey there!</h1>
      <h2 class="subtitle">I'm Eric Fortney! I take pictures and build websites!</h2>
      <p class="cta-text">Click one of the buttons below to find out more information about me! :)</p>
      <div class="row justify-content-md-center">
        <div class="col">
          <b-button pill size="lg" class="select-button dev" href="/development">Development</b-button>
        </div>
        <div class="col">
          <b-button pill size="lg" class="select-button photo" href="/photography">Photography</b-button>
        </div>
      </div>
    </div>
    <div class="social container-fluid">
      <div class="row social">
        <g-img src="../../static/facebook" width="30"></g-img>
        <g-img src="../../static/instagram" width="30"></g-img>
        <g-img src="../../static/github" width="30"></g-img>
        <g-img src="../../static/twitter" width="30"></g-img>
        <g-img src="../../static/flickr" width="30"></g-img>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Home'
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
  margin: 0.25em 1em 1em 1em;

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
</style>
