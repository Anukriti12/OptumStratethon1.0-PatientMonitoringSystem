<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'

import {
  sparklineSalesChart,
  sparklineExpensesChart,
  sparklineProfitsChart,
  linewithDataChart,
  gradientLineChart,
  stackedAreaChart,
  basicColumChart,
  basicBarChart,
  nagativeValueBarChart,
  lineColumAreaChart,
  multipleYAxisChart,
  simpleBubbleChart,
  scatterChart,
  simplePieChart,
  gradientDonutChart,
  patternedDonutChart,
  basicRadialBarChart,
  multipleRadialBars,
  strokedCircularGuage,
} from './dataApex'

/**
 * Apex-chart component
 */
export default {
  page: {
    title: 'Apex',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout, PageHeader },
  data() {
    return {
      sparklineSalesChart: sparklineSalesChart,
      sparklineExpensesChart: sparklineExpensesChart,
      sparklineProfitsChart: sparklineProfitsChart,
      linewithDataChart: linewithDataChart,
      gradientLineChart: gradientLineChart,
      stackedAreaChart: stackedAreaChart,
      basicColumChart: basicColumChart,
      basicBarChart: basicBarChart,
      nagativeValueBarChart: nagativeValueBarChart,
      lineColumAreaChart: lineColumAreaChart,
      multipleYAxisChart: multipleYAxisChart,
      simpleBubbleChart: simpleBubbleChart,
      scatterChart: scatterChart,
      simplePieChart: simplePieChart,
      gradientDonutChart: gradientDonutChart,
      patternedDonutChart: patternedDonutChart,
      basicRadialBarChart: basicRadialBarChart,
      multipleRadialBars: multipleRadialBars,
      strokedCircularGuage: strokedCircularGuage,
      title: 'Apex',
      items: [
        {
          text: 'UBold',
          href: '/',
        },
        {
          text: 'Charts',
          href: '/',
        },
        {
          text: 'Apex',
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
        <div class="card-box">
          <h4 class="header-title">Sparkline Charts</h4>
          <div class="row pt-3">
            <div class="col-md-4">
              <!-- sparkline total sales chart -->
              <apexchart
                class="apex-charts"
                type="area"
                height="160"
                :series="sparklineSalesChart.series"
                :options="sparklineSalesChart.chartOptions"
              ></apexchart>
            </div>
            <div class="col-md-4">
              <!-- sparkline expenses chart -->
              <apexchart
                class="apex-charts"
                type="area"
                height="160"
                :series="sparklineExpensesChart.series"
                :options="sparklineExpensesChart.chartOptions"
              ></apexchart>
            </div>

            <div class="col-md-4">
              <!-- sparkline profits chart -->
              <apexchart
                class="apex-charts"
                type="area"
                height="160"
                :series="sparklineProfitsChart.series"
                :options="sparklineProfitsChart.chartOptions"
              ></apexchart>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-xl-6">
        <div class="card-box">
          <h4 class="header-title pb-3">Line with Data Labels</h4>
          <!-- line with data labels chart -->
          <apexchart
            class="apex-charts"
            height="380"
            type="line"
            :series="linewithDataChart.series"
            :options="linewithDataChart.chartOptions"
          ></apexchart>
        </div>
      </div>

      <div class="col-xl-6">
        <div class="card-box">
          <h4 class="header-title pb-3">Gradient Line Chart</h4>

          <!-- Gradient Line Chart -->
          <apexchart
            class="apex-charts"
            height="380"
            type="line"
            :series="gradientLineChart.series"
            :options="gradientLineChart.chartOptions"
          ></apexchart>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-xl-6">
        <!-- Stacked Area chart -->
        <div class="card-box">
          <h4 class="header-title pb-3">Stacked Area</h4>

          <apexchart
            class="apex-charts"
            height="380"
            type="area"
            :series="stackedAreaChart.series"
            :options="stackedAreaChart.chartOptions"
          ></apexchart>
        </div>
      </div>

      <div class="col-xl-6">
        <div class="card-box">
          <h4 class="header-title pb-3">Basic Column Chart</h4>

          <!-- basic column chart -->
          <apexchart
            height="380"
            type="bar"
            class="apex-charts"
            :series="basicColumChart.series"
            :options="basicColumChart.chartOptions"
          ></apexchart>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-xl-6">
        <!-- Basic Bar Chart -->
        <div class="card-box">
          <h4 class="header-title pb-3">Basic Bar Chart</h4>
          <apexchart
            class="apex-charts"
            height="380"
            type="bar"
            :series="basicBarChart.series"
            :options="basicBarChart.chartOptions"
          ></apexchart>
        </div>
      </div>
      <div class="col-xl-6">
        <!-- Bar with Negative Values chart -->

        <div class="card-box">
          <h4 class="header-title pb-3">Bar with Negative Values</h4>
          <apexchart
            class="apex-charts"
            height="380"
            type="bar"
            :series="nagativeValueBarChart.series"
            :options="nagativeValueBarChart.chartOptions"
          ></apexchart>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-xl-6">
        <div class="card-box">
          <h4 class="header-title pb-3">Line, Column & Area Chart</h4>

          <!-- Line, Column & Area Chart -->
          <apexchart
            class="apex-charts"
            height="380"
            type="line"
            :series="lineColumAreaChart.series"
            :options="lineColumAreaChart.chartOptions"
          ></apexchart>
        </div>
      </div>
      <div class="col-xl-6">
        <div class="card-box">
          <h4 class="header-title pb-3">Multiple Y-Axis Chart</h4>
          <!-- Multiple Y-Axis Chart -->
          <apexchart
            class="apex-charts"
            height="380"
            type="line"
            :series="multipleYAxisChart.series"
            :options="multipleYAxisChart.chartOptions"
          ></apexchart>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-xl-6">
        <!-- Simple Bubble Chart -->

        <div class="card-box">
          <h4 class="header-title pb-3">Simple Bubble Chart</h4>
          <apexchart
            class="apex-charts"
            height="380"
            type="bubble"
            :series="simpleBubbleChart.series"
            :options="simpleBubbleChart.chartOptions"
          ></apexchart>
        </div>
      </div>
      <div class="col-xl-6">
        <!-- Scatter Chart - Datetime -->

        <div class="card-box">
          <h4 class="header-title pb-3">Scatter Chart - Datetime</h4>

          <apexchart
            class="apex-charts"
            height="380"
            type="scatter"
            :series="scatterChart.series"
            :options="scatterChart.chartOptions"
          ></apexchart>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-xl-4">
        <!-- Simple Pie Chart -->

        <div class="card-box">
          <h4 class="header-title pb-3">Simple Pie Chart</h4>
          <apexchart
            class="apex-charts"
            height="320"
            type="pie"
            :series="simplePieChart.series"
            :options="simplePieChart.chartOptions"
          ></apexchart>
        </div>
      </div>
      <div class="col-xl-4">
        <!-- Gradient Donut Chart -->

        <div class="card-box">
          <h4 class="header-title pb-3">Gradient Donut Chart</h4>

          <apexchart
            class="apex-charts"
            height="320"
            type="donut"
            :series="gradientDonutChart.series"
            :options="gradientDonutChart.chartOptions"
          ></apexchart>
        </div>
      </div>
      <div class="col-xl-4">
        <!-- Patterned Donut Chart -->

        <div class="card-box">
          <h4 class="header-title pb-3">Patterned Donut Chart</h4>

          <apexchart
            class="apex-charts"
            height="320"
            type="donut"
            :series="patternedDonutChart.series"
            :options="patternedDonutChart.chartOptions"
          ></apexchart>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-xl-4">
        <div class="card-box">
          <h4 class="header-title pb-3">Basic RadialBar Chart</h4>
          <!-- Basic RadialBar Chart -->

          <apexchart
            class="apex-charts"
            height="335"
            type="radialBar"
            :series="basicRadialBarChart.series"
            :options="basicRadialBarChart.chartOptions"
          ></apexchart>
        </div>
      </div>
      <div class="col-xl-4">
        <div class="card-box">
          <h4 class="header-title pb-3">Multiple RadialBars</h4>
          <!-- Multiple RadialBars -->

          <apexchart
            class="apex-charts"
            height="335"
            type="radialBar"
            :series="multipleRadialBars.series"
            :options="multipleRadialBars.chartOptions"
          ></apexchart>
        </div>
      </div>
      <div class="col-xl-4">
        <div class="card-box">
          <h4 class="header-title pb-3">Stroked Circular Guage</h4>
          <!-- Stroked Circular Guage -->

          <apexchart
            class="apex-charts"
            height="350"
            type="radialBar"
            :series="strokedCircularGuage.series"
            :options="strokedCircularGuage.chartOptions"
          ></apexchart>
        </div>
      </div>
    </div>
  </Layout>
</template>
