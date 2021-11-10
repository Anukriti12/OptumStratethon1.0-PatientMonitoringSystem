<script>
import DatePicker from 'vue2-datepicker'
import Switches from 'vue-switches'
import Multiselect from 'vue-multiselect'

import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'

/**
 * Advanced-form component
 */
export default {
  page: {
    title: 'Form Advanced',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: {
    DatePicker,
    Switches,
    Multiselect,
    Layout,
    PageHeader,
  },
  data() {
    return {
      title: 'Form Advanced',
      items: [
        {
          text: 'UBold',
          href: '/',
        },
        {
          text: 'Forms',
          href: '/',
        },
        {
          text: 'Advanced',
          active: true,
        },
      ],
      time1: '',
      time2: '',
      time3: '',
      enabled: false,
      enabled1: false,
      enabled2: false,
      enabled3: false,
      enabled4: false,
      enabled5: false,
      small: false,
      small1: false,
      small2: false,
      small3: false,
      danger: false,
      info: false,
      success: false,
      primary: false,
      value: null,
      value1: null,
      options: [
        'Alaska',
        'Hawaii',
        'California',
        'Nevada',
        'Oregon',
        'Washington',
        'Arizona',
        'Colorado',
        'Idaho',
        'Montana',
        'Nebraska',
        'New Mexico',
        'North Dakota',
        'Utah',
        'Wyoming',
        'Alabama',
        'Arkansas',
        'Illinois',
        'Iowa',
      ],
      digit: '',
      zipcode: '',
      crazyzip: '',
      money: '',
      date: '',
      hour: '',
      datetime: '',
      ipaddress: '',
      cnpj: '',
      cpf: '',
      celphone: '',
      ustelephone: '',
      areacode: '',
      telephone: '',
      maxlen: '',
      data: '',
      option: '',
      textarea: '',
    }
  },
}
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <!-- Date picker -->
      <div class="col-lg-6">
        <div class="card-box">
          <h4 class="header-title">Date Picker</h4>
          <p class="sub-header">Examples of bootstrap datepicker.</p>

          <div>
            <div class="form-group mb-3">
              <label>Default Clock Picker</label>
              <br />
              <date-picker v-model="time1" :first-day-of-week="1" lang="en" confirm></date-picker>
            </div>

            <div class="form-group mb-3">
              <label>Auto close</label>
              <br />
              <date-picker v-model="time2" :first-day-of-week="1" lang="en"></date-picker>
            </div>

            <div class="form-group mb-0">
              <label>Date Range</label>
              <br />
              <date-picker v-model="time3" range append-to-body lang="en" confirm></date-picker>
            </div>
          </div>
        </div>
      </div>
      <!-- End datepicker -->
      <div class="col-lg-6">
        <div class="card-box">
          <h4 class="mb-3 header-title">Switchery</h4>
          <h6>Basic</h6>
          <p class="text-muted mb-3 font-13">
            Add an attribute
            <code>data-plugin="switchery" data-color="@colors"</code>
            to your input element and it will be converted into switch.
          </p>
          <switches v-model="enabled" type-bold="true" class="mb-0"></switches>
          <switches v-model="enabled1" type-bold="false" color="warning" class="ml-1 mb-0"></switches>
          <switches v-model="enabled2" type-bold="false" color="danger" class="ml-1 mb-0"></switches>
          <switches v-model="enabled3" type-bold="false" color="primary" class="ml-1 mb-0"></switches>
          <switches v-model="enabled4" type-bold="false" color="success" class="ml-1 mb-0"></switches>
          <switches v-model="enabled5" type-bold="false" color="info" class="ml-1 mb-0"></switches>
          <h6>Sizes</h6>
          <p class="text-muted mb-3 font-13">
            Add an attribute
            <code>data-size="small"</code>
            to your input element and it will be converted into switch.
          </p>
          <div>
            <switches v-model="small"></switches>
            <switches v-model="small1" color="warning" class="ml-1"></switches>
            <switches v-model="small2" color="danger" class="ml-1"></switches>
            <switches v-model="small3" color="success" class="ml-1"></switches>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-6">
        <div class="card-box">
          <h4 class="header-title">Input Masks</h4>
          <p class="sub-header">
            Use the button classes on an
            <code>&lt;a&gt;</code>,
            <code>&lt;button&gt;</code>, or
            <code>&lt;input&gt;</code>
            element.
          </p>

          <div class="row">
            <div class="col-md-6">
              <form action="#">
                <div class="form-group">
                  <label>Date</label>
                  <input v-model="date" v-mask="'##/##/####'" type="text" class="form-control" />
                  <span class="font-13 text-muted">e.g "DD/MM/YYYY"</span>
                </div>
                <div class="form-group">
                  <label>Hour</label>
                  <input v-model="hour" v-mask="'##:##:##'" type="text" class="form-control" />
                  <span class="font-13 text-muted">e.g "HH:MM:SS"</span>
                </div>
                <div class="form-group">
                  <label>Date & Hour</label>
                  <input
                    v-model="datetime"
                    v-mask="'##/##/#### ##:##:##'"
                    type="text"
                    class="form-control"
                  />
                  <span class="font-13 text-muted">e.g "DD/MM/YYYY HH:MM:SS"</span>
                </div>
                <div class="form-group">
                  <label>ZIP Code</label>
                  <input v-model="zipcode" v-mask="'#####-###'" type="text" class="form-control" />
                  <span class="font-13 text-muted">e.g "xxxxx-xxx"</span>
                </div>
                <div class="form-group">
                  <label>Crazy Zip Code</label>
                  <input v-model="crazyzip" v-mask="'#-##-##-##'" type="text" class="form-control" />
                  <span class="font-13 text-muted">e.g "x-xx-xx-xx"</span>
                </div>
                <div class="form-group">
                  <label>Money</label>
                  <input
                    v-model="money"
                    v-mask="'###.###.###.###.###,##'"
                    type="text"
                    class="form-control"
                  />
                  <span class="font-13 text-muted">e.g "Your money"</span>
                </div>
                <div class="form-group">
                  <label>4 digit Group</label>
                  <input
                    v-model="digit"
                    v-mask="'#,####,####,####'"
                    type="text"
                    class="form-control"
                  />
                  <span class="font-13 text-muted">e.g. "x,xxxx,xxxx,xxxx"</span>
                </div>
              </form>
            </div>
            <!-- end col -->

            <div class="col-md-6">
              <form action="#">
                <div class="form-group">
                  <label>Telephone</label>
                  <input v-model="telephone" v-mask="'####-####'" type="text" class="form-control" />
                  <span class="font-13 text-muted">e.g "xxxx-xxxx"</span>
                </div>
                <div class="form-group">
                  <label>Telephone with Code Area</label>
                  <input
                    v-model="areacode"
                    v-mask="'(##) ####-####'"
                    type="text"
                    class="form-control"
                  />
                  <span class="font-13 text-muted">e.g "(xx) xxxx-xxxx"</span>
                </div>
                <div class="form-group">
                  <label>US Telephone</label>
                  <input
                    v-model="ustelephone"
                    v-mask="'(###) ###-####'"
                    type="text"
                    class="form-control"
                  />
                  <span class="font-13 text-muted">e.g "(xxx) xxx-xxxx"</span>
                </div>
                <div class="form-group">
                  <label>São Paulo Celphones</label>
                  <input
                    v-model="celphone"
                    v-mask="'(##) #####-####'"
                    type="text"
                    class="form-control"
                  />
                  <span class="font-13 text-muted">e.g "(xx) xxxxx-xxxx"</span>
                </div>
                <div class="form-group">
                  <label>CPF</label>
                  <input v-model="cpf" v-mask="'###.###.###-##'" type="text" class="form-control" />
                  <span class="font-13 text-muted">e.g "xxx.xxx.xxxx-xx"</span>
                </div>
                <div class="form-group">
                  <label>CNPJ</label>
                  <input
                    v-model="cnpj"
                    v-mask="'##.###.###/####-##'"
                    type="text"
                    class="form-control"
                  />
                  <span class="font-13 text-muted">e.g "xx.xxx.xxx/xxxx-xx"</span>
                </div>
                <div class="form-group">
                  <label>IP Address</label>
                  <input
                    v-model="ipaddress"
                    v-mask="'###.###.###.###'"
                    type="text"
                    class="form-control"
                  />
                  <span class="font-13 text-muted">e.g "xxx.xxx.xxx.xxx"</span>
                </div>
              </form>
            </div>
            <!-- end col -->
          </div>
          <!-- end row -->
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card-box">
          <h4 class="mb-4 header-title">Select2</h4>
          <label>Single Select</label>

          <multiselect v-model="value" :options="options"></multiselect>
          <label class="mt-3">Multiple Select</label>

          <multiselect v-model="value1" :options="options" :multiple="true"></multiselect>
        </div>

        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Bootstrap MaxLength</h4>
            <p class="sub-header">Uses the HTML5 attribute "maxlength" to work.</p>

            <label class="mb-1 font-weight-medium text-muted">Default usage</label>
            <p
              class="text-muted font-13"
            >The badge will show up by default when the remaining chars are 10 or less:</p>
            <input v-model="maxlen" type="text" class="form-control" :maxlength="10" />
            <div v-if="maxlen" class="text-center">
              <p
                class="badge position-absolute"
                :class="{ 'badge-success': maxlen.length !== 10,
                            'badge-danger': maxlen.length === 10 }"
              >{{ maxlen.length }} / 10</p>
            </div>

            <div>
              <label class="mb-1 mt-3 font-weight-medium text-muted">Threshold value</label>
              <p class="text-muted font-13">
                Do you want the badge to show up when there are 20 chars or less? Use the
                <code>threshold</code>
                option:
              </p>
              <input v-model="data" type="text" :maxlength="25" class="form-control" />
              <div class="text-center">
                <p
                  v-if="data"
                  class="badge position-absolute"
                  :class="{ 'badge-success': data.length !== 25,
                            'badge-danger': data.length === 25 }"
                >{{ data.length }} / 25</p>
              </div>
            </div>

            <div>
              <label class="mb-1 mt-3 font-weight-medium text-muted">All the options</label>
              <p class="text-muted font-13">
                Please note: if the
                <code>alwaysShow</code> option is enabled, the
                <code>threshold</code> option
                is
                ignored.
              </p>
              <input v-model="option" type="text" class="form-control" :maxlength="25" />
              <div class="text-center">
                <p
                  v-if="option"
                  class="badge position-absolute"
                  :class="{ 'badge-success': option.length !== 25,
                            'badge-danger': option.length === 25 }"
                >
                  You typed
                  {{ option.length }} out of 25 chars available.
                </p>
              </div>
            </div>

            <div>
              <label class="mb-1 mt-3 font-weight-medium text-muted">Textareas</label>
              <p
                class="text-muted font-13"
              >Bootstrap maxlength supports textarea as well as inputs. Even on old IE.</p>
              <textarea
                v-model="textarea"
                class="form-control"
                :maxlength="225"
                rows="3"
                placeholder="This textarea has a limit of 225 chars."
              ></textarea>
              <div class="text-center">
                <p
                  v-if="textarea"
                  class="badge position-absolute"
                  :class="{ 'badge-success': textarea.length !== 225,
                            'badge-danger': textarea.length === 225 }"
                >
                  {{ textarea.length }} /
                  225
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>