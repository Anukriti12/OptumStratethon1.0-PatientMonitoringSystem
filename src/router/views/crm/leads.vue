<script>
import { required, minLength } from 'vuelidate/lib/validators'

import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'

import { leadsData, leadsBarChart } from './dataLeads'

/**
 * Leads component
 */
export default {
  page: {
    title: 'Leads',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout, PageHeader },
  data() {
    return {
      leadsData: leadsData,
      leadsBarChart: leadsBarChart,
      title: 'Leads',
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
          text: 'Leads',
          active: true,
        },
      ],
      leads: {
        name: '',
        location: '',
        category: '',
        phone: '',
      },
      submitted: false,
      showmodal: false,
    }
  },
  validations: {
    leads: {
      name: { required },
      category: { required },
      location: { required },
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
        const name = this.leads.name
        const location = this.leads.location
        const category = this.leads.category
        const phone = this.leads.phone
        this.leadsData.push({
          company: require('@assets/images/companies/amazon.png'),
          name,
          location,
          category,
          phone,
        })
        this.showmodal = false
      }
      this.submitted = false
      this.leads = {}
    },
    /**
     * hide modal onclose
     */
    hideModal(e) {
      this.submitted = false
      this.showmodal = false
      this.leads = {}
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
              <div class="col-sm-4">
                <form class="form-inline">
                  <div class="form-group">
                    <label class="sr-only">Search</label>
                    <input type="search" class="form-control" placeholder="Search..." />
                  </div>
                </form>
              </div>
              <div class="col-sm-8">
                <div class="text-sm-right">
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
        <div v-for="lead in leadsData" :key="lead.name" class="card-box mb-2">
          <div class="row align-items-center">
            <div class="col-sm-4">
              <div class="media">
                <img
                  class="d-flex align-self-center mr-3 rounded-circle"
                  :src="`${lead.company}`"
                  alt="Generic placeholder image"
                  height="64"
                />
                <div class="media-body">
                  <h4 class="mt-0 mb-2 font-16">{{ lead.name }}</h4>
                  <p class="mb-1">
                    <b>Location:</b>
                    {{ lead.location }}
                  </p>
                  <p class="mb-0">
                    <b>Category:</b>
                    {{ lead.category }}
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-2">
              <div class="text-center my-3 my-sm-0">
                <p class="mb-0 text-muted">{{ lead.date }}</p>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="text-center button-list">
                <a href="javascript: void(0);" class="btn btn-xs btn-primary">Assign</a>
                <a href="javascript: void(0);" class="btn btn-xs btn-primary">Call</a>
                <a href="javascript: void(0);" class="btn btn-xs btn-primary">Email</a>
              </div>
            </div>

            <div class="col-sm-2">
              <div class="text-sm-right text-center mt-2 mt-sm-0">
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
        <div class="card-box">
          <h4 class="header-title mb-3">Leads Statics</h4>

          <div class="text-center" dir="ltr">
            <div class="row mt-2">
              <div class="col-6">
                <h3 data-plugin="counterup">1,284</h3>
                <p class="text-muted font-13 mb-0 text-truncate">Leads Won</p>
              </div>
              <div class="col-6">
                <h3 data-plugin="counterup">7,841</h3>
                <p class="text-muted font-13 mb-0 text-truncate">Leads Lost</p>
              </div>
            </div>
            <apexchart
              height="300"
              type="bar"
              :series="leadsBarChart.series"
              :options="leadsBarChart.chartOptions"
            ></apexchart>
            <p class="text-muted font-15 font-family-secondary mb-0">
              <span class="mx-2">
                <i class="mdi mdi-checkbox-blank-circle text-blue"></i> Leads Won
              </span>
              <span class="mx-2">
                <i class="mdi mdi-checkbox-blank-circle text-muted"></i> Leads Lost
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <b-modal
      id="modal-1"
      v-model="showmodal"
      title="Add New Leads"
      header-bg-variant="dark"
      header-close-variant="light"
      title-class="text-light font-18"
      hide-footer
    >
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">Company Name</label>
          <input
            id="name"
            v-model="leads.name"
            type="text"
            class="form-control"
            placeholder="Enter company name"
            :class="{ 'is-invalid': submitted && $v.leads.name.$error }"
          />
          <div
            v-if="submitted && !$v.leads.name.required"
            class="invalid-feedback"
          >Company name is required</div>
        </div>
        <div class="form-group">
          <label for="location">Enter location</label>
          <input
            id="location"
            v-model="leads.location"
            type="text"
            class="form-control"
            placeholder="Enter location"
            :class="{ 'is-invalid': submitted && $v.leads.location.$error }"
          />
          <div
            v-if="submitted && !$v.leads.location.required"
            class="invalid-feedback"
          >Location is required</div>
        </div>
        <div class="form-group">
          <label for="position">Phone</label>
          <input
            id="position"
            v-model="leads.phone"
            type="text"
            class="form-control"
            placeholder="Enter phone number"
            :class="{ 'is-invalid': submitted && $v.leads.phone.$error }"
          />
          <div
            v-if="submitted && !$v.leads.phone.required"
            class="invalid-feedback"
          >Phone is required</div>
        </div>
        <div class="form-group">
          <label for="category">Category</label>
          <input
            id="category"
            v-model="leads.category"
            type="text"
            class="form-control"
            placeholder="Enter category"
            :class="{ 'is-invalid': submitted && $v.leads.category.$error }"
          />
          <div
            v-if="submitted && !$v.leads.category.required"
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