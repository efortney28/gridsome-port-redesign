<template>
  <nav>
      <b-navbar toggleable="lg" type="dark" variant="info">
          <b-navbar-brand>
              <span id="first">Eric</span>
              <span id="last">Fortney</span>
          </b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav right>
                <b-navbar-nav class="ml-auto">
                    <b-nav-item right v-for='link in links' :key='link.name' router :to='link.path'>
                        {{ link.name }}
                    </b-nav-item>
                </b-navbar-nav>
          </b-collapse>
      </b-navbar>
  </nav>
</template>

<script>
export default {
    data() {
        return {
            links: [
                {name:'Home', path:'/'},
                {name: 'Photography', path:'/photography'},
                {name: 'Development', path:'/development'},
                {name: 'Contact', path:'/contact'}
                
            ]
        }
    }
}
</script>

<style scoped>
.navbar {
    background-color: #2D4059 !important;
}
#first {
    font-size: 20px;
    font-family: "Poppins", sans-serif;
    font-weight: 200;
    color: #EEE;
}
#last {
    font-size: 20px;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    color: #FF5722;
}
.navbar-toggler {
    border: none;
}
.navbar-toggler-icon {
    color: #EEE !important;
}
.nav-link {
    color: #EEE !important;
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    font-weight: 200;
}
</style>