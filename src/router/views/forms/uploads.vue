<script>
import vue2Dropzone from 'vue2-dropzone'

import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'

/**
 * File Uploads component
 */
export default {
  page: {
    title: 'File Uploads',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { vueDropzone: vue2Dropzone, Layout, PageHeader },
  data() {
    return {
      title: 'File Uploads',
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
          text: 'File Uploads',
          active: true,
        },
      ],
      dropzoneOptions: {
        url: 'https://httpbin.org/post',
        thumbnailWidth: 150,
        maxFilesize: 0.5,
        headers: { 'My-Awesome-Header': 'header value' },
      },
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
            <h4 class="header-title m-t-0">Dropzone File Upload</h4>
            <p
              class="text-muted font-13 m-b-30"
            >DropzoneJS is an open source library that provides drag’n’drop file uploads with image previews.</p>
            <!-- file upload -->
            <vue-dropzone id="dropzone" ref="myVueDropzone" :options="dropzoneOptions"></vue-dropzone>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>