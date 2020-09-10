<template>
  <Layout>
    <b-container fluid class="photos-container text-center">
      <div class="info-wrapper">
        <p class="photo-page-info">I started my photography journey 11 years ago when I
was a freshman in high school. I immediately fell in
love with taking pictures of anything and everything.
I've photographed anything from cars, people, sports,
to events like weddings, even engagements and
newborn announcements! If there is anything you
need, I have done it before.</p>
        <h2 class="cta">Click any photo below to be taken to larger versions!</h2>
      </div>
      <b-col class="photo-entry" v-for="photo in $page.photo.edges">
        <h3 class="image-title">{{ photo.node.title}}</h3>
        <a :href="photo.node.url" target="_blank"><b-img class="single-entry" thumbnail :src="photo.node.images"></b-img></a>
      </b-col>
    </b-container>
  </Layout>
</template>

<page-query>
  query Photo {
    photo: allPhotoEntry {
      edges {
        node {
          title
          description
          images
          url
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
.cta {
  font-size: 14px;
  font-weight: 700;
}
.photos-container {
  background: #222831;
}

.photo-entry {
  padding: 1rem;
}
.single-entry {
  border: none;
  background: none;
}
.image-title {
  font-family: "Poppins", sans-serif;
  color: #EEE;
  font-weight: 300;
  font-size: 14px;
}
@media screen and (min-width: 800px){
  .info-wrapper {
    font-size: 20px;
    padding: 2em 4em 2em 4em;
  }
  .photo-page-info {
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