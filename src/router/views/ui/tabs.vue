<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'

/**
 * Tabs & Accordions component
 */
export default {
  page: {
    title: 'Tabs & Accordions',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout, PageHeader },
  data() {
    return {
      title: 'Tabs & Accordions',
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
          text: 'Tabs & Accordions',
          active: true,
        },
      ],
      text: `
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
        `,
      content: `Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.`,
    }
  },
}
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-xl-6">
        <div class="card-box">
          <h4 class="header-title mb-4">Default Tabs</h4>
          <b-tabs content-class>
            <b-tab title="Home" active>
              <p>{{ text }}</p>
              <p class="mb-0">{{ content }}</p>
            </b-tab>
            <b-tab title="Profile">
              <p>{{ content }}</p>
              <p class="mb-0">{{ text }}</p>
            </b-tab>
            <b-tab title="Messages">
              <p>{{ text }}</p>
              <p class="mb-0">{{ content }}</p>
            </b-tab>
          </b-tabs>
        </div>
      </div>
      <div class="col-xl-6">
        <div class="card-box">
          <h4 class="header-title mb-4">Tabs Justified</h4>
          <b-tabs justified pills class="navtab-bg">
            <b-tab title="Home" active>
              <p>{{ text }}</p>
              <p class="mb-0">{{ content }}</p>
            </b-tab>
            <b-tab title="Profile">
              <p>{{ content }}</p>
              <p class="mb-0">{{ text }}</p>
            </b-tab>
            <b-tab title="Messages">
              <p>{{ text }}</p>
              <p class="mb-0">{{ content }}</p>
            </b-tab>
          </b-tabs>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xl-6">
        <div class="card-box pb-1">
          <h4 class="header-title mb-3">Tabs Vertical Left</h4>
          <b-card no-body class="shadow-none">
            <b-tabs
              pills
              card
              vertical
              nav-class="bg-white p-0"
              active-tab-class="pt-1"
              nav-wrapper-class="col-sm-3"
              content-class="pt-0"
            >
              <b-tab title="Home" active title-item-class="mb-2">
                <b-card-text>
                  <p>{{ text }}</p>
                </b-card-text>
              </b-tab>
              <b-tab title="Profile" title-item-class="mb-2">
                <b-card-text>{{ content }}</b-card-text>
              </b-tab>
              <b-tab title="Messages" title-item-class="mb-2">
                <b-card-text>{{ text }}</b-card-text>
              </b-tab>
              <b-tab title="Settings">
                <b-card-text>{{ content }}</b-card-text>
              </b-tab>
            </b-tabs>
          </b-card>
        </div>
      </div>
      <div class="col-xl-6">
        <div class="card-box pb-1">
          <h4 class="header-title mb-3">Tabs Vertical Right</h4>
          <b-card no-body class="shadow-none">
            <b-tabs
              pills
              card
              vertical
              end
              nav-class="bg-white p-0"
              active-tab-class="pt-1"
              nav-wrapper-class="col-sm-3"
              content-class="pt-0"
            >
              <b-tab title="Home" active title-item-class="mb-2">
                <b-card-text>
                  <p>{{ text }}</p>
                </b-card-text>
              </b-tab>
              <b-tab title="Profile" title-item-class="mb-2">
                <b-card-text>{{ content }}</b-card-text>
              </b-tab>
              <b-tab title="Messages" title-item-class="mb-2">
                <b-card-text>{{ text }}</b-card-text>
              </b-tab>
              <b-tab title="Settings">
                <b-card-text>{{ content }}</b-card-text>
              </b-tab>
            </b-tabs>
          </b-card>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xl-6">
        <div class="card-box">
          <h4 class="header-title mb-4">Tabs Bordered</h4>
          <b-tabs nav-class="nav-tabs nav-bordered">
            <b-tab title="Home" active>
              <p>{{ text }}</p>
              <p class="mb-0">{{ content }}</p>
            </b-tab>
            <b-tab title="Profile">
              <p>{{ content }}</p>
              <p class="mb-0">{{ text }}</p>
            </b-tab>
            <b-tab title="Messages">
              <p>{{ text }}</p>
              <p class="mb-0">{{ content }}</p>
            </b-tab>
          </b-tabs>
        </div>
      </div>
      <div class="col-xl-6">
        <div class="card-box">
          <h4 class="header-title mb-4">Tabs Bordered Justified</h4>
          <b-tabs justified nav-class="nav-tabs nav-bordered">
            <b-tab title="Home" active>
              <p>{{ text }}</p>
              <p class="mb-0">{{ content }}</p>
            </b-tab>
            <b-tab title="Profile">
              <p>{{ content }}</p>
              <p class="mb-0">{{ text }}</p>
            </b-tab>
            <b-tab title="Messages">
              <p>{{ text }}</p>
              <p class="mb-0">{{ content }}</p>
            </b-tab>
          </b-tabs>
        </div>
      </div>
    </div>
    <div class="row mb-3">
      <div class="col-xl-6">
        <div role="tablist">
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" role="tab">
              <h5 class="m-0">
                <a v-b-toggle.accordion-1 class="text-dark">
                  <i class="mdi mdi-help-circle mr-1 text-primary"></i>
                  What is Vakal text here?
                </a>
              </h5>
            </b-card-header>
            <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-text>{{ text }}</b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" role="tab">
              <h5 class="m-0">
                <a v-b-toggle.accordion-2 class="text-dark">
                  <i class="mdi mdi-help-circle mr-1 text-primary"></i>
                  What is Vakal text here?
                </a>
              </h5>
            </b-card-header>
            <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-text>{{ text }}</b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" role="tab">
              <h5 class="m-0">
                <a v-b-toggle.accordion-3 class="text-dark">
                  <i class="mdi mdi-help-circle mr-1 text-primary"></i>
                  What is Vakal text here?
                </a>
              </h5>
            </b-card-header>
            <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-text>{{ text }}</b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" role="tab">
              <h5 class="m-0">
                <a v-b-toggle.accordion-4 class="text-dark">
                  <i class="mdi mdi-help-circle mr-1 text-primary"></i>
                  What is Vakal text here?
                </a>
              </h5>
            </b-card-header>
            <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-text>{{ text }}</b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
      </div>
      <div class="col-xl-6">
        <b-button v-b-toggle.collapse-2 class="m-1" variant="primary">Link with href</b-button>

        <!-- Using value -->
        <b-button v-b-toggle="'collapse-2'" class="m-1" variant="primary">Button with data-target</b-button>

        <!-- Element to collapse -->
        <b-collapse id="collapse-2" visible class="mt-1">
          <b-card>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.</b-card>
        </b-collapse>
      </div>
    </div>
  </Layout>
</template>