<script>
import vue2Dropzone from 'vue2-dropzone'

import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'

/**
 * product-edit component
 */
export default {
  page: {
    title: 'Product Edit',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout, PageHeader, vueDropzone: vue2Dropzone },
  data() {
    return {
      title: 'Product Edit',
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
          text: 'Product Edit',
          active: true,
        },
      ],
      dropzoneOptions: {
        url: 'https://httpbin.org/post',
        thumbnailWidth: 150,
        maxFilesize: 0.5,
        headers: { 'My-Awesome-Header': 'header value' },
      },
    }
  },
}
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-lg-6">
        <div class="card-box">
          <h5 class="text-uppercase bg-light p-2 mt-0 mb-3">General</h5>

          <div class="form-group mb-3">
            <label for="product-name">
              Product Name
              <span class="text-danger">*</span>
            </label>
            <input
              id="product-name"
              type="text"
              class="form-control"
              placeholder="e.g : Apple iMac"
            />
          </div>

          <div class="form-group mb-3">
            <label for="product-reference">
              Reference
              <span class="text-danger">*</span>
            </label>
            <input
              id="product-reference"
              type="text"
              class="form-control"
              placeholder="e.g : Apple iMac"
            />
          </div>

          <div class="form-group mb-3">
            <label for="product-description">
              Product Description
              <span class="text-danger">*</span>
            </label>
            <textarea
              id="product-description"
              class="form-control"
              rows="5"
              placeholder="Please enter description"
            ></textarea>
          </div>

          <div class="form-group mb-3">
            <label for="product-summary">Product Summary</label>
            <textarea
              id="product-summary"
              class="form-control"
              rows="3"
              placeholder="Please enter summary"
            ></textarea>
          </div>

          <div class="form-group mb-3">
            <label for="product-category">
              Categories
              <span class="text-danger">*</span>
            </label>
            <select id="product-category" class="form-control select2">
              <option>Select</option>
              <optgroup label="Shopping">
                <option value="SH1">Shopping 1</option>
                <option value="SH2">Shopping 2</option>
                <option value="SH3">Shopping 3</option>
                <option value="SH4">Shopping 4</option>
              </optgroup>
              <optgroup label="CRM">
                <option value="CRM1">Crm 1</option>
                <option value="CRM2">Crm 2</option>
                <option value="CRM3">Crm 3</option>
                <option value="CRM4">Crm 4</option>
              </optgroup>
              <optgroup label="eCommerce">
                <option value="E1">eCommerce 1</option>
                <option value="E2">eCommerce 2</option>
                <option value="E3">eCommerce 3</option>
                <option value="E4">eCommerce 4</option>
              </optgroup>
            </select>
          </div>

          <div class="form-group mb-3">
            <label for="product-price">
              Price
              <span class="text-danger">*</span>
            </label>
            <input id="product-price" type="text" class="form-control" placeholder="Enter amount" />
          </div>

          <div class="form-group mb-3">
            <label class="mb-2">
              Status
              <span class="text-danger">*</span>
            </label>
            <br />
            <div class="radio form-check-inline">
              <input id="inlineRadio1" type="radio" value="option1" name="radioInline" checked />
              <label for="inlineRadio1">Online</label>
            </div>
            <div class="radio form-check-inline">
              <input id="inlineRadio2" type="radio" value="option2" name="radioInline" />
              <label for="inlineRadio2">Offline</label>
            </div>
            <div class="radio form-check-inline">
              <input id="inlineRadio3" type="radio" value="option3" name="radioInline" />
              <label for="inlineRadio3">Draft</label>
            </div>
          </div>

          <div class="form-group mb-0">
            <label>Comment</label>
            <textarea class="form-control" rows="3" placeholder="Please enter comment"></textarea>
          </div>
        </div>
        <!-- end card-box -->
      </div>
      <!-- end col -->

      <div class="col-lg-6">
        <div class="card-box">
          <h5 class="text-uppercase mt-0 mb-3 bg-light p-2">Product Images</h5>
          <vue-dropzone id="dropzone" ref="myVueDropzone" :options="dropzoneOptions"></vue-dropzone>
        </div>
        <!-- end col-->

        <div class="card-box">
          <h5 class="text-uppercase mt-0 mb-3 bg-light p-2">Meta Data</h5>

          <div class="form-group mb-3">
            <label for="product-meta-title">Meta title</label>
            <input
              id="product-meta-title"
              type="text"
              class="form-control"
              placeholder="Enter title"
            />
          </div>

          <div class="form-group mb-3">
            <label for="product-meta-keywords">Meta Keywords</label>
            <input
              id="product-meta-keywords"
              type="text"
              class="form-control"
              placeholder="Enter keywords"
            />
          </div>

          <div class="form-group mb-0">
            <label for="product-meta-description">Meta Description</label>
            <textarea
              id="product-meta-description"
              class="form-control"
              rows="5"
              placeholder="Please enter description"
            ></textarea>
          </div>
        </div>
        <!-- end card-box -->
      </div>
      <!-- end col-->
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-12">
        <div class="text-center mb-3">
          <button type="button" class="btn w-sm btn-light waves-effect">Cancel</button>
          <button type="button" class="btn w-sm btn-success ml-1">Save</button>
          <button type="button" class="btn w-sm btn-danger ml-1">Delete</button>
        </div>
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
  </Layout>
</template>