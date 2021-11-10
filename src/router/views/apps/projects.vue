<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'

import { projectData } from './dataProjects'

/**
 * projects Component
 */
export default {
  page: {
    title: 'Projects',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout, PageHeader },
  data() {
    return {
      projectData: projectData,
      title: 'Projects',
      items: [
        {
          text: 'UBold',
          href: '/',
        },
        {
          text: 'Apps',
          href: '/',
        },
        {
          text: 'Projects',
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
    <div class="row mb-2">
      <div class="col-sm-4">
        <button type="button" class="btn btn-danger btn-rounded mb-3">
          <i class="mdi mdi-plus"></i> Create Project
        </button>
      </div>
      <div class="col-sm-8">
        <div class="text-sm-right">
          <div class="btn-group mb-3">
            <button type="button" class="btn btn-primary">All</button>
          </div>
          <div class="btn-group mb-3 ml-1">
            <button type="button" class="btn btn-light">Ongoing</button>
            <button type="button" class="btn btn-light">Finished</button>
          </div>
          <div class="btn-group mb-3 ml-2 d-none d-sm-inline-block">
            <button type="button" class="btn btn-dark">
              <i class="mdi mdi-apps"></i>
            </button>
          </div>
          <div class="btn-group mb-3 d-none d-sm-inline-block">
            <button type="button" class="btn btn-link text-dark">
              <i class="mdi mdi-format-list-bulleted-type"></i>
            </button>
          </div>
        </div>
      </div>
      <!-- end col-->
    </div>
    <!-- end row-->

    <div class="row">
      <div v-for="project in projectData" :key="project.tasks" class="col-xl-4">
        <div class="card-box project-box">
          <b-dropdown right variant="white" class="float-right" toggle-class="p-0">
            <template slot="button-content">
              <i class="mdi mdi-dots-horizontal text-muted h3"></i>
            </template>
            <b-dropdown-item href="javascript: void(0);">Edit</b-dropdown-item>
            <b-dropdown-item href="javascript: void(0);">Delete</b-dropdown-item>
            <b-dropdown-item href="javascript: void(0);">Add Members</b-dropdown-item>
            <b-dropdown-item href="javascript: void(0);">Add Due Date</b-dropdown-item>
          </b-dropdown>
          <!-- end dropdown -->
          <!-- Title-->
          <h4 class="mt-0">
            <a href="javascript: void(0);" class="text-dark">{{project.name}}</a>
          </h4>
          <p class="text-muted text-uppercase">
            <i class="mdi mdi-account-circle"></i>
            <small>&nbsp;{{project.company}}</small>
          </p>
          <div
            class="badge bg-soft-success text-success mb-3"
            :class="{ 'bg-soft-dark text-dark': `${project.status}` === 'Ongoing' }"
          >{{project.status}}</div>
          <!-- Desc-->
          <p class="text-muted font-13 mb-3 sp-line-2">
            {{project.text}}
            <a
              href="javascript:void(0);"
              class="font-weight-bold text-muted"
            >view more</a>
          </p>
          <!-- Task info-->
          <p class="mb-1">
            <span class="pr-2 text-nowrap mb-2 d-inline-block">
              <i class="mdi mdi-format-list-bulleted-type text-muted"></i>
              <b>&nbsp;{{project.tasks}}</b> Tasks
            </span>
            <span class="text-nowrap mb-2 d-inline-block">
              <i class="mdi mdi-comment-multiple-outline text-muted"></i>
              <b>&nbsp;{{project.comments}}</b> Comments
            </span>
          </p>
          <!-- Team-->
          <div class="avatar-group mb-3">
            <a href="javascript: void(0);" class="avatar-group-item">
              <img :src="`${project.member[0]}`" class="rounded-circle avatar-sm" alt="friend" />
            </a>

            <a href="javascript: void(0);" class="avatar-group-item">
              <img :src="`${project.member[1]}`" class="rounded-circle avatar-sm" alt="friend" />
            </a>

            <a href="javascript: void(0);" class="avatar-group-item">
              <img :src="`${project.member[2]}`" class="rounded-circle avatar-sm" alt="friend" />
            </a>

            <a v-if="project.member[3]" href="javascript: void(0);" class="avatar-group-item">
              <img :src="`${project.member[3]}`" class="rounded-circle avatar-sm" alt="friend" />
            </a>

            <a v-if="project.member[4]" href="javascript: void(0);" class="avatar-group-item">
              <img :src="`${project.member[4]}`" class="rounded-circle avatar-sm" alt="friend" />
            </a>
          </div>
          <!-- Progress-->
          <p class="mb-2 font-weight-bold">
            Task completed:
            <span class="float-right">{{project.progressValue}}/{{project.tasks}}</span>
          </p>
          <b-progress :value="project.progressValue" height="7px"></b-progress>
        </div>
        <!-- end card box-->
      </div>
      <!-- end col-->
    </div>
  </Layout>
</template>