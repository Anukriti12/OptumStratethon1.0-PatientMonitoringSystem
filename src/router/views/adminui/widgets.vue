<script>
import countTo from 'vue-count-to'

import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'
import Inbox from '@components/inbox'
import Chat from '@components/chat'
import Todo from '@components/todo'

import {
  widgetData,
  widgetInline,
  widgetTooltip,
  widgetProgress,
  widgetuser,
  incomeBarChart,
  salesStatusChart,
  recentuserAreaChart,
  revenueRadialChart,
  salesRadialChart,
  usersRadialChart,
  lifetimeAreaChart,
  amountsBarChart,
  revenuePieChart,
} from './dataWidgets'

/**
 * Widgets component
 */
export default {
  page: {
    title: 'Widgets',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout, PageHeader, countTo, Inbox, Chat, Todo },
  data() {
    return {
      widgetData: widgetData,
      widgetInline: widgetInline,
      widgetTooltip: widgetTooltip,
      widgetProgress: widgetProgress,
      widgetuser: widgetuser,
      incomeBarChart: incomeBarChart,
      salesStatusChart: salesStatusChart,
      recentuserAreaChart: recentuserAreaChart,
      revenueRadialChart: revenueRadialChart,
      salesRadialChart: salesRadialChart,
      usersRadialChart: usersRadialChart,
      lifetimeAreaChart: lifetimeAreaChart,
      amountsBarChart: amountsBarChart,
      revenuePieChart: revenuePieChart,
      title: 'Widgets',
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
          text: 'Widgets',
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
      <div
        v-for="widget in widgetData"
        :key="widget.number"
        class="col-md-6 col-xl-3"
      >
        <div class="widget-rounded-circle card-box">
          <div class="row">
            <div class="col-6">
              <div
                :class="
                  `avatar-lg rounded-circle bg-soft-${widget.color} border-${widget.color} border`
                "
              >
                <i
                  :class="
                    `${widget.icon} font-22 avatar-title text-${widget.color}`
                  "
                ></i>
              </div>
            </div>
            <div class="col-6">
              <div class="text-right">
                <h3 class="text-dark mt-1">
                  <span>
                    <countTo
                      :end-val="widget.number"
                      :duration="3000"
                    ></countTo>
                  </span>
                </h3>
                <p class="text-muted mb-1 text-truncate">{{ widget.title }}</p>
              </div>
            </div>
          </div>
        </div>
        <!-- end card-box -->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-12">
        <div class="card-box widget-inline">
          <div class="row">
            <div
              v-for="widget in widgetInline"
              :key="widget.number"
              class="col-sm-6 col-xl-3"
            >
              <div class="p-2 text-center">
                <i :class="`${widget.icon} text-${widget.color} mdi-24px`"></i>
                <h3>
                  <span>
                    <countTo
                      :end-val="widget.number"
                      :duration="3000"
                    ></countTo>
                  </span>
                </h3>
                <p class="text-muted font-15 mb-0">{{ widget.title }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
    <div class="row">
      <div
        v-for="widget in widgetTooltip"
        :key="widget.value"
        class="col-md-6 col-xl-3"
      >
        <div class="card-box">
          <i
            v-b-tooltip.hover.bottom
            class="fa fa-info-circle text-muted float-right"
            title="More Info"
            placement="bottom"
          ></i>
          <h4 class="mt-0 font-16">{{ widget.title }}</h4>
          <h2 class="text-primary my-3 text-center">
            <span>
              <countTo :end-val="widget.value" :duration="3000"></countTo>
            </span>
          </h2>
          <p class="text-muted mb-0">
            {{ widget.text }}
            <span class="float-right">
              <i class="fa fa-caret-up text-success mr-1"></i>
              {{ widget.revenue }}
            </span>
          </p>
        </div>
      </div>
    </div>
    <!-- end row-->
    <div class="row">
      <div
        v-for="widget in widgetProgress"
        :key="widget.value"
        class="col-md-6 col-xl-3"
      >
        <div class="card-box">
          <div class="row">
            <div class="col-6">
              <div :class="`avatar-sm bg-${widget.color} rounded`">
                <i
                  :class="`${widget.icon} avatar-title font-22 text-white`"
                ></i>
              </div>
            </div>
            <div class="col-6">
              <div class="text-right">
                <h3 class="text-dark my-1">
                  <span>
                    <countTo :end-val="widget.value" :duration="3000"></countTo>
                  </span>
                </h3>
                <p class="text-muted mb-1 text-truncate">{{ widget.text }}</p>
              </div>
            </div>
          </div>
          <div class="mt-3">
            <h6 class="text-uppercase">
              Target
              <span class="float-right">{{ widget.progressValue }}%</span>
            </h6>
            <b-progress
              :value="widget.progressValue"
              :variant="`progressbar bg-${widget.color}`"
              height="5px"
            ></b-progress>
          </div>
        </div>
        <!-- end card-box-->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
    <div class="row">
      <div
        v-for="widget in widgetuser"
        :key="widget.type"
        class="col-md-6 col-xl-3"
      >
        <div class="widget-rounded-circle card-box">
          <div class="row align-items-center">
            <div class="col-auto">
              <div class="avatar-lg">
                <img
                  :src="`${widget.image}`"
                  class="img-fluid rounded-circle"
                  alt="user-img"
                />
              </div>
            </div>
            <div class="col">
              <h5 class="mb-1 mt-2">{{ widget.name }}</h5>
              <p class="mb-2 text-muted">{{ widget.type }}</p>
            </div>
          </div>
          <!-- end row-->
        </div>
        <!-- end widget-rounded-circle-->
      </div>
      <!-- end col-->
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-12">
        <h4 class="mb-4">Other Widgets</h4>
      </div>
    </div>
    <!-- end row -->
    <div class="row">
      <div class="col-xl-4">
        <Inbox />
      </div>
      <div class="col-xl-4">
        <Chat />
      </div>
      <div class="col-xl-4">
        <Todo />
      </div>
    </div>
    <!-- end row -->
    <div class="row">
      <div class="col-12">
        <h4 class="mb-4">Chart Widgets</h4>
      </div>
      <!-- end col-->
    </div>
    <!-- end row -->
    <div class="row">
      <div class="col-xl-4">
        <div class="card-box pb-0">
          <div class="row">
            <div class="col-6">
              <div class="avatar-sm bg-warning rounded-circle">
                <i class="fe-aperture avatar-title font-22 text-white"></i>
              </div>
            </div>
            <div class="col-6">
              <div class="text-right">
                <h3 class="text-dark my-1">
                  $
                  <span>8145</span>
                </h3>
                <p class="text-muted mb-1 text-truncate">Income Status</p>
              </div>
            </div>
          </div>

          <div style="max-height: 115px;">
            <apexchart
              height="120"
              type="bar"
              :series="incomeBarChart.series"
              :options="incomeBarChart.chartOptions"
            ></apexchart>
          </div>
        </div>
        <!-- end card-box-->
      </div>
      <!-- end col -->

      <div class="col-xl-4">
        <div class="card-box pb-0">
          <div class="row">
            <div class="col-6">
              <div class="avatar-sm bg-blue rounded-circle">
                <i class="fe-shopping-bag avatar-title font-22 text-white"></i>
              </div>
            </div>
            <div class="col-6">
              <div class="text-right">
                <h3 class="text-dark my-1">
                  <span>367</span>
                </h3>
                <p class="text-muted mb-1 text-truncate">Sales Status</p>
              </div>
            </div>
          </div>

          <div class="text-center" style="max-height: 115px;">
            <!-- Sales Status chart -->
            <apexchart
              height="120"
              type="line"
              :series="salesStatusChart.series"
              :options="salesStatusChart.chartOptions"
            ></apexchart>
            <!-- end chart -->
          </div>
        </div>
        <!-- end card-box-->
      </div>
      <!-- end col -->

      <div class="col-xl-4">
        <div class="card-box pb-0">
          <div class="row">
            <div class="col-6">
              <div class="avatar-sm bg-success rounded-circle">
                <i class="fe-users avatar-title font-22 text-white"></i>
              </div>
            </div>
            <div class="col-6">
              <div class="text-right">
                <h3 class="text-dark my-1">
                  <span>7204</span>
                </h3>
                <p class="text-muted mb-1 text-truncate">Recent Users</p>
              </div>
            </div>
          </div>

          <div style="max-height: 115px;">
            <!-- Recent User Area Chart -->
            <apexchart
              height="120"
              type="area"
              :series="recentuserAreaChart.series"
              :options="recentuserAreaChart.chartOptions"
            ></apexchart>
            <!-- End chat -->
          </div>
        </div>
        <!-- end card-box-->
      </div>
      <!-- end col -->
    </div>
    <div class="row">
      <div class="col-xl-4">
        <div class="card-box">
          <h4 class="header-title mb-3">Heart Rate</h4>

          <div class="widget-chart text-center" dir="ltr">
            <apexchart
              height="200"
              type="radialBar"
              :series="revenueRadialChart.series"
              :options="revenueRadialChart.chartOptions"
            ></apexchart>
            <h5 class="text-muted mt-0">Total sales made today</h5>
            <h2>$178</h2>

            <div class="row mt-3">
              <div class="col-4">
                <p class="text-muted font-15 mb-1 text-truncate">Target</p>
                <h4>$12k</h4>
              </div>
              <div class="col-4">
                <p class="text-muted font-15 mb-1 text-truncate">Last week</p>
                <h4>$2487</h4>
              </div>
              <div class="col-4">
                <p class="text-muted font-15 mb-1 text-truncate">Last Month</p>
                <h4>$14.5k</h4>
              </div>
            </div>
            <!-- end row -->
          </div>
        </div>
        <!-- end card-box -->
      </div>
      <!-- end col-->
      <div class="col-xl-4">
        <div class="card-box">
          <h4 class="header-title mb-3">Sales Status</h4>

          <div class="widget-chart text-center" dir="ltr">
            <apexchart
              height="200"
              type="radialBar"
              :series="salesRadialChart.series"
              :options="salesRadialChart.chartOptions"
            ></apexchart>
            <h5 class="text-muted mt-0">Total sales made today</h5>
            <h2>29</h2>

            <div class="row mt-3">
              <div class="col-4">
                <p class="text-muted font-15 mb-1 text-truncate">Target</p>
                <h4>480</h4>
              </div>
              <div class="col-4">
                <p class="text-muted font-15 mb-1 text-truncate">Last week</p>
                <h4>136</h4>
              </div>
              <div class="col-4">
                <p class="text-muted font-15 mb-1 text-truncate">Last Month</p>
                <h4>514</h4>
              </div>
            </div>
            <!-- end row -->
          </div>
        </div>
      </div>
      <div class="col-xl-4">
        <div class="card-box">
          <h4 class="header-title mb-3">Recent Users</h4>

          <div class="widget-chart text-center" dir="ltr">
            <apexchart
              height="200"
              type="radialBar"
              :series="usersRadialChart.series"
              :options="usersRadialChart.chartOptions"
            ></apexchart>
            <h5 class="text-muted mt-0">Total sales made today</h5>
            <h2>72</h2>

            <div class="row mt-3">
              <div class="col-4">
                <p class="text-muted font-15 mb-1 text-truncate">Target</p>
                <h4>8k</h4>
              </div>
              <div class="col-4">
                <p class="text-muted font-15 mb-1 text-truncate">Last week</p>
                <h4>2.5k</h4>
              </div>
              <div class="col-4">
                <p class="text-muted font-15 mb-1 text-truncate">Last Month</p>
                <h4>10.2k</h4>
              </div>
            </div>
            <!-- end row -->
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xl-4">
        <div class="card-box">
          <h4 class="header-title">Lifetime Sales</h4>

          <div class="widget-chart text-center">
            <!-- Lifetime Sales area chart-->
            <div style="max-height: 250px;">
              <apexchart
                height="250"
                type="area"
                :series="lifetimeAreaChart.series"
                :options="lifetimeAreaChart.chartOptions"
              ></apexchart>
            </div>
            <!-- end Lifetime Sales-->
            <div class="row">
              <div class="col-4">
                <p class="text-muted font-15 mb-1 text-truncate">Target</p>
                <h4> <i class="fe-arrow-down text-danger mr-1"></i>$7.8k </h4>
              </div>
              <div class="col-4">
                <p class="text-muted font-15 mb-1 text-truncate">Last week</p>
                <h4> <i class="fe-arrow-up text-success mr-1"></i>$1.4k </h4>
              </div>
              <div class="col-4">
                <p class="text-muted font-15 mb-1 text-truncate">Last Month</p>
                <h4> <i class="fe-arrow-down text-danger mr-1"></i>$9.8k </h4>
              </div>
            </div>
            <!-- end row -->
          </div>
        </div>
      </div>
      <div class="col-xl-4">
        <div class="card-box">
          <h4 class="header-title">Income Amounts</h4>

          <div class="widget-chart text-center">
            <!-- Income Amounts chart-->
            <div style="max-height: 250px;">
              <apexchart
                height="250"
                type="bar"
                :series="amountsBarChart.series"
                :options="amountsBarChart.chartOptions"
              ></apexchart>
            </div>
            <!-- Income Amounts bar chart-->

            <div class="row">
              <div class="col-4">
                <p class="text-muted font-15 mb-1 text-truncate">Target</p>
                <h4> <i class="fe-arrow-up text-success mr-1"></i>641 </h4>
              </div>
              <div class="col-4">
                <p class="text-muted font-15 mb-1 text-truncate">Last week</p>
                <h4> <i class="fe-arrow-down text-danger mr-1"></i>234 </h4>
              </div>
              <div class="col-4">
                <p class="text-muted font-15 mb-1 text-truncate">Last Month</p>
                <h4> <i class="fe-arrow-up text-success mr-1"></i>3201 </h4>
              </div>
            </div>
            <!-- end row -->
          </div>
        </div>
      </div>

      <div class="col-xl-4">
        <div class="card-box">
          <h4 class="header-title mb-3">Total Users</h4>

          <div class="widget-chart text-center">
            <!-- Total Users pie chart -->
            <apexchart
              height="240"
              type="pie"
              :series="revenuePieChart.series"
              :options="revenuePieChart.chartOptions"
            ></apexchart>
            <!-- end Total Users pie chart -->
            <div class="row mt-3">
              <div class="col-4">
                <p class="text-muted font-15 mb-1 text-truncate">Target</p>
                <h4> <i class="fe-arrow-down text-danger mr-1"></i>18k </h4>
              </div>
              <div class="col-4">
                <p class="text-muted font-15 mb-1 text-truncate">Last week</p>
                <h4> <i class="fe-arrow-up text-success mr-1"></i>3.25k </h4>
              </div>
              <div class="col-4">
                <p class="text-muted font-15 mb-1 text-truncate">Last Month</p>
                <h4> <i class="fe-arrow-up text-success mr-1"></i>28k </h4>
              </div>
            </div>
            <!-- end row -->
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
