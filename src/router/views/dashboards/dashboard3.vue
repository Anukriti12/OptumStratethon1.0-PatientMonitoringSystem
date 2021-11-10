<script>
import countTo from 'vue-count-to'

import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'
import Chat from '@components/chat'
import Todo from '@components/todo'
import Inbox from '@components/inbox'

import { time1, widgetData, tableHead, tableData, notes, revenueRadialChart} from './dashboard-3'
import LineChart from '../charts/LineChart'
import BarChart from '../charts/BarChart'


import Portlet from '@src/components/portlet'

/**
 * Dashboard-3 component
 */
export default {
  page: {
    title: 'Dashboard-3',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: {
    countTo,
    Layout,
    PageHeader,
    Chat,
    Todo,
    Inbox,
    LineChart,
    BarChart,
    Portlet,
  },
  data() {
    return {
      time1: time1,
      widgetData: widgetData,
      title: 'Dashboard 3',
      tableHead : tableHead,
      tableData : tableData,
      revenueRadialChart: revenueRadialChart,
      notes : notes,
      items: [],
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
              <th class="text-primary pr-2">ID</th>
              <th class="text-primary pr-2">:</th>
              <th class="text-primary">#132543</th>
            </tr>
            <tr>
              <th class="text-primary pr-2">Type</th>
              <th class="text-primary pr-2">:</th>
              <th class="text-primary">Lungs</th>
            </tr>
            <tr>
              <th class="text-primary pr-2">Age</th>
              <th class="text-primary pr-2">:</th>
              <th class="text-primary">17 Years</th>
            </tr>
            <tr>
              <th class="text-primary pr-2">Gender</th>
              <th class="text-primary pr-2">:</th>
              <th class="text-primary">Female</th>
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
              <th style="color:red;">17.26</th>
            </tr>
            <tr>
              <th class="pr-2" style="color:black; font-style:bold">SOFA</th>
              <th class="text-primary pr-2">:</th>
              <th style="color:red;">6.93</th>
            </tr>
            <tr>
              <th class="pr-2" style="color:black; font-style:bold">SOFA II</th>
              <th class="text-primary pr-2">:</th>
              <th style="color:red;">34.9</th>
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
              <countTo :end-val="14" :duration="3000"></countTo>
            </span>%
          </h1>     
          <p class="text-muted mt-0">
            Observed change is 6.1%
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
              <countTo :end-val="3" :duration="3000"></countTo>
            </span> days
          </h1>
          <p class="text-muted mt-0">
            Prediction confidence: 67%
          </p>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-xl-4 card-box" >
        <div class="card-box pt-5 pb-5" align="center" style="margin-top : 75px"  >
          <div >
              <h4 class="header-title mb-1">Survival Score</h4>
              <div class="widget-chart text-center" style="width:100%" dir="ltr">
                <apexchart
                  type="radialBar"
                  height="200"
                  :options="revenueRadialChart.chartOptions"
                  :series="revenueRadialChart.series"></apexchart>

                <p class="text-muted">
                  Your patient is doing great, his survival score is increasing.
                  </p>

                <div class="row mt-3" style="width:100%">
                <div class="col-2">
                </div>
                  <div class="col-4">
                    <p class="text-muted">Target</p>
                    <h4> <i class="fe-arrow-down text-danger mr-1"></i>90% </h4>
                  </div>
                  <div class="col-4">
                    <p class="text-muted">Previous</p>
                    <h4> <i class="fe-arrow-up text-success mr-1"></i>72% </h4>
                  </div>
                </div>
              </div>  
          </div>   
        </div>
      </div>
      <div class="col-xl-8 " >
        <div class="card-box" >
          <h4 class="header-title mb-3">Notes</h4>
          
          <h4>Problem</h4>
          <div>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-danger text-danger">asthma</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-danger text-danger">respiratory distress</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-danger text-danger">tachycardia</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-danger text-danger">worsening asthma</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-danger text-danger">severe respiratory distress</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-danger text-danger">respiratory infection</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-danger text-danger">empiric respiratory infection</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-danger text-danger">bronchitis</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-danger text-danger">pneumonia</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-danger text-danger">afebrile</span></span>
          </div>
          
          <div>
            <h4>Treatment</h4>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-warning text-warning">initial examination</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-warning text-warning">evaluation</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-warning text-warning">diagnostic studies</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-warning text-warning">cervical spine</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-warning text-warning">ct of the brain</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-warning text-warning">ct of the maxillofacial area</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-warning text-warning">echocardiogram</span></span>
          </div>  


          <div>
            <h4>Tests</h4>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-primary text-primary">environmental allergies</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-primary text-primary">only p.r.n. medications</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-primary text-primary">conservative treatment</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-primary text-primary">albuterol, atrovent treatments</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-primary text-primary">intravenous steroids</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-primary text-primary">expiratory wheezes</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-primary text-primary">rhonchi</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-primary text-primary">continuous albuterol treatments, atrovent treatments</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-primary text-primary">azithromycin</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-primary text-primary">a home nebulizer</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-primary text-primary">intravenous antibiotics</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-primary text-primary">oral antibiotics</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-primary text-primary">medications: zithromax</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-primary text-primary">two remaining days, albuterol one dose nebulizer treatment</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-primary text-primary">flovent</span></span>
          </div>

          <div class="pt-1">
            <h4>Raw Notes</h4>
            <pre style="overflow:scroll; height:200px;">{{notes}}</pre>
          </div>
        </div>
      </div>
      <!-- end col-->
    </div>

    <!-- For Charts -->
     <!-- For Charts -->
    <div class="row">
      <div class="col-md-8 col-x1-2">
        <div class="card-box">
          <h4>Mortality Plot of desired factors</h4>
          <iframe
              src="http://127.0.0.1:5000/data/report_lung.html"
              style="
                    top: 0;
                    right: 0;
                    bottom: 0;
                    z-index: 999999;
                    width: 100%;
                    height: 530px;
                    padding: 0;
                    margin: 0;
                    overflow: hidden;
                    border: none;"></iframe>
        </div>
      </div>
    </div>

    <div class="row">
      <!-- Table -->
      <div class="col-xl-12">
        <Portlet headertitle="Patient Timer Analysis">
          <div class="card-body pt-0">
          <div>
              <apexchart
                height="260"
                type="area"
                :series="time1.series"
                :options="time1.chartOptions"
              ></apexchart>
            </div>

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
                    <td class="text-center">{{ data.DiasABP }}</td>
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
  </Layout>
</template>