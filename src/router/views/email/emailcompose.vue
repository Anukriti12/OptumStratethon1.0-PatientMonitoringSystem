<script>
import { VueEditor } from 'vue2-editor'

import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'
import Emailbutton from '@components/emailbutton'
import Emaillist from '@components/emaillist'

/**
 * Email-compose component
 */
export default {
  page: {
    title: 'Email Compose',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { VueEditor, Layout, PageHeader, Emailbutton, Emaillist },
  data() {
    return {
      title: 'Email Compose',
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
          text: 'Compose',
          active: true,
        },
      ],
    }
  },
}
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-lg-12">
        <div class="card-box">
          <!-- Left sidebar -->
          <div class="inbox-leftbar">
            <router-link tag="a" to="/email/inbox" class="btn btn-danger btn-block">Inbox</router-link>
            <Emaillist />
          </div>
          <!-- End Left sidebar -->

          <div class="inbox-rightbar">
            <Emailbutton />

            <div class="mt-4">
              <form>
                <div class="form-group">
                  <input type="email" class="form-control" placeholder="To" />
                </div>

                <div class="form-group">
                  <input type="text" class="form-control" placeholder="Subject" />
                </div>

                <div class="form-group m-b-0">
                  <vue-editor></vue-editor>
                </div>

                <div class="form-group m-b-0">
                  <div class="text-right">
                    <button type="button" class="btn btn-success m-r-5">
                      <i class="mdi mdi-content-save-outline"></i>
                    </button>
                    <button type="button" class="btn btn-success m-r-5 ml-1">
                      <i class="mdi mdi-delete"></i>
                    </button>
                    <button class="btn btn-primary ml-1">
                      <span>Send</span>
                      <i class="mdi mdi-send ml-2"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <!-- end card-->
          </div>
          <!-- end inbox-rightbar-->

          <div class="clearfix"></div>
        </div>
      </div>
      <!-- end Col -->
    </div>
    <!-- End row -->
  </Layout>
</template>

<style scoped>
.quillWrapper >>> .ql-snow.ql-toolbar {
  max-height: 50px;
}
</style>