<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'

import { companies } from './dataCompanies'
import { required } from 'vuelidate/lib/validators'

/**
 * Companies component
 */
export default {
  page: {
    title: 'Companies',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout, PageHeader },
  data() {
    return {
      companies: companies,
      title: 'Companies',
      items: [
        {
          text: 'UBold',
          href: '/',
        },
        {
          text: 'Apps',
          href: '/',
        },
        {
          text: 'Companies',
          active: true,
        },
      ],
      showmodal: false,
      submitted: false,
      company: {
        name: '',
        location: '',
        about: '',
      },
    }
  },
  validations: {
    company: {
      name: { required },
      location: { required },
      about: { required },
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
        const name = this.company.name
        const location = this.company.location
        const about = this.company.about
        this.companies.push({
          logo: require('@assets/images/companies/amazon.png'),
          name,
          location,
          about,
        })
        this.showmodal = false
      }
      this.submitted = false
      this.company = {}
    },

    /**
     * Modal hide on close
     */
    hideModal(e) {
      this.submitted = false
      this.showmodal = false
      this.company = {}
    },
  },
}
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-12">
        <div class="card-box">
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
                    <option>Select</option>
                    <option>Date</option>
                    <option selected>Name</option>
                    <option>Revenue</option>
                    <option>Employees</option>
                  </select>
                </div>
              </form>
            </div>
            <div class="col-lg-4">
              <div class="text-lg-right mt-3 mt-lg-0">
                <button type="button" class="btn btn-success mr-1">
                  <i class="mdi mdi-settings"></i>
                </button>
                <a
                  class="btn text-white btn-danger"
                  href="javascript: void(0);"
                  @click="showmodal = true"
                >
                  <i class="mdi mdi-plus-circle mr-1"></i> Add New
                </a>
              </div>
            </div>
            <!-- end col-->
          </div>
          <!-- end row -->
        </div>
        <!-- end card-box -->
      </div>
      <!-- end col-->
    </div>
    <div class="row">
      <div v-for="companiesdata in companies" :key="companiesdata.name" class="col-md-4">
        <div class="card-box bg-pattern">
          <div class="text-center">
            <img :src="`${ companiesdata.logo }`" alt="logo" class="avatar-xl rounded-circle mb-3" />
            <h4 class="mb-1">{{ companiesdata.name }}</h4>
            <p class="text-muted font-14">{{ companiesdata.location }}</p>
          </div>

          <p class="font-14 text-center text-muted">{{ companiesdata.about }}</p>

          <div class="text-center">
            <a href="javascript:void(0);" class="btn btn-sm btn-light">View more info</a>
          </div>

          <div v-if="companiesdata.revenue" class="row mt-4 text-center">
            <div class="col-6">
              <h5 class="font-weight-normal text-muted">Revenue (USD)</h5>
              <h4>{{ companiesdata.revenue }}</h4>
            </div>
            <div class="col-6">
              <h5 class="font-weight-normal text-muted">Number of employees</h5>
              <h4>{{ companiesdata.employees }}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    <b-modal
      id="modal-1"
      v-model="showmodal"
      title="Add Companies"
      header-bg-variant="dark"
      header-close-variant="light"
      title-class="text-light font-18"
      hide-footer
    >
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">Name</label>
          <input
            id="name"
            v-model="company.name"
            type="text"
            class="form-control"
            placeholder="Enter name"
            :class="{ 'is-invalid': submitted && $v.company.name.$error }"
          />
          <div
            v-if="submitted && !$v.company.name.required"
            class="invalid-feedback"
          >Name is required.</div>
        </div>
        <div class="form-group">
          <label for="location">Location</label>
          <input
            id="location"
            v-model="company.location"
            type="text"
            class="form-control"
            placeholder="Enter location"
            :class="{ 'is-invalid': submitted && $v.company.location.$error }"
          />
          <div
            v-if="submitted && !$v.company.location.required"
            class="invalid-feedback"
          >Location is required.</div>
        </div>

        <div class="form-group">
          <label for="about">About</label>
          <input
            id="about"
            v-model="company.about"
            type="text"
            class="form-control"
            placeholder="Enter Description"
            :class="{ 'is-invalid': submitted && $v.company.about.$error }"
          />
          <div
            v-if="submitted && !$v.company.about.required"
            class="invalid-feedback"
          >About is required.</div>
        </div>

        <div class="text-right">
          <button type="submit" class="btn btn-success">Save</button>
          <b-button class="ml-1" variant="danger" @click="hideModal">Cancel</b-button>
        </div>
      </form>
    </b-modal>
    <!-- Modal  -->
  </Layout>
</template>