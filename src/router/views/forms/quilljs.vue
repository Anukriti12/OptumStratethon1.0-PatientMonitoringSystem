<script>
import { VueEditor } from 'vue2-editor'

import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'

/**
 * Quilljs Editor component
 */
export default {
  page: {
    title: 'Quilljs Editor',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { VueEditor, Layout, PageHeader },
  data() {
    return {
      title: 'Quilljs Editor',
      items: [
        {
          text: 'UBold',
          href: '/',
        },
        {
          text: 'Forms',
          href: '/',
        },
        {
          text: 'Quilljs Editor',
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
            <h4 class="header-title">Default Editor</h4>
            <p class="sub-header">Super simple wysiwyg editor on Bootstrap</p>
            <!-- Editor -->
            <vue-editor height="300"></vue-editor>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>