<script>
import { required, email } from 'vuelidate/lib/validators'

import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'

import { contactData } from './dataAppcontacts'

/**
 * App-contacts component
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
      paginatedContactData: contactData,
      title: 'Contacts',
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
          text: 'Contacts',
          active: true,
        },
      ],
      contacts: {
        name: '',
        email: '',
        position: '',
      },
      submitted: false,
      showmodal: false,
      perPage: 6,
      currentPage: 1,
      startIndex: 1,
      endIndex: 6,
    }
  },
  validations: {
    contacts: {
      name: { required },
      email: { required, email },
      position: { required },
    },
  },
  computed: {
    /**
     * Data length
     */
    rows() {
      return this.contactData.length
    },
  },
  created() {
    this.startIndex = 0
    this.endIndex = this.perPage

    this.paginatedContactData = this.contactData.slice(
      this.startIndex,
      this.endIndex
    )
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
        const name = this.contacts.name
        const email = this.contacts.email
        const position = this.contacts.position
        this.contactData.push({
          user: require('@assets/images/users/user-3.jpg'),
          name,
          email,
          position,
        })
        this.showmodal = false

        this.paginatedContactData = this.contactData.slice(
          this.startIndex,
          this.endIndex
        )
      }
      this.submitted = false
      this.contacts = {}
    },

    /**
     * Hide modal on close
     */
    hideModal(e) {
      this.submitted = false
      this.showmodal = false
      this.contacts = {}
    },

    /**
     * Page change
     */
    onPageChange() {
      this.startIndex = (this.currentPage - 1) * this.perPage
      this.endIndex = (this.currentPage - 1) * this.perPage + this.perPage
      this.paginatedContactData = this.contactData.slice(
        this.startIndex,
        this.endIndex
      )
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
                    <option selected>All</option>
                    <option value="1">Name</option>
                    <option value="2">Post</option>
                    <option value="3">Followers</option>
                    <option value="4">Followings</option>
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
    <!-- end row -->

    <div class="row">
      <div v-for="contact of paginatedContactData" :key="contact.email" class="col-lg-4">
        <div class="text-center card-box">
          <div class="pt-2 pb-2">
            <img
              :src="`${ contact.user }`"
              class="rounded-circle img-thumbnail avatar-xl"
              alt="profile-image"
            />

            <h4 class="mt-3">
              <router-link tag="a" to="/profile" class="text-dark">{{contact.name}}</router-link>
            </h4>
            <p class="text-muted">
              {{contact.position}}
              <span>|</span>
              <span>
                <a href="javascript: void(0);" class="text-pink">{{contact.email}}</a>
              </span>
            </p>

            <button type="button" class="btn btn-primary btn-sm">Message</button>
            <button type="button" class="btn btn-light btn-sm waves-effect ml-1">Follow</button>
            <div v-if="contact.post" class="row mt-4">
              <div class="col-4">
                <div class="mt-3">
                  <h4>${{ contact.post }}</h4>
                  <p class="mb-0 text-muted text-truncate">Post</p>
                </div>
              </div>
              <div class="col-4">
                <div class="mt-3">
                  <h4>${{ contact.followers}}k</h4>
                  <p class="mb-0 text-muted text-truncate">Followers</p>
                </div>
              </div>
              <div class="col-4">
                <div class="mt-3">
                  <h4>{{ contact.following}}</h4>
                  <p class="mb-0 text-muted text-truncate">Followings</p>
                </div>
              </div>
            </div>

            <!-- end row-->
          </div>
          <!-- end .padding -->
        </div>
        <!-- end card-box-->
      </div>
      <!-- end col -->
    </div>
    <!--end row-->
    <div class="row">
      <div class="col-12">
        <div class="text-right">
          <ul class="pagination pagination-rounded justify-content-end">
            <b-pagination
              v-model="currentPage"
              :per-page="perPage"
              :total-rows="rows"
              @input="onPageChange"
            ></b-pagination>
          </ul>
        </div>
      </div>
    </div>
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
            v-model="contacts.name"
            type="text"
            class="form-control"
            placeholder="Enter name"
            :class="{ 'is-invalid': submitted && $v.contacts.name.$error }"
          />
          <div
            v-if="submitted && !$v.contacts.name.required"
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
          <label for="position">Position</label>
          <input
            id="position"
            v-model="contacts.position"
            type="text"
            class="form-control"
            placeholder="Enter position"
            :class="{ 'is-invalid': submitted && $v.contacts.position.$error }"
          />
          <div
            v-if="submitted && !$v.contacts.position.required"
            class="invalid-feedback"
          >Position is required</div>
        </div>

        <div class="text-right">
          <b-button type="submit" variant="success">Save</b-button>
          <b-button class="ml-1" variant="danger" @click="hideModal">Cancel</b-button>
        </div>
      </form>
    </b-modal>
    <!-- Modal  -->
  </Layout>
</template>