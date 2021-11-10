<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'

import { pricingData } from './datapricing'

/**
 * Pricing component
 */
export default {
  page: {
    title: 'Pricing',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout, PageHeader },
  data() {
    return {
      pricingData: pricingData,
      title: 'Pricing',
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
          text: 'Pricing',
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
    <div class="row justify-content-center">
      <div class="col-xl-10">
        <!-- Pricing Title-->
        <div class="text-center">
          <h3 class="mb-2">
            Our
            <b>Plans</b>
          </h3>
          <p
            class="text-muted w-50 m-auto"
          >We have plans and prices that fit your business perfectly. Make your client site a success with our products.</p>
        </div>

        <!-- Plans -->
        <div class="row my-3">
          <div v-for="price in pricingData" :key="price.title" class="col-md-4">
            <div
              class="card card-pricing"
              :class="{ 'card-pricing-recommended': (`${price.icon}` === 'fe-award') }"
            >
              <div class="card-body text-center">
                <p class="card-pricing-plan-name font-weight-bold text-uppercase">{{price.title}}</p>
                <span
                  class="card-pricing-icon"
                  :class="{ 'text-white': (`${price.icon}` === 'fe-award'),
                'text-primary': (`${price.icon}` !== 'fe-award') }"
                >
                  <i :class="`${price.icon}`"></i>
                </span>
                <h2
                  class="card-pricing-price"
                  :class="{ 'text-white': (`${price.icon}` === 'fe-award') }"
                >
                  {{price.price}}
                  <span>/ Month</span>
                </h2>
                <ul class="card-pricing-features">
                  <li>{{price.storage}} GB Storage</li>
                  <li>{{price.bandwidth}}</li>
                  <li>{{price.domain}}</li>
                  <li>{{price.user}}</li>
                  <li>Email Support</li>
                  <li>24x7 Support</li>
                </ul>
                <button
                  class="btn mt-4 mb-2 width-sm"
                  :class="{ 'btn-light': (`${price.icon}` === 'fe-award'),
                'btn-primary': (`${price.icon}` !== 'fe-award') }"
                >
                  Sign
                  Up
                </button>
              </div>
            </div>
            <!-- end Pricing_card -->
          </div>
          <!-- end col -->
        </div>
      </div>
    </div>
  </Layout>
</template>