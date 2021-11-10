<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'

import { ribbonsData } from './dataRibbons'

/**
 * Ribbons component
 */
export default {
  page: {
    title: 'Ribbons',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout, PageHeader },
  data() {
    return {
      ribbonsData: ribbonsData,
      title: 'Ribbons',
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
          text: 'Ribbons',
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
      <div v-for="ribbon in ribbonsData" :key="ribbon.title" class="col-lg-4">
        <div class="card-box ribbon-box">
          <div :class="`ribbon ribbon-${ribbon.color} float-${ribbon.textalign}`">
            <i :class="`${ribbon.icon} mr-1`"></i>
            {{ribbon.color | titlecase}}
          </div>
          <h5 :class="`text-${ribbon.color} float-${ribbon.titlealign} mt-0`">{{ ribbon.title }}</h5>
          <div class="ribbon-content">
            <p class="mb-0">
              Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at
              volutpat. In egestas
              mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo
              dapibus odio.
            </p>
          </div>
        </div>
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->

    <div class="row">
      <div v-for="ribbon in ribbonsData" :key="ribbon.title" class="col-lg-4">
        <div class="card-box ribbon-box">
          <div :class="`ribbon-two ribbon-two-${ribbon.color}`">
            <span>{{ribbon.color | titlecase}}</span>
          </div>
          <p class="mb-0">
            Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at
            volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem
            ac, commodo dapibus odio. Vivamus pretium nec odio cursus elementum. Suspendisse molestie
            ullamcorper ornare.
          </p>
        </div>
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
  </Layout>
</template>