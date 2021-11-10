<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'

/**
 * Dropdown component
 */
export default {
  page: {
    title: 'Dropdowns',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout, PageHeader },
  data() {
    return {
      title: 'Dropdowns',
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
          text: 'Dropdowns',
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
        <div class="card-box">
          <h4 class="header-title">Examples</h4>
          <p
            class="sub-header"
          >Toggle contextual overlays for displaying lists of links and more with the Bootstrap dropdown plugin.</p>

          <div class="row">
            <div class="col-xl-6">
              <p class="h5">Single button dropdowns</p>
              <p class="text-muted font-13 mb-3">
                Any single
                <code class="highlighter-rouge">.btn</code> can be turned into a dropdown
                toggle with some markup changes. Here’s how you can put them to work
                with either
                <code
                  class="highlighter-rouge"
                >&lt;button&gt;</code>
                elements:
              </p>

              <div class="row">
                <div class="col-6">
                  <b-dropdown variant="light">
                    <template slot="button-content">
                      Dropdown button
                      <i class="mdi mdi-chevron-down"></i>
                    </template>
                    <b-dropdown-item href="#">Action</b-dropdown-item>
                    <b-dropdown-item href="#">Another action</b-dropdown-item>
                    <b-dropdown-item href="#">Something else here</b-dropdown-item>
                  </b-dropdown>
                </div>

                <div class="col-6">
                  <b-dropdown variant="light">
                    <template slot="button-content">
                      Dropdown link
                      <i class="mdi mdi-chevron-down"></i>
                    </template>
                    <b-dropdown-item href="#">Action</b-dropdown-item>
                    <b-dropdown-item href="#">Another action</b-dropdown-item>
                    <b-dropdown-item href="#">Something else here</b-dropdown-item>
                  </b-dropdown>
                </div>
                <!-- end col -->
              </div>
              <!-- end row -->

              <p class="mb-1 mt-5 h5">Variant</p>
              <p
                class="text-muted font-13 mb-3"
              >The best part is you can do this with any button variant, too:</p>

              <div class="mb-2">
                <b-dropdown variant="primary">
                  <template slot="button-content">
                    Primary
                    <i class="mdi mdi-chevron-down"></i>
                  </template>
                  <b-dropdown-item href="#">Action</b-dropdown-item>
                  <b-dropdown-item href="#">Another action</b-dropdown-item>
                  <b-dropdown-item href="#">Something else here</b-dropdown-item>
                </b-dropdown>
                <b-dropdown variant="success" class="ml-1">
                  <template slot="button-content">
                    Success
                    <i class="mdi mdi-chevron-down"></i>
                  </template>
                  <b-dropdown-item href="#">Action</b-dropdown-item>
                  <b-dropdown-item href="#">Another action</b-dropdown-item>
                  <b-dropdown-item href="#">Something else here</b-dropdown-item>
                </b-dropdown>
                <b-dropdown variant="info" class="ml-1">
                  <template slot="button-content">
                    Info
                    <i class="mdi mdi-chevron-down"></i>
                  </template>
                  <b-dropdown-item href="#">Action</b-dropdown-item>
                  <b-dropdown-item href="#">Another action</b-dropdown-item>
                  <b-dropdown-item href="#">Something else here</b-dropdown-item>
                </b-dropdown>
                <b-dropdown variant="warning" class="ml-1">
                  <template slot="button-content">
                    Warning
                    <i class="mdi mdi-chevron-down"></i>
                  </template>
                  <b-dropdown-item href="#">Action</b-dropdown-item>
                  <b-dropdown-item href="#">Another action</b-dropdown-item>
                  <b-dropdown-item href="#">Something else here</b-dropdown-item>
                </b-dropdown>
              </div>

              <p class="mb-1 mt-5 h5">Dropright variation</p>
              <p class="text-muted font-13 mb-3">
                Trigger dropdown menus at the right of the elements by adding
                <code>.dropright</code> to the parent element.
              </p>

              <!-- Default dropright button -->
              <div class="btn-group dropright">
                <b-dropdown dropright variant="blue">
                  <template slot="button-content">
                    Dropright
                    <i class="mdi mdi-chevron-right"></i>
                  </template>
                  <b-dropdown-item href="#">Action</b-dropdown-item>
                  <b-dropdown-item href="#">Another action</b-dropdown-item>
                  <b-dropdown-item href="#">Something else here</b-dropdown-item>
                </b-dropdown>
              </div>
              <div class="btn-group">
                <b-dropdown dropright variant="success" class="ml-1">
                  <template slot="button-content">
                    Dropright
                    <i class="mdi mdi-chevron-right"></i>
                  </template>
                  <b-dropdown-item href="#">Action</b-dropdown-item>
                  <b-dropdown-item href="#">Another action</b-dropdown-item>
                  <b-dropdown-item href="#">Something else here</b-dropdown-item>
                </b-dropdown>
              </div>

              <p class="mb-1 mt-5 h5">Dropup variation</p>
              <p class="text-muted font-13 mb-3">
                Trigger dropdown menus above elements
                by adding
                <code
                  class="highlighter-rouge"
                >.dropup</code> to the parent
                element.
              </p>

              <!-- Default dropup button -->
              <div class="btn-group dropup">
                <b-dropdown dropup variant="light" class="m-2">
                  <template slot="button-content">
                    Dropup
                    <i class="mdi mdi-chevron-up"></i>
                  </template>
                  <b-dropdown-item href="#">Action</b-dropdown-item>
                  <b-dropdown-item href="#">Another action</b-dropdown-item>
                  <b-dropdown-item href="#">Something else here</b-dropdown-item>
                </b-dropdown>
              </div>
            </div>
            <!-- end col -->

            <div class="col-xl-6 mt-xl-0">
              <p class="mb-1 h5">Sizing</p>
              <p
                class="text-muted font-13 mb-3"
              >Button dropdowns work with buttons of all sizes, including default and split dropdown buttons.</p>

              <!-- Large button groups (default and split) -->
              <div class="btn-group mb-2">
                <b-dropdown variant="light" size="lg">
                  <template slot="button-content">
                    Large button
                    <i class="mdi mdi-chevron-down"></i>
                  </template>
                  <b-dropdown-item href="#">Action</b-dropdown-item>
                  <b-dropdown-item href="#">Another action</b-dropdown-item>
                  <b-dropdown-item href="#">Something else here</b-dropdown-item>
                </b-dropdown>
                <b-dropdown variant="light" size="sm" class="m-1">
                  <template slot="button-content">
                    Small button
                    <i class="mdi mdi-chevron-down"></i>
                  </template>
                  <b-dropdown-item-button href="#">Action</b-dropdown-item-button>
                  <b-dropdown-item-button href="#">Another action</b-dropdown-item-button>
                  <b-dropdown-item-button href="#">Something else here</b-dropdown-item-button>
                </b-dropdown>
              </div>

              <p class="mb-1 mt-5 h5">Dropleft variation</p>
              <p class="text-muted font-13 mb-3">
                Trigger dropdown menus at the right of the elements by adding
                <code>.dropleft</code> to the parent element.
              </p>

              <!-- Default dropright button -->
              <div class="mb-2 dropleft">
                <b-dropdown dropleft variant="info" class="m-2">
                  <template slot="button-content">
                    <i class="mdi mdi-chevron-left"></i>
                    Dropleft
                  </template>
                  <b-dropdown-item href="#">Action</b-dropdown-item>
                  <b-dropdown-item href="#">Another action</b-dropdown-item>
                  <b-dropdown-item href="#">Something else here</b-dropdown-item>
                </b-dropdown>

                <b-dropdown dropleft variant="warning" class="m-2 ml-1">
                  <template slot="button-content">
                    <i class="mdi mdi-chevron-left"></i>
                    Dropleft
                  </template>
                  <b-dropdown-item href="#">Action</b-dropdown-item>
                  <b-dropdown-item href="#">Another action</b-dropdown-item>
                  <b-dropdown-item href="#">Something else here</b-dropdown-item>
                </b-dropdown>
              </div>

              <p class="mb-1 h5 mt-5">Menu alignment</p>
              <p class="text-muted font-13 mb-3">
                Add
                <code class="highlighter-rouge">.dropdown-menu-right</code>
                to a
                <code class="highlighter-rouge">.dropdown-menu</code> to right
                align the dropdown menu.
              </p>

              <div class="btn-group mb-5">
                <b-dropdown right variant="light" class="m-2">
                  <template slot="button-content">
                    Right-aligned
                    <i class="mdi mdi-chevron-down"></i>
                  </template>
                  <b-dropdown-item href="#">Action</b-dropdown-item>
                  <b-dropdown-item href="#">Another action</b-dropdown-item>
                  <b-dropdown-item href="#">Something else here</b-dropdown-item>
                </b-dropdown>
              </div>
            </div>
            <!-- end col -->
          </div>
          <!-- end row -->
        </div>
        <!-- end card-box -->
      </div>
      <!-- end col -->
    </div>
    <!-- end row-->
  </Layout>
</template>