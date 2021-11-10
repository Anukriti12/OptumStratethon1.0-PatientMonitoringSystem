<script>
import { required, email, minLength } from 'vuelidate/lib/validators'

import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'

import { contactData } from './dataContacts'

/**
 * CRM-contacts component
 */
export default {
  page: {
    title: 'Contacts',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout, PageHeader },
  data() {
    return {
      contactData: contactData,
      title: 'Contacts',
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
          text: 'Contacts',
          active: true,
        },
      ],
      contacts: {
        firstName: '',
        email: '',
        location: '',
        phone: '',
      },
      submitted: false,
      showmodal: false,
      totalRows: 1,
      perPage: 10,
      currentPage: 1,
      filter: null,
      filterOn: [],
    }
  },
  validations: {
    contacts: {
      firstName: { required },
      location: { required },
      email: { required, email },
      phone: { required, minLength: minLength(10) },
    },
  },
  computed: {
    rows() {
      return this.contactData.length
    },
  },
  mounted() {
    // Set the initial number of items
    this.totalRows = this.contactData.length
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
        const name = this.contacts.firstName
        const email = this.contacts.email
        const location = this.contacts.location
        const phone = this.contacts.phone
        const currentDate = new Date()
        this.contactData.push({
          name,
          email,
          location,
          phone,
          date:
            currentDate.getDate() +
            '/' +
            currentDate.getMonth() +
            '/' +
            currentDate.getFullYear(),
        })
        this.showmodal = false
      }
      this.submitted = false
      this.contacts = {}
    },
    /**
     * hode mondal on close
     */
    hideModal(e) {
      this.submitted = false
      this.showmodal = false
      this.contacts = {}
    },

    /**
     * Filter the data of search
     */
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      this.currentPage = 1
    },
  },
}
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-xl-8">
        <div class="card">
          <div class="card-body">
            <div class="row mb-2">
              <div class="col-sm-4">
                <form class="form-inline">
                  <div class="form-group mb-2">
                    <label class="sr-only">Search</label>
                    <b-form-input
                      id="filterInput"
                      v-model="filter"
                      type="search"
                      placeholder="Search..."
                    ></b-form-input>
                  </div>
                </form>
              </div>
              <div class="col-sm-8">
                <div class="text-sm-right">
                  <button type="button" class="btn btn-success mb-2 mr-1">
                    <i class="mdi mdi-settings"></i>
                  </button>
                  <b-button
                    href="javscript: void(0);"
                    class="mb-2"
                    variant="danger"
                    type="button"
                    @click="showmodal = true"
                  >
                    <i class="mdi mdi-plus-circle mr-1"></i> Add
                    Contact
                  </b-button>
                </div>
              </div>
              <!-- end col-->
            </div>

            <div>
              <b-table
                id="my-table"
                :items="contactData"
                :per-page="perPage"
                :current-page="currentPage"
                :filter="filter"
                :filter-included-fields="filterOn"
                hover
                @filtered="onFiltered"
              >
                <template v-slot:cell(avatar)="data">
                  <img :src="data.value.image" />
                </template>
              </b-table>
            </div>

            <ul class="pagination pagination-rounded justify-content-end my-2">
              <b-pagination
                v-model="currentPage"
                :total-rows="rows"
                :per-page="perPage"
                aria-controls="my-table"
              ></b-pagination>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-xl-4">
        <div class="card-box">
          <div class="media mb-3">
            <img
              class="d-flex mr-3 rounded-circle avatar-lg"
              src="@assets/images/users/user-8.jpg"
              alt="Generic placeholder image"
            />
            <div class="media-body">
              <h4 class="mt-0 mb-1">Jade M. Walker</h4>
              <p class="text-muted">Branch manager</p>
              <p class="text-muted">
                <i class="mdi mdi-office-building"></i> Vine Corporation
              </p>

              <a href="javascript: void(0);" class="btn- btn-xs btn-info">Send Email</a>
              <a href="javascript: void(0);" class="btn- btn-xs btn-secondary ml-1">Call</a>
              <a href="javascript: void(0);" class="btn- btn-xs btn-secondary ml-1">Edit</a>
            </div>
          </div>

          <h5 class="mb-3 mt-4 text-uppercase bg-light p-2">
            <i class="mdi mdi-account-circle mr-1"></i> Personal
            Information
          </h5>
          <div class>
            <h4 class="font-13 text-muted text-uppercase">About Me :</h4>
            <p class="mb-3">
              Hi I'm Johnathn Deo,has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type.
            </p>

            <h4 class="font-13 text-muted text-uppercase mb-1">Date of Birth :</h4>
            <p class="mb-3">March 23, 1984 (34 Years)</p>

            <h4 class="font-13 text-muted text-uppercase mb-1">Company :</h4>
            <p class="mb-3">Vine Corporation</p>

            <h4 class="font-13 text-muted text-uppercase mb-1">Added :</h4>
            <p class="mb-3">April 22, 2016</p>

            <h4 class="font-13 text-muted text-uppercase mb-1">Updated :</h4>
            <p class="mb-0">Dec 13, 2017</p>
          </div>
        </div>
        <!-- end card-box-->
      </div>
    </div>

    <!-- Modal -->
    <b-modal
      id="modal-1"
      v-model="showmodal"
      title="Add Contacts"
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
            v-model="contacts.firstName"
            type="text"
            class="form-control"
            placeholder="Enter name"
            :class="{ 'is-invalid': submitted && $v.contacts.firstName.$error }"
          />
          <div
            v-if="submitted && !$v.contacts.firstName.required"
            class="invalid-feedback"
          >First Name is required</div>
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            id="email"
            v-model="contacts.email"
            type="email"
            name="email"
            class="form-control"
            placeholder="Enter email"
            :class="{ 'is-invalid': submitted && $v.contacts.email.$error }"
          />
          <div v-if="submitted && $v.contacts.email.$error" class="invalid-feedback">
            <span v-if="!$v.contacts.email.required">Email is required</span>
            <span v-if="!$v.contacts.email.email">Email is invalid</span>
          </div>
        </div>
        <div class="form-group">
          <label for="position">Phone</label>
          <input
            id="position"
            v-model="contacts.phone"
            type="text"
            class="form-control"
            placeholder="Enter phone number"
            :class="{ 'is-invalid': submitted && $v.contacts.phone.$error }"
          />
          <div
            v-if="submitted && !$v.contacts.phone.required"
            class="invalid-feedback"
          >Phone is required</div>
        </div>
        <div class="form-group">
          <label for="company">Location</label>
          <input
            id="company"
            v-model="contacts.location"
            type="text"
            class="form-control"
            placeholder="Enter location"
            :class="{ 'is-invalid': submitted && $v.contacts.location.$error }"
          />
          <div
            v-if="submitted && !$v.contacts.location.required"
            class="invalid-feedback"
          >Location is required</div>
        </div>

        <div class="text-right">
          <button type="submit" class="btn btn-success">Save</button>
          <b-button class="ml-1" variant="danger" @click="hideModal">Cancel</b-button>
        </div>
      </form>
    </b-modal>
    <!-- end modal -->
  </Layout>
</template>
 