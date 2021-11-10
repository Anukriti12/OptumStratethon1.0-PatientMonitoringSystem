<script>
import NavBar from '@components/nav-bar'
import SideBar from '@components/side-bar'
import RightBar from '@components/right-bar'
import Footer from '@components/footer'

export default {
  components: { NavBar, SideBar, RightBar, Footer },
  data() {
    return {
      isMenuCondensed: false,
      user: this.$store ? this.$store.state.auth.currentUser : {} || {},
    }
  },
  created: () => {
    document.body.classList.remove('authentication-bg')
    document.body.classList.remove('authentication-bg-pattern')
  },
  mounted: () => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(
        navigator.userAgent
      )
    ) {
      document.body.classList.add('enlarged')
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuCondensed = !this.isMenuCondensed
      document.body.classList.toggle('sidebar-enable')
      document.body.classList.toggle('enlarged')
    },
    toggleRightSidebar() {
      document.body.classList.toggle('right-bar-enabled')
    },
    hideRightSidebar() {
      document.body.classList.remove('right-bar-enabled')
    },
  },
}
</script>

<template>
  <div id="wrapper">
    <NavBar :user="user" />
    <SideBar :is-condensed="isMenuCondensed" />
    <!-- ============================================================== -->
    <!-- Start Page Content here -->
    <!-- ============================================================== -->

    <div class="content-page">
      <div class="content">
        <!-- Start Content-->
        <div class="container-fluid">
          <slot />
        </div>
      </div>
      <Footer />
    </div>
    <RightBar />
  </div>
</template>
