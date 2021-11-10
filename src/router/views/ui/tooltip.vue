<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'

/**
 * Tooltip & Popovers component
 */
export default {
  page: {
    title: 'Tooltips & Popovers',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout, PageHeader },
  data() {
    return {
      title: 'Tooltips & Popovers',
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
          text: 'Tooltips & Popovers',
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
          <h4 class="header-title">Popovers</h4>
          <p class="sub-header">
            Add small overlays of content, like those on
            the iPad, to any element for housing secondary information.
          </p>

          <div class="button-list">
            <b-button
              v-b-popover.top="'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'"
              variant="light"
            >Popover on top</b-button>

            <b-button
              v-b-popover.bottom="'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'"
              variant="light"
            >Popover on bottom</b-button>
            <b-button
              v-b-popover.right="'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'"
              variant="light"
            >Popover on right</b-button>
            <b-button
              v-b-popover.left="'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'"
              variant="light"
            >Popover on left</b-button>
          </div>
        </div>
        <!-- end card-box -->
      </div>
      <!-- end col-->
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-12">
        <div class="card-box">
          <h4 class="header-title m-t-0">Tooltips</h4>
          <p class="sub-header">
            Four options are available: top, right, bottom,
            and left aligned.
          </p>

          <div class="button-list">
            <b-button id="tooltip-top" variant="light">Tooltip on top</b-button>
            <b-tooltip target="tooltip-top">Tooltip on top</b-tooltip>
            <b-button id="tooltip-button" variant="light">Tooltip on bottom</b-button>
            <b-tooltip target="tooltip-button" placement="bottom">Tooltip on bottom</b-tooltip>
            <b-button id="tooltip-left-button" variant="light">Tooltip on left</b-button>
            <b-tooltip target="tooltip-left-button">Tooltip on left</b-tooltip>
            <b-button id="tooltip-right-button" variant="light">Tooltip on right</b-button>
            <b-tooltip target="tooltip-right-button" placement="bottom">Tooltip on right</b-tooltip>
          </div>
        </div>
        <!-- end card-box -->
      </div>
      <!-- end col-->
    </div>
    <!-- end row -->
  </Layout>
</template>