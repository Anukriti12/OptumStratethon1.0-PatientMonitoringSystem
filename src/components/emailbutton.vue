<template>
  <div>
    <div class="btn-group">
      <button type="button" class="btn btn-sm btn-light">
        <i class="mdi mdi-archive font-18"></i>
      </button>
      <button type="button" class="btn btn-sm btn-light">
        <i class="mdi mdi-alert-octagon font-18"></i>
      </button>
      <button type="button" class="btn btn-sm btn-light">
        <i class="mdi mdi-delete-variant font-18"></i>
      </button>
    </div>
    <b-dropdown class="btn-group ml-1" variant="light" size="sm">
      <template slot="button-content">
        <i class="mdi mdi-folder font-18"></i>
        <i class="mdi mdi-chevron-down"></i>
      </template>

      <span class="dropdown-header">Move to</span>
      <a class="dropdown-item" href="javascript: void(0);">Social</a>
      <a class="dropdown-item" href="javascript: void(0);">Promotions</a>
      <a class="dropdown-item" href="javascript: void(0);">Updates</a>
      <a class="dropdown-item" href="javascript: void(0);">Forums</a>
    </b-dropdown>
    <b-dropdown class="btn-group ml-1" variant="light" size="sm">
      <template slot="button-content">
        <i class="mdi mdi-label font-18"></i>
        <i class="mdi mdi-chevron-down"></i>
      </template>

      <span class="dropdown-header">Label as:</span>
      <b-dropdown-item href="javascript: void(0);">Updates</b-dropdown-item>
      <b-dropdown-item href="javascript: void(0);">Social</b-dropdown-item>
      <b-dropdown-item href="javascript: void(0);">Promotions</b-dropdown-item>
      <b-dropdown-item href="javascript: void(0);">Forums</b-dropdown-item>
    </b-dropdown>

    <b-dropdown class="btn-group ml-1" variant="light" size="sm">
      <template slot="button-content">
        <i class="mdi mdi-dots-horizontal font-18"></i>
        More
        <i class="mdi mdi-chevron-down"></i>
      </template>
      <span class="dropdown-header">More Option :</span>
      <b-dropdown-item href="javascript: void(0);">Mark as Unread</b-dropdown-item>
      <b-dropdown-item href="javascript: void(0);">Add to Tasks</b-dropdown-item>
      <b-dropdown-item href="javascript: void(0);">Add Star</b-dropdown-item>
      <b-dropdown-item href="javascript: void(0);">Mute</b-dropdown-item>
    </b-dropdown>
  </div>
</template>