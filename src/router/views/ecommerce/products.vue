<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'

import { productData } from './dataProducts'

/**
 * Products Component
 */
export default {
  page: {
    title: 'Products',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout, PageHeader },
  data() {
    return {
      productData: productData,
      title: 'Products',
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
          text: 'Products',
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
      <div class="col-12">
        <div class="card-box">
          <div class="row">
            <div class="col-lg-8">
              <form class="form-inline">
                <div class="form-group">
                  <label class="sr-only">Search</label>
                  <input type="search" class="form-control" placeholder="Search..." name="search" />
                </div>
                <div class="form-group mx-sm-3">
                  <label for="status-select" class="mr-2">Sort By</label>
                  <select class="custom-select">
                    <option selected>All</option>
                    <option value="1">Popular</option>
                    <option value="2">Price Low</option>
                    <option value="3">Price High</option>
                    <option value="4">Sold Out</option>
                  </select>
                </div>
              </form>
            </div>
            <div class="col-lg-4">
              <div class="text-lg-right mt-3 mt-lg-0">
                <button type="button" class="btn btn-success mr-1">
                  <i class="mdi mdi-settings"></i>
                </button>
                <a href="javascript: void(0);" class="btn btn-danger">
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
    <!-- end row-->

    <div class="row">
      <div v-for="product in productData" :key="product.name" class="col-md-6 col-xl-3">
        <div class="card-box product-box">
          <div class="product-action">
            <a href="javascript: void(0);" class="btn btn-success btn-xs">
              <i class="mdi mdi-pencil"></i>
            </a>
            <a href="javascript: void(0);" class="btn btn-danger btn-xs ml-1">
              <i class="mdi mdi-close"></i>
            </a>
          </div>

          <div class="product-img-bg">
            <img :src="`${product.image}`" alt="product-pic" class="img-fluid" />
          </div>

          <div class="product-info">
            <div class="row align-items-center">
              <div class="col">
                <h5 class="font-16 mt-0 sp-line-1">
                  <router-link tag="a" to="/ecommerce/productdetail" class="text-dark">{{ product.name }}</router-link>
                </h5>
                <div class="text-warning mb-2 font-13">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </div>
                <h5 class="m-0">
                  <span class="text-muted">Stocks : {{ product.stock }} pcs</span>
                </h5>
              </div>
              <div class="col-auto">
                <div class="product-price-tag">${{product.price}}</div>
              </div>
            </div>
            <!-- end row -->
          </div>
          <!-- end product info-->
        </div>
        <!-- end card-box-->
      </div>
      <!-- end col-->
    </div>
  </Layout>
</template>