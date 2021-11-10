<script>
import Vuetable from 'vuetable-2/src/components/Vuetable'
import VuetablePagination from 'vuetable-2/src/components/VuetablePagination'
import VuetablePaginationInfo from 'vuetable-2/src/components/VuetablePaginationInfo'
import _ from 'lodash'

import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'

import { sellersData } from './dataSellers'

/**
 * Sellers component
 */
export default {
  page: {
    title: 'Sellers',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: {
    Vuetable,
    VuetablePagination,
    VuetablePaginationInfo,
    Layout,
    PageHeader,
  },
  data() {
    return {
      sellersData: sellersData,
      title: 'Sellers',
      items: [
        {
          text: 'UBold',
          href: '/',
        },
        {
          text: 'eCommerce',
          href: '/',
        },
        {
          text: 'Sellers',
          active: true,
        },
      ],
      data: [],
      perPage: 10,
      fields: [
        { name: '__slot:name', title: 'Seller' },
        { name: 'store', title: 'Store Name' },
        { name: 'product', title: 'Products' },
        { name: 'balance', title: 'Wallet Balance' },
        { name: 'date', title: 'Created Date' },
        'revenue',
        { name: '__slot:action', title: 'Action' },
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
    this.data = this.sellersData
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
    onPaginationData(sellersData) {
      this.$refs.pagination.setPaginationData(sellersData)
      this.$refs.paginationInfo.setPaginationData(sellersData)
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
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="row mb-2">
              <div class="col-md-6">
                <form class="form-inline">
                  <div class="form-group mb-2">
                    <label class="sr-only">Search</label>
                    <input type="search" class="form-control" placeholder="Search..." />
                  </div>
                </form>
              </div>
              <div class="col-md-6">
                <div class="text-md-right">
                  <button type="button" class="btn btn-danger mb-2 mr-2">
                    <i class="mdi mdi-basket mr-1"></i> Add Sellers
                  </button>
                  <button type="button" class="btn btn-success mb-2 mr-1">
                    <i class="mdi mdi-settings"></i>
                  </button>
                </div>
              </div>
              <!-- end col-->
            </div>
            <div class="table-responsive">
              <!-- table -->
              <vuetable
                ref="vuetable"
                :per-page="perPage"
                :fields="fields"
                :api-mode="false"
                :data-manager="dataManager"
                pagination-path="pagination"
                class="table table-centered table-hover mb-0"
                @vuetable:pagination-data="onPaginationData"
              >
                <template slot="name" slot-scope="props">
                  <div class="table-user">
                    <img
                      :src="`${props.rowData.image}`"
                      alt="table-user"
                      class="mr-2 rounded-circle"
                    />
                    <a
                      href="javascript:void(0);"
                      class="text-body font-weight-semibold"
                    >{{props.rowData.name}}</a>
                  </div>
                </template>
                <template slot="action">
                  <a href="javascript:void(0);" class="action-icon">
                    <i class="mdi mdi-square-edit-outline"></i>
                  </a>
                  <a href="javascript:void(0);" class="action-icon">
                    <i class="mdi mdi-delete"></i>
                  </a>
                </template>
              </vuetable>
              <!-- end table -->
            </div>
            <div class="row">
              <div class="col-sm-12 col-md-5">
                <vuetable-pagination-info ref="paginationInfo" class></vuetable-pagination-info>
              </div>
              <div class="col-sm-12 col-md-7">
                <!-- pagination -->
                <vuetable-pagination
                  ref="pagination"
                  :css="css.pagination"
                  class="pagination pagination-rounded justify-content-end"
                  @vuetable-pagination:change-page="onChangePage"
                ></vuetable-pagination>
                <!-- end pagination -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>