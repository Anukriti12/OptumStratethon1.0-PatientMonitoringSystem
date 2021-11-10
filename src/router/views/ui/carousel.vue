<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'

/**
 * Carousel component
 */
export default {
  page: {
    title: 'Carousel',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout, PageHeader },
  data() {
    return {
      title: 'Carousel',
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
          text: 'Carousel',
          active: true,
        },
      ],
      slide: 0,
      slide1: 0,
      sliding: null,
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
          <div class="row">
            <div class="col-12">
              <h4 class="header-title">Bootstrap Carousel</h4>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <p class="sub-header">
                Add captions to your slides easily with the
                <code>.carousel-caption</code> element within
                any
                <code>.carousel-item</code>.
              </p>
              <b-carousel
                id="carousel-1"
                v-model="slide"
                :interval="4000"
                controls
                indicators
                background="#ababab"
                style="text-shadow: 1px 1px 2px #333;"
              >
                <!-- Text slides with image -->
                <b-carousel-slide :img-src="require('@assets/images/small/img-1.jpg')">
                  <h3 class="text-white">First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </b-carousel-slide>

                <!-- Slides with custom text -->
                <b-carousel-slide :img-src="require('@assets/images/small/img-2.jpg')">
                  <h3 class="text-white">Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </b-carousel-slide>

                <!-- Slides with image only -->
                <b-carousel-slide :img-src="require('@assets/images/small/img-3.jpg')">
                  <h3 class="text-white">Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </b-carousel-slide>
              </b-carousel>
            </div>
            <div class="col-lg-6 mt-3 mt-lg-0">
              <p class="sub-header">
                Add captions to your slides easily with the
                <code>.carousel-caption</code> element within
                any
                <code>.carousel-item</code>.
              </p>
              <!-- Controls carousel -->
              <b-carousel
                id="carousel-2"
                v-model="slide1"
                :interval="4000"
                indicators
                background="#ababab"
                style="text-shadow: 1px 1px 2px #333;"
              >
                <!-- Text slides with image -->
                <b-carousel-slide :img-src="require('@assets/images/small/img-4.jpg')"></b-carousel-slide>

                <!-- Slides with custom text -->
                <b-carousel-slide :img-src="require('@assets/images/small/img-5.jpg')"></b-carousel-slide>

                <!-- Slides with image only -->
                <b-carousel-slide :img-src="require('@assets/images/small/img-6.jpg')"></b-carousel-slide>
              </b-carousel>
              <!-- End controls carousel -->
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-lg-6">
              <p class="sub-header">
                Add
                <code>.carousel-fade</code> to your carousel to animate slides with a fade transition instead of a slide.
              </p>
              <b-carousel
                id="carousel-fade"
                style="text-shadow: 0px 0px 2px #000"
                fade
                controls
                indicators
              >
                <b-carousel-slide :img-src="require('@assets/images/small/img-3.jpg')">
                  <h3 class="text-white">First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </b-carousel-slide>
                <b-carousel-slide :img-src="require('@assets/images/small/img-1.jpg')">
                  <h3 class="text-white">Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </b-carousel-slide>
                <b-carousel-slide :img-src="require('@assets/images/small/img-2.jpg')">
                  <h3 class="text-white">Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </b-carousel-slide>
              </b-carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
