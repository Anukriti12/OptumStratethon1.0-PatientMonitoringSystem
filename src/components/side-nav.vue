<script>
import { authComputed } from '@state/helpers'

import MetisMenu from 'metismenujs/dist/metismenujs'

export default {
  components: {},
  computed: {
    ...authComputed,
  },
  mounted: function() {
    // eslint-disable-next-line no-unused-vars
    var menuRef = new MetisMenu('#side-menu')
    var links = document.getElementsByClassName('side-nav-link-ref')
    var matchingMenuItem = null
    for (var i = 0; i < links.length; i++) {
      if (window.location.pathname === links[i].pathname) {
        matchingMenuItem = links[i]
        break
      }
    }

    if (matchingMenuItem) {
      matchingMenuItem.classList.add('active')
      var parent = matchingMenuItem.parentElement

      /**
       * TODO: This is hard coded way of expading/activating parent menu dropdown and working till level 3.
       * We should come up with non hard coded approach
       */
      if (parent) {
        parent.classList.add('active')
        const parent2 = parent.parentElement
        if (parent2) {
          parent2.classList.add('in')
        }
        const parent3 = parent2.parentElement
        if (parent3) {
          parent3.classList.add('active')
          var childAnchor = parent3.querySelector('.has-dropdown')
          if (childAnchor) childAnchor.classList.add('active')
        }

        const parent4 = parent3.parentElement
        if (parent4) parent4.classList.add('in')
        const parent5 = parent4.parentElement
        if (parent5) parent5.classList.add('active')
      }
    }
  },
  methods: {
    /**
     * small sidebar
     */
    smallSidebar() {
      document.body.classList.add('left-side-menu-sm')
      document.body.classList.remove('left-side-menu-dark')
      document.body.classList.remove('topbar-light')
      document.body.classList.remove('boxed-layout')
      document.body.classList.remove('enlarged')
    },

    /**
     * Dark sidebar
     */
    darkSidebar() {
      document.body.classList.remove('left-side-menu-sm')
      document.body.classList.add('left-side-menu-dark')
      document.body.classList.remove('topbar-light')
      document.body.classList.remove('boxed-layout')
    },

    /**
     * Light Topbar
     */
    lightTopbar() {
      document.body.classList.add('topbar-light')
      document.body.classList.remove('left-side-menu-dark')
      document.body.classList.remove('left-side-menu-sm')
      document.body.classList.remove('boxed-layout')
    },

    /**
     * Sidebar collapsed
     */
    sidebarCollapsed() {
      document.body.classList.remove('left-side-menu-dark')
      document.body.classList.remove('left-side-menu-sm')
      document.body.classList.toggle('enlarged')
      document.body.classList.remove('boxed-layout')
      document.body.classList.remove('topbar-light')
    },

    /**
     * Boxed Layout
     */
    boxedLayout() {
      document.body.classList.add('boxed-layout')
      document.body.classList.remove('left-side-menu-dark')
      document.body.classList.add('enlarged')
      document.body.classList.remove('left-side-menu-sm')
    },
  },
}
</script>

<template>
  <!--- Sidemenu -->
  <div id="sidebar-menu">
    <ul id="side-menu" class="metismenu">
      <li class="menu-title">Navigation</li>

      <li>
        <a href="javascript: void(0);" aria-expanded="false" class="has-dropdown">
          <i class="fe-airplay"></i>
          <span class="badge badge-success badge-pill float-right">3</span>
          <span>Dashboards</span>
        </a>
        <ul class="nav-second-level" aria-expanded="false">
          <li>
            <router-link tag="a" to="/" class="side-nav-link-ref">#132539</router-link>
          </li>
          <li>
            <router-link tag="a" to="/dashboards/dashboard2" class="side-nav-link-ref">#132540</router-link>
          </li>
          <li>
            <router-link tag="a" to="/dashboards/dashboard3" class="side-nav-link-ref">#132543</router-link>
          </li>
        </ul>
      </li>
      <li>
        <a href="javascript: void(0);" aria-expanded="false" class="has-dropdown">
          <i class="fe-bar-chart-2"></i>
          <span>Statistics</span>
          <span class="menu-arrow"></span>
        </a>
        <ul class="nav-second-level" aria-expanded="false">
          <li>
            <router-link tag="a" to="/charts/chartjs" class="side-nav-link-ref">Scatter Plot</router-link>
          </li>
          <li>
            <router-link tag="a" to="/charts/chartist" class="side-nav-link-ref">Mortality Plot</router-link>
          </li>
        </ul>
      </li>
      <li>
        <a href="javascript: void(0);">
          <i class="fe-users"></i>
          <router-link tag="a" to="/forms/validation" class="side-nav-link-ref">Add Patient</router-link>
        </a>
      </li>
    </ul>
    <div class="clearfix"></div>
  </div>
  <!-- End Sidebar -->
</template>

<style lang="scss">
@import '~metismenujs/scss/metismenujs';
</style>
