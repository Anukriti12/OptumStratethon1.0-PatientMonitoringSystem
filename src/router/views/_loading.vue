<script>
import Layout from '@layouts/main'

export default {
  page: {
    title: 'Loading page...',
    meta: [{ name: 'description', content: 'Loading page...' }],
  },
  name: 'Loading',
  components: { Layout },
}
</script>

<template>
  <Layout>
    <!-- Pre-loader -->
    <div class="preloader">
      <div class="status">
        <div class="spinner">Loading...</div>
      </div>
    </div>
    <!-- End Preloader-->
  </Layout>
</template>
