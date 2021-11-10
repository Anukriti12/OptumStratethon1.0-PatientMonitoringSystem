<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'

/**
 * Images component
 */
export default {
  page: {
    title: 'Images',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout, PageHeader },
  data() {
    return {
      title: 'Images',
      items: [
        {
          text: 'UBold',
          href: '/',
        },
        {
          text: 'UI',
          href: '/',
        },
        {
          text: 'Images',
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
    <div class="row">
      <div class="col-sm-12">
        <div class="card-box">
          <div class="row">
            <div class="col-xl-6">
              <h4 class="header-title">Images shapes</h4>
              <p class="sub-header">
                Add classes to an
                <code>&lt;img&gt;</code> element to easily style
                images in any project.
              </p>

              <div class="row">
                <div class="col-sm-4">
                  <b-img
                    :src="require('@assets/images/small/img-1.jpg')"
                    fluid
                    rounded
                    alt="Rounded image"
                    width="200"
                  ></b-img>
                  <p class="mb-0">
                    <code>.rounded</code>
                  </p>
                </div>

                <div class="col-sm-4 text-center">
                  <b-img
                    :src="require('@assets/images/users/user-6.jpg')"
                    rounded="circle"
                    width="120"
                    height="120"
                    alt="Circle image"
                  ></b-img>
                  <p class="mb-0">
                    <code>.rounded-circle</code>
                  </p>
                </div>

                <div class="col-sm-4">
                  <b-img
                    thumbnail
                    fluid
                    :src="require('@assets/images/small/img-3.jpg')"
                    width="200"
                    height="120"
                    alt="Image 1"
                  ></b-img>
                  <p class="mb-0">
                    <code>.img-thumbnail</code>
                  </p>
                </div>
              </div>
            </div>
            <!-- end col-->

            <div class="col-xl-6 mt-3 mt-xl-0">
              <h4 class="header-title">Image sizes</h4>
              <p class="sub-header">
                Add classes to an
                <code>&lt;img&gt;</code> element to easily style
                images in any project.
              </p>

              <div class="row">
                <div class="col-sm-3">
                  <b-img
                    fluid
                    rounded
                    :src="require('@assets/images/users/user-5.jpg')"
                    class="avatar-xs"
                    alt="image"
                  ></b-img>
                  <p class="mb-0">
                    <code>.avatar-xs</code>
                  </p>
                  <b-img
                    fluid
                    rounded
                    :src="require('@assets/images/users/user-5.jpg')"
                    class="avatar-sm mt-2"
                    alt="image"
                  ></b-img>
                  <p class="mb-0">
                    <code>.avatar-sm</code>
                  </p>
                </div>

                <div class="col-sm-3">
                  <b-img
                    fluid
                    rounded
                    :src="require('@assets/images/users/user-5.jpg')"
                    class="avatar-md"
                    alt="image"
                  ></b-img>
                  <p class="mb-0">
                    <code>.avatar-md</code>
                  </p>
                </div>

                <div class="col-sm-3">
                  <b-img
                    fluid
                    rounded
                    :src="require('@assets/images/users/user-5.jpg')"
                    class="avatar-lg"
                    alt="image"
                  ></b-img>
                  <p class="mb-0">
                    <code>.avatar-lg</code>
                  </p>
                </div>

                <div class="col-sm-3">
                  <b-img
                    fluid
                    rounded
                    :src="require('@assets/images/users/user-5.jpg')"
                    class="avatar-xl"
                    alt="image"
                  ></b-img>
                  <p class="mb-0">
                    <code>.avatar-xl</code>
                  </p>
                </div>
              </div>
            </div>
            <!-- end col -->
          </div>
          <!-- end row -->
        </div>
        <!-- end card-box -->
      </div>
      <!-- end col -->
    </div>
    <!-- end row-->
    <div class="row">
      <div class="col-sm-12">
        <div class="card-box">
          <h4 class="header-title">Default Media Object</h4>
          <p class="sub-header">
            Add classes to an
            <code>&lt;img&gt;</code> element to easily style
            images in any project.
          </p>

          <b-media class="mb-3">
            <b-img
              slot="aside"
              rounded="circle"
              :src="require('@assets/images/users/user-10.jpg')"
              width="64"
              alt="placeholder"
            ></b-img>

            <h5 class="mt-0">Nested Media</h5>
            <p
              class="mb-0"
            >Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
          </b-media>
          <b-media class="mb-3">
            <b-img
              slot="aside"
              rounded="circle"
              :src="require('@assets/images/users/user-2.jpg')"
              width="64"
              alt="placeholder"
            ></b-img>
            <h5 class="mt-0">Media heading</h5>
            <p>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
              Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
              ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </p>

            <b-media tag="li">
              <b-img
                slot="aside"
                rounded="circle"
                :src="require('@assets/images/users/user-3.jpg')"
                width="64"
                alt="placeholder"
              ></b-img>

              <h5 class="mt-0">Media heading</h5>
              <p>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
                ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
              </p>
            </b-media>
          </b-media>
          <b-media right-align vertical-align="center">
            <b-img
              slot="aside"
              rounded="circle"
              :src="require('@assets/images/users/user-4.jpg')"
              width="64"
              alt="placeholder"
            ></b-img>

            <h5 class="mt-0 mb-1">Media object</h5>
            <p class="mb-0">
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
              Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
              nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </p>
          </b-media>
        </div>
        <!-- end card-box -->
      </div>
      <!-- end col -->
    </div>
    <!-- end row-->

    <!-- ===== MEDIA ==== -->

    <div class="row">
      <div class="col-12">
        <div class="card-box">
          <h4 class="header-title">Media alignment</h4>
          <p class="text-muted m-b-30 font-13">
            The images or other media can be aligned top,
            middle, or bottom. The default is top aligned.
          </p>
          <ul class="list-unstyled">
            <b-media tag="li" vertical-align="top">
              <b-img
                slot="aside"
                rounded
                :src="require('@assets/images/users/user-5.jpg')"
                width="64"
                alt="placeholder"
              ></b-img>

              <h5 class="mt-0 mb-1">Top-aligned media</h5>
              <p
                class="mb-1"
              >Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
              <p
                class="mb-0"
              >Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
            </b-media>

            <b-media tag="li" class="my-4" vertical-align="center">
              <b-img
                slot="aside"
                rounded
                :src="require('@assets/images/users/user-6.jpg')"
                width="64"
                alt="placeholder"
              ></b-img>

              <h5 class="mt-0 mb-1">Center-aligned media</h5>
              <p
                class="mb-1"
              >Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
              <p
                class="mb-0"
              >Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
            </b-media>
          </ul>
          <b-media>
            <b-media vertical-align="end">
              <b-img
                slot="aside"
                rounded
                :src="require('@assets/images/users/user-7.jpg')"
                width="64"
                alt="placeholder"
              ></b-img>

              <h5 class="mt-0 mb-1">Bottom-aligned media</h5>
              <p
                class="mb-1"
              >Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
              <p
                class="mb-0"
              >Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
            </b-media>
          </b-media>
        </div>
      </div>
    </div>
  </Layout>
</template>