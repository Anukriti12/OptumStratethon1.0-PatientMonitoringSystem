<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'

import BarChart from './BarChart'
import LineChart from './LineChart'
import PieChart from './PieChart'
import DonutChart from './DonutChart'
import PolarChart from './PolarChart'
import RadarChart from './RadarChart'

/**
 * Chart-js chart component
 */
export default {
  page: {
    title: 'Scatter Plot',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: {
    Layout,
    PageHeader,
    BarChart,
    LineChart,
    PieChart,
    DonutChart,
    PolarChart,
    RadarChart,
  },
  data() {
    return {
      title: 'Scatter Plot',
      items: [],
    }
  },
}
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
      <div class="col-xl-10 ">
        <div class="card-box">
          <h3>Representation</h3>
          
          <h4 class="header-title mb-1">Heart Rate</h4>
          <div style="height: 280px;">
            <iframe
              src="http://127.0.0.1:5000/data/scatter.html"
              style="
                    top: 0;
                    right: 0;
                    bottom: 0;
                    z-index: 999999;
                    width: 1200px;
                    height: 520px;
                    padding: 0;
                    margin: 0;
                    overflow: hidden;
                    border: none;"
            ></iframe>
          </div>


          <h4 class="header-title mb-1">BUN</h4>
          <div style="height: 280px;">
            <iframe
              src="http://127.0.0.1:5000/data/scatter_BUN.html"
              style="
                    top: 0;
                    right: 0;
                    bottom: 0;
                    z-index: 999999;
                    width: 1200px;
                    height: 520px;
                    padding: 0;
                    margin: 0;
                    overflow: hidden;
                    border: none;"
            ></iframe>
          </div>


          <h4 class="header-title mb-1">Creatinine</h4>
          <div style="height: 280px;">
            <iframe
              src="http://127.0.0.1:5000/data/scatter_Creatinine.html"
              style="
                    top: 0;
                    right: 0;
                    bottom: 0;
                    z-index: 999999;
                    width: 1200px;
                    height: 520px;
                    padding: 0;
                    margin: 0;
                    overflow: hidden;
                    border: none;"
            ></iframe>
          </div>  
          <h4 class="header-title mb-1">GCS</h4>
          <div style="height: 280px;">
            <iframe
              src="http://127.0.0.1:5000/data/scatter_GCS.html"
              style="
                    top: 0;
                    right: 0;
                    bottom: 0;
                    z-index: 999999;
                    width: 1200px;
                    height: 520px;
                    padding: 0;
                    margin: 0;
                    overflow: hidden;
                    border: none;"
            ></iframe>
          </div>  
          <h4 class="header-title mb-1">Glucose</h4>
          <div style="height: 280px;">
            <iframe
              src="http://127.0.0.1:5000/data/scatter_Glucose.html"
              style="
                    top: 0;
                    right: 0;
                    bottom: 0;
                    z-index: 999999;
                    width: 1200px;
                    height: 520px;
                    padding: 0;
                    margin: 0;
                    overflow: hidden;
                    border: none;"
            ></iframe>
          </div>  
          <h4 class="header-title mb-1">HCT</h4>
          <div style="height: 280px;">
            <iframe
              src="http://127.0.0.1:5000/data/scatter_HCT.html"
              style="
                    top: 0;
                    right: 0;
                    bottom: 0;
                    z-index: 999999;
                    width: 1200px;
                    height: 520px;
                    padding: 0;
                    margin: 0;
                    overflow: hidden;
                    border: none;"
            ></iframe>
          </div>  
          <h4 class="header-title mb-1">Mg</h4>
          <div style="height: 280px;">
            <iframe
              src="http://127.0.0.1:5000/data/scatter_Mg.html"
              style="
                    top: 0;
                    right: 0;
                    bottom: 0;
                    z-index: 999999;
                    width: 1200px;
                    height: 520px;
                    padding: 0;
                    margin: 0;
                    overflow: hidden;
                    border: none;"
            ></iframe>
          </div>  
          <h4 class="header-title mb-1">Temp</h4>
          <div style="height: 280px;">
            <iframe
              src="http://127.0.0.1:5000/data/scatter_Temp.html"
              style="
                    top: 0;
                    right: 0;
                    bottom: 0;
                    z-index: 999999;
                    width: 1200px;
                    height: 520px;
                    padding: 0;
                    margin: 0;
                    overflow: hidden;
                    border: none;"
            ></iframe>
          </div>  
            
          <h4 class="header-title mb-1">Platelets</h4>
          <div style="height: 280px;">
            <iframe
              src="http://127.0.0.1:5000/data/scatter_Platelets.html"
              style="
                    top: 0;
                    right: 0;
                    bottom: 0;
                    z-index: 999999;
                    width: 1200px;
                    height: 520px;
                    padding: 0;
                    margin: 0;
                    overflow: hidden;
                    border: none;"
            ></iframe>
          </div>  
            
          <h4 class="header-title mb-1">WBC</h4>
          <div style="height: 280px;">
            <iframe
              src="http://127.0.0.1:5000/data/scatter_WBC.html"
              style="
                    top: 0;
                    right: 0;
                    bottom: 0;
                    z-index: 999999;
                    width: 1200px;
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
