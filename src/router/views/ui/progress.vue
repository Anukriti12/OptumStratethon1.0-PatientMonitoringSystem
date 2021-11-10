<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'

/**
 * Progress component
 */
export default {
  page: {
    title: 'Progress',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout, PageHeader },
  data() {
    return {
      title: 'Progress',
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
          text: 'Progress',
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
      <div class="col-md-6">
        <div class="card-box">
          <h4 class="header-title">Basic Example</h4>

          <p class="sub-header">Default progress bar.</p>
          <b-progress :value="0" :max="100" class="mb-2"></b-progress>
          <b-progress :value="33" :max="100" class="mb-2"></b-progress>
          <b-progress :value="66" :max="100" class="mb-2"></b-progress>
          <b-progress :value="100" :max="100" class="mb-2"></b-progress>
          <b-progress :value="25" show-value :max="100"></b-progress>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card-box">
          <h4 class="header-title">Contextual alternatives</h4>

          <p
            class="sub-header"
          >Progress bars use some of the same button and alert classes for consistent styles.</p>
          <b-progress :value="25" :max="100" class="mb-2" variant="success"></b-progress>
          <b-progress :value="50" :max="100" class="mb-2" variant="info"></b-progress>
          <b-progress :value="75" :max="100" class="mb-2" variant="warning"></b-progress>
          <b-progress :value="100" :max="100" class="mb-2" variant="danger"></b-progress>
          <b-progress class="mt-2" :max="100">
            <b-progress-bar :value="45 * (3 / 10)" variant="primary"></b-progress-bar>
            <b-progress-bar :value="45 * (6.6 / 10)" variant="success"></b-progress-bar>
            <b-progress-bar :value="45 * (4.8 / 10)" variant="info"></b-progress-bar>
          </b-progress>
        </div>
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
    <div class="row">
      <div class="col-md-6">
        <div class="card-box">
          <h4 class="header-title">Contextual alternatives</h4>

          <p
            class="sub-header"
          >Progress bars use some of the same button and alert classes for consistent styles.</p>
          <b-progress :value="10" :max="100" class="mb-2" variant="primary" animated></b-progress>
          <b-progress :value="25" :max="100" class="mb-2" variant="success" animated></b-progress>
          <b-progress :value="50" :max="100" class="mb-2" variant="info" animated></b-progress>
          <b-progress :value="75" :max="100" class="mb-2" variant="warning" animated></b-progress>
          <b-progress :value="100" :max="100" class="mb-2" variant="danger" animated></b-progress>
          <b-progress :value="75" :max="100" variant="primary" animated></b-progress>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card-box">
          <h4 class="header-title">Size example</h4>

          <p class="sub-header">
            We only set a
            <code>height</code> value on the
            <code>.progress</code>, so if you change that value the inner
            <code>.progress-bar</code> will automatically resize accordingly.
          </p>
          <b-progress :value="70" :max="100" class="mb-2" variant="primary" height="2px"></b-progress>
          <b-progress :value="30" :max="100" class="mb-2" variant="primary" height="5px"></b-progress>
          <b-progress :value="25" :max="100" class="mb-2" variant="success" height="8px"></b-progress>
          <b-progress :value="50" :max="100" class="mb-2" variant="info" height="12px"></b-progress>
          <b-progress :value="75" :max="100" class="mb-2" variant="warning" height="15px"></b-progress>
          <b-progress :value="38" :max="100" variant="danger"></b-progress>
        </div>
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
  </Layout>
</template>