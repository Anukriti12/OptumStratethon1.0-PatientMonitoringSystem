<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

/**
 * Inbox-widget component
 */
export default {
  components: { VuePerfectScrollbar },
  data() {
    return {
      inboxData: [
        {
          image: require('@assets/images/users/user-1.jpg'),
          name: 'Chadengle',
          message: "Hey! there I'm available...",
        },
        {
          image: require('@assets/images/users/user-2.jpg'),
          name: 'Tomaslau',
          message: "I've finished it! See you so...",
        },
        {
          image: require('@assets/images/users/user-3.jpg'),
          name: 'Stillnotdavid',
          message: 'This theme is awesome!',
        },
        {
          image: require('@assets/images/users/user-4.jpg'),
          name: 'Kurafire',
          message: 'Nice to meet you',
        },
        {
          image: require('@assets/images/users/user-5.jpg'),
          name: 'Shahedk',
          message: "Hey! there I'm available...",
        },
        {
          image: require('@assets/images/users/user-6.jpg'),
          name: 'Adhamdannaway',
          message: 'This theme is awesome!',
        },
        {
          image: require('@assets/images/users/user-8.jpg'),
          name: 'Arashasghari',
          message: "Hey! there I'm available...",
        },
        {
          image: require('@assets/images/users/user-9.jpg'),
          name: 'Joshaustin',
          message: "I've finished it! See you so...",
        },
      ],
    }
  },
}
</script>

<template>
  <div class="card-box">
    <h4 class="header-title mb-3">Inbox</h4>
    <VuePerfectScrollbar>
      <div class="inbox-widget" style="max-height: 404px;">
        <div v-for="inbox in inboxData" :key="inbox.name" class="inbox-item">
          <div class="inbox-item-img">
            <img :src="`${inbox.image}`" class="rounded-circle" alt />
          </div>
          <p class="inbox-item-author">{{ inbox.name }}</p>
          <p class="inbox-item-text">{{ inbox.message }}</p>
          <p class="inbox-item-date">
            <a href="javascript:(0);" class="btn btn-sm btn-link text-info font-13">Reply</a>
          </p>
        </div>
      </div><!-- end inbox-widget -->
    </VuePerfectScrollbar>
  </div> <!-- end card-box -->
</template>