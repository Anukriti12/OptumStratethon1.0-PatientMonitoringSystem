<script>
/**
 * Email-list component
 */
export default {
  data() {
    return {
      list: [
        {
          icon: 'mdi mdi-inbox',
          name: 'Inbox',
          value: 8,
          text: 'danger',
        },
        {
          icon: 'mdi mdi-star',
          name: 'Starred',
        },
        {
          icon: 'mdi mdi-file-document-box',
          name: 'Draft',
          value: 32,
          text: 'info',
        },
        {
          icon: 'mdi mdi-send ',
          name: 'Sent Mail',
        },
        {
          icon: 'mdi mdi-delete',
          name: 'Trash',
        },
      ],
      label: [
        {
          text: 'info',
          name: 'Web App',
        },
        {
          text: 'warning',
          name: 'Recharge',
        },
        {
          text: 'dark',
          name: 'Wallet Balance',
        },
        {
          text: 'primary',
          name: 'Friends',
        },
        {
          text: 'success',
          name: 'Family',
        },
      ],
    }
  },
}
</script>

<template>
  <div class="mt-4">
    <!-- List  -->
    <div v-for="maillist in list" :key="maillist.icon" class="mail-list">
      <a
        href="javascript: void(0);"
        class="list-group-item border-0"
        :class="{ 'text-danger font-weight-bold': `${maillist.text}` === 'danger' }"
      >
        <i :class="`font-18 align-middle mr-2 ${maillist.icon}`"></i>
        {{maillist.name}}
        <span
          class="badge float-right ml-2 mt-1"
          :class="{
                    'badge-danger': `${maillist.text}` === 'danger',
                    'badge-info': `${maillist.text}` === 'info' }"
        >{{maillist.value}}</span>
      </a>
    </div>
    <!-- End list -->

    <!-- Label -->
    <h6 class="mt-4">Labels</h6>
    <div v-for="emaillabel in label" :key="emaillabel.text" class="list-group b-0 mail-list">
      <a href="javascript: void(0);" class="list-group-item border-0">
        <span :class="`mdi mdi-circle text-${emaillabel.text} mr-2`"></span>
        {{emaillabel.name}}
      </a>
    </div>
    <!-- End label -->
  </div>
</template>