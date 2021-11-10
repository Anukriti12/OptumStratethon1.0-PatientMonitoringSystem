<script>
import Vuetable from 'vuetable-2/src/components/Vuetable'
import VuetablePagination from 'vuetable-2/src/components/VuetablePagination'
import VuetablePaginationInfo from 'vuetable-2/src/components/VuetablePaginationInfo'
import _ from 'lodash'
import countTo from 'vue-count-to'

import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'
import { widgetData, tableData } from './dataTickets'

/**
 * tickets component
 */
export default {
  page: {
    title: 'Tickets',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: {
    Vuetable,
    VuetablePagination,
    VuetablePaginationInfo,
    countTo,
    Layout,
    PageHeader,
  },
  data() {
    return {
      widgetData: widgetData,
      tableData: tableData,
      title: 'Tickets',
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
          text: 'Tickets',
          active: true,
        },
      ],

      data: [],
      perPage: 10,
      fields: [
        { name: '__slot:id', sortField: 'id', title: 'ID' },
        {
          name: '__slot:requestuser',
          title: 'Requested By',
          sortField: 'name',
        },
        '__slot:name',
        { name: 'subject', sortField: 'subject' },
        { name: '__slot:assignuser', title: 'Assignee' },
        { name: '__slot:priority', title: 'Priority', sortField: 'priority' },
        { name: '__slot:status', title: 'Status', sortField: 'status' },
        {
          name: 'createddate',
          title: 'Created Date',
          sortField: 'createddate',
        },
        { name: 'duedate', title: 'Due Date', sortField: 'duedate' },
        { name: '__slot:actions', title: 'Action' },
      ],
      css: {
        pagination: {
          activeClass: 'btn-primary text-white',
          pageClass: 'btn btn-rounded',
          linkClass: 'btn',
          icons: {
            prev: '',
            next: '',
          },
        },
      },
    }
  },

  watch: {
    data(newVal, oldVal) {
      this.$refs.vuetable.refresh()
    },
  },
  mounted() {
    this.data = this.tableData
  },
  methods: {
    /**
     * Pagination page change
     */
    onChangePage(page) {
      this.$refs.vuetable.changePage(page)
    },
    /**
     * Pagination info and pagination show
     */
    onPaginationData(tableData) {
      this.$refs.pagination.setPaginationData(tableData)
      this.$refs.paginationInfo.setPaginationData(tableData)
    },

    /**
     * Manage data sorting and show pagination
     */
    dataManager(sortOrder, pagination) {
      if (this.data.length < 1) return
      let local = this.data

      // sortOrder can be empty, so we have to check for that as well
      if (sortOrder.length > 0) {
        local = _.orderBy(local, sortOrder[0].sortField, sortOrder[0].direction)
      }
      pagination = this.$refs.vuetable.makePagination(
        local.length,
        this.perPage
      )
      let from = pagination.from - 1
      let to = from + this.perPage

      return {
        pagination: pagination,
        data: _.slice(local, from, to),
      }
    },
  },
}
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div v-for="widget in widgetData" :key="widget.icon" class="col-md-6 col-xl-3">
        <div class="widget-rounded-circle card-box">
          <div class="row">
            <div class="col-6">
              <div
                class="avatar-lg rounded-circle bg-primary"
                :class="{
              'bg-warning': `${widget.text}` === 'warning',
              'bg-success': `${widget.text}` === 'success',
              'bg-danger': `${widget.text}` === 'danger' }"
              >
                <i :class="`${widget.icon } font-22 avatar-title text-white`"></i>
              </div>
            </div>
            <div class="col-6">
              <div class="text-right">
                <h3 class="text-dark mt-1">
                  <span>
                    <countTo :end-val="widget.tickets" :duration="3000"></countTo>
                  </span>
                </h3>
                <p class="text-muted mb-1 text-truncate">{{widget.title}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End card -->
    </div>

    <div class="row">
      <div class="col-12">
        <div class="card-box">
          <button type="button" class="btn btn-sm btn-blue float-right">
            <i class="mdi mdi-plus-circle"></i> Add Ticket
          </button>
          <h4 class="header-title mb-4">Manage Tickets</h4>

          <div class="row">
            <div class="col-12">
              <div class="table-responsive">
                <vuetable
                  ref="vuetable"
                  :fields="fields"
                  :per-page="perPage"
                  :api-mode="false"
                  :data-manager="dataManager"
                  pagination-path="pagination"
                  class="table table-centered table-hover"
                  @vuetable:pagination-data="onPaginationData"
                >
                  <template slot="id" slot-scope="prop">
                    <b>{{prop.rowData.id}}</b>
                  </template>
                  <template slot="requestuser" slot-scope="prop">
                    <div>
                      <img :src="`${prop.rowData.requestuser}`" class="rounded-circle avatar-xs" />
                      <span class="ml-2">{{prop.rowData.name}}</span>
                    </div>
                  </template>

                  <template slot="assignuser" slot-scope="prop">
                    <div>
                      <img :src="`${prop.rowData.assignuser}`" class="rounded-circle avatar-xs" />
                    </div>
                  </template>
                  <template slot="priority" slot-scope="prop">
                    <span
                      class="badge badge-secondary"
                      :class="{
                      'badge-warning': prop.rowData.priority === 'Medium',
                      'badge-danger': prop.rowData.priority === 'High',
                      'badge-secondary': prop.rowData.priority === 'Low' }"
                    >{{prop.rowData.priority}}</span>
                  </template>
                  <template slot="status" slot-scope="props">
                    <span
                      class="badge"
                      :class="{
                      'badge-success': props.rowData.status === 'Open',
                      'badge-secondary': props.rowData.status === 'Closed' }"
                    >{{ props.rowData.status }}</span>
                  </template>

                  <template slot="actions">
                    <div class="table-button-container">
                      <a href="javascript:void(0);" class="action-icon">
                        <i class="mdi mdi-square-edit-outline"></i>
                      </a>
                      <a href="javascript:void(0);" class="action-icon">
                        <i class="mdi mdi-delete"></i>
                      </a>
                    </div>
                  </template>
                </vuetable>
              </div>
              <!-- pagination -->
              <div class="row">
                <div class="col-sm-12 col-md-5">
                  <vuetable-pagination-info ref="paginationInfo" class></vuetable-pagination-info>
                </div>
                <div class="col-sm-12 col-md-7">
                  <vuetable-pagination
                    ref="pagination"
                    :css="css.pagination"
                    class="pagination pagination-rounded justify-content-end"
                    @vuetable-pagination:change-page="onChangePage"
                  ></vuetable-pagination>
                </div>
              </div>
              <!-- end pagination -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
