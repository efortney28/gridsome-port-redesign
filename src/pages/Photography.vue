<template>
  <Layout>
    <b-container fluid class="photos-container">
      <b-row>
        <b-col class="photo-entry" v-for="photo in $page.photo.edges" :key="item">
          <b-img thumbnail :src="photo.node.images"></b-img>
        </b-col>
      </b-row>
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

</style>