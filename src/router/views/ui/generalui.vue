<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'

/**
 * General-ui component
 */
export default {
  page: {
    title: 'General UI',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout, PageHeader },
  data() {
    return {
      title: 'General UI',
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
          text: 'General UI',
          active: true,
        },
      ],
      currentpage: 3,
      text: `
          Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat.
        `,
    }
  },
  methods: {
    /**
     * Scrollspy
     */
    scrollIntoView(evt) {
      evt.preventDefault()
      const href = evt.target.getAttribute('href')
      const el = href ? document.querySelector(href) : null
      if (el) {
        this.$refs.content.scrollTop = el.offsetTop
      }
    },
  },
}
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-lg-6">
        <div class="card-box">
          <h4 class="header-title">Badges</h4>
          <p class="text-muted font-14 mb-3">
            Badges scale to match the size of the immediate parent element by using relative font sizing and
            <code>em</code> units.
          </p>

          <b-badge href="javascript: void(0);" variant="primary">Primary</b-badge>
          <b-badge href="javascript: void(0);" variant="secondary" class="ml-1">Secondary</b-badge>
          <b-badge href="javascript: void(0);" variant="success" class="ml-1">Success</b-badge>
          <b-badge href="javascript: void(0);" variant="danger" class="ml-1">Danger</b-badge>
          <b-badge href="javascript: void(0);" variant="warning" class="ml-1">Warning</b-badge>
          <b-badge href="javascript: void(0);" variant="info" class="ml-1">Info</b-badge>
          <b-badge href="javascript: void(0);" variant="light" class="ml-1">Light</b-badge>
          <b-badge href="javascript: void(0);" variant="pink" class="ml-1">Pink</b-badge>
          <b-badge href="javascript: void(0);" variant="blue" class="ml-1">Blue</b-badge>
          <b-badge href="javascript: void(0);" variant="dark" class="ml-1">Dark</b-badge>
        </div>
        <!-- end card-box -->
      </div>
      <!-- end col-->

      <div class="col-lg-6">
        <div class="card-box">
          <h4 class="header-title">Pill Badges</h4>
          <p class="text-muted font-14 mb-3">
            Use the
            <code>.badge-pill</code> modifier class to make badges more rounded.
          </p>

          <b-badge href="javascript: void(0);" variant="primary" pill>Primary</b-badge>
          <b-badge href="javascript: void(0);" variant="secondary" pill class="ml-1">Secondary</b-badge>
          <b-badge href="javascript: void(0);" variant="success" pill class="ml-1">Success</b-badge>
          <b-badge href="javascript: void(0);" variant="danger" pill class="ml-1">Danger</b-badge>
          <b-badge href="javascript: void(0);" variant="warning" pill class="ml-1">Warning</b-badge>
          <b-badge href="javascript: void(0);" variant="info" pill class="ml-1">Info</b-badge>
          <b-badge href="javascript: void(0);" variant="light" pill class="ml-1">Light</b-badge>
          <b-badge href="javascript: void(0);" variant="pink" pill class="ml-1">Pink</b-badge>
          <b-badge href="javascript: void(0);" variant="blue" pill class="ml-1">Blue</b-badge>
          <b-badge href="javascript: void(0);" variant="dark" pill class="ml-1">Dark</b-badge>
        </div>
        <!-- end card-box -->
      </div>
      <!-- end col-->
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-md-6">
                <h4 class="header-title">Pagination</h4>
                <p
                  class="text-muted font-14 mb-3"
                >Provide pagination links for your site or app with the multi-page pagination component.</p>

                <p class="mb-1 font-weight-bold">Default Pagination</p>
                <p
                  class="text-muted font-14"
                >Simple pagination inspired by Rdio, great for apps and search results.</p>

                <b-pagination
                  v-model="currentpage"
                  :total-rows="50"
                  :per-page="10"
                  aria-controls="my-table"
                ></b-pagination>

                <p class="mb-1 font-weight-bold mt-4">Rounded Pagination</p>
                <p class="text-muted font-14">
                  Add
                  <code>.pagination-rounded</code> for rounded pagination.
                </p>
                <b-pagination
                  v-model="currentpage"
                  class="pagination-rounded"
                  :total-rows="50"
                  :per-page="10"
                  aria-controls="my-table"
                ></b-pagination>

                <p class="mb-1 font-weight-bold mt-4">Sizing</p>
                <p class="text-muted font-14">
                  Add
                  <code>.pagination-lg</code>
                  or
                  <code>.pagination-sm</code>
                  for additional sizes.
                </p>

                <b-pagination size="lg" :total-rows="30" :per-page="10" aria-controls="my-table"></b-pagination>

                <b-pagination size="sm" :total-rows="30" :per-page="10" aria-controls="my-table"></b-pagination>

                <p class="mb-1 font-weight-bold mt-4">Alignment</p>
                <p
                  class="text-muted font-14"
                >Change the alignment of pagination components with flexbox utilities.</p>

                <b-pagination
                  :total-rows="30"
                  first-text="First"
                  prev-text="Previous"
                  next-text="Next"
                  last-text="Last"
                  align="center"
                ></b-pagination>

                <b-pagination
                  :total-rows="30"
                  first-text="First"
                  prev-text="Previous"
                  next-text="Next"
                  last-text="Last"
                  align="right"
                ></b-pagination>
              </div>

              <div class="col-md-6">
                <h4 class="header-title mt-3 mt-sm-0">Breadcrumb</h4>
                <p
                  class="text-muted font-14"
                >Indicate the current page’s location within a navigational hierarchy.</p>

                <ol class="breadcrumb">
                  <li class="breadcrumb-item active">Home</li>
                </ol>
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="javascript: void(0);">Home</a>
                  </li>
                  <li class="breadcrumb-item active">Library</li>
                </ol>
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="javascript: void(0);">Home</a>
                  </li>
                  <li class="breadcrumb-item">
                    <a href="javascript: void(0);">Library</a>
                  </li>
                  <li class="breadcrumb-item active">Data</li>
                </ol>
              </div>
            </div>
            <!-- end row -->
          </div>
          <!-- end card-body-->
        </div>
        <!-- end card -->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-12">
        <b-jumbotron>
          <template slot="header">
            <h1 class="display-4">Hello, world!</h1>
          </template>
          <p
            class="lead"
          >This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr class="my-4" />
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <b-button variant="primary" href="javascript: void(0);" size="lg">Learn more</b-button>
        </b-jumbotron>
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-12">
        <div class="card-box">
          <h4 class="header-title">Scrollspy</h4>
          <p
            class="text-muted font-14 mb-3"
          >Scroll the area below the navbar and watch the active class change. The dropdown items will be highlighted as well.</p>

          <div>
            <b-card no-body>
              <b-nav slot="header" v-b-scrollspy:nav-scroller pills>
                <b-nav-item href="#fat" @click="scrollIntoView">@fat</b-nav-item>
                <b-nav-item href="#mdo" @click="scrollIntoView">@mdo</b-nav-item>
                <b-nav-item-dropdown right-alignment>
                  <template slot="button-content">
                    Dropdown
                    <i class="mdi mdi-chevron-down"></i>
                  </template>
                  <b-dropdown-item href="#one" @click="scrollIntoView">one</b-dropdown-item>
                  <b-dropdown-item href="#two" @click="scrollIntoView">two</b-dropdown-item>
                  <b-dropdown-divider></b-dropdown-divider>
                  <b-dropdown-item href="#three" @click="scrollIntoView">three</b-dropdown-item>
                </b-nav-item-dropdown>
              </b-nav>

              <b-card-body
                id="nav-scroller"
                ref="content"
                style="position:relative; height:200px; overflow-y:scroll;"
              >
                <h4 id="fat">@fat</h4>
                <p>{{ text }}</p>
                <h4 id="mdo">@mdo</h4>
                <p>{{ text }}</p>
                <h4 id="one">one</h4>
                <p>{{ text }}</p>
                <h4 id="two">two</h4>
                <p>{{ text }} {{ text}}</p>
                <h4 id="three">three</h4>
                <p>{{ text }} {{ text }} {{ text }}</p>
              </b-card-body>
            </b-card>
          </div>
        </div>
        <!-- end card-box-->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
  </Layout>
</template>