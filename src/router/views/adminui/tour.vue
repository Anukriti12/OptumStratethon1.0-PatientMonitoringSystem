<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'

/**
 * Tour-page component
 */
export default {
  page: {
    title: 'Tour',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout, PageHeader },
  data() {
    return {
      title: 'Tour',
      items: [
        {
          text: 'UBold',
          href: '/',
        },
        {
          text: 'Admin UI',
          href: '/',
        },
        {
          text: 'Tour',
          active: true,
        },
      ],
      steps: [
        {
          target: '#logo-tour',
          title: 'Logo Here',
          content: "You can find here status of user who's currently online.",
          params: {
            placement: 'bottom',
            yOffset: 10,
          },
        },
        {
          target: '#display-title-tour',
          header: {
            title: 'Display Text',
          },
          content: 'Click on the button and make sidebar navigation small.',
          params: {
            placement: 'left',
            zindex: 999,
          },
        },
        {
          target: '#page-title-tour',
          title: 'User settings',
          content: 'You can edit you profile info here.',
          params: {
            placement: 'bottom',
          },
        },
        {
          target: '#thankyou-tour',
          title: 'Thank you !',
          content: 'Here you can change theme skins and other features.',
          params: {
            placement: 'top',
            zindex: 999,
          },
        },
      ],
    }
  },
  mounted: function() {
    this.$tours['myTour'].start()
  },
}
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />

    <div class="row">
      <div class="col-12">
        <div class="card-box">
          <div class="text-center">
            <img id="logo-tour" src="@assets/images/logo-dark.png" alt height="18" />
          </div>
          <v-tour name="myTour" :steps="steps"></v-tour>
          <h1 id="display-title-tour">This is a Heading 1</h1>
          <p class="text-muted">
            Suspendisse vel quam malesuada, aliquet sem sit
            amet, fringilla elit. Morbi
            tempor tincidunt tempor. Etiam id turpis viverra, vulputate sapien
            nec,
            varius sem. Curabitur ullamcorper fringilla eleifend. In ut eros
            hendrerit
            est consequat posuere et at velit.
          </p>

          <div class="clearfix"></div>

          <h2>This is a Heading 2</h2>
          <p class="text-muted">
            In nec rhoncus eros. Vestibulum eu mattis nisl.
            Quisque viverra viverra magna
            nec pulvinar. Maecenas pellentesque porta augue, consectetur
            facilisis diam
            porttitor sed. Suspendisse tempor est sodales augue rutrum
            tincidunt.
            Quisque a malesuada purus.
          </p>

          <div class="clearfix"></div>

          <h3>This is a Heading 3</h3>
          <p class="text-muted">
            Vestibulum auctor tincidunt semper. Phasellus ut
            vulputate lacus. Suspendisse
            ultricies mi eros, sit amet tempor nulla varius sed. Proin nisl
            nisi,
            feugiat quis bibendum vitae, dapibus in tellus.
          </p>

          <div class="clearfix"></div>

          <h4>This is a Heading 4</h4>
          <p class="text-muted">
            Nulla et mattis nunc. Curabitur scelerisque
            commodo condimentum. Mauris
            blandit, velit a consectetur egestas, diam arcu fermentum justo,
            eget
            ultrices arcu eros vel erat.
          </p>

          <div class="clearfix"></div>

          <h5 id="page-title-tour">This is a Heading 5</h5>
          <p class="text-muted">
            Quisque nec turpis at urna dictum luctus.
            Suspendisse convallis dignissim
            eros at volutpat. In egestas mattis dui. Aliquam mattis dictum
            aliquet.
            Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.
            Vivamus
            pretium nec odio cursus elementum. Suspendisse molestie ullamcorper
            ornare.
          </p>

          <div class="clearfix"></div>

          <h6>This is a Heading 6</h6>
          <p class="text-muted">
            Donec ultricies, lacus id tempor condimentum, orci
            leo faucibus sem, a
            molestie libero lectus ac justo. ultricies mi eros, sit amet tempor
            nulla
            varius sed. Proin nisl nisi, feugiat quis bibendum vitae, dapibus in
            tellus.
          </p>

          <div class="text-center mt-4">
            <a id="thankyou-tour" href="javascript: void(0);" class="btn btn-danger">Thank you !</a>
          </div>
        </div>
        <!-- end card-box -->
      </div>
      <!-- end col -->
    </div>
    <!-- end row-->
  </Layout>
</template>