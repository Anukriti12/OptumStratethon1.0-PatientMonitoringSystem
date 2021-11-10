<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'

import {
  smilAnimationChart,
  simpleLineChart,
  polarBarChart,
  areaLineChart,
  lineSmoothingChart,
  overlappingBarChart,
  stackBarChart,
  horizontalBarChart,
  donutAnimateChart,
  simplePieChart,
  distributedSeries,
  labelPlacementChart,
  extremeConfiguration,
  lineAreaChart,
} from './dataChartist'

/**
 * Chartist-chart component
 */
export default {
  page: {
    title: 'Mortality Plot',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout, PageHeader },
  data() {
    return {
      smilAnimationChart: smilAnimationChart,
      simpleLineChart: simpleLineChart,
      polarBarChart: polarBarChart,
      areaLineChart: areaLineChart,
      lineSmoothingChart: lineSmoothingChart,
      overlappingBarChart: overlappingBarChart,
      stackBarChart: stackBarChart,
      horizontalBarChart: horizontalBarChart,
      donutAnimateChart: donutAnimateChart,
      simplePieChart: simplePieChart,
      distributedSeries: distributedSeries,
      labelPlacementChart: labelPlacementChart,
      extremeConfiguration: extremeConfiguration,
      lineAreaChart: lineAreaChart,
      title: 'Mortality Plot',
      items: [],
    }
  },
}
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="col-xl-11 ">
        <div class="card-box">
          <h4 class="header-title mb-3">Representation</h4>
          <div style="height: 530px;">
            <iframe
              src="http://127.0.0.1:5000/data/report.html"
              style="
                    top: 0;
                    right: 0;
                    bottom: 0;
                    z-index: 999999;
                    width: 100%;
                    height: 520px;
                    padding: 0;
                    margin: 0;
                    overflow: hidden;
                    border: none;"
            ></iframe>
          </div>
        </div>
      </div>
  </Layout>
</template>
