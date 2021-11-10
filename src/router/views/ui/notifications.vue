<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'

/**
 * Alerts & Notifications component
 */
export default {
  page: {
    title: 'Alerts & Notifications',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout, PageHeader },
  data() {
    return {
      title: 'Alerts & Notifications',
      items: [
        {
          text: 'UBold',
          href: '/',
        },
        {
          text: 'UI',
          href: '/',
        },
        {
          text: 'Notifications',
          active: true,
        },
      ],
    }
  },
}
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Bootstrap Toasts</h4>
            <p
              class="text-muted"
            >Push notifications to your visitors with a toast, a lightweight and easily customizable alert message.</p>

            <div class="row">
              <div class="col-md-6">
                <h5 class="mb-2">Basic</h5>
                <p class="text-muted">
                  Toasts are as flexible as you need and have very little required markup. At a minimum, we
                  require a single element to contain your “toasted” content and strongly encourage a dismiss button.
                </p>
                <div class="p-3">
                  <b-toast visible static no-auto-hide>
                    <div slot="toast-title" class="d-flex flex-grow-1 align-items-baseline">
                      <b-img :src="require('@assets/images/logo-sm.png')" class="mr-1" height="12"></b-img>
                      <strong class="mr-auto">UBold</strong>
                      <small class="mr-2">11 min ago</small>
                    </div>Hello, world! This is a toast message.
                  </b-toast>
                  <!--end toast-->
                </div>
              </div>
              <!-- end col-->
              <div class="col-md-6">
                <h5 class="mb-2">Translucent</h5>
                <p class="text-muted">
                  Toasts are slightly translucent, too, so they blend over whatever they might appear over.
                  For browsers that support the backdrop-filter CSS property, we’ll also attempt to blur the elements under a toast.
                </p>

                <div class="p-3 bg-secondary">
                  <b-toast visible static no-auto-hide>
                    <div slot="toast-title" class="d-flex flex-grow-1 align-items-baseline">
                      <b-img :src="require('@assets/images/logo-sm.png')" class="mr-1" height="12"></b-img>
                      <strong class="mr-auto">UBold</strong>
                      <small class="mr-2">11 min ago</small>
                    </div>Hello, world! This is a toast message.
                  </b-toast>
                  <!--end toast-->
                </div>
              </div>
              <!-- end col-->
            </div>
            <!-- end row-->

            <div class="row">
              <div class="col-md-6 mt-4">
                <h5 class="mb-2">Stacking</h5>
                <p
                  class="text-muted"
                >When you have multiple toasts, we default to vertiaclly stacking them in a readable manner.</p>
                <div class="p-3">
                  <div
                    aria-live="polite"
                    aria-atomic="true"
                    style="position: relative; min-height: 200px;"
                  >
                    <!-- Position it -->
                    <div style="position: absolute; top: 0; right: 0;">
                      <b-toast visible static no-auto-hide>
                        <div slot="toast-title" class="d-flex flex-grow-1 align-items-baseline">
                          <b-img
                            :src="require('@assets/images/logo-sm.png')"
                            class="mr-1"
                            height="12"
                          ></b-img>
                          <strong class="mr-auto">UBold</strong>
                          <small class="mr-2">just now</small>
                        </div>See? Just like this.
                      </b-toast>
                      <!--end toast-->

                      <b-toast visible static no-auto-hide>
                        <div slot="toast-title" class="d-flex flex-grow-1 align-items-baseline">
                          <b-img
                            :src="require('@assets/images/logo-sm.png')"
                            class="mr-1"
                            height="12"
                          ></b-img>
                          <strong class="mr-auto">UBold</strong>
                          <small class="mr-2">2 seconds ago</small>
                        </div>Heads up, toasts will stack automatically
                      </b-toast>
                      <!--end toast-->
                    </div>
                  </div>
                </div>
              </div>
              <!-- end col-->
              <div class="col-md-6 mt-4">
                <h5 class="mb-2">Placement</h5>
                <p class="text-muted">
                  Place toasts with custom CSS as you need them. The top right is often used for
                  notifications, as is the top middle. If you’re only ever going to show one toast at a time, put the positioning
                  styles right on the
                  <code>.toast</code>.
                </p>
                <div class="p-3">
                  <div
                    aria-live="polite"
                    aria-atomic="true"
                    class="d-flex justify-content-center align-items-center"
                    style="min-height: 200px;"
                  >
                    <!-- Then put toasts within -->

                    <b-toast visible static no-auto-hide>
                      <div slot="toast-title" class="d-flex flex-grow-1 align-items-baseline">
                        <b-img
                          :src="require('@assets/images/logo-sm.png')"
                          class="mr-1"
                          height="12"
                        ></b-img>
                        <strong class="mr-auto">UBold</strong>
                        <small class="mr-2">11 mins ago</small>
                      </div>Hello, world! This is a toast message.
                    </b-toast>
                    <!--end toast-->
                    <!--end toast-->
                  </div>
                </div>
              </div>
              <!-- end col-->
            </div>
            <!-- end row-->
          </div>
          <!-- end card-body-->
        </div>
        <!-- end card-->
      </div>
      <!-- end col-->
    </div>
    <div class="row">
      <div class="col-lg-6">
        <div class="card-box">
          <h4 class="header-title">Default Alert</h4>
          <p class="sub-header">
            Alerts are available for any length of text, as well as an optional dismiss button. For proper styling, use one of the eight
            <strong>required</strong> contextual classes (e.g.,
            <code>variant</code>).
          </p>

          <b-alert show variant="primary">This is a primary alert—check it out!</b-alert>
          <b-alert show variant="secondary">This is a secondary alert—check it out!</b-alert>
          <b-alert show variant="success">This is a success alert—check it out!</b-alert>
          <b-alert show variant="danger">This is a danger alert—check it out!</b-alert>
          <b-alert show variant="warning">This is a warning alert—check it out!</b-alert>
          <b-alert
            show
            variant="info"
          >A simple info alert with an example link. Give it a click if you like.</b-alert>
          <b-alert
            show
            variant="light"
          >A simple light alert with an example link. Give it a click if you like.</b-alert>
          <b-alert
            show
            variant="dark" class="mb-0"
          >A simple dark alert with an example link. Give it a click if you like.</b-alert>
        </div>
        <!-- end card-box-->
      </div>
      <!-- end col -->
      <div class="col-lg-6">
        <div class="card-box">
          <h4 class="header-title">Dismissing Alerts</h4>
          <p class="sub-header">
            Add a dismiss button and the
            <code>.alert-dismissible</code> class, which adds extra padding
            to the right of the alert and positions the
            <code>.close</code> button.
          </p>

          <b-alert show dismissible variant="primary">This is a primary alert—check it out!</b-alert>
          <b-alert show dismissible variant="secondary">This is a secondary alert—check it out!</b-alert>
          <b-alert show dismissible variant="success">This is a success alert—check it out!</b-alert>
          <b-alert show dismissible variant="danger">This is a danger alert—check it out!</b-alert>
          <b-alert show dismissible variant="warning">This is a warning alert—check it out!</b-alert>
          <b-alert
            show
            dismissible
          >A simple info alert with an example link. Give it a click if you like.</b-alert>
          <b-alert
            show
            dismissible
            variant="light"
          >A simple light alert with an example link. Give it a click if you like.</b-alert>
          <b-alert
            show
            dismissible
            variant="dark" class="mb-0"
          >A simple dark alert with an example link. Give it a click if you like.</b-alert>
        </div>
        <!-- end card-box-->
      </div>
      <!-- end col -->
    </div>

    <div class="row">
      <div class="col-lg-6">
        <div class="card-box">
          <h4 class="header-title">Custom Background Alert</h4>
          <p class="sub-header">
            Use
            <code>.bg-*</code>,
            <code>.border-0</code> classes.
          </p>

          <b-alert show class="bg-primary text-white border-0">This is a primary alert—check it out!</b-alert>
          <b-alert
            show
            class="bg-secondary text-white border-0"
          >This is a secondary alert—check it out!</b-alert>
          <b-alert show class="bg-success text-white border-0">This is a success alert—check it out!</b-alert>
          <b-alert show class="bg-danger text-white border-0">This is a danger alert—check it out!</b-alert>
          <b-alert show class="bg-warning text-white border-0">This is a warning alert—check it out!</b-alert>
          <b-alert show class="bg-light text-black border-0">This is a info alert—check it out!</b-alert>
          <b-alert show class="bg-info text-white border-0">This is a light alert—check it out!</b-alert>
          <b-alert show class="bg-dark text-white border-0 mb-0">This is a dark alert—check it out!</b-alert>
        </div>
        <!-- end card-box-->
      </div>

      <div class="col-lg-6">
        <div class="card-box">
          <h4 class="header-title">Dismissing Custom Background Alert</h4>
          <p class="sub-header">
            Use
            <code>.bg-*</code>,
            <code>.border-0</code> classes.
          </p>
          <b-alert
            show
            dismissible
            class="bg-primary text-white border-0"
          >This is a primary alert—check it out!</b-alert>
          <b-alert
            show
            dismissible
            class="bg-secondary text-white border-0"
          >This is a secondary alert—check it out!</b-alert>
          <b-alert
            show
            dismissible
            class="bg-success text-white border-0"
          >This is a success alert—check it out!</b-alert>
          <b-alert
            show
            dismissible
            class="bg-danger text-white border-0"
          >This is a danger alert—check it out!</b-alert>
          <b-alert
            show
            dismissible
            class="bg-warning text-white border-0"
          >This is a warning alert—check it out!</b-alert>
          <b-alert
            show
            dismissible
            class="bg-light text-black border-0"
          >This is a info alert—check it out!</b-alert>
          <b-alert
            show
            dismissible
            class="bg-info text-white border-0"
          >This is a light alert—check it out!</b-alert>
          <b-alert
            show
            dismissible
            class="bg-dark text-white border-0 mb-0"
          >This is a dark alert—check it out!</b-alert>
        </div>
      </div>
    </div>
  </Layout>
</template>