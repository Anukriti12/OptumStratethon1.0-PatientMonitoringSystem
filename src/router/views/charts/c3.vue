<script>
import Vue from 'vue'
import VueC3 from 'vue-c3'

import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'

import {
  barChart,
  areaChart,
  roatedChart,
  combineChart,
  donutChart,
  pieChart,
  lineChart,
  scatterplotChart,
} from './dataC3'

/**
 * C3-chart component
 */
export default {
  page: {
    title: 'C3 Charts',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { VueC3, Layout, PageHeader },
  data() {
    return {
      barchart: new Vue(),
      areachart: new Vue(),
      roatedchart: new Vue(),
      combinechart: new Vue(),
      donutchart: new Vue(),
      piechart: new Vue(),
      scatterplot: new Vue(),
      linechart: new Vue(),
      barChart: barChart,
      areaChart: areaChart,
      roatedChart: roatedChart,
      combineChart: combineChart,
      donutChart: donutChart,
      pieChart: pieChart,
      scatterplotChart: scatterplotChart,
      lineChart: lineChart,
      title: 'C3 Charts',
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
          text: 'C3',
          active: true,
        },
      ],
    }
  },

  mounted() {
    // to init the chart call:
    this.barchart.$emit('init', this.barChart)
    this.areachart.$emit('init', this.areaChart)
    this.roatedchart.$emit('init', this.roatedChart)
    this.combinechart.$emit('init', this.combineChart)
    this.donutchart.$emit('init', this.donutChart)
    this.piechart.$emit('init', this.pieChart)
    this.scatterplot.$emit('init', this.scatterplotChart)
    this.linechart.$emit('init', this.lineChart)
  },
}
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-lg-6">
        <div class="card-box">
          <h4 class="header-title mb-3">Bar Chart</h4>
          <!-- Bar chart -->
          <vue-c3 :handler="barchart"></vue-c3>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card-box">
          <h4 class="header-title mb-3">Stacked Area Chart</h4>
          <!-- Stacked area chart -->
          <vue-c3 :handler="areachart"></vue-c3>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-6">
        <div class="card-box">
          <h4 class="header-title mb-3">Roated Chart</h4>
          <!-- Roated Chart -->
          <vue-c3 :handler="roatedchart"></vue-c3>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card-box">
          <h4 class="header-title mb-3">Combine Chart</h4>
          <!-- Combine Chart -->
          <vue-c3 :handler="combinechart"></vue-c3>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-6">
        <div class="card-box">
          <h4 class="header-title mb-3">Donut Chart</h4>
          <!-- Donut Chart -->
          <vue-c3 :handler="donutchart"></vue-c3>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card-box">
          <h4 class="header-title mb-3">Pie Chart</h4>
          <!-- Pie Chart -->
          <vue-c3 :handler="piechart"></vue-c3>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-6">
        <div class="card-box">
          <h4 class="header-title mb-3">Scatter Plot</h4>
          <!-- Scatter Plot -->
          <vue-c3 :handler="scatterplot"></vue-c3>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card-box">
          <h4 class="header-title mb-3">Line Chart with Regions</h4>
          <!-- Line Chart with Regions chart -->
          <vue-c3 :handler="linechart"></vue-c3>
        </div>
      </div>
    </div>
  </Layout>
</template>
