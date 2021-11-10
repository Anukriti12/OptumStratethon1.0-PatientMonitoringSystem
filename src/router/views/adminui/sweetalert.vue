<script>
import Vue from 'vue'
import Swal from 'sweetalert2'

import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'

/**
 * Sweetalert component
 */
export default {
  page: {
    title: 'Sweet Alerts',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout, PageHeader },
  data() {
    return {
      title: 'Sweet Alerts',
      items: [
        {
          text: 'UBold',
          href: '/',
        },
        {
          text: 'Admin UI',
          href: '/',
        },
        {
          text: 'Sweet Alerts',
          active: true,
        },
      ],
    }
  },
  methods: {
    showAlert() {
      Vue.swal('Any fool can use a computer!')
    },
    titleText() {
      Vue.swal('The Internet?', 'That thing is still around?', 'question')
    },
    successmsg() {
      Vue.swal({
        title: 'Good job!',
        text: 'You clicked the button!',
        type: 'success',
        confirmButtonClass: 'btn btn-confirm mt-2',
      })
    },
    content() {
      Vue.swal({
        imageUrl: 'https://placeholder.pics/svg/300x1500',
        imageHeight: 1500,
        imageAlt: 'A tall image',
        confirmButtonClass: 'btn btn-confirm mt-2',
      })
    },
    position() {
      Vue.swal({
        position: 'top-end',
        type: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500,
      })
    },
    errorIcon() {
      Vue.swal({
        type: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        confirmButtonClass: 'btn btn-confirm mt-2',
        footer: '<a>Why do I have this issue?</a>',
      })
    },
    confirm() {
      Vue.swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      }).then((result) => {
        if (result.value) {
          Vue.swal('Deleted!', 'Your file has been deleted.', 'success')
        }
      })
    },
    cancel() {
      Vue.swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        confirmButtonClass: 'btn btn-success mt-2',
        cancelButtonClass: 'btn btn-danger ml-2 mt-2',
        buttonsStyling: false,
      }).then((result) => {
        if (result.value) {
          Vue.swal({
            title: 'Deleted!',
            text: 'Your file has been deleted.',
            type: 'success',
          })
        } else {
          Vue.swal({
            title: 'Cancelled',
            text: 'Your imaginary file is safe :)',
            type: 'error',
          })
        }
      })
    },
    imageHeader() {
      Vue.swal({
        title: 'UBold',
        text: 'Responsive Bootstrap 4 Admin Dashboard',
        imageUrl: require('@assets/images/logo-sm.png'),
        imageHeight: 50,
        animation: false,
        confirmButtonClass: 'btn btn-confirm mt-2',
      })
    },
    timer() {
      var timerInterval
      Vue.swal({
        title: 'Auto close alert!',
        html: 'I will close in <strong></strong> seconds.',
        timer: 2000,
        onBeforeOpen: () => {
          Swal.showLoading()
          timerInterval = setInterval(() => {
            Swal.getContent().querySelector('strong').textContent =
              Swal.getTimerLeft() + ''
          }, 100)
        },
        onClose: () => {
          clearInterval(timerInterval)
        },
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log('I was closed by the timer')
        }
      })
    },
    custom() {
      Vue.swal({
        title: '<strong>HTML <u>example</u></strong>',
        type: 'info',
        html:
          'You can use <b>bold text</b>, ' +
          '<a href="//github.com">links</a> ' +
          'and other HTML tags',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
        cancelButtonAriaLabel: 'Thumbs down',
      })
    },
    customBackground() {
      Vue.swal({
        title: 'Custom width, padding, background.',
        width: 600,
        padding: 100,
        confirmButtonClass: 'btn btn-confirm mt-2',
        background:
          '#fff url(//subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/geometry.png)',
      })
    },
    ajax() {
      Vue.swal({
        title: 'Submit your Github username',
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off',
        },
        showCancelButton: true,
        confirmButtonText: 'Look up',
        showLoaderOnConfirm: true,
        preConfirm: (login) => {
          return fetch(`//api.github.com/users/${login}`)
            .then((response) => {
              if (!response.ok) {
                throw new Error(response.statusText)
              }
              return response.json()
            })
            .catch((error) => {
              Swal.showValidationMessage(`Request failed: ${error}`)
            })
        },
        allowOutsideClick: () => !Swal.isLoading(),
      }).then((result) => {
        if (result.value) {
          Swal.fire({
            title: `${result.value.login}'s avatar`,
            imageUrl: result.value.avatar_url,
          })
        }
      })
    },
    chain() {
      Swal.mixin({
        input: 'text',
        confirmButtonText: 'Next &rarr;',
        showCancelButton: true,
        progressSteps: ['1', '2', '3'],
      })
        .queue([
          {
            title: 'Question 1',
            text: 'Chaining swal2 modals is easy',
          },
          'Question 2',
          'Question 3',
        ])
        .then((result) => {
          if (result.value) {
            Swal.fire({
              title: 'All done!',
              html:
                'Your answers: <pre><code>' +
                JSON.stringify(result.value) +
                '</code></pre>',
              confirmButtonText: 'Lovely!',
            })
          }
        })
    },
    dynamicQueue() {
      var ipAPI = 'https://api.ipify.org?format=json'
      Swal.queue([
        {
          title: 'Your public IP',
          confirmButtonText: 'Show my public IP',
          text: 'Your public IP will be received ' + 'via AJAX request',
          showLoaderOnConfirm: true,
          preConfirm: () => {
            return fetch(ipAPI)
              .then((response) => response.json())
              .then((data) => Swal.insertQueueStep(data.ip))
              .catch(() => {
                Swal.insertQueueStep({
                  type: 'error',
                  title: 'Unable to get your public IP',
                })
              })
          },
        },
      ])
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
            <h4 class="header-title">Examples</h4>

            <p
              class="sub-header"
            >A beautiful, responsive, customizable, accessible (WAI-ARIA) replacement for JavaScript's popup boxes</p>

            <table class="table table-borderless table-centered mb-0">
              <thead class="thead-light">
                <tr>
                  <th style="width:50%;">Alert Type</th>
                  <th>Example</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>A basic message</td>
                  <td>
                    <button
                      id="sa-basic"
                      type="button"
                      class="btn btn-info btn-xs"
                      @click="showAlert"
                    >Click me</button>
                  </td>
                </tr>
                <tr>
                  <td>A title with a text under</td>
                  <td>
                    <button
                      id="sa-basic"
                      type="button"
                      class="btn btn-info btn-xs"
                      @click="titleText"
                    >Click me</button>
                  </td>
                </tr>
                <tr>
                  <td>A success message!</td>
                  <td>
                    <button
                      id="sa-basic"
                      type="button"
                      class="btn btn-info btn-xs"
                      @click="successmsg"
                    >Click me</button>
                  </td>
                </tr>
                <tr>
                  <td>A modal window with a long content inside:</td>
                  <td>
                    <button
                      id="sa-basic"
                      type="button"
                      class="btn btn-info btn-xs"
                      @click="content"
                    >Click me</button>
                  </td>
                </tr>
                <tr>
                  <td>A custom positioned dialog</td>
                  <td>
                    <button
                      id="sa-basic"
                      type="button"
                      class="btn btn-info btn-xs"
                      @click="position"
                    >Click me</button>
                  </td>
                </tr>
                <tr>
                  <td>A modal with a title, an error icon, a text, and a footer</td>
                  <td>
                    <button
                      id="sa-basic"
                      type="button"
                      class="btn btn-info btn-xs"
                      @click="errorIcon"
                    >Click me</button>
                  </td>
                </tr>
                <tr>
                  <td>A confirm dialog, with a function attached to the "Confirm"-button...</td>
                  <td>
                    <button
                      id="sa-basic"
                      type="button"
                      class="btn btn-info btn-xs"
                      @click="confirm"
                    >Click me</button>
                  </td>
                </tr>
                <tr>
                  <td>By passing a parameter, you can execute something else for "Cancel".</td>
                  <td>
                    <button
                      id="sa-basic"
                      type="button"
                      class="btn btn-info btn-xs"
                      @click="cancel"
                    >Click me</button>
                  </td>
                </tr>
                <tr>
                  <td>A message with custom Image Header</td>
                  <td>
                    <button
                      id="sa-basic"
                      type="button"
                      class="btn btn-info btn-xs"
                      @click="imageHeader"
                    >Click me</button>
                  </td>
                </tr>
                <tr>
                  <td>A message with auto close timer</td>
                  <td>
                    <button
                      id="sa-basic"
                      type="button"
                      class="btn btn-info btn-xs"
                      @click="timer"
                    >Click me</button>
                  </td>
                </tr>
                <tr>
                  <td>Custom HTML description and buttons</td>
                  <td>
                    <button
                      id="sa-basic"
                      type="button"
                      class="btn btn-info btn-xs"
                      @click="custom"
                    >Click me</button>
                  </td>
                </tr>
                <tr>
                  <td>A message with custom width, padding and background</td>
                  <td>
                    <button
                      id="sa-basic"
                      type="button"
                      class="btn btn-info btn-xs"
                      @click="customBackground"
                    >Click me</button>
                  </td>
                </tr>
                <tr>
                  <td>Ajax request example</td>
                  <td>
                    <button
                      id="sa-basic"
                      type="button"
                      class="btn btn-info btn-xs"
                      @click="ajax"
                    >Click me</button>
                  </td>
                </tr>
                <tr>
                  <td>Chaining modals (queue) example</td>
                  <td>
                    <button
                      id="sa-basic"
                      type="button"
                      class="btn btn-info btn-xs"
                      @click="chain"
                    >Click me</button>
                  </td>
                </tr>
                <tr>
                  <td>Dynamic queue example</td>
                  <td>
                    <button
                      id="sa-basic"
                      type="button"
                      class="btn btn-info btn-xs"
                      @click="dynamicQueue"
                    >Click me</button>
                  </td>
                </tr>
              </tbody>
            </table>
            <!-- end table -->
          </div>
        </div>
      </div>
      <!--end col -->
    </div>
    <!-- end row -->
  </Layout>
</template>
