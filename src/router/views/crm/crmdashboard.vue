<script>
import countTo from 'vue-count-to'

import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'
import Portlet from '@src/components/portlet'

import {
  widgetsData,
  analyticsLineChart,
  averagetimeBarChart,
  salesDonutChart,
  contactsData,
} from './dataCrmDashboard'

/**
 * CRM-dashboard component
 */
export default {
  page: {
    title: 'Dashboard',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { countTo, Layout, PageHeader, Portlet },
  data() {
    return {
      widgetsData: widgetsData,
      analyticsLineChart: analyticsLineChart,
      averagetimeBarChart: averagetimeBarChart,
      contactsData: contactsData,
      salesDonutChart: salesDonutChart,
      headerTitle1: 'Deals Analytics',
      headerTitle2: 'Average Time for Deal',
      tabletitle: 'Recent Contacts',
      donutChartTitle: 'Sales by Product Group',
      title: 'Dashboard',
      items: [
        {
          text: 'UBold',
          href: '/',
        },
        {
          text: 'CRM',
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
      <div v-for="widget in widgetsData" :key="widget.color" class="col-md-4">
        <div class="card-box bg-pattern">
          <div class="row">
            <div class="col-6">
              <div class="avatar-md rounded" :class="`bg-${widget.color}`">
                <i :class="`${widget.icon} avatar-title font-22 text-white`"></i>
              </div>
            </div>
            <div class="col-6">
              <div class="text-right">
                <h3 class="text-dark my-1">
                  <span>
                    <countTo :end-val="widget.value" :duration="3000"></countTo>
                  </span>
                </h3>
                <p class="text-muted mb-0 text-truncate">{{widget.title}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <Portlet :headertitle="headerTitle1">
          <!-- Analytics Line chart -->
          <div class="card-body pt-0 pb-0">
            <apexchart
              height="350"
              type="line"
              :series="analyticsLineChart.series"
              :options="analyticsLineChart.chartOptions"
            ></apexchart>
          </div>
        </Portlet>
      </div>
      <div class="col-lg-6">
        <Portlet :headertitle="headerTitle2">
          <!-- Average time bar chart -->
          <div class="card-body pt-0 pb-0">
            <apexchart
              height="350"
              type="bar"
              :series="averagetimeBarChart.series"
              :options="averagetimeBarChart.chartOptions"
            ></apexchart>
          </div>
        </Portlet>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-8">
        <Portlet :headertitle="tabletitle">
          <div class="card-body pt-0">
            <!-- table -->
            <div class="table-responsive mb-0">
              <table class="table table-centered table-hover mb-0">
                <thead>
                  <tr>
                    <th>Basic Info</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Company</th>
                    <th>Created Date</th>
                    <th style="width: 82px;">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="contact in contactsData" :key="contact.phone">
                    <td class="table-user">
                      <img :src="`${contact.image}`" alt="table-user" class="mr-2 rounded-circle" />
                      <a
                        href="javascript:void(0);"
                        class="text-body font-weight-semibold"
                      >{{ contact.name }}</a>
                    </td>
                    <td>{{ contact.phone }}</td>
                    <td>{{ contact.email }}</td>
                    <td>{{ contact.location }}</td>
                    <td>{{ contact.date }}</td>
                    <td>
                      <a href="javascript:void(0);" class="action-icon">
                        <i class="mdi mdi-square-edit-outline"></i>
                      </a>
                      <a href="javascript:void(0);" class="action-icon">
                        <i class="mdi mdi-delete"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- end table -->
          </div>
        </Portlet>
      </div>
      <div class="col-lg-4">
        <Portlet :headertitle="donutChartTitle">
          <div class="card-body pt-2 pb-4">
            <div style="height: 310px;">
              <!-- Sales donut chart -->
              <apexchart
                height="330"
                type="donut"
                :series="salesDonutChart.series"
                :options="salesDonutChart.chartOptions"
              ></apexchart>
              <div class="text-center">
                <p class="text-muted font-15 font-family-secondary mb-0">
                  <span class="mx-2">
                    <i class="mdi mdi-checkbox-blank-circle text-info"></i> Group
                    1
                  </span>
                  <span class="mx-2">
                    <i class="mdi mdi-checkbox-blank-circle text-primary"></i> Group
                    2
                  </span>
                  <span class="mx-2">
                    <i class="mdi mdi-checkbox-blank-circle text-light"></i> Group
                    3
                  </span>
                </p>
              </div>
            </div>
          </div>
        </Portlet>
      </div>
    </div>
  </Layout>
</template>