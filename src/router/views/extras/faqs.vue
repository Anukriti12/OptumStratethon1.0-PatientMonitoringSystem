<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'

/**
 * FAQs component
 */
export default {
  page: {
    title: 'FAQs',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout, PageHeader },
  data() {
    return {
      title: 'FAQs',
      items: [
        {
          text: 'UBold',
          href: '/',
        },
        {
          text: 'Extras',
          href: '/',
        },
        {
          text: 'FAQs',
          active: true,
        },
      ],
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
    }
  },
}
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-12">
        <div class="text-center">
          <i class="h1 mdi mdi-comment-multiple-outline text-muted"></i>
          <h3 class="mb-3">Frequently Asked Questions</h3>
          <p class="text-muted">
            Nisi praesentium similique totam odio obcaecati, reprehenderit,
            dignissimos rem temporibus ea inventore alias!
            <br />Beatae animi nemo ea
            tempora, temporibus laborum facilis ut!
          </p>

          <button type="button" class="btn btn-success waves-effect waves-light mt-2 mr-1">
            <i class="mdi mdi-email-outline mr-1"></i> Email us your question
          </button>
          <button type="button" class="btn btn-primary waves-effect waves-light mt-2">
            <i class="mdi mdi-twitter mr-1"></i> Send us a tweet
          </button>
        </div>
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->

    <div class="row pt-5">
      <div class="col-lg-5 offset-lg-1">
        <!-- Question/Answer -->
        <div>
          <div class="faq-question-q-box">Q.</div>
          <h4 class="faq-question" data-wow-delay=".1s">What is Lorem Ipsum?</h4>
          <p class="faq-answer mb-4">{{text}}</p>
        </div>

        <!-- Question/Answer -->
        <div>
          <div class="faq-question-q-box">Q.</div>
          <h4 class="faq-question">Why use Lorem Ipsum?</h4>
          <p class="faq-answer mb-4">{{text}}</p>
        </div>

        <!-- Question/Answer -->
        <div>
          <div class="faq-question-q-box">Q.</div>
          <h4 class="faq-question">How many variations exist?</h4>
          <p class="faq-answer mb-4">{{text}}</p>
        </div>

        <!-- Question/Answer -->
        <div>
          <div class="faq-question-q-box">Q.</div>
          <h4 class="faq-question" data-wow-delay=".1s">What is Lorem Ipsum?</h4>
          <p class="faq-answer mb-4">{{text}}</p>
        </div>
      </div>
      <!--/col-md-5 -->

      <div class="col-lg-5">
        <!-- Question/Answer -->
        <div>
          <div class="faq-question-q-box">Q.</div>
          <h4 class="faq-question">Is safe use Lorem Ipsum?</h4>
          <p class="faq-answer mb-4">{{text}}</p>
        </div>

        <!-- Question/Answer -->
        <div>
          <div class="faq-question-q-box">Q.</div>
          <h4 class="faq-question">When can be used?</h4>
          <p class="faq-answer mb-4">{{text}}</p>
        </div>

        <!-- Question/Answer -->
        <div>
          <div class="faq-question-q-box">Q.</div>
          <h4 class="faq-question">License &amp; Copyright</h4>
          <p class="faq-answer mb-4">{{text}}</p>
        </div>

        <!-- Question/Answer -->
        <div>
          <div class="faq-question-q-box">Q.</div>
          <h4 class="faq-question">Is safe use Lorem Ipsum?</h4>
          <p class="faq-answer mb-4">{{text}}</p>
        </div>
      </div>
      <!--/col-md-5-->
    </div>
    <!-- end row -->
  </Layout>
</template>