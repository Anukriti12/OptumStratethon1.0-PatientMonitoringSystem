<script>
import Vuetable from 'vuetable-2/src/components/Vuetable'
import VuetablePagination from 'vuetable-2/src/components/VuetablePagination'
import VuetablePaginationInfo from 'vuetable-2/src/components/VuetablePaginationInfo'
import _ from 'lodash'

import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'

import { ordersData } from './dataOrders'

/**
 * Orders component
 */
export default {
  page: {
    title: 'Orders',
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
      ordersData: ordersData,
      title: 'Orders',
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
          text: 'Orders',
          active: true,
        },
      ],
      data: [],
      perPage: 10,
      fields: [
        { name: '__slot:id', title: 'Order ID' },
        { name: '__slot:products', title: 'Products' },
        { name: '__slot:date', title: 'Date' },
        '__slot:time',
        { name: '__slot:status', title: 'Status' },
        'total',
        'payment',
        { name: '__slot:order', title: 'Order Status' },
        { name: '__slot:action', title: 'Action  ' },
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
    this.data = this.ordersData
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
    onPaginationData(ordersData) {
      this.$refs.pagination.setPaginationData(ordersData)
      this.$refs.paginationInfo.setPaginationData(ordersData)
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
              <div class="col-lg-8">
                <form class="form-inline">
                  <div class="form-group mb-2">
                    <label class="sr-only">Search</label>
                    <input type="search" class="form-control" placeholder="Search..." />
                  </div>
                  <div class="form-group mx-sm-3 mb-2">
                    <label class="mr-2">Status</label>
                    <select class="custom-select">
                      <option selected>Choose...</option>
                      <option value="1">Paid</option>
                      <option value="2">Awaiting Authorization</option>
                      <option value="3">Payment failed</option>
                      <option value="4">Cash On Delivery</option>
                      <option value="5">Fulfilled</option>
                      <option value="6">Unfulfilled</option>
                    </select>
                  </div>
                </form>
              </div>
              <div class="col-lg-4">
                <div class="text-lg-right">
                  <button type="button" class="btn btn-danger mb-2 mr-2">
                    <i class="mdi mdi-basket mr-1"></i> Add New Order
                  </button>
                  <button type="button" class="btn btn-light waves-effect mb-2">Export</button>
                </div>
              </div>
              <!-- end col-->
            </div>

            <!-- table -->
            <div class="table-responsive">
              <vuetable
                ref="vuetable"
                :per-page="perPage"
                :fields="fields"
                :api-mode="false"
                :data-manager="dataManager"
                pagination-path="pagination"
                class="table table-centered mb-0"
                @vuetable:pagination-data="onPaginationData"
              >
                <template slot="id" slot-scope="props">
                  <a
                    href="javascript: void(0);"
                    class="text-body font-weight-bold"
                  >{{props.rowData.id}}</a>
                </template>

                <template slot="products" slot-scope="prop">
                  <img :src="`${prop.rowData.products[0]}`" alt="product-img" height="32" />

                  <a v-if="prop.rowData.products[1]" href="javascript: void(0);" class="ml-1">
                    <img :src="`${prop.rowData.products[1]}`" alt="product-img" height="32" />
                  </a>
                  <a v-if="prop.rowData.products[2]" href="javascript: void(0);" class="ml-1">
                    <img :src="`${prop.rowData.products[2]}`" alt="product-img" height="32" />
                  </a>
                </template>
                <template slot="date" slot-scope="props">
                  {{props.rowData.date}}
                  <small class="text-muted">{{props.rowData.time}}</small>
                </template>
                <template slot="status" slot-scope="props">
                  <h5>
                    <span
                      class="badge"
                      :class="{
                                'bg-soft-success text-success': `${props.rowData.status}` === 'Paid',
                                'bg-soft-warning text-warning': `${props.rowData.status}` === 'Awaiting Authorization',
                                'bg-soft-danger text-danger': `${props.rowData.status}` === 'Payment Failed',
                                'bg-soft-info text-info': `${props.rowData.status}` === 'Cash on Delivery' }"
                    >
                      <i
                        class="mdi"
                        :class="{
                                  'mdi-timer-sand': `${props.rowData.status}` === 'Awaiting Authorization',
                                  'mdi-coin': `${props.rowData.status}` === 'Paid',
                                  'mdi-cancel': `${props.rowData.status}` === 'Payment Failed',
                                  'mdi-cash': `${props.rowData.status}` === 'Cash on Delivery' }"
                      ></i>
                      {{ props.rowData.status }}
                    </span>
                  </h5>
                </template>
                <template slot="order" slot-scope="prop">
                  <h5>
                    <span
                      class="badge"
                      :class="{
                                'badge-warning': `${prop.rowData.order}` === 'Processing',
                                'badge-success': `${prop.rowData.order}` === 'Delivered',
                                'badge-danger': `${prop.rowData.order}` === 'Cancelled',
                                'badge-info': `${prop.rowData.order}` === 'Shipped' }"
                    >{{ prop.rowData.order }}</span>
                  </h5>
                </template>
                <template slot="action">
                  <a href="javascript:void(0);" class="action-icon">
                    <i class="mdi mdi-eye"></i>
                  </a>
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