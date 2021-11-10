<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'

import Portlet from '@src/components/portlet'

import { cardColor } from './dataPortlets'

/**
 * Portlets component
 */
export default {
  page: {
    title: 'Portlets',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout, PageHeader, Portlet },
  data() {
    return {
      cardColor: cardColor,
      title: 'Portlets',
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
          text: 'Portlets',
          active: true,
        },
      ],
      headerTitle: 'Card title',
      portletclass: 'text-white',
    }
  },
}
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div v-for="color in cardColor" :key="color.color" class="col-lg-4">
        <Portlet
          :headertitle="headerTitle"
          :portletclass="portletclass"
          :class="`bg-${color.color} text-white`"
        >
          <div class="card-body pt-0">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3
            wolf
            moon officia aute,
            non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
            moon
            tempor, sunt aliqua
            put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
          </div>
        </Portlet>
      </div>
      <!-- end col -->
    </div>
    <!--end row-->
  </Layout>
</template>