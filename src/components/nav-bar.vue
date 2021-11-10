<script>
import { authComputed } from '@state/helpers'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

export default {
  components: { VuePerfectScrollbar },
  props: {
    user: {
      type: Object,
      required: false,
      default: () => ({}),
    },
  },
  data() {
    return {}
  },
  computed: {
    ...authComputed,
  },
  methods: {
    toggleMenu() {
      this.$parent.toggleMenu()
    },
    toggleRightSidebar() {
      this.$parent.toggleRightSidebar()
    },
  },
}
</script>

<template>
  <!-- Topbar Start -->
  <div class="navbar-custom">
    <ul class="list-unstyled topnav-menu float-right mb-0">
      <b-nav-item-dropdown right class="notification-list">
        <template slot="button-content" class="nav-link dropdown-toggle">
          <i class="fe-bell noti-icon"></i>
        </template>

        <b-dropdown-text href="#" class="dropdown-item noti-title">
          <h5 class="m-0">
            <span class="float-right">
            </span>Notification
          </h5>
        </b-dropdown-text>

        <b-dropdown-text href="#" class="p-0">
          <VuePerfectScrollbar v-once class="noti-scroll">

            <!-- item-->
            <a href="javascript:void(0);" class="dropdown-item notify-item">
              <div class="notify-icon bg-primary">
                <i class="mdi mdi-comment-account-outline"></i>
              </div>
              <p class="notify-details">
                Patient Glucose level trend changed  ...
                <small class="text-muted">Yesterday</small>
              </p>
            </a>
          </VuePerfectScrollbar>
        </b-dropdown-text>
      </b-nav-item-dropdown>

      <b-nav-item-dropdown right class="notification-list" menu-class="profile-dropdown">
        <template slot="button-content">
          <div class="nav-user mr-0">
            <span class="pro-user-name ml-1">
              {{user ? user.name : ''}}
              <i class="mdi mdi-chevron-down"></i>
            </span>
          </div>
        </template>

        <b-dropdown-item href="/logout">
          <i class="fe-log-out mr-1"></i>
          <span>Logout</span>
        </b-dropdown-item>
      </b-nav-item-dropdown>
    </ul>

    <!-- LOGO -->
    <div class="logo-box">
      <a href="index.html" class="logo text-center">
        <span class="logo-lg">
          <img src="@assets/images/logo-light.png" alt height="18" />
          <!-- <span class="logo-lg-text-light">Xeria</span> -->
        </span>
        <span class="logo-sm">
          <!-- <span class="logo-sm-text-dark">X</span> -->
          <img src="@assets/images/logo-sm.png" alt height="24" />
        </span>
      </a>
    </div>

  </div>
  <!-- end Topbar -->
</template>

<style lang="scss">
.noti-scroll {
  height: 220px;
}
.ps > .ps__scrollbar-y-rail {
  width: 8px !important;
  background-color: transparent !important;
}
.ps > .ps__scrollbar-y-rail > .ps__scrollbar-y,
.ps.ps--in-scrolling.ps--y > .ps__scrollbar-y-rail > .ps__scrollbar-y,
.ps > .ps__scrollbar-y-rail:active > .ps__scrollbar-y,
.ps > .ps__scrollbar-y-rail:hover > .ps__scrollbar-y {
  width: 6px !important;
}
.button-menu-mobile {
  outline: none !important;
}
</style>
