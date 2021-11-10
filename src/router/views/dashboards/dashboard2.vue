<script>
import countTo from 'vue-count-to'

import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'

import Portlet from '@src/components/portlet'
import {
  widgetData,
  revenueRadialChart,
  lifetimeSalesAreaChart,
  incomeAmountsLineChart,
  totalUsersPieChart,
  productData,
  notes,
  tableHead,
  tableData,
  time1
} from './dashboard-2'

/**
 * Dashboard-2 component
 */
export default {
  page: {
    title: 'Dashboard-2',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { countTo, Layout, PageHeader, Portlet },
  data() {
    return {
      time1: time1,
      widgetData: widgetData,
      notes : notes,
      lifetimeSalesAreaChart: lifetimeSalesAreaChart,
      incomeAmountsLineChart: incomeAmountsLineChart,
      totalUsersPieChart: totalUsersPieChart,
      revenueRadialChart : revenueRadialChart,
      productData: productData,
      tableHead : tableHead,
      tableData : tableData,
      title: 'Dashboard 2',
      headerTitle1: 'Lifetime Sales',
      headerTitle2: 'Income Amounts',
      headerTitle3: 'Total Users',
      tableTitle: 'Top Selling Products',
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
              <th class="text-primary">#132540</th>
            </tr>
            <tr>
              <th class="text-primary pr-2">Type</th>
              <th class="text-primary pr-2">:</th>
              <th class="text-primary">Cardio</th>
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
              <th style="color:red;">20.1</th>
            </tr>
            <tr>
              <th class="pr-2" style="color:black; font-style:bold">SOFA</th>
              <th class="text-primary pr-2">:</th>
              <th style="color:red;">7.9</th>
            </tr>
            <tr>
              <th class="pr-2" style="color:black; font-style:bold">SOFA II</th>
              <th class="text-primary pr-2">:</th>
              <th style="color:red;">38.6</th>
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
              <countTo :end-val="17.1" :duration="3000"></countTo>
            </span>%
          </h1>     
          <p class="text-muted mt-0">
            Observed change is 4.8%
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
              <countTo :end-val="7" :duration="3000"></countTo>
            </span> days
          </h1>
          <p class="text-muted mt-0">
            Prediction confidence: 79%
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
                    <h4> <i class="fe-arrow-up text-success mr-1"></i>77%</h4>
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
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-danger text-danger">vertigo</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-danger text-danger">dizziness</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-danger text-danger">atrial fibrillation, peripheral arterial disease, peripheral neuropathy</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-danger text-danger">nausea</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-danger text-danger">chest pain</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-danger text-danger">shortness of breath</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-danger text-danger">atrophy</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-danger text-danger">old ischemic changes</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-danger text-danger">focal weakness, headache, vision changes</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-danger text-danger">weight loss</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-danger text-danger">colonoscopy</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-danger text-danger">hematocheziacolonoscopy</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-danger text-danger">proctitis</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-danger text-danger">abdominal pain</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-danger text-danger">small pleural effusion, a left costophrenic angle</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-danger text-danger">atherosclerotic heart disease, pleural thickening</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-danger text-danger">carotid doppler</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-danger text-danger">examination, copd</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-danger text-danger">evaluation</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-danger text-danger">atrial fibrillation</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-danger text-danger">the abdominal aorta</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-danger text-danger">acute issues regarding the gout.</span></span>
          </div>
          
          <div>
            <h4>Treatment</h4>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-warning text-warning">atherosclerosis, hypertension, autoimmune diseases</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-warning text-warning">hypertension, peripheral neuropathy, atherosclerosis, hemorrhoids, proctitis, cabg</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-warning text-warning">board</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-warning text-warning">vitamin</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-warning text-warning">cortisol level</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-warning text-warning">cardiology followup</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-warning text-warning">coronary artery calcification, aortic valve replacement, cardiomegaly</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-warning text-warning">cardizem</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-warning text-warning">protonix</span></span>
          </div>

          <div>
            <h4>Test</h4>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-primary text-primary">blood sugar</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-primary text-primary">pulse</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-primary text-primary">respirations</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-primary text-primary">and saturation</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-primary text-primary">auscultation</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-primary text-primary">wbc</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-primary text-primary">percussion</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-primary text-primary">hematocrit</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-primary text-primary">platelets</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-primary text-primary">mcv</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-primary text-primary">potassium</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-primary text-primary">blood urea nitrogen</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-primary text-primary">creatinine</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-primary text-primary">chest x-ray</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-primary text-primary">head ct</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-primary text-primary">carotid doppler</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-primary text-primary">inr</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-primary text-primary">cortisol level</span></span>
          </div>  

          <div class="pt-1">
            <h4>Raw Notes</h4>
            <pre style="overflow:scroll; height:200px;">{{ notes }}</pre>
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
              src="http://127.0.0.1:5000/data/report_card.html"
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
                    <td class="text-center">{{ data.GCD }}</td>
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