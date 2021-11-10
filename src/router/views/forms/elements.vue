<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'

/**
 * Form-element component
 */
export default {
  page: {
    title: 'Basic Elements',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout, PageHeader },
  data() {
    return {
      title: 'Basic Elements',
      items: [
        {
          text: 'UBold',
          href: '/',
        },
        {
          text: 'Forms',
          href: '/',
        },
        {
          text: 'Elements',
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
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Input Types</h4>
            <p class="sub-header">
              Most common form control, text-based input fields. Includes support for all HTML5 types:
              <code>text</code>,
              <code>password</code>,
              <code>datetime</code>,
              <code>datetime-local</code>,
              <code>date</code>,
              <code>month</code>,
              <code>time</code>,
              <code>week</code>,
              <code>number</code>,
              <code>email</code>,
              <code>url</code>,
              <code>search</code>,
              <code>tel</code>, and
              <code>color</code>.
            </p>

            <div class="row">
              <div class="col-lg-6">
                <form>
                  <div class="form-group mb-3">
                    <label for="simpleinput">Text</label>
                    <input id="simpleinput" type="text" class="form-control" />
                  </div>

                  <div class="form-group mb-3">
                    <label for="example-email">Email</label>
                    <input
                      id="example-email"
                      type="email"
                      name="example-email"
                      class="form-control"
                      placeholder="Email"
                    />
                  </div>

                  <div class="form-group mb-3">
                    <label for="example-password">Password</label>
                    <input
                      id="example-password"
                      type="password"
                      class="form-control"
                      value="password"
                    />
                  </div>

                  <div class="form-group mb-3">
                    <label for="example-palaceholder">Placeholder</label>
                    <input
                      id="example-palaceholder"
                      type="text"
                      class="form-control"
                      placeholder="placeholder"
                    />
                  </div>

                  <div class="form-group mb-3">
                    <label for="example-textarea">Text area</label>
                    <textarea id="example-textarea" class="form-control" rows="5"></textarea>
                  </div>

                  <div class="form-group mb-3">
                    <label for="example-readonly">Readonly</label>
                    <input
                      id="example-readonly"
                      type="text"
                      class="form-control"
                      readonly
                      value="Readonly value"
                    />
                  </div>

                  <div class="form-group mb-3">
                    <label for="example-disable">Disabled</label>
                    <input
                      id="example-disable"
                      type="text"
                      class="form-control"
                      disabled
                      value="Disabled value"
                    />
                  </div>

                  <div class="form-group mb-3">
                    <label for="example-static">Static control</label>
                    <input
                      id="example-static"
                      type="text"
                      readonly
                      class="form-control-plaintext"
                      value="email@example.com"
                    />
                  </div>

                  <div class="form-group mb-0">
                    <label for="example-helping">Helping text</label>
                    <input
                      id="example-helping"
                      type="text"
                      class="form-control"
                      placeholder="Helping text"
                    />
                    <span class="help-block">
                      <small>A block of help text that breaks onto a new line and may extend beyond one line.</small>
                    </span>
                  </div>
                </form>
              </div>
              <!-- end col -->

              <div class="col-lg-6">
                <form>
                  <div class="form-group mb-3">
                    <label for="example-select">Input Select</label>
                    <select class="form-control">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>

                  <div class="form-group mb-3">
                    <label for="example-multiselect">Multiple Select</label>
                    <select multiple class="form-control">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>

                  <div class="form-group mb-3">
                    <label for="example-fileinput">Default file input</label>
                    <input type="file" class="form-control-file" />
                  </div>

                  <div class="form-group mb-3">
                    <label for="example-date">Date</label>
                    <input class="form-control" type="date" name="date" />
                  </div>

                  <div class="form-group mb-3">
                    <label for="example-month">Month</label>
                    <input class="form-control" type="month" name="month" />
                  </div>

                  <div class="form-group mb-3">
                    <label for="example-time">Time</label>
                    <input class="form-control" type="time" name="time" />
                  </div>

                  <div class="form-group mb-3">
                    <label for="example-week">Week</label>
                    <input class="form-control" type="week" name="week" />
                  </div>

                  <div class="form-group mb-3">
                    <label for="example-number">Number</label>
                    <input class="form-control" type="number" name="number" />
                  </div>

                  <div class="form-group mb-3">
                    <label for="example-color">Color</label>
                    <input
                      id="example-color"
                      class="form-control"
                      type="color"
                      name="color"
                      value="#727cf5"
                    />
                  </div>

                  <div class="form-group mb-0">
                    <label for="example-range">Range</label>
                    <input
                      id="example-range"
                      class="custom-range"
                      type="range"
                      name="range"
                      min="0"
                      max="100"
                    />
                  </div>
                </form>
              </div>
              <!-- end col -->
            </div>
            <!-- end row-->
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card -->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-md-6">
                <h4 class="header-title">Select menu</h4>
                <p class="sub-header">
                  Custom
                  <code>&lt;select&gt;</code> menus need only a custom class,
                  <code>.custom-select</code> to trigger the custom styles.
                </p>

                <select class="custom-select">
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>

                <h4 class="header-title mt-4">Switches</h4>
                <p class="sub-header">
                  A switch has the markup of a custom checkbox but uses the
                  <code>.custom-switch</code> class to render a toggle switch. Switches also support the
                  <code>disabled</code> attribute.
                </p>

                <div class="custom-control custom-switch">
                  <input id="customSwitch1" type="checkbox" class="custom-control-input" />
                  <label class="custom-control-label" for="customSwitch1">Toggle this switch element</label>
                </div>
                <div class="custom-control custom-switch mt-1">
                  <input id="customSwitch2" type="checkbox" class="custom-control-input" disabled />
                  <label class="custom-control-label" for="customSwitch2">Disabled switch element</label>
                </div>
              </div>
              <!-- end col -->

              <div class="col-md-6">
                <h4 class="header-title mt-5 mt-sm-0">Checkboxes and radios</h4>
                <div class="mt-3">
                  <div class="custom-control custom-checkbox">
                    <input id="customCheck1" type="checkbox" class="custom-control-input" />
                    <label
                      class="custom-control-label"
                      for="customCheck1"
                    >Check this custom checkbox</label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input id="customCheck2" type="checkbox" class="custom-control-input" />
                    <label
                      class="custom-control-label"
                      for="customCheck2"
                    >Check this custom checkbox</label>
                  </div>
                </div>
                <div class="mt-3">
                  <div class="custom-control custom-radio">
                    <input
                      id="customRadio1"
                      type="radio"
                      name="customRadio"
                      class="custom-control-input"
                    />
                    <label class="custom-control-label" for="customRadio1">Toggle this custom radio</label>
                  </div>
                  <div class="custom-control custom-radio">
                    <input
                      id="customRadio2"
                      type="radio"
                      name="customRadio"
                      class="custom-control-input"
                    />
                    <label
                      class="custom-control-label"
                      for="customRadio2"
                    >Or toggle this other custom radio</label>
                  </div>
                </div>
              </div>
              <!-- end col -->
            </div>
            <!-- end row -->
          </div>
          <!-- end card-body-->
        </div>
        <!-- end card -->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Input Sizes</h4>
            <p class="sub-header">
              Set heights using classes like
              <code>.input-lg</code>, and set widths using grid column classes like
              <code>.col-lg-*</code>.
            </p>

            <form>
              <div class="form-group mb-3">
                <label for="example-input-small">Small</label>
                <input
                  id="example-input-small"
                  type="text"
                  name="example-input-small"
                  class="form-control form-control-sm"
                  placeholder=".input-sm"
                />
              </div>

              <div class="form-group mb-3">
                <label for="example-input-normal">Normal</label>
                <input
                  id="example-input-normal"
                  type="text"
                  name="example-input-normal"
                  class="form-control"
                  placeholder="Normal"
                />
              </div>

              <div class="form-group mb-3">
                <label for="example-input-large">Large</label>
                <input
                  id="example-input-large"
                  type="text"
                  name="example-input-large"
                  class="form-control form-control-lg"
                  placeholder=".input-lg"
                />
              </div>

              <div class="form-group mb-2">
                <label for="example-gridsize">Grid Sizes</label>
                <div class="row">
                  <div class="col-sm-4">
                    <input
                      id="example-gridsize"
                      type="text"
                      class="form-control"
                      placeholder=".col-sm-4"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card -->
      </div>
      <!-- end col -->

      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Input Group</h4>
            <p
              class="sub-header"
            >Easily extend form controls by adding text, buttons, or button groups on either side of textual inputs, custom selects, and custom file inputs</p>

            <form>
              <div class="form-group mb-3">
                <label>Static</label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">@</span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>

              <div class="form-group mb-3">
                <label>Dropdowns</label>
                <div class="input-group">
                  <b-dropdown class="input-group-prepend" variant="primary" text="Dropdown">
                    <b-dropdown-item href="#">Action</b-dropdown-item>
                    <b-dropdown-item href="#">Another action</b-dropdown-item>
                    <b-dropdown-item href="#">Something else here</b-dropdown-item>
                  </b-dropdown>
                  <input
                    type="text"
                    class="form-control"
                    placeholder
                    aria-label
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>

              <div class="form-group mb-3">
                <label>Buttons</label>
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                  />
                  <div class="input-group-append">
                    <button class="btn btn-dark" type="button">Button</button>
                  </div>
                </div>
              </div>

              <div class="form-group mb-0">
                <label>Custom file input</label>
                <div class="input-group">
                  <div class="custom-file">
                    <input id="inputGroupFile04" type="file" class="custom-file-input" />
                    <label class="custom-file-label" for="inputGroupFile04">Choose file</label>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card -->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="mb-3 header-title">Basic Example</h4>

            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  id="exampleInputEmail1"
                  type="email"
                  class="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small
                  id="emailHelp"
                  class="form-text text-muted"
                >We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  id="exampleInputPassword1"
                  type="password"
                  class="form-control"
                  placeholder="Password"
                />
              </div>
              <div class="form-group mb-3">
                <div class="custom-control custom-checkbox">
                  <input id="checkmeout0" type="checkbox" class="custom-control-input" />
                  <label class="custom-control-label" for="checkmeout0">Check me out !</label>
                </div>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
          <!-- end card-body-->
        </div>
        <!-- end card-->
      </div>
      <!-- end col -->

      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="mb-3 header-title">Horizontal form</h4>

            <form class="form-horizontal">
              <div class="form-group row mb-3">
                <label for="inputEmail3" class="col-3 col-form-label">Email</label>
                <div class="col-9">
                  <input id="inputEmail3" type="email" class="form-control" placeholder="Email" />
                </div>
              </div>
              <div class="form-group row mb-3">
                <label for="inputPassword3" class="col-3 col-form-label">Password</label>
                <div class="col-9">
                  <input
                    id="inputPassword3"
                    type="password "
                    class="form-control"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div class="form-group row mb-3">
                <label for="inputPassword5" class="col-3 col-form-label">Re Password</label>
                <div class="col-9">
                  <input
                    id="inputPassword5"
                    type="password"
                    class="form-control"
                    placeholder="Retype Password"
                  />
                </div>
              </div>
              <div class="form-group row mb-3 justify-content-end">
                <div class="col-9">
                  <div class="custom-control custom-checkbox">
                    <input id="checkmeout" type="checkbox" class="custom-control-input" />
                    <label class="custom-control-label" for="checkmeout">Check me out !</label>
                  </div>
                </div>
              </div>
              <div class="form-group mb-0 justify-content-end row">
                <div class="col-9">
                  <button type="submit" class="btn btn-info">Sign in</button>
                </div>
              </div>
            </form>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card -->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->

    <!-- Inline Form -->
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Inline Form</h4>

            <p class="sub-header">
              Use the
              <code>.form-inline</code> class to display a series of labels, form controls, and buttons on a single horizontal row. Form controls within inline forms vary slightly from their default states. Controls only appear inline in viewports that are at least 576px wide to account for narrow viewports on mobile devices.
            </p>

            <form class="form-inline">
              <div class="form-group">
                <label for="staticEmail2" class="sr-only">Email</label>
                <input
                  id="staticEmail2"
                  type="text"
                  readonly
                  class="form-control-plaintext"
                  value="email@example.com"
                />
              </div>
              <div class="form-group mx-sm-3">
                <label for="inputPassword2" class="sr-only">Password</label>
                <input
                  id="inputPassword2"
                  type="password"
                  class="form-control"
                  placeholder="Password"
                />
              </div>
              <button type="submit" class="btn btn-primary">Confirm identity</button>
            </form>

            <h6 class="font-13 mt-3">Auto-sizing</h6>

            <form>
              <div class="form-row align-items-center">
                <div class="col-auto">
                  <label class="sr-only" for="inlineFormInput">Name</label>
                  <input
                    id="inlineFormInput"
                    type="text"
                    class="form-control mb-2"
                    placeholder="Jane Doe"
                  />
                </div>
                <div class="col-auto">
                  <label class="sr-only" for="inlineFormInputGroup">Username</label>
                  <div class="input-group mb-2">
                    <div class="input-group-prepend">
                      <div class="input-group-text">@</div>
                    </div>
                    <input
                      id="inlineFormInputGroup"
                      type="text"
                      class="form-control"
                      placeholder="Username"
                    />
                  </div>
                </div>
                <div class="col-auto">
                  <div class="custom-control custom-checkbox mb-2">
                    <input id="autoSizingCheck" type="checkbox" class="custom-control-input" />
                    <label class="custom-control-label" for="autoSizingCheck">Remember me</label>
                  </div>
                </div>
                <div class="col-auto">
                  <button type="submit" class="btn btn-primary mb-2">Submit</button>
                </div>
              </div>
            </form>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card -->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->

    <!-- Form row -->
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Form row</h4>
            <p class="text-muted font-13">
              You may also swap
              <code class="highlighter-rouge">.row</code> for
              <code class="highlighter-rouge">.form-row</code>, a variation of our standard grid row that overrides the default column gutters for tighter and more compact layouts.
            </p>

            <form>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputEmail4" class="col-form-label">Email</label>
                  <input type="email" class="form-control" placeholder="Email" />
                </div>
                <div class="form-group col-md-6">
                  <label for="inputPassword4" class="col-form-label">Password</label>
                  <input
                    id="inputPassword4"
                    type="password"
                    class="form-control"
                    placeholder="Password"
                  />
                </div>
              </div>

              <div class="form-group">
                <label for="inputAddress" class="col-form-label">Address</label>
                <input
                  id="inputAddress"
                  type="text"
                  class="form-control"
                  placeholder="1234 Main St"
                />
              </div>

              <div class="form-group">
                <label for="inputAddress2" class="col-form-label">Address 2</label>
                <input
                  id="inputAddress2"
                  type="text"
                  class="form-control"
                  placeholder="Apartment, studio, or floor"
                />
              </div>

              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputCity" class="col-form-label">City</label>
                  <input id="inputCity" type="text" class="form-control" />
                </div>
                <div class="form-group col-md-4">
                  <label for="inputState" class="col-form-label">State</label>
                  <select id="inputState" class="form-control">
                    <option>Choose</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                </div>
                <div class="form-group col-md-2">
                  <label for="inputZip" class="col-form-label">Zip</label>
                  <input id="inputZip" type="text" class="form-control" />
                </div>
              </div>

              <div class="form-group">
                <div class="custom-control custom-checkbox">
                  <input id="customCheck11" type="checkbox" class="custom-control-input" />
                  <label class="custom-control-label" for="customCheck11">Check this custom checkbox</label>
                </div>
              </div>

              <button type="submit" class="btn btn-primary">Sign in</button>
            </form>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card-->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-12">
        <div class="card-box">
          <div class="row">
            <div class="col-md-4">
              <h4 class="header-title">Custom checkbox - Basic</h4>

              <p class="sub-header">
                Supports bootstrap brand colors:
                <code>.checkbox-primary</code>,
                <code>.checkbox-info</code> etc.
              </p>

              <div class="checkbox mb-2">
                <input id="checkbox0" type="checkbox" />
                <label for="checkbox0">Default</label>
              </div>

              <div class="checkbox checkbox-primary mb-2">
                <input id="checkbox2" type="checkbox" checked />
                <label for="checkbox2">Primary</label>
              </div>
              <div class="checkbox checkbox-success mb-2">
                <input id="checkbox3" type="checkbox" />
                <label for="checkbox3">Success</label>
              </div>
              <div class="checkbox checkbox-info mb-2">
                <input id="checkbox4" type="checkbox" />
                <label for="checkbox4">Info</label>
              </div>
              <div class="checkbox checkbox-warning mb-2">
                <input id="checkbox5" type="checkbox" checked />
                <label for="checkbox5">Warning</label>
              </div>
              <div class="checkbox checkbox-danger mb-2">
                <input id="checkbox6" type="checkbox" checked />
                <label for="checkbox6">Danger</label>
              </div>
              <div class="checkbox checkbox-blue mb-2">
                <input id="checkbox6a" type="checkbox" />
                <label for="checkbox6a">Blue</label>
              </div>

              <div class="checkbox checkbox-pink mb-2">
                <input id="checkbox6b" type="checkbox" checked />
                <label for="checkbox6b">Pink</label>
              </div>

              <div class="checkbox checkbox-dark mb-2">
                <input id="checkbox6c" type="checkbox" />
                <label for="checkbox6c">Dark</label>
              </div>

              <p class="text-muted mt-3 mb-2">
                Checkboxes without label text
                <code>.checkbox-single</code>
              </p>
              <div class="checkbox checkbox-single">
                <input
                  id="singleCheckbox1"
                  type="checkbox"
                  value="option1"
                  aria-label="Single checkbox One"
                />
                <label></label>
              </div>
              <div class="checkbox checkbox-primary checkbox-single">
                <input
                  id="singleCheckbox2"
                  type="checkbox"
                  value="option2"
                  checked
                  aria-label="Single checkbox Two"
                />
                <label></label>
              </div>

              <p class="text-muted font-13 mt-3 mb-2">Inline checkboxes</p>
              <div class="checkbox form-check-inline">
                <input id="inlineCheckbox1" type="checkbox" value="option1" />
                <label for="inlineCheckbox1">Inline One</label>
              </div>
              <div class="checkbox checkbox-success form-check-inline">
                <input id="inlineCheckbox2" type="checkbox" value="option1" checked />
                <label for="inlineCheckbox2">Inline Two</label>
              </div>
              <div class="checkbox checkbox-pink form-check-inline">
                <input id="inlineCheckbox3" type="checkbox" value="option1" />
                <label for="inlineCheckbox3">Inline Three</label>
              </div>
            </div>

            <div class="col-md-4">
              <h4 class="header-title mt-3 mt-md-0">Custom checkbox - Circled</h4>

              <p class="sub-header">
                <code>.checkbox-circle</code> for roundness.
              </p>
              <div class="checkbox checkbox-circle mb-2">
                <input id="checkbox7" type="checkbox" />
                <label for="checkbox7">Simply Rounded</label>
              </div>

              <div class="checkbox checkbox-info checkbox-circle mb-2">
                <input id="checkbox8" type="checkbox" checked />
                <label for="checkbox8">Info</label>
              </div>
              <div class="checkbox checkbox-primary checkbox-circle mb-2">
                <input id="checkbox-9" type="checkbox" />
                <label for="checkbox-9">Primary</label>
              </div>
              <div class="checkbox checkbox-success checkbox-circle mb-2">
                <input id="checkbox-10" type="checkbox" checked />
                <label for="checkbox-10">Success</label>
              </div>
              <div class="checkbox checkbox-warning checkbox-circle mb-2">
                <input id="checkbox-11" type="checkbox" />
                <label for="checkbox-11">Warning</label>
              </div>
              <div class="checkbox checkbox-danger checkbox-circle mb-2">
                <input id="checkbox-12" type="checkbox" checked />
                <label for="checkbox-12">Danger</label>
              </div>

              <div class="checkbox checkbox-blue checkbox-circle mb-2">
                <input id="checkbox-13" type="checkbox" checked />
                <label for="checkbox-13">Blue</label>
              </div>

              <div class="checkbox checkbox-pink checkbox-circle mb-2">
                <input id="checkbox-14" type="checkbox" />
                <label for="checkbox-14">Pink</label>
              </div>

              <div class="checkbox checkbox-dark checkbox-circle mb-2">
                <input id="checkbox-15" type="checkbox" checked />
                <label for="checkbox-15">Dark</label>
              </div>
            </div>

            <div class="col-md-4">
              <h4 class="header-title mt-3 mt-md-0">Custom checkbox - Disabled</h4>

              <p class="sub-header">Disabled state also supported.</p>

              <div class="checkbox mb-2">
                <input id="checkbox9" type="checkbox" disabled />
                <label for="checkbox9">Can't check this</label>
              </div>
              <div class="checkbox checkbox-primary mb-2">
                <input id="checkbox10" type="checkbox" disabled checked />
                <label for="checkbox10">This too</label>
              </div>
              <div class="checkbox checkbox-warning checkbox-circle mb-2">
                <input id="checkbox110" type="checkbox" disabled checked />
                <label for="checkbox110">And this</label>
              </div>
              <div class="checkbox checkbox-info mb-2">
                <input id="checkbox12" type="checkbox" disabled checked />
                <label for="checkbox12">Can't check this</label>
              </div>
              <div class="checkbox checkbox-pink mb-2">
                <input id="checkbox13" type="checkbox" disabled checked />
                <label for="checkbox13">This too</label>
              </div>
              <div class="checkbox checkbox-blue checkbox-circle mb-2">
                <input id="checkbox14" type="checkbox" disabled checked />
                <label for="checkbox14">And this</label>
              </div>
            </div>
          </div>
          <!-- end row-->
        </div>
        <!-- end card-box-->
      </div>
      <!-- end col-->
    </div>
    <!-- end row -->

    <!-- RADIOS -->

    <div class="row">
      <div class="col-12">
        <div class="card-box">
          <div class="row">
            <div class="col-md-4">
              <h4 class="header-title">Custom radio - Basic</h4>

              <p class="sub-header">
                Supports bootstrap brand colors:
                <code>.radio-primary</code>,
                <code>.radio-danger</code> etc.
              </p>

              <div class="row">
                <div class="col-sm-6">
                  <div class="radio mb-2">
                    <input id="radio1" type="radio" name="radio" value="option1" checked />
                    <label for="radio1">Default</label>
                  </div>

                  <div class="radio radio-primary mb-2">
                    <input id="radio3" type="radio" name="radio" value="option3" />
                    <label for="radio3">Primary</label>
                  </div>
                  <div class="radio radio-success mb-2">
                    <input id="radio4" type="radio" name="radio" value="option4" />
                    <label for="radio4">Success</label>
                  </div>
                  <div class="radio radio-info mb-2">
                    <input id="radio5" type="radio" name="radio" value="option5" />
                    <label for="radio5">Info</label>
                  </div>
                  <div class="radio radio-danger mb-2">
                    <input id="radio6" type="radio" name="radio" value="option6" />
                    <label for="radio6">Danger</label>
                  </div>
                  <div class="radio radio-warning mb-2">
                    <input id="radio7" type="radio" name="radio" value="option7" />
                    <label for="radio7">Warning</label>
                  </div>
                  <div class="radio radio-blue mb-2">
                    <input id="radio8" type="radio" name="radio" value="option8" />
                    <label for="radio8">Blue</label>
                  </div>
                  <div class="radio radio-pink mb-2">
                    <input id="radio9" type="radio" name="radio" value="option9" />
                    <label for="radio9">Pink</label>
                  </div>
                  <div class="radio radio-dark mb-2">
                    <input id="radio2" type="radio" name="radio" value="option2" />
                    <label for="radio2">Dark</label>
                  </div>
                </div>
                <!-- end col -->

                <div class="col-sm-6">
                  <div class="radio mb-2">
                    <input id="radio11" type="radio" name="radio1" value="option1" checked />
                    <label for="radio11">Default</label>
                  </div>

                  <div class="radio radio-primary mb-2">
                    <input id="radio13" type="radio" name="radio3" value="option3" />
                    <label for="radio13">Primary</label>
                  </div>
                  <div class="radio radio-success mb-2">
                    <input id="radio14" type="radio" name="radio4" value="option4" checked />
                    <label for="radio14">Success</label>
                  </div>
                  <div class="radio radio-info mb-2">
                    <input id="radio15" type="radio" name="radio5" value="option5" checked />
                    <label for="radio15">Info</label>
                  </div>
                  <div class="radio radio-danger mb-2">
                    <input id="radio16" type="radio" name="radio6" value="option6" />
                    <label for="radio16">Danger</label>
                  </div>
                  <div class="radio radio-warning mb-2">
                    <input id="radio17" type="radio" name="radio7" value="option7" checked />
                    <label for="radio17">Warning</label>
                  </div>
                  <div class="radio radio-blue mb-2">
                    <input id="radio18" type="radio" name="radio8" value="option8" />
                    <label for="radio18">Blue</label>
                  </div>
                  <div class="radio radio-pink mb-2">
                    <input id="radio19" type="radio" name="radio9" value="option9" checked />
                    <label for="radio19">Pink</label>
                  </div>
                  <div class="radio radio-dark mb-2">
                    <input id="radio12" type="radio" name="radio2" value="option2" />
                    <label for="radio12">Dark</label>
                  </div>
                </div>
                <!-- end col -->
              </div>
              <!-- end row-->

              <p class="text-muted mt-3 mb-2">
                Radios without label text
                <code>.radio-single</code>
              </p>
              <div class="radio radio-single">
                <input
                  id="singleRadio1"
                  type="radio"
                  value="option1.1"
                  name="radioSingle1"
                  aria-label="Single radio One"
                />
                <label></label>
              </div>
              <div class="radio radio-success radio-single">
                <input
                  id="singleRadio2"
                  type="radio"
                  value="option2.1"
                  name="radioSingle1"
                  checked
                  aria-label="Single radio Two"
                />
                <label></label>
              </div>

              <p class="text-muted mt-3 mb-2">Inline radios</p>
              <div class="radio radio-info form-check-inline">
                <input id="inlineRadio1" type="radio" value="option1" name="radioInline" checked />
                <label for="inlineRadio1">Inline One</label>
              </div>
              <div class="radio form-check-inline">
                <input id="inlineRadio2" type="radio" value="option2" name="radioInline" />
                <label for="inlineRadio2">Inline Two</label>
              </div>
            </div>
            <!-- end col -->

            <div class="col-md-4">
              <h4 class="header-title mt-3 mt-md-0">Custom radio - Disabled</h4>
              <p class="sub-header">Disabled state also supported.</p>

              <div class="radio radio-danger mb-2">
                <input id="radio51" type="radio" name="radio31" value="option1" checked disabled />
                <label for="radio51">Zero</label>
              </div>
              <div class="radio mb-2">
                <input id="radio61" type="radio" name="radio41" value="option2" checked disabled />
                <label for="radio61">One</label>
              </div>
              <div class="radio radio-blue mb-2">
                <input id="radio71" type="radio" name="radio51" value="option3" checked disabled />
                <label for="radio71">Two</label>
              </div>
              <div class="radio radio-pink mb-2">
                <input id="radio81" type="radio" name="radio61" value="option4" checked disabled />
                <label for="radio81">Three</label>
              </div>
            </div>
            <!-- end col -->
          </div>
          <!-- end row-->
        </div>
        <!-- end card-box-->
      </div>
      <!-- end col-->
    </div>
    <!-- end row -->
  </Layout>
</template>