<template>
  <!-- Start Content-->
  <div class="container-fluid">
    <div class="row justify-content-center my-5">
      <div class="col-lg-6 col-xl-4 mb-4">
        <div class="error-text-box">
          <svg viewBox="0 0 600 200">
            <!-- Symbol-->
            <symbol id="s-text">
              <text text-anchor="middle" x="50%" y="50%" dy=".35em">404!</text>
            </symbol>
            <!-- Duplicate symbols-->
            <use class="text" xlink:href="#s-text" />
            <use class="text" xlink:href="#s-text" />
            <use class="text" xlink:href="#s-text" />
            <use class="text" xlink:href="#s-text" />
            <use class="text" xlink:href="#s-text" />
          </svg>
        </div>
        <div class="text-center">
          <h3 class="mt-0 mb-2">Whoops! Page not found</h3>
          <p class="text-muted mb-3">
            It's looking like you may have taken a wrong turn. Don't worry...
            it happens to the best of us. You might want to check your internet connection.
            Here's a little tip that might help you get back on track.
          </p>

          <router-link tag="a" to="/" class="btn btn-success">Back to Dashboard</router-link>
        </div>
        <!-- end row -->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
  </div>
  <!-- container -->
</template>