<script>
import countTo from 'vue-count-to'

import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'

import {
  widgetData,
  transactionData,
  productData,
  revenueAreaChart,
} from './dataDashboard'

/**
 * Ecommerce-dashboard component
 */
export default {
  page: {
    title: 'Dashboard',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { countTo, Layout, PageHeader },
  data() {
    return {
      widgetData: widgetData,
      revenueAreaChart: revenueAreaChart,
      productData: productData,
      transactionData: transactionData,
      title: 'Dashboard',
      items: [
        {
          text: 'UBold',
          href: '/',
        },
        {
          text: 'eCommerce',
          href: '/',
        },
        {
          text: 'Dashboard',
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
      <div v-for="widget in widgetData" :key="widget.value" class="col-md-6 col-xl-3">
        <div class="widget-rounded-circle card-box">
          <div class="row">
            <div class="col-6">
              <div class="avatar-lg rounded" :class="`bg-soft-${widget.color}`">
                <i :class="`${widget.icon} font-24 avatar-title text-${ widget.color }`"></i>
              </div>
            </div>
            <div class="col-6">
              <div class="text-right">
                <h3 class="text-dark mt-1">
                  <span>
                    <countTo :end-val="widget.value" :duration="3000"></countTo>
                  </span>
                </h3>
                <p class="text-muted mb-1 text-truncate">{{ widget.title }}</p>
              </div>
            </div>
          </div>
          <!-- end row-->
        </div>
        <!-- end widget-rounded-circle-->
      </div>
      <!-- end col-->
    </div>

    <div class="row">
      <div class="col-12">
        <div class="card-box">
          <h4 class="header-title mb-3">Revenue Analytics</h4>
          <div class="row">
            <div class="col-lg-8" dir="ltr">
              <div class="text-center">
                <p class="text-muted font-15 font-family-secondary mb-0">
                  <span class="mx-2">
                    <i class="mdi mdi-checkbox-blank-circle text-light"></i> Desktops
                  </span>
                  <span class="mx-2">
                    <i class="mdi mdi-checkbox-blank-circle text-danger"></i> Tablets
                  </span>
                  <span class="mx-2">
                    <i class="mdi mdi-checkbox-blank-circle text-blue"></i> Mobiles
                  </span>
                </p>
              </div>
              <div class="morris-chart mb-lg-0" style="height: 320px">
                <apexchart
                  height="350"
                  type="line"
                  :series="revenueAreaChart.series"
                  :options="revenueAreaChart.chartOptions"
                ></apexchart>
              </div>
            </div>
            <!-- end col -->
            <div class="col-lg-4">
              <h5 class="mt-0">
                iMacs
                <span class="text-muted float-right">70%</span>
              </h5>
              <b-progress :value="70" variant="secondary" height="8px"></b-progress>

              <h5 class="mt-3">
                iBooks
                <span class="text-muted float-right">39%</span>
              </h5>
              <b-progress :value="39" variant="secondary" height="8px"></b-progress>

              <h5 class="mt-3">
                iPhone 5s
                <span class="text-muted float-right">65%</span>
              </h5>
              <b-progress :value="65" variant="secondary" height="8px"></b-progress>

              <h5 class="mt-3">
                iPhone 6
                <span class="text-muted float-right">92%</span>
              </h5>
              <b-progress :value="92" variant="secondary" height="8px"></b-progress>

              <h5 class="mt-3">
                iPhone X
                <span class="text-muted float-right">38%</span>
              </h5>
              <b-progress :value="38" variant="secondary" height="8px"></b-progress>

              <div class="row text-center">
                <div class="col-6 mt-3">
                  <h3 class="font-weight-light">
                    <i class="mdi mdi-cloud-download text-info"></i> 79%
                  </h3>
                  <p class="text-muted text-overflow">Per min user</p>
                </div>
                <!-- end col -->
                <div class="col-6 mt-3">
                  <h3 class="font-weight-light">
                    <i class="mdi mdi-cloud-upload text-danger"></i> 23%
                  </h3>
                  <p class="text-muted text-overflow">Bounce Rate</p>
                </div>
                <!-- end col -->
              </div>
            </div>
            <!-- end col -->
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-xl-6">
        <div class="card-box">
          <h4 class="header-title mb-3">Transaction History</h4>

          <!-- Table -->
          <div class="table-responsive mb-0">
            <table class="table table-centered table-hover mb-0">
              <thead>
                <tr>
                  <th class="border-top-0">Name</th>
                  <th class="border-top-0">Card</th>
                  <th class="border-top-0">Date</th>
                  <th class="border-top-0">Amount</th>
                  <th class="border-top-0">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="table in transactionData" :key="table.date">
                  <td>
                    <img
                      :src="`${table.image}`"
                      alt="user-pic"
                      class="rounded-circle avatar-sm bx-shadow-lg"
                    />
                    <span class="ml-2">{{ table.name }}</span>
                  </td>
                  <td>
                    <img :src="`${table.card}`" alt="user-card" height="24" />
                    <span class="ml-2">{{ table.cardNumber }}</span>
                  </td>
                  <td>{{ table.date }}</td>
                  <td>{{ table.amount }}</td>
                  <td>
                    <span
                      class="badge badge-pill"
                      :class="{ 'badge-success': `${table.status}` === 'Paid',
                      'badge-danger': `${table.status}` === 'Failed' }"
                    >{{ table.status }}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- end table -->
        </div>
      </div>

      <div class="col-xl-6">
        <div class="card-box">
          <h4 class="header-title mb-3">Recent Products</h4>
          <!-- Products table -->
          <div class="table-responsive mb-0">
            <table class="table table-centered table-hover mb-0">
              <thead>
                <tr>
                  <th class="border-top-0">Product</th>
                  <th class="border-top-0">Category</th>
                  <th class="border-top-0">Added Date</th>
                  <th class="border-top-0">Amount</th>
                  <th class="border-top-0">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="product in productData" :key="product.name">
                  <td>
                    <img :src="`${product.image}`" alt="product-pic" height="36" />
                    <span class="ml-2">{{ product.name }}</span>
                  </td>
                  <td>{{ product.category }}</td>
                  <td>{{ product.date }}</td>
                  <td>{{ product.amount }}</td>
                  <td>
                    <span
                      class="badge bg-soft-success text-success"
                      :class="{ 'bg-soft-danger text-danger': `${product.status}` === 'Deactive' }"
                    >{{ product.status }}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- end product table -->
        </div>
      </div>
    </div>
  </Layout>
</template>