<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'
import Emailbutton from '@components/emailbutton'
import Emaillist from '@components/emaillist'

import { emailData } from './dataInbox'

/**
 * Email-inbox component
 */
export default {
  page: {
    title: 'Inbox',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout, PageHeader, Emailbutton, Emaillist },
  data() {
    return {
      emailData: emailData,
      paginatedEmailData: emailData,
      title: 'Inbox',
      items: [
        {
          text: 'UBold',
          href: '/',
        },
        {
          text: 'Email',
          href: '/',
        },
        {
          text: 'Inbox',
          active: true,
        },
      ],
      // page number
      currentPage: 1,
      // default page size
      perPage: 15,

      // start and end index
      startIndex: 1,
      endIndex: 15,
    }
  },
  computed: {
    rows() {
      return this.emailData.length
    },
  },
  created() {
    this.startIndex = 0
    this.endIndex = this.perPage

    this.paginatedEmailData = this.emailData.slice(
      this.startIndex,
      this.endIndex
    )
  },
  methods: {
    onPageChange() {
      this.startIndex = (this.currentPage - 1) * this.perPage
      this.endIndex = (this.currentPage - 1) * this.perPage + this.perPage

      this.paginatedEmailData = this.emailData.slice(
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
      <!-- Right Sidebar -->
      <div class="col-12">
        <div class="card-box">
          <!-- Left sidebar -->
          <div class="inbox-leftbar">
            <router-link tag="a" to="/email/emailcompose" class="btn btn-danger btn-block">Compose</router-link>
            <Emaillist />
          </div>
          <div class="inbox-rightbar">
            <Emailbutton />
            <div class="mt-3">
              <ul class="message-list">
                <li
                  v-for="(email,index) in paginatedEmailData"
                  :key="index"
                  :class="{ 'unread': `${email.unread}` === 'true' }"
                >
                  <div class="col-mail col-mail-1">
                    <div class="checkbox-wrapper-mail">
                      <input :id="`chk-${index}`" type="checkbox" />
                      <label :for="`chk-${index}`"></label>
                    </div>
                    <span :class="`star-toggle far fa-star text-${email.text}`"></span>
                    <a class="title">{{email.title}}</a>
                  </div>
                  <div class="col-mail col-mail-2">
                    <a class="subject">{{email.subject}}</a>
                    <div class="date">{{email.date}}</div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="row justify-content-md-between align-items-md-center">
              <div class="col-7">Showing {{startIndex}} - {{endIndex}} of {{rows}}</div>
              <!-- end col-->
              <div class="col-5">
                <div class="text-md-right float-md-right mt-2 pagination-rounded">
                  <b-pagination
                    v-model="currentPage"
                    :total-rows="rows"
                    :per-page="perPage"
                    @input="onPageChange"
                  ></b-pagination>
                </div>
              </div>
              <!-- end col-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>