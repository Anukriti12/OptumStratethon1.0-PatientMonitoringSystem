<script>
import { required, email, minLength } from 'vuelidate/lib/validators'

import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'

import { opportunityData, simplePieChart } from './dataOpportunities'

/**
 * Opportunities component
 */
export default {
  page: {
    title: 'Opportunities',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout, PageHeader },
  data() {
    return {
      opportunityData: opportunityData,
      simplePieChart: simplePieChart,
      title: 'Opportunities',
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
          text: 'Opportunities',
          active: true,
        },
      ],
      opportunities: {
        name: '',
        email: '',
        category: '',
        phone: '',
      },
      submitted: false,
      showmodal: false,
    }
  },
  validations: {
    opportunities: {
      name: { required },
      category: { required },
      email: { required, email },
      phone: { required, minLength: minLength(10) },
    },
  },
  methods: {
    /**
     * Modal form submit
     */
    handleSubmit(e) {
      this.submitted = true

      // stop here if form is invalid
      this.$v.$touch()
      if (this.$v.$invalid) {
        return
      } else {
        const name = this.opportunities.name
        const email = this.opportunities.email
        const category = this.opportunities.category
        const phone = this.opportunities.phone
        this.opportunityData.push({
          company: require('@assets/images/companies/amazon.png'),
          name,
          email,
          category,
          phone,
          status: 'Won',
          location: 'California',
        })
        this.showmodal = false
      }
      this.submitted = false
      this.opportunities = {}
    },
    /**
     * hide modal on close
     */
    hideModal(e) {
      this.submitted = false
      this.showmodal = false
      this.opportunities = {}
    },
  },
}
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-xl-8 order-xl-1 order-2">
        <div class="card mb-2">
          <div class="card-body">
            <div class="row">
              <div class="col-lg-8">
                <form class="form-inline">
                  <div class="form-group">
                    <label class="sr-only">Search</label>
                    <input type="search" class="form-control" placeholder="Search..." />
                  </div>
                  <div class="form-group mx-sm-3">
                    <label for="status-select" class="mr-2">Sort By</label>
                    <select id="status-select" class="custom-select">
                      <option selected>All</option>
                      <option value="1">Hot</option>
                      <option value="2">Cold</option>
                      <option value="3">In Progress</option>
                      <option value="4">Lost</option>
                      <option value="5">Won</option>
                    </select>
                  </div>
                </form>
              </div>
              <div class="col-lg-4">
                <div class="text-lg-right mt-3 mt-lg-0">
                  <button type="button" class="btn btn-success mr-1">
                    <i class="mdi mdi-settings"></i>
                  </button>
                  <a href="javascript: void(0);" class="btn btn-danger" @click="showmodal = true">
                    <i class="mdi mdi-plus-circle mr-1"></i> Add
                    New
                  </a>
                </div>
              </div>
              <!-- end col-->
            </div>
            <!-- end row -->
          </div>
          <!-- end card-body-->
        </div>
        <!-- end card-->

        <div v-for="opportunity in opportunityData" :key="opportunity.name" class="card-box mb-2">
          <div class="row align-items-center">
            <div class="col-sm-4">
              <div class="media">
                <img
                  class="d-flex align-self-center mr-3 rounded-circle"
                  :src="`${opportunity.company}`"
                  alt="Generic placeholder image"
                  height="64"
                />
                <div class="media-body">
                  <h4 class="mt-0 mb-2 font-16">{{ opportunity.name }}</h4>
                  <p class="mb-1">
                    <b>Location:</b>
                    {{ opportunity.location}}
                  </p>
                  <p class="mb-0">
                    <b>Category:</b>
                    {{ opportunity.category }}
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <p class="mb-1 mt-3 mt-sm-0">
                <i class="mdi mdi-email mr-1"></i>
                {{ opportunity.email }}
              </p>
              <p class="mb-0">
                <i class="mdi mdi-phone-classic mr-1"></i>
                {{ opportunity.phone }}
              </p>
            </div>
            <div class="col-sm-2">
              <div class="text-center mt-3 mt-sm-0">
                <div
                  class="badge font-14 p-1"
                  :class="{
                  'bg-soft-info text-info': `${opportunity.status}` === 'Hot',
                  'bg-soft-primary text-primary': `${opportunity.status}` === 'Cold',
                'bg-soft-warning text-warning': `${opportunity.status}` === 'In-progress',
                'bg-soft-danger text-danger': `${opportunity.status}` === 'Lost',
                'bg-soft-success text-success': `${opportunity.status}` === 'Won' } "
                >{{ opportunity.status }}</div>
              </div>
            </div>
            <div class="col-sm-2">
              <div class="text-sm-right">
                <a href="javascript:void(0);" class="action-icon">
                  <i class="mdi mdi-square-edit-outline"></i>
                </a>
                <a href="javascript:void(0);" class="action-icon">
                  <i class="mdi mdi-delete"></i>
                </a>
              </div>
            </div>
            <!-- end col-->
          </div>
          <!-- end row -->
        </div>
        <!-- end card-box-->
        <div class="text-center my-4">
          <a href="javascript:void(0);" class="text-danger">
            <i class="mdi mdi-spin mdi-loading mr-1"></i> Load more
          </a>
        </div>
      </div>
      <div class="col-xl-4 order-xl-2 order-1">
        <div class="card-box" dir="ltr">
          <h4 class="header-title mb-3">Status Charts</h4>

          <div class="text-center">
            <!-- Pie chart -->
            <apexchart
              height="265"
              type="pie"
              :series="simplePieChart.series"
              :options="simplePieChart.chartOptions"
            ></apexchart>
            <!-- End chart -->
            <p class="text-muted font-15 font-family-secondary mb-0 mt-3">
              <span class="mx-2">
                <i class="mdi mdi-checkbox-blank-circle text-success"></i> Won
              </span>
              <span class="mx-2">
                <i class="mdi mdi-checkbox-blank-circle text-info"></i> Hot
              </span>
              <span class="mx-2">
                <i class="mdi mdi-checkbox-blank-circle text-primary"></i> Cold
              </span>
              <span class="mx-2">
                <i class="mdi mdi-checkbox-blank-circle text-warning"></i> In-progress
              </span>
              <span class="mx-2">
                <i class="mdi mdi-checkbox-blank-circle text-danger"></i> Lost
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <b-modal
      id="modal-1"
      v-model="showmodal"
      title="Add New Opportunities"
      header-bg-variant="dark"
      header-close-variant="light"
      title-class="text-light font-18"
      hide-footer
    >
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">Company Name</label>
          <input
            v-model="opportunities.name"
            type="text"
            class="form-control"
            placeholder="Enter company name"
            :class="{ 'is-invalid': submitted && $v.opportunities.name.$error }"
          />
          <div
            v-if="submitted && !$v.opportunities.name.required"
            class="invalid-feedback"
          >Company name is required</div>
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            v-model="opportunities.email"
            type="email"
            name="email"
            class="form-control"
            placeholder="Enter email"
            :class="{ 'is-invalid': submitted && $v.opportunities.email.$error }"
          />
          <div v-if="submitted && $v.opportunities.email.$error" class="invalid-feedback">
            <span v-if="!$v.opportunities.email.required">Email is required</span>
            <span v-if="!$v.opportunities.email.email">Email is invalid</span>
          </div>
        </div>
        <div class="form-group">
          <label for="position">Phone</label>
          <input
            v-model="opportunities.phone"
            type="text"
            class="form-control"
            placeholder="Enter phone number"
            :class="{ 'is-invalid': submitted && $v.opportunities.phone.$error }"
          />
          <div
            v-if="submitted && !$v.opportunities.phone.required"
            class="invalid-feedback"
          >Phone is required</div>
        </div>
        <div class="form-group">
          <label for="category">Category</label>
          <input
            v-model="opportunities.category"
            type="text"
            class="form-control"
            placeholder="Enter category"
            :class="{ 'is-invalid': submitted && $v.opportunities.category.$error }"
          />
          <div
            v-if="submitted && !$v.opportunities.category.required"
            class="invalid-feedback"
          >Category is required</div>
        </div>

        <div class="text-right">
          <button type="submit" class="btn btn-success">Save</button>
          <b-button class="ml-1" variant="danger" @click="hideModal">Cancel</b-button>
        </div>
      </form>
    </b-modal>
  </Layout>
</template>