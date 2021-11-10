<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'
import Portlet from '@src/components/portlet'

import {
  incomeAmountAreaChart,
  statisticsBarChart,
  lifetimeDonutChart,
  widgetData,
  tableHead,
  projectData,
} from './dashboard-4'

/**
 * Dashboard-4 component
 */
export default {
  page: {
    title: 'Dashboard-4',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout, PageHeader, Portlet },
  data() {
    return {
      lifetimeDonutChart: lifetimeDonutChart,
      incomeAmountAreaChart: incomeAmountAreaChart,
      statisticsBarChart: statisticsBarChart,
      widgetData: widgetData,
      tableHead : tableHead,
      projectData: projectData,
      title: 'Dashboard 4',
      headerTitle1: 'Lifetime Sales',
      headerTitle2: 'Statistics',
      headerTitle3: 'Income Amounts',
      tableTitle: 'Projects',
      items: [
        {
          text: 'UBold',
          href: '/',
        },
        {
          text: 'Dashboard 4',
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
      <div class="col-md-6 col-xl-3">
        <div class="card-box" style="height:150px">
          <i
            v-b-tooltip.hover.bottom
            class="fa fa-info-circle text-muted float-right"
            title="More Info"
            placement="bottom"
          ></i>
          <h4 class="mt-0 font-18">Patient Details</h4>
          <table style="border: 1px solid white;">
            <tr>
              <th class="text-primary pr-2">Name</th>
              <th class="text-primary pr-2">:</th>
              <th class="text-primary">Barry</th>
            </tr>
            <tr>
              <th class="text-primary pr-2">Type</th>
              <th class="text-primary pr-2">:</th>
              <th class="text-primary">Cardiac</th>
            </tr>
            <tr>
              <th class="text-primary pr-2">Age</th>
              <th class="text-primary pr-2">:</th>
              <th class="text-primary">21 Years</th>
            </tr>
            <tr>
              <th class="text-primary pr-2">Gender</th>
              <th class="text-primary pr-2">:</th>
              <th class="text-primary">Male</th>
            </tr>
          </table>
        </div>
      </div>
      <div class="col-md-6 col-xl-3">
        <div class="card-box center" style="height:150px">
          <i
            v-b-tooltip.hover.bottom
            class="fa fa-info-circle text-muted float-right"
            title="More Info"
            placement="bottom"
          ></i>
          <h4 class="mt-0 font-18">Score</h4>

          <table style="border: 1px solid white;">
            <tr>
              <th class="pr-2" style="color:black; font-style:bold">APACHE 2</th>
              <th class="text-primary pr-2">:</th>
              <th style="color:red;">263</th>
            </tr>
            <tr>
              <th class="pr-2" style="color:black; font-style:bold">SOFA</th>
              <th class="text-primary pr-2">:</th>
              <th style="color:red;">263</th>
            </tr>
            <tr>
              <th class="pr-2" style="color:black; font-style:bold">SOFA II</th>
              <th class="text-primary pr-2">:</th>
              <th style="color:red;">263</th>
            </tr>
            <tr>
              <th class="pr-2" style="color:black; font-style:bold">AVERAGE</th>
              <th class="text-primary pr-2">:</th>
              <th style="color:red;">263</th>
            </tr>
          </table>
          
        </div>
      </div>
      <div class="col-md-6 col-xl-3">
        <div class="card-box center" style="height:150px">
          <i
            v-b-tooltip.hover.bottom
            class="fa fa-info-circle text-muted float-right"
            title="More Info"
            placement="bottom"
          ></i>
          <h4 class="mt-0 font-18">Risk</h4>
          <h1 class="text-primary mt-3 text-center">
            <span>
              <countTo :end-val="80" :duration="3000"></countTo>
            </span>%
          </h1>     
          <p class="text-muted mt-0">
            Risk se related kuch bhi
          </p>  
        </div>
      </div>
      <div class="col-md-6 col-xl-3">
        <div class="card-box center" style="height:150px">
          <i
            v-b-tooltip.hover.bottom
            class="fa fa-info-circle text-muted float-right"
            title="More Info"
            placement="bottom"
          ></i>
          <h4 class="mt-0 font-18">Length of Stay</h4>
          <h1 class="text-primary mt-3 text-center">
            <span>
              <countTo :end-val="120" :duration="3000"></countTo>
            </span> days
          </h1>
          <p class="text-muted mt-0">
            Length of Stay se related kuch bhi
          </p>  
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-xl-4">
        <div class="card-box" align="center" style="height:500px;">
          <div style="margin: 0;position: absolute;top: 50%;left: 50%;-ms-transform: translate(-50%, -50%);transform:               translate(-50%, -50%);">
              <h4 class="header-title mb-1">Mortality Rate</h4>
              <div class="widget-chart text-center" dir="ltr">
                <!-- <apexchart
                  type="radialBar"
                  height="200"
                  :options="revenueRadialChart.chartOptions"
                  :series="revenueRadialChart.series"></apexchart> -->
                <i>CHART WILL COME HERE</i>
                <p class="text-muted w-75 mx-auto sp-line-2">
                  Your patient is doing great, his mortality rate is increasing.
                  </p>

                <div class="row mt-3">
                  <div class="col-4">
                    <p class="text-muted font-15 mb-1 text-truncate">Target</p>
                    <h4> <i class="fe-arrow-down text-danger mr-1"></i>90% </h4>
                  </div>
                  <div class="col-4">
                    <p class="text-muted font-15 mb-1 text-truncate">Last week</p>
                    <h4> <i class="fe-arrow-up text-success mr-1"></i>78% </h4>
                  </div>
                  <div class="col-4">
                    <p class="text-muted font-15 mb-1 text-truncate">Last Month</p>
                    <h4> <i class="fe-arrow-down text-danger mr-1"></i>62% </h4>
                  </div>
                </div>
              </div>  
          </div>   
        </div>
      </div>
      <div class="col-xl-8 " >
        <div class="card-box" style="height:500px">
          <h4 class="header-title mb-3">Notes</h4>
          
          <div>
            <h4>Problem</h4>
            <span class="p-1"><span class="badge p-1 bg-soft-danger text-danger">Problem 1</span></span>
            <span class="p-1"><span class="badge p-1 bg-soft-danger text-danger">Problem 2</span></span>
          </div>
          
          <div>
            <h4>Treatment</h4>
            <span class="p-1"><span class="badge p-1 bg-soft-warning text-warning">Treatment 1</span></span>
            <span class="p-1"><span class="badge p-1 bg-soft-warning text-warning">Treatment 2</span></span>
          </div>

          <div>
            <h4>Test</h4>
            <span class="p-1"><span class="badge p-1 bg-soft-primary text-primary">Problem 1</span></span>
            <span class="p-1"><span class="badge p-1 bg-soft-primary text-primary">Problem 2</span></span>
          </div>  

          <div class="pt-1">
            <h4>Raw Notes</h4>
            <pre style="overflow:scroll; height:200px;">NOTES WILL COME HERE</pre>
          </div>
        </div>
      </div>
      <!-- end col-->
    </div>

    <div class="row">
      <!-- Table -->
      <div class="col-xl-12">
        <Portlet headertitle="Patient Timer Analysis">
          <div class="card-body pt-0">
            <div class="table-responsive mb-0">
              <table class="table table-hover table-centered mb-0">
                <thead>
                  <tr>
                    <th class="text-center" v-for="head in tableHead" :key="head.title">{{ head.title }}</th>
                  </tr>
                </thead>

                <tbody>
                  <tr v-for="data in tableData" :key="data.HR">
                    <td class="text-center">{{ data.HR }}</td>
                    <td class="text-center">{{ data.NA }}</td>
                    <td class="text-center">{{ data.WBC }}</td>
                    <td class="text-center">{{ data.Glucose }}</td>
                    <td class="text-center">{{ data.Temp }}</td>
                    <td class="text-center">{{ data.HCO3 }}</td>
                    <td class="text-center">{{ data.BUN }}</td>
                    <td class="text-center">{{ data.Age }}</td>
                    <td class="text-center">{{ data.RespRate }}</td>
                    <td class="text-center">{{ data.Mg }}</td>
                    <td class="text-center">{{ data.HCT }}</td>
                    <td class="text-center">{{ data.NIDiasABP }}</td>
                    <td class="text-center">{{ data.K }}</td>
                    <td class="text-center">{{ data.GCS }}</td>
                    <td class="text-center">{{ data.NISysABP }}</td>
                    <td class="text-center">{{ data.Creatinine }}</td>
                    <td class="text-center">{{ data.Urine }}</td>
                    <td class="text-center">{{ data.NIMAP }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Portlet>
      </div>
    </div>

    <div class="row">
      <div class="col-xl-4">
        <!-- Portlet card -->
        <Portlet :headertitle="headerTitle1">
          <div class="card-body pt-0">
            <div class="text-center">
              <div class="row">
                <div class="col-4">
                  <h3>3,487</h3>
                  <p class="text-muted font-13 mb-0 text-truncate">Total Sales</p>
                </div>
                <div class="col-4">
                  <h3>814</h3>
                  <p class="text-muted font-13 mb-0 text-truncate">Open Campaign</p>
                </div>
                <div class="col-4">
                  <h3>5,324</h3>
                  <p class="text-muted font-13 mb-0 text-truncate">Daily Sales</p>
                </div>
              </div>
              <!-- end row -->
              <div class="mt-3">
                <apexchart
                  type="donut"
                  height="260"
                  :options="lifetimeDonutChart.chartOptions"
                  :series="lifetimeDonutChart.series"
                ></apexchart>
              </div>
            </div>
          </div>
        </Portlet>
      </div>
      <!-- end card-body-->
      <div class="col-xl-4">
        <Portlet :headertitle="headerTitle2">
          <div class="card-body pt-0 pb-0">
            <div class="text-center">
              <div class="row">
                <div class="col-6">
                  <h3 data-plugin="counterup">1,284</h3>
                  <p class="text-muted font-13 mb-0 text-truncate">Total Sales</p>
                </div>
                <div class="col-6">
                  <h3 data-plugin="counterup">7,841</h3>
                  <p class="text-muted font-13 mb-0 text-truncate">Open Campaign</p>
                </div>
              </div>
            </div>
            <apexchart
              type="bar"
              height="260"
              :options="statisticsBarChart.chartOptions"
              :series="statisticsBarChart.series"
            ></apexchart>
          </div>
        </Portlet>
      </div>
      <div class="col-xl-4">
        <Portlet :headertitle="headerTitle3">
          <div class="card-body pt-0 pb-0">
            <div class="text-center">
              <div class="row">
                <div class="col-4">
                  <h3>2,845</h3>
                  <p class="text-muted font-13 mb-0 text-truncate">Total Sales</p>
                </div>
                <div class="col-4">
                  <h3>6,487</h3>
                  <p class="text-muted font-13 mb-0 text-truncate">Open Campaign</p>
                </div>
                <div class="col-4">
                  <h3>201</h3>
                  <p class="text-muted font-13 mb-0 text-truncate">Daily Sales</p>
                </div>
              </div>
            </div>
            <!-- end row -->
            <div>
              <apexchart
                height="260"
                type="area"
                :series="incomeAmountAreaChart.series"
                :options="incomeAmountAreaChart.chartOptions"
              ></apexchart>
            </div>
          </div>
        </Portlet>
      </div>
    </div>
    <div class="row">
      <div v-for="widget in widgetData" :key="widget.id" class="col-md-6 col-xl-3">
        <div
          class="widget-rounded-circle card-box"
          :class="{ 'bg-blue': (`${widget.designation}` === 'Premium User') }"
        >
          <div class="row align-items-center">
            <div class="col-auto">
              <div class="avatar-lg">
                <img :src="`${widget.image}`" class="img-fluid rounded-circle" alt="user-img" />
              </div>
            </div>
            <div class="col">
              <h5
                class="mb-1 mt-2 font-16"
                :class="{ 'text-white': (`${widget.designation}` === 'Premium User') }"
              >{{ widget.name }}</h5>
              <p
                class="mb-2 text-muted"
                :class="{ 'text-white-50': (`${widget.designation}` === 'Premium User') }"
              >{{ widget.designation }}</p>
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
        <Portlet :headertitle="tableTitle">
          <div class="card-body pt-0">
            <div class="table-responsive mb-0">
              <table class="table table-centered table-borderless">
                <thead class="thead-light">
                  <tr>
                    <th>Project Name</th>
                    <th>Start Date</th>
                    <th>Due Date</th>
                    <th>Team</th>
                    <th>Status</th>
                    <th>Clients</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="table in projectData" :key="table.name">
                    <td>{{ table.name }}</td>
                    <td>{{ table.startdate }}</td>
                    <td>{{ table.duedate }}</td>
                    <td>
                      <div class="avatar-group">
                        <a href="javascript: void(0);" class="avatar-group-item">
                          <img
                            :src=" `${table.team[0]}`"
                            class="rounded-circle avatar-xs"
                            alt="friend"
                          />
                        </a>

                        <a href="javascript: void(0);" class="avatar-group-item">
                          <img
                            :src=" `${table.team[1]}`"
                            class="rounded-circle avatar-xs"
                            alt="friend"
                          />
                        </a>

                        <a href="javascript: void(0);" class="avatar-group-item">
                          <img
                            :src=" `${table.team[2]}`"
                            class="rounded-circle avatar-xs"
                            alt="friend"
                          />
                        </a>

                        <a
                          v-if="table.team[3]"
                          href="javascript: void(0);"
                          class="avatar-group-item"
                        >
                          <img
                            :src=" `${table.team[3]}`"
                            class="rounded-circle avatar-xs"
                            alt="friend"
                          />
                        </a>
                      </div>
                    </td>
                    <td>
                      <span
                        class="badge p-1"
                        :class="{ 'bg-soft-warning text-warning': `${table.status}` === 'Pending',
                              'bg-soft-success text-success': `${table.status}` === 'Completed',
                              'bg-soft-info text-info': `${table.status}` === 'Work in Progress',
                              'bg-soft-dark text-dark': `${table.status}` === 'Coming Soon' }"
                      >{{ table.status }}</span>
                    </td>
                    <td>{{ table.client }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Portlet>
      </div>
    </div>
  </Layout>
</template>

