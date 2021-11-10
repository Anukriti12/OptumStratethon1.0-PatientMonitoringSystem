<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'

/**
 * Product-detail component
 */
export default {
  page: {
    title: 'Product Detail',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout, PageHeader },
  data() {
    return {
      title: 'Product Detail',
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
          text: 'Product Detail',
          active: true,
        },
      ],
    }
  },
  methods: {
    /**
     * Selected image shows
     */
    imageShow(event) {
      const image = event.target.src
      const expandImg = document.getElementById('expandedImg')
      expandImg.src = image
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
            <div class="col-xl-5">
              <div class="tab-content pt-0">
                <div class="tab-pane d-block">
                  <img
                    id="expandedImg"
                    src="@assets/images/products/product-9.jpg"
                    alt
                    class="img-fluid mx-auto d-block rounded"
                  />
                </div>
              </div>

              <ul class="nav nav-pills nav-justified">
                <li class="nav-item">
                  <a
                    href="javascript: void(0);"
                    data-toggle="tab"
                    class="nav-link product-thumb show"
                  >
                    <img
                      src="@assets/images/products/product-9.jpg"
                      alt
                      class="img-fluid mx-auto d-block rounded"
                      @click="imageShow($event)"
                    />
                  </a>
                </li>
                <li class="nav-item">
                  <a href="javascript: void(0);" data-toggle="tab" class="nav-link product-thumb">
                    <img
                      src="@assets/images/products/product-10.jpg"
                      alt
                      class="img-fluid mx-auto d-block rounded"
                      @click="imageShow($event)"
                    />
                  </a>
                </li>
                <li class="nav-item">
                  <a href="javascript: void(0);" data-toggle="tab" class="nav-link product-thumb">
                    <img
                      src="@assets/images/products/product-11.jpg"
                      alt
                      class="img-fluid mx-auto d-block rounded"
                      @click="imageShow($event)"
                    />
                  </a>
                </li>
                <li class="nav-item">
                  <a href="javascript: void(0);" data-toggle="tab" class="nav-link product-thumb">
                    <img
                      src="@assets/images/products/product-12.jpg"
                      alt
                      class="img-fluid mx-auto d-block rounded"
                      @click="imageShow($event)"
                    />
                  </a>
                </li>
              </ul>
            </div>
            <!-- end col -->
            <div class="col-xl-7">
              <div class="pl-xl-3 mt-3 mt-xl-0">
                <a href="#" class="text-primary">Jack & Jones</a>
                <h4 class="mb-3">Jack & Jones Men's T-shirt (Blue)</h4>
                <p class="text-muted float-left mr-3">
                  <span class="mdi mdi-star text-warning"></span>
                  <span class="mdi mdi-star text-warning"></span>
                  <span class="mdi mdi-star text-warning"></span>
                  <span class="mdi mdi-star text-warning"></span>
                  <span class="mdi mdi-star"></span>
                </p>
                <p class="mb-4">
                  <a href class="text-muted">( 36 Customer Reviews )</a>
                </p>
                <h6 class="text-danger text-uppercase">20 % Off</h6>
                <h4 class="mb-4">
                  Price :
                  <span class="text-muted mr-2">
                    <del>$80 USD</del>
                  </span>
                  <b>
                    $64
                    USD
                  </b>
                </h4>
                <h4>
                  <span class="badge bg-soft-success text-success mb-4">Instock</span>
                </h4>
                <p class="text-muted mb-4">
                  The languages only differ in their grammar, their pronunciation
                  and their most common words. Everyone realizes why a new common language would be
                  desirable: one could refuse to pay expensive translators.
                </p>
                <div class="row mb-3">
                  <div class="col-md-6">
                    <div>
                      <p class="text-muted">
                        <i class="mdi mdi-checkbox-marked-circle-outline h6 text-primary mr-2"></i>
                        Sed ut perspiciatis unde
                      </p>
                      <p class="text-muted">
                        <i class="mdi mdi-checkbox-marked-circle-outline h6 text-primary mr-2"></i>
                        Nemo enim ipsam voluptatem
                      </p>
                      <p class="text-muted">
                        <i class="mdi mdi-checkbox-marked-circle-outline h6 text-primary mr-2"></i>
                        Temporibus autem quibusdam et
                      </p>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div>
                      <p class="text-muted">
                        <i class="mdi mdi-checkbox-marked-circle-outline h6 text-primary mr-2"></i>
                        Itaque earum rerum hic
                      </p>
                      <p class="text-muted">
                        <i class="mdi mdi-checkbox-marked-circle-outline h6 text-primary mr-2"></i>
                        Donec quam felis ultricies nec
                      </p>
                    </div>
                  </div>
                </div>
                <form class="form-inline mb-4">
                  <label class="my-1 mr-2" for="quantityinput">Quantity</label>
                  <select class="custom-select my-1 mr-sm-3">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                  </select>

                  <label class="my-1 mr-2" for="sizeinput">Size</label>
                  <select class="custom-select my-1 mr-sm-3">
                    <option selected>Small</option>
                    <option value="1">Medium</option>
                    <option value="2">Large</option>
                    <option value="3">X-large</option>
                  </select>
                </form>

                <div>
                  <button type="button" class="btn btn-danger mr-2">
                    <i class="mdi mdi-heart-outline"></i>
                  </button>
                  <button type="button" class="btn btn-success">
                    <span class="btn-label">
                      <i class="mdi mdi-cart"></i>
                    </span>Add to cart
                  </button>
                </div>
              </div>
            </div>
            <!-- end col -->
          </div>
          <!-- end row -->

          <div class="table-responsive mt-4">
            <table class="table table-bordered table-centered mb-0">
              <thead class="thead-light">
                <tr>
                  <th>Outlets</th>
                  <th>Price</th>
                  <th>Stock</th>
                  <th>Revenue</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>ASOS Ridley Outlet - NYC</td>
                  <td>$139.58</td>
                  <td>
                    <div class="progress-w-percent mb-0">
                      <span class="progress-value">478</span>
                      <b-progress :value="56" variant="success" height="5px"></b-progress>
                    </div>
                  </td>
                  <td>$1,89,547</td>
                </tr>
                <tr>
                  <td>Marco Outlet - SRT</td>
                  <td>$149.99</td>
                  <td>
                    <div class="progress-w-percent mb-0">
                      <span class="progress-value">73</span>
                      <b-progress :value="16" variant="danger" height="5px"></b-progress>
                    </div>
                  </td>
                  <td>$87,245</td>
                </tr>
                <tr>
                  <td>Chairtest Outlet - HY</td>
                  <td>$135.87</td>
                  <td>
                    <div class="progress-w-percent mb-0">
                      <span class="progress-value">781</span>
                      <b-progress :value="72" variant="success" height="5px"></b-progress>
                    </div>
                  </td>
                  <td>$5,87,478</td>
                </tr>
                <tr>
                  <td>Nworld Group - India</td>
                  <td>$159.89</td>
                  <td>
                    <div class="progress-w-percent mb-0">
                      <span class="progress-value">815</span>
                      <b-progress :value="89" variant="success" height="5px"></b-progress>
                    </div>
                  </td>
                  <td>$55,781</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!-- end card-->
      </div>
      <!-- end col-->
    </div>
    <!-- end row-->
  </Layout>
</template>