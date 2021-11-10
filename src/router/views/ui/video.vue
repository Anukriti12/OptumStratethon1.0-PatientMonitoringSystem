<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'

/**
 * Embed video component
 */
export default {
  page: {
    title: 'Embed Video',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout, PageHeader },
  data() {
    return {
      title: 'Embed Video',
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
          text: 'Video',
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
      <div class="col-lg-6">
        <div class="card-box">
          <h4 class="header-title">Responsive embed video 21:9</h4>
          <p class="sub-header">
            Use class
            <code>.embed-responsive-21by9</code>
          </p>
          <!-- 21:9 aspect ratio -->
          <div class="embed-responsive">
            <b-embed type="iframe" aspect="21by9"
              class="embed-responsive-item"
              src="https://www.youtube.com/embed/PrUxWZiQfy4?autohide=0&showinfo=0&controls=0"
            ></b-embed>
          </div>
        </div>
      </div>
      <!-- end col -->

      <div class="col-lg-6">
        <div class="card-box">
          <h4 class="header-title">Responsive embed video 16:9</h4>
          <p class="sub-header">
            Use class
            <code>.embed-responsive-16by9</code>
          </p>
          <!-- 16:9 aspect ratio -->
          <div class="embed-responsive">
            <b-embed type="iframe" aspect="16by9"
              class="embed-responsive-item"
              src="https://www.youtube.com/embed/PrUxWZiQfy4?ecver=1"
            ></b-embed>
          </div>
        </div>
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-lg-6">
        <div class="card-box">
          <h4 class="header-title">Responsive embed video 4:3</h4>
          <p class="sub-header">
            Use class
            <code>.embed-responsive-4by3</code>
          </p>
          <!-- 4:3 aspect ratio -->
          <div class="embed-responsive">
            <b-embed type="iframe" aspect="4by3"
              class="embed-responsive-item"
              src="https://www.youtube.com/embed/PrUxWZiQfy4?ecver=1"
            ></b-embed>
          </div>
        </div>
      </div>
      <!-- end col -->

      <div class="col-lg-6">
        <div class="card-box">
          <h4 class="header-title">Responsive embed video 1:1</h4>
          <p class="sub-header">
            Use class
            <code>.embed-responsive-1by1</code>
          </p>
          <!-- 1:1 aspect ratio -->
          <div class="embed-responsive-1by1">
            <b-embed type="iframe" aspect="1by1"
              class="embed-responsive-item"
              src="https://www.youtube.com/embed/PrUxWZiQfy4?ecver=1"
            ></b-embed>
          </div>
        </div>
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
  </Layout>
</template>