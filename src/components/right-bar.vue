<script>
import { authComputed } from '@state/helpers'

export default {
  components: {},
  data() {
    return {
      config: {
        handler: this.handleRightBarClick,
        middleware: this.middleware,
        events: ['click'],
      },
    }
  },
  computed: {
    ...authComputed,
  },
  methods: {
    hide() {
      this.$parent.toggleRightSidebar()
    },
    handleRightBarClick(e, el) {
      this.$parent.hideRightSidebar()
    },
    middleware(event, el) {
      return !event.target.classList.contains('toggle-right')
    },
  },
}
</script>

<template>
  <div>
    <!-- Right Sidebar -->
    <div v-click-outside="config" class="right-bar">
      <div class="rightbar-title">
        <a href="javascript:void(0);" class="right-bar-toggle float-right" @click="hide">
          <i class="fe-x noti-icon"></i>
        </a>
        <h4 class="m-0 text-white">Settings</h4>
      </div>
      <div class="slimscroll-menu">
        <!-- User box -->
        <div class="user-box">
          <div class="user-img">
            <img
              src="@assets/images/users/user-1.jpg"
              alt="user-img"
              title="Mat Helme"
              class="rounded-circle img-fluid"
            />
            <a href="javascript:void(0);" class="user-edit">
              <i class="mdi mdi-pencil"></i>
            </a>
          </div>

          <h5>
            <a href="javascript: void(0);">Nik G. Patel</a>
          </h5>
          <p class="text-muted mb-0">
            <small>Admin Head</small>
          </p>
        </div>
        <div class="p-3">
          <div class="inbox-widget">
            <div class="inbox-item">
              <div class="inbox-item-img">
                <img src="@assets/images/users/user-2.jpg" class="rounded-circle" alt />
              </div>
              <p class="inbox-item-author">
                <a href="javascript: void(0);" class="text-dark">Tomaslau</a>
              </p>
              <p class="inbox-item-text">I've finished it! See you so...</p>
            </div>
            <div class="inbox-item">
              <div class="inbox-item-img">
                <img src="@assets/images/users/user-3.jpg" class="rounded-circle" alt />
              </div>
              <p class="inbox-item-author">
                <a href="javascript: void(0);" class="text-dark">Stillnotdavid</a>
              </p>
              <p class="inbox-item-text">This theme is awesome!</p>
            </div>
            <div class="inbox-item">
              <div class="inbox-item-img">
                <img src="@assets/images/users/user-4.jpg" class="rounded-circle" alt />
              </div>
              <p class="inbox-item-author">
                <a href="javascript: void(0);" class="text-dark">Kurafire</a>
              </p>
              <p class="inbox-item-text">Nice to meet you</p>
            </div>

            <div class="inbox-item">
              <div class="inbox-item-img">
                <img src="@assets/images/users/user-5.jpg" class="rounded-circle" alt />
              </div>
              <p class="inbox-item-author">
                <a href="javascript: void(0);" class="text-dark">Shahedk</a>
              </p>
              <p class="inbox-item-text">Hey! there I'm available...</p>
            </div>
            <div class="inbox-item">
              <div class="inbox-item-img">
                <img src="@assets/images/users/user-6.jpg" class="rounded-circle" alt />
              </div>
              <p class="inbox-item-author">
                <a href="javascript: void(0);" class="text-dark">Adhamdannaway</a>
              </p>
              <p class="inbox-item-text">This theme is awesome!</p>
            </div>
          </div>
          <!-- end inbox-widget -->

          <!-- end .p-3-->
        </div>
      </div>
      <!-- end slimscroll-menu-->
    </div>
    <!-- /Right-bar -->

    <!-- Right bar overlay-->
    <div class="rightbar-overlay"></div>
  </div>
</template>

<style lang="scss"></style>
