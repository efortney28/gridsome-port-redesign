<template>
  <Layout>
    <b-container fluid class="photos-container text-center">
      <div class="info-wrapper">
        <p class="dev-page-info">Ever since I was little I've been fascinated with anything
and everything to do with the internet. I remember
getting a "How to Build Websites: For Dummies" in the
early 2000's. Ever since then, I've always wanted to
build websites. Now that I'm older, I taught myself how
to build anything I or anybody else could want</p>
        <h2 class="cta">Click any photo below to be taken to a demo website!</h2>
      </div>
      <b-col class="dev-entry" v-for="dev in $page.dev.edges">
        <h3 class="image-title">{{ dev.node.name}}</h3>
        <p class="dev-page-info">{{ dev.node.description }}</p>
        <a :href="dev.node.url" target="_blank"><b-img class="single-entry" thumbnail :src="dev.node.screenshot"></b-img></a>
      </b-col>
    </b-container>
  </Layout>
</template>

<page-query>
  query Dev {
    dev: allDevEntry {
      edges {
        node {
          name
          url
          description
          screenshot
        }
      }
    }
  }
</page-query>

<script>
export default {

}
</script>

<style>
.info-wrapper {
  font-family: "Poppins", sans-serif;
  color: #EEE;
  font-weight: 300;
  font-size: 12px;
  padding: 1em;
}
.photos-container {
  background: #222831;
}

.dev-entry {
  padding: 1rem;
}
.cta {
  font-size: 14px;
  font-weight: 700;
}
.single-entry {
  border: none;
  background: none;
}
.image-title {
  font-family: "Poppins", sans-serif;
  color: #EEE;
  font-weight: 400;
  font-size: 14px;
}
.dev-page-info {
  font-family: "Poppins", sans-serif;
  color: #EEE;
  font-weight: 300;
  font-size: 12px;
}

@media screen and (min-width: 800px){
  .info-wrapper {
    font-size: 20px;
    padding: 2em 4em 2em 4em;
  }
  .dev-page-info {
    font-size: 20px;
  }
  .cta {
    font-size: 20px;
  }
  .image-title{
    font-size: 18px;
  }
  .single-entry {
    max-width: 1000px;
  }
}
</style>