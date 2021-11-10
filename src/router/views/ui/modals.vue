<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'

/**
 * Modals component
 */
export default {
  page: {
    title: 'Modals',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout, PageHeader },
  data() {
    return {
      title: 'Modals',
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
          text: 'Modals',
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
          <h4 class="header-title">Bootstrap Modals (default)</h4>
          <p
            class="sub-header"
          >A rendered modal with header, body, and set of actions in the footer.</p>
          <div class="button-list">
            <b-button v-b-modal.modal-1 variant="primary">Standard modal</b-button>
            <b-modal id="modal-1" title="Modal Heading" title-class="font-18">
              <p
                v-for="i in 9"
                :key="i"
              >Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
            </b-modal>
            <b-button v-b-modal.modal-lg variant="success">Large modal</b-button>
            <b-modal
              id="modal-lg"
              size="lg"
              title="Large modal"
              title-class="font-18"
              hide-footer
            >...</b-modal>
            <b-button v-b-modal.modal-sm variant="warning">Small modal</b-button>
            <b-modal
              id="modal-sm"
              size="sm"
              title="Small modal"
              title-class="font-18"
              hide-footer
            >...</b-modal>
            <b-button v-b-modal.modal-center variant="info">Center modal</b-button>
            <b-modal
              id="modal-center"
              centered
              title="Center modal"
              title-class="font-18"
              hide-footer
            >...</b-modal>
            <b-button v-b-modal.modal-scrollable variant="primary">Scrollable</b-button>
            <b-modal
              id="modal-scrollable"
              scrollable
              title="Scrollable Content"
              title-class="font-18"
            >
              <p v-for="i in 20" :key="i">
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              </p>
            </b-modal>
          </div>
        </div>
      </div>
    </div>

    <!-- Custom Modals -->
    <div class="row">
      <div class="col-12">
        <div class="card-box">
          <h4 class="header-title">Custom Modals</h4>

          <p class="sub-header">Examples of custom modals.</p>
          <div class="button-list">
            <b-button v-b-modal.modal-fullWidth variant="primary">Full width Modal</b-button>
            <b-modal
              id="modal-fullWidth"
              title="Modal Heading"
              title-class="font-18"
              dialog-class="modal-full"
            >
              <h4>Text in a modal</h4>
              <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
              <hr />
              <h4>Overflowing text to show scroll behavior</h4>
              <p>
                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque
                nisl
                consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
              </p>
            </b-modal>
            <b-button v-b-modal.modal-responsive variant="success">Responsive Modal</b-button>
            <b-modal
              id="modal-responsive"
              title="Modal Content is Responsive"
              title-class="font-18"
              body-class="p-4"
            >
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="field-1" class="control-label">Name</label>
                    <input type="text" class="form-control" placeholder="John" />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="field-2" class="control-label">Surname</label>
                    <input type="text" class="form-control" placeholder="Doe" />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label for="field-3" class="control-label">Address</label>
                    <input type="text" class="form-control" placeholder="Address" />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <div class="form-group">
                    <label for="field-4" class="control-label">City</label>
                    <input type="text" class="form-control" placeholder="Boston" />
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group">
                    <label for="field-5" class="control-label">Country</label>
                    <input type="text" class="form-control" placeholder="United States" />
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group">
                    <label for="field-6" class="control-label">Zip</label>
                    <input type="text" class="form-control" placeholder="123456" />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group no-margin">
                    <label for="field-7" class="control-label">Personal Info</label>
                    <textarea class="form-control" placeholder="Write something about yourself"></textarea>
                  </div>
                </div>
              </div>
            </b-modal>

            <!-- Accordion modal -->
            <b-button v-b-modal.modal-accordion variant="secondary">Accordion in Modal</b-button>
            <b-modal id="modal-accordion" hide-header hide-footer body-class="p-0">
              <b-card no-body class="mb-0">
                <b-card-header header-tag="header" role="tab">
                  <h5 class="m-0">
                    <a
                      v-b-toggle.accordion-1
                      href="javascript: void(0);"
                      class="text-dark"
                    >Collapsible Group Item #1</a>
                  </h5>
                </b-card-header>
                <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <b-card-text>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>

              <b-card no-body class="mb-0">
                <b-card-header header-tag="header" role="tab">
                  <h5 class="m-0">
                    <a
                      v-b-toggle.accordion-2
                      href="javascript: void(0);"
                      class="text-dark"
                    >Collapsible Group Item #2</a>
                  </h5>
                </b-card-header>
                <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <b-card-text>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>

              <b-card no-body class="mb-0">
                <b-card-header header-tag="header" role="tab">
                  <h5 class="m-0">
                    <a
                      v-b-toggle.accordion-3
                      href="javascript: void(0);"
                      class="text-dark"
                    >Collapsible Group Item #3</a>
                  </h5>
                </b-card-header>
                <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <b-card-text>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>
            </b-modal>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>