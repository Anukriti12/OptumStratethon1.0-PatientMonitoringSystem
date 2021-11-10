<script>
import { VueNestable, VueNestableHandle } from 'vue-nestable'

import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'

/**
 * Nestable component
 */
export default {
  page: {
    title: 'Nestable List',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { VueNestable, VueNestableHandle, Layout, PageHeader },
  data() {
    return {
      title: 'Nestable List',
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
          text: 'Nestable List',
          active: true,
        },
      ],
      nestableList: [
        {
          id: 0,
          text: 'Item 11',
        },
        {
          id: 1,
          text: 'Item 12',
        },
        {
          id: 2,
          text: 'Item 13',
          children: [
            {
              id: 3,
              text: 'Item 14',
            },
            {
              id: 4,
              text: 'Item 15',
            },
            {
              id: 5,
              text: 'Item 16',
            },
          ],
        },
        {
          id: 6,
          text: 'Item 17',
        },
      ],
      list: [
        {
          id: 0,
          text: 'Choose a smart watch',
          children: [
            { id: 1, text: 'Send design for review' },
            { id: 2, text: 'Coffee with the team' },
          ],
        },
        {
          id: 3,
          text: 'Ready my new work',
        },
        {
          id: 4,
          text: 'Make a wireframe',
        },
        {
          id: 5,
          text: 'Video app redesign',
          children: [
            { id: 6, text: 'iOS apps design completed' },
            { id: 7, text: 'Dashboard design started' },
          ],
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
      <div class="col-sm-12">
        <div class="card-box">
          <div class="row">
            <div class="col-md-6">
              <h4 class="header-title">Nestable Lists 1</h4>
              <p
                class="sub-header"
              >Drag & drop hierarchical list with mouse and touch compatibility.</p>

              <VueNestable v-model="list">
                <!-- Handler -->
                <VueNestableHandle slot-scope="{ item }" :item="item">{{ item.text }}</VueNestableHandle>
              </VueNestable>
            </div>
            <!-- end col -->

            <div class="col-md-6">
              <h4 class="header-title mt-3 mt-md-0">Nestable Lists 2</h4>
              <p
                class="sub-header"
              >Drag & drop hierarchical list with mouse and touch compatibility.</p>

              <div class="custom-dd dd">
                <vue-nestable v-model="nestableList">
                  <vue-nestable-handle slot-scope="{ item }" :item="item">
                    <i class="fas fa-bars" />
                    &nbsp;{{ item.text }}
                  </vue-nestable-handle>
                </vue-nestable>
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
    <!-- end Row -->
  </Layout>
</template>

<style scoped>
</style>