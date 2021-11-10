<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'
import {
  required,
  email,
  minLength,
  sameAs,
  maxLength,
  minValue,
  maxValue,
  numeric,
  url,
  alphaNum,
} from 'vuelidate/lib/validators'

/**
 * Form validation component
 */
export default {
  page: {
    title: 'Add Patient',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout, PageHeader },
  data() {
    return {
      title: 'Add Patient',
      items: [],

      form: {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
      horizontal: {
        email: '',
        password: '',
        confirmPassword: '',
        website: '',
      },
      range: {
        minlen: '',
        maxlength: '',
        between: '',
        minval: '',
        maxval: '',
        rangeval: '',
        expr: '',
      },
      typeform: {
        name: '',
        password: '',
        confirmPassword: '',
        email: '',
        url: '',
        digit: '',
        number: '',
        alphanum: '',
        textarea: '',
      },
      submit: false,
      submitted: false,
      formsubmit: false,
      typesubmit: false,
    }
  },
  validations: {
    form: {
      name: { required },
      email: { required, email },
      password: { required, minLength: minLength(6) },
      confirmPassword: { required, sameAsPassword: sameAs('password') },
    },
    horizontal: {
      email: { required, email },
      password: { required, minLength: minLength(6) },
      confirmPassword: { required, sameAsPassword: sameAs('password') },
      website: { required, url },
    },
    range: {
      minlen: { required, minLength: minLength(6) },
      maxlength: { required, maxLength: maxLength(6) },
      between: { required, minLength: minLength(5), maxLength: maxLength(10) },
      minval: { required, minValue: minValue(6) },
      maxval: { required, maxValue: maxValue(6) },
      rangeval: { required, minValue: minValue(6), maxValue: maxValue(100) },
      expr: { required },
    },
    typeform: {
      name: { required },
      password: { required, minLength: minLength(6) },
      confirmPassword: { required, sameAsPassword: sameAs('password') },
      email: { required, email },
      url: { required, url },
      digit: { required, numeric },
      number: { required, numeric },
      alphanum: { required, alphaNum },
      textarea: { required },
    },
  },
  methods: {
    /**
     * Basic Form submit
     */
    handleSubmit(e) {
      this.submitted = true

      // stop here if form is invalid
      this.$v.$touch()
    },
    /**
     * Horizontal form submit
     */
    horizontalForm(e) {
      this.formsubmit = true
      // stop here if form is invalid
      this.$v.$touch()
    },
    /**
     * Range validation form submit
     */
    rangeform(e) {
      this.submit = true
      // stop here if form is invalid
      this.$v.$touch()
    },
    /**
     * Validation type submit
     */
    typeForm(e) {
      this.typesubmit = true
      // stop here if form is invalid
      this.$v.$touch()
    },
  },
}
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-lg">
        <div class="card-box">
          <h4 class="header-title m-t-0">Fill Patient Details</h4>
          <p
            class="text-muted font-14 m-b-20"
          >Type in basic details about the patient. Along with initial notes as gathered from the friends & family who admitted the patient for Natural Language Processing for further analysis.</p>

          <form action="#" @submit.prevent="typeForm">
            <div class="form-group">
              <label>Patient Name*</label>
              <input
                v-model="typeform.name"
                type="text"
                class="form-control"
                placeholder=""
                name="name"
                :class="{ 'is-invalid': typesubmit && $v.typeform.name.$error }"
              />
              <div v-if="typesubmit && $v.typeform.name.$error" class="invalid-feedback">
                <span v-if="!$v.typeform.name.required">This value is required.</span>
              </div>
            </div>
            <div class="form-group">
                <label>Gender *:</label>
                <div class="radio mb-1 parsley-error" aria-describedby="parsley-id-multiple-gender">
                    <input type="radio" name="gender" id="genderM" value="Male" required="" data-parsley-multiple="gender" data-parsley-id="10">
                    <label for="genderM">Male</label>
                </div>
                <div class="radio">
                    <input type="radio" name="gender" id="genderF" value="Female" data-parsley-multiple="gender">
                    <label for="genderF">
                        Female
                    </label>
                </div>
            </div>
            <div class="form-group">
              <label>Body Mass Index (BMI)</label>
              <div>
                <input
                  v-model="typeform.number"
                  type="text"
                  name="number"
                  class="form-control"
                  placeholder="Enter only numbers"
                />
                <div v-if="typesubmit && $v.typeform.number.$error" class="invalid-feedback">
                  <span v-if="!$v.typeform.number.numeric">This value should be a valid number.</span>
                </div>
              </div>
            </div>
            <div class="form-group">
              <label>Initial Notes</label>
              <div>
                <textarea
                  v-model="typeform.textarea"
                  class="form-control"
                  name="textarea"
                ></textarea>
                <div v-if="typesubmit && $v.typeform.textarea.$error" class="invalid-feedback">
                  <span v-if="!$v.typeform.textarea.required">This value is required.</span>
                </div>
              </div>
            </div>
            <div class="form-group mb-0">
              <div>
                <button type="submit" class="btn btn-primary">Submit</button>
                <button type="reset" class="btn btn-secondary m-l-5 ml-1">Cancel</button>
              </div>
            </div>
          </form>
        </div>
        <!-- end card-box -->
      </div>
      <!-- end col-->
    </div>
    <!-- end row -->
  </Layout>
</template>