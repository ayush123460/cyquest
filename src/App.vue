<template>
  <div id="app">
    <header>
      <div class="brand">
          <img src="./assets/logo.png" alt="CyQuest Logo" width="100px">
          <div><span>Cy</span>Quest</div>
      </div>
      <div class="nav">
        <router-link :to="{ name: 'Home' }" exact>Home</router-link>
        <router-link :to="{ name: 'Home', hash: '#rounds' }">Rounds</router-link>
        <router-link :to="{ name: 'Home', hash: '#requirements'  }">What To Bring</router-link>
        <router-link to="Rules">Rules</router-link>
        <router-link :to="{ name: 'Home', hash: '#location' }">Location</router-link>
        <router-link :to="{ name: 'Home', hash: '#contact' }">Contact</router-link>  
      </div>
      <div class="mobnav" v-on:click="show = true">
        <div class="bars">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>
      </div>
    </header>
    <div class="links slideInRight" v-bind:class="{showing: show, animated:show}">
      <div class="close" v-on:click="show = false">
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
      <router-link :to="{ name: 'Home' }" exact>Home</router-link>
      <router-link :to="{ name: 'Home', hash: '#rounds' }">Rounds</router-link>
      <router-link :to="{ name: 'Home', hash: '#requirements'  }">What To Bring</router-link>
      <router-link to="Rules">Rules</router-link>
      <router-link :to="{ name: 'Home', hash: '#location' }">Location</router-link>
      <router-link :to="{ name: 'Home', hash: '#contact' }">Contact</router-link>
    </div>
    <router-view />
    <footer>
      <!-- Start Advitya Section -->
      <section class="advitya">
        <p>Powered by</p>
        <img src="./assets/advitya-logo.png" alt="AdVITya 2019 Logo">
      </section>
      <!-- End Advitya Section -->
      <div class="container">
        <p class="bold">Rules and regulations are subject to change without notice. Kindly visit this website to stay updated.</p>
        <div class="hr"></div>
        <span class="am">CyQuest is brought to you by <br> Cyber Security and Digital Forensics Division <br> VIT Bhopal University <br></span>
        <span style="line-height: 2;">Website designed by Ayush Mukherjee.</span>
      </div>
        <div class="cp">
          <div class="container">
            Copyright &copy; 2019 VIT Bhopal University. All rights reserved.
          </div>
        </div>
    </footer>
  </div>
</template>


<script>
export default {
  data: function() {
    return {
      show: false
    }
  }
}
</script>


<style lang="scss">
@import "./styles/index.scss";
</style>
