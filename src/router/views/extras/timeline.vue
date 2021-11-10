<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'

import { timelineData } from './datatimeline'

/**
 * Timeline component
 */
export default {
  page: {
    title: 'Timeline',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout, PageHeader },
  data() {
    return {
      timelineData: timelineData,
      title: 'Timeline',
      items: [
        {
          text: 'UBold',
          href: '/',
        },
        {
          text: 'Extras',
          href: '/',
        },
        {
          text: 'Timeline',
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
        <div class="timeline" dir="ltr">
          <article
            v-for="data in timelineData"
            :key="data.time"
            :class="{ 'timeline-item-left': `${data.align}` === 'left' }"
            class="timeline-item"
          >
            <div v-if="data.button">
              <h2 class="m-0 d-none">&nbsp;</h2>
              <div v-if="data.button" class="time-show">
                <a href="javascript: void(0);" class="btn btn-primary width-lg">{{data.button}}</a>
              </div>
            </div>
            <div class="timeline-desk">
              <div v-if="!data.button" class="timeline-box">
                <span
                  :class="{ 
                'arrow-alt': `${data.align}` === 'left',
                'arrow': `${data.align}` !== 'left',
                }"
                ></span>
                <span class="timeline-icon">
                  <i class="mdi mdi-adjust"></i>
                </span>
                <h4 class="mt-0 font-16">{{data.time}}</h4>
                <p class="text-muted">
                  <small>{{data.minute}}</small>
                </p>
                <p class="mb-0">{{data.description}}</p>
                <div v-if="data.image" class="timeline-album">
                  <a href="javascript: void(0);">
                    <img alt :src="`${data.image[0]}`" />
                  </a>
                  <a href="javascript: void(0);">
                    <img alt :src="`${data.image[1]}`" />
                  </a>
                  <a href="javascript: void(0);">
                    <img alt :src="`${data.image[2]}`" />
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
        <!-- end timeline -->
      </div>
      <!-- end col -->
    </div>
  </Layout>
</template>