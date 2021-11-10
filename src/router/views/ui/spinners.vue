<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'

/**
 * Spinners component
 */
export default {
  page: {
    title: 'Spinners',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout, PageHeader },
  data() {
    return {
      title: 'Spinners',
      items: [
        {
          text: 'UBold',
          href: '/',
        },
        {
          text: 'UI',
          href: '/',
        },
        {
          text: 'Spinners',
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
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="mt-0 header-title">Border spinner</h4>
            <p class="text-muted mb-4">Use the border spinners for a lightweight loading indicator.</p>

            <b-spinner label="Spinning" class="m-2"></b-spinner>
          </div>
          <!--end card-body-->
        </div>
        <!--end card-->
      </div>
      <!-- end col -->
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="mt-0 header-title">Growing spinner</h4>
            <p
              class="text-muted mb-4"
            >If you don’t fancy a border spinner, switch to the grow spinner. While it doesn’t technically spin, it does repeatedly grow!</p>
            <b-spinner type="grow" label="Spinning"></b-spinner>
          </div>
          <!--end card-body-->
        </div>
        <!--end card-->
      </div>
      <!-- end col -->
    </div>
    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="mt-0 header-title">Colors</h4>
            <p class="text-muted mb-4">
              You can use any
              of our text color utilities on the standard spinner.
            </p>
            <b-spinner class="m-2" variant="primary" role="status"></b-spinner>
            <b-spinner class="m-2" variant="secondary" role="status"></b-spinner>
            <b-spinner class="m-2" variant="success" role="status"></b-spinner>
            <b-spinner class="m-2" variant="danger" role="status"></b-spinner>
            <b-spinner class="m-2" variant="warning" role="status"></b-spinner>
            <b-spinner class="m-2" variant="info" role="status"></b-spinner>
            <b-spinner class="m-2" variant="light" role="status"></b-spinner>
            <b-spinner class="m-2" variant="dark" role="status"></b-spinner>
          </div>
          <!--end card-body-->
        </div>
        <!--end card-->
      </div>
      <!-- end col -->

      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="mt-0 header-title">Color Growing spinner</h4>
            <p class="text-muted mb-4">Here it is in blue, along with the supported variants.</p>
            <b-spinner type="grow" class="m-2" variant="primary" role="status"></b-spinner>
            <b-spinner type="grow" class="m-2" variant="secondary" role="status"></b-spinner>
            <b-spinner type="grow" class="m-2" variant="success" role="status"></b-spinner>
            <b-spinner type="grow" class="m-2" variant="danger" role="status"></b-spinner>
            <b-spinner type="grow" class="m-2" variant="warning" role="status"></b-spinner>
            <b-spinner type="grow" class="m-2" variant="info" role="status"></b-spinner>
            <b-spinner type="grow" class="m-2" variant="light" role="status"></b-spinner>
            <b-spinner type="grow" class="m-2" variant="dark" role="status"></b-spinner>
          </div>
          <!--end card-body-->
        </div>
        <!--end card-->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="mt-0 header-title">Alignment</h4>
            <p class="text-muted mb-4">
              Use flexbox utilities, float utilities, or text alignment utilities
              to place spinners exactly where you need them in any situation.
            </p>
            <div class="text-center">
              <b-spinner label="Text Centered"></b-spinner>
            </div>
          </div>
          <!--end card-body-->
        </div>
        <!--end card-->
      </div>
      <!-- end col -->

      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="mt-0 header-title">Placement</h4>
            <p class="text-muted mb-4">
              Use
              <code>clearfix</code> and
              <code>float-right</code> utilities to place spinners exactly where you need them in any situation.
            </p>
            <div>
              <div class="clearfix">
                <strong>Loading...</strong>
                <b-spinner class="float-right" label="Floated Right"></b-spinner>
              </div>
            </div>
          </div>
          <!--end card-body-->
        </div>
        <!--end card-->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="mt-0 header-title">Size</h4>
            <p class="text-muted mb-4">
              Add
              <code>.spinner-border-sm</code> and
              <code>.spinner-border.avatar-**</code>
              to make a smaller spinner that can quickly be used within other components.
            </p>
            <div class="row">
              <div class="col-lg-6">
                <b-spinner
                  variant="primary"
                  style="width: 4.5rem; height: 4.5rem;"
                  label="Large Spinner"
                ></b-spinner>
                <b-spinner style="width: 4.5rem; height: 4.5rem;" label="Large Spinner" type="grow"></b-spinner>
              </div>
              <!-- end col -->

              <div class="col-lg-6">
                <b-spinner
                  variant="primary"
                  style="width: 3.5rem; height: 3.5rem;"
                  label="Large Spinner"
                ></b-spinner>
                <b-spinner style="width: 3.5rem; height: 3.5rem;" label="Large Spinner" type="grow"></b-spinner>
              </div>
              <!-- end col -->

              <div class="col-lg-6">
                <b-spinner
                  variant="primary"
                  style="width: 2.25rem; height: 2.25rem;"
                  class="ml-1 mt-3"
                  label="Large Spinner"
                ></b-spinner>
                <b-spinner
                  style="width: 2.25rem; height: 2.25rem;"
                  class="ml-3 mt-3"
                  label="Large Spinner"
                  type="grow"
                ></b-spinner>
              </div>
              <!-- end col -->

              <div class="col-lg-6">
                <b-spinner small label="Small Spinner" class="mt-3"></b-spinner>
                <b-spinner small label="Small Spinner" class="ml-2" type="grow"></b-spinner>
              </div>
              <!-- end col -->
            </div>
            <!--end row-->
          </div>
          <!--end card-body-->
        </div>
        <!--end card-->
      </div>
      <!-- end col -->

      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="mt-0 header-title">Buttons spinner</h4>
            <p class="text-muted mb-4">
              Use spinners within buttons to indicate an action is currently processing or taking place.
              You may also swap the text out of the spinner element and utilize button text as needed.
            </p>
            <div class="row">
              <div class="col-lg-6">
                <div>
                  <b-button variant="primary" disabled>
                    <b-spinner small></b-spinner>
                    <span class="sr-only">Loading...</span>
                  </b-button>

                  <b-button variant="primary" disabled class="ml-1">
                    <b-spinner small></b-spinner>&nbsp;&nbsp;Loading...
                  </b-button>
                </div>
              </div>
              <!-- end col -->
              <div class="col-lg-6">
                <b-button variant="primary" disabled>
                  <b-spinner small type="grow"></b-spinner>
                  <span class="sr-only">Loading...</span>
                </b-button>

                <b-button variant="primary" disabled class="ml-1">
                  <b-spinner small type="grow"></b-spinner>&nbsp;&nbsp;Loading...
                </b-button>
              </div>
              <!-- end col -->
            </div>
            <!-- end row -->
          </div>
          <!--end card-body-->
        </div>
        <!--end card-->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
  </Layout>
</template>