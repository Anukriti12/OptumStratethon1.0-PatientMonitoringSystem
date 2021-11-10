<script>
import countTo from 'vue-count-to'
import DatePicker from 'vue2-datepicker'
import appConfig from '@src/app.config'
import Layout from '@layouts/main'

import Portlet from '@src/components/portlet'

import { time1, widgetData, revenueRadialChart, notes, productData , tableHead, tableData} from './data'
/**
 * Dashboard-1 Component
 */
export default {
  page: {
    title: 'Dashboard',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { countTo, DatePicker, Layout, Portlet },
  data() {
    return {
      time1: time1,
      widgetData: widgetData,
      productData : productData,
      revenueRadialChart: revenueRadialChart,
      notes : notes,
      tableData : tableData,
      tableHead : tableHead,
      title: 'Dashboard',
      tableTitle: 'Patient Time Analysis',
      items: [
        {
          text: 'Ubold',
          href: '/',
        },
        {
          text: 'Dashboard',
          active: true,
        },
      ],
      state: {
        date: new Date(),
      },
    }
  },
}
</script>

<template>
  <Layout>
    <div class="row">
      <div class="col-12">
        <div class="page-title-box">
          <h4 class="page-title">Dashboard</h4>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6 col-xl-3" style="">
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
              <th class="text-primary">#132539</th>
            </tr>
            <tr>
              <th class="text-primary pr-2">Type</th>
              <th class="text-primary pr-2">:</th>
              <th class="text-primary">infection</th>
            </tr>
            <tr>
              <th class="text-primary pr-2">Age</th>
              <th class="text-primary pr-2">:</th>
              <th class="text-primary">22 Years</th>
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
              <th style="color:red;">16.3</th>
            </tr>
            <tr>
              <th class="pr-2" style="color:black; font-style:bold">SOFA</th>
              <th class="text-primary pr-2">:</th>
              <th style="color:red;">6.1</th>
            </tr>
            <tr>
              <th class="pr-2" style="color:black; font-style:bold">SAP II</th>
              <th class="text-primary pr-2">:</th>
              <th style="color:red;">33.6</th>
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
              <countTo :end-val="11.9" :duration="3000"></countTo>
            </span>%
          </h1>     
          <p class="text-muted mt-0">
            Observed change is 7.2%
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
              <countTo :end-val="2" :duration="3000"></countTo>
            </span> days
          </h1>
          <p class="text-muted mt-0">
            Prediction confidence: 71%
          </p>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-xl-4 card-box" >
        <div class="card-box pt-5 pb-5" align="center" style="margin-top : 75px"  >
          <div >
              <h3 class="header-title mb-1">Survival Score</h3>
              <div class="widget-chart text-center" style="width:100%" dir="ltr">
                <apexchart
                  type="radialBar"
                  height="200"
                  :options="revenueRadialChart.chartOptions"
                  :series="revenueRadialChart.series"></apexchart>

                <p class="text-muted">
                  Your patient is doing great, his Survival score is increasing.
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
                    <h4> <i class="fe-arrow-up text-success mr-1"></i>78% </h4>
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
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-danger text-danger">vasovagal syncope</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-danger text-danger">fall</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-danger text-danger">traumatic arthritis</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-danger text-danger">hypertension</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-danger text-danger">recurrent urinary tract infection</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-danger text-danger">renal carcinoma</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-danger text-danger">chronic obstructive pulmonary disease</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-danger text-danger">previous stroke</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-danger text-danger">hypertension</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-danger text-danger">copd</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-danger text-danger">renal carcinoma</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-danger text-danger">syncope</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-danger text-danger">did hit her head on the ground</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-danger text-danger">loss of consciousness</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-danger text-danger">previous falls</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-danger text-danger">a hip fracture</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-danger text-danger">bruising around the left eye</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-danger text-danger">a baseline decreased mobility of her left arm</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-danger text-danger">her positive histories</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-danger text-danger">diagnostic studies</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-danger text-danger">acute fractures</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-danger text-danger">old healed left humeral head and neck fracture</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-danger text-danger">facial bone fracture</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-danger text-danger">syncopal episode</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-danger text-danger">traumatic injury of her knee</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-danger text-danger">significant pain and swelling</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-danger text-danger">h. p.r.n</span></span>
          </div>
          
          <div>
            <h4>Treatment</h4>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-warning text-warning">physical therapy</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-warning text-warning">baseline anterior dislocation</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-warning text-warning">rehabilitation</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-warning text-warning">darvocet-n</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-warning text-warning">colace</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-warning text-warning">zestril</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-warning text-warning">plavix</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-warning text-warning">norvasc</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-warning text-warning">hydrochlorothiazide</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-warning text-warning">atrovent inhaler</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-warning text-warning">albuterol inhaler</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-warning text-warning">clonidine</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-warning text-warning">cardura</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-warning text-warning">prophylaxis</span></span>
          </div>

          <div>
            <h4>Test</h4>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-primary text-primary">initial examination</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-primary text-primary">evaluation</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-primary text-primary">diagnostic studies</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-primary text-primary">cervical spine</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-primary text-primary">ct of the brain</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-primary text-primary">ct of the maxillofacial area</span></span>
            <span style="margin-bottom:5px; padding-left:5px; display:inline-block;"><span class="badge p-1 bg-soft-primary text-primary">echocardiogram</span></span>
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
    <div class="row">
      <div class="col-md-8 col-x1-2">
        <div class="card-box">
          <h4>Mortality Plot of desired factors</h4>
          <iframe
              src="http://127.0.0.1:5000/data/report_infec.html"
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
        <Portlet :headertitle="tableTitle">
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
                    <td class="text-center">{{ data.Temp }}</td>
                    <td class="text-center">{{ data.HCO3 }}</td>
                    <td class="text-center">{{ data.BUN }}</td>
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
