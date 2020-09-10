<template>
    <b-container fluid class="social">
        <b-row class="row justify-content-md-center">
            <b-col class="col"><a href="https://www.facebook.com/efortneydev" target="_blank"><g-image src="../../static/facebook.png" class="social-icon"></g-image></a></b-col>
            <b-col class="col"><a href="https://www.instagram.com/efortneyphoto/" target="_blank"><g-image src="../../static/instagram.png" class="social-icon"></g-image></a></b-col>
            <b-col class="col"><a href="https://github.com/efortney28" target="_blank"><g-image src="../../static/github.png" class="social-icon"></g-image></a></b-col>
            <b-col class="col"><a href="https://twitter.com/EFortney" target="_blank"><g-image src="../../static/twitter.png" class="social-icon"></g-image></a></b-col>
            <b-col class="col"><a href="https://www.flickr.com/photos/efortney28/" target="_blank"><g-image src="../../static/flickr.png" class="social-icon"></g-image></a></b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {

}
</script>

<style scoped>

.social {
    background: #2D4059;
    padding: 1em 1em 1em 1.5em;
}
.social-icon {
    max-width: 30px;
}
@media screen and (min-width:800px) {
    .social {
        display: none;
    }
}
</style>