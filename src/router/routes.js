import store from '@state/store'

export default [
  {
    path: '/',
    name: 'home',
    component: () => lazyLoadView(import('@views/home')),
    meta: {
      authRequired: true,
    },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/login',
    name: 'login',
    component: () => lazyLoadView(import('@views/login')),
    meta: {
      beforeResolve(routeTo, routeFrom, next) {
        // If the user is already logged in
        if (store.getters['auth/loggedIn']) {
          // Redirect to the home page instead
          next({ name: 'home' })
        } else {
          // Continue to the login page
          next()
        }
      },
    },
  },
  {
    path: '/register',
    name: 'register',
    component: () => lazyLoadView(import('@views/register')),
    meta: {
      beforeResolve(routeTo, routeFrom, next) {
        // If the user is already logged in
        if (store.getters['auth/loggedIn']) {
          // Redirect to the home page instead
          next({ name: 'home' })
        } else {
          // Continue to the login page
          next()
        }
      },
    },
  },
  {
    path: '/confirm-account',
    name: 'confirm-account',
    component: () => lazyLoadView(import('@views/confirm')),
    meta: {
      beforeResolve(routeTo, routeFrom, next) {
        // If the user is already logged in
        if (store.getters['auth/loggedIn']) {
          // Redirect to the home page instead
          next({ name: 'home' })
        } else {
          // Continue to the login page
          next()
        }
      },
    },
  },
  {
    path: '/forget-password',
    name: 'forget-password',
    component: () => lazyLoadView(import('@views/forgetPassword')),
    meta: {
      beforeResolve(routeTo, routeFrom, next) {
        // If the user is already logged in
        if (store.getters['auth/loggedIn']) {
          // Redirect to the home page instead
          next({ name: 'home' })
        } else {
          // Continue to the login page
          next()
        }
      },
    },
  },
  {
    path: '/logout',
    name: 'logout',
    meta: {
      authRequired: true,
      beforeResolve(routeTo, routeFrom, next) {
        store.dispatch('auth/logOut')
        const authRequiredOnPreviousRoute = routeFrom.matched.some(
          (route) => route.meta.authRequired
        )
        // Navigate back to previous page, or home as a fallback
        next(authRequiredOnPreviousRoute ? { name: 'home' } : { ...routeFrom })
      },
    },
  },
  {
    path: '/404',
    name: '404',
    component: require('@views/_404').default,
    // Allows props to be passed to the 404 page through route
    // params, such as `resource` to define what wasn't found.
    props: true,
  },
  // Redirect any unmatched routes to the 404 page. This may
  // require some server configuration to work in production:
  // https://router.vuejs.org/en/essentials/history-mode.html#example-server-configurations
  {
    path: '*',
    redirect: '404',
  },
  {
    path: '/dashboards/dashboard2',
    name: 'Dashboard-2',
    component: () => lazyLoadView(import('@views/dashboards/dashboard2'))
  },
  {
    path: '/dashboards/dashboard3',
    name: 'Dashboard-3',
    component: () => lazyLoadView(import('@views/dashboards/dashboard3'))
  },
  {
    path: '/dashboards/dashboard4',
    name: 'Dashboard-4',
    component: () => lazyLoadView(import('@views/dashboards/dashboard4'))
  },
  {
    path: '/ui/buttons',
    name: 'Buttons',
    component: () => lazyLoadView(import('@views/ui/buttons'))
  },
  {
    path: '/ui/cards',
    name: 'Cards',
    component: () => lazyLoadView(import('@views/ui/cards'))
  },
  {
    path: '/ui/portlets',
    name: 'Portlets',
    component: () => lazyLoadView(import('@views/ui/portlets'))
  },
  {
    path: '/ui/tabs',
    name: 'Tabs & Accordions',
    component: () => lazyLoadView(import('@views/ui/tabs'))
  },
  {
    path: '/ui/modals',
    name: 'Modals',
    component: () => lazyLoadView(import('@views/ui/modals'))
  },
  {
    path: '/ui/progress',
    name: 'Progress',
    component: () => lazyLoadView(import('@views/ui/progress'))
  },
  {
    path: '/ui/notifications',
    name: 'Notifications',
    component: () => lazyLoadView(import('@views/ui/notifications'))
  },
  {
    path: '/ui/spinners',
    name: 'Spinners',
    component: () => lazyLoadView(import('@views/ui/spinners'))
  },
  {
    path: '/ui/images',
    name: 'Images',
    component: () => lazyLoadView(import('@views/ui/images'))
  },
  {
    path: '/ui/carousel',
    name: 'Carousel',
    component: () => lazyLoadView(import('@views/ui/carousel'))
  },
  {
    path: '/ui/video',
    name: 'Video',
    component: () => lazyLoadView(import('@views/ui/video'))
  },
  {
    path: '/ui/dropdown',
    name: 'Dropdown',
    component: () => lazyLoadView(import('@views/ui/dropdown'))
  },
  {
    path: '/ui/ribbons',
    name: 'Ribbon',
    component: () => lazyLoadView(import('@views/ui/ribbons'))
  },
  {
    path: '/ui/tooltip',
    name: 'Tooltip',
    component: () => lazyLoadView(import('@views/ui/tooltip'))
  },
  {
    path: '/ui/generalui',
    name: 'General Ui',
    component: () => lazyLoadView(import('@views/ui/generalui'))
  },
  {
    path: '/ui/typography',
    name: 'Typography',
    component: () => lazyLoadView(import('@views/ui/typography'))
  },
  {
    path: '/ui/grid',
    name: 'Grid',
    component: () => lazyLoadView(import('@views/ui/grid'))
  },
  {
    path: '/icons/feather',
    name: 'Feather Icon',
    component: () => lazyLoadView(import('@views/icons/feather'))
  },
  {
    path: '/icons/material',
    name: 'Material Design Icon',
    component: () => lazyLoadView(import('@views/icons/material'))
  },
  {
    path: '/icons/dripicons',
    name: 'Dripicons Icon',
    component: () => lazyLoadView(import('@views/icons/dripicons'))
  },
  {
    path: '/icons/fontawesome',
    name: 'Font Awesome Icon',
    component: () => lazyLoadView(import('@views/icons/fontawesome'))
  },
  {
    path: '/icons/themify',
    name: 'Themify Icon',
    component: () => lazyLoadView(import('@views/icons/themify'))
  },
  {
    path: '/icons/simpleline',
    name: 'Simple line Icon',
    component: () => lazyLoadView(import('@views/icons/simpleline'))
  },
  {
    path: '/icons/weather',
    name: 'Weather Icon',
    component: () => lazyLoadView(import('@views/icons/weather'))
  },
  {
    path: '/extras/profile',
    name: 'Profile',
    component: () => lazyLoadView(import('@views/extras/profile'))
  },
  {
    path: '/extras/timeline',
    name: 'Timeline',
    component: () => lazyLoadView(import('@views/extras/timeline'))
  },
  {
    path: '/extras/sitemap',
    name: 'Sitemap',
    component: () => lazyLoadView(import('@views/extras/sitemap'))
  },
  {
    path: '/extras/invoice',
    name: 'Invoice',
    component: () => lazyLoadView(import('@views/extras/invoice'))
  },
  {
    path: '/extras/pricing',
    name: 'Pricing',
    component: () => lazyLoadView(import('@views/extras/pricing'))
  },
  {
    path: '/extras/faqs',
    name: 'FAQs',
    component: () => lazyLoadView(import('@views/extras/faqs'))
  },
  {
    path: '/charts/apex',
    name: 'Apex charts',
    component: () => lazyLoadView(import('@views/charts/apex'))
  },
  {
    path: '/charts/chartjs',
    name: 'Chartjs charts',
    component: () => lazyLoadView(import('@views/charts/chartjs'))
  },
  {
    path: '/charts/chartist',
    name: 'Chartist charts',
    component: () => lazyLoadView(import('@views/charts/chartist'))
  },
  {
    path: '/charts/c3',
    name: 'C3 charts',
    component: () => lazyLoadView(import('@views/charts/c3'))
  },
  {
    path: '/charts/knob',
    name: 'Knob charts',
    component: () => lazyLoadView(import('@views/charts/knob'))
  },
  {
    path: '/crm/crmdashboard',
    name: 'CRM Dashboard',
    component: () => lazyLoadView(import('@views/crm/crmdashboard'))
  },
  {
    path: '/crm/contacts',
    name: 'Contacts',
    component: () => lazyLoadView(import('@views/crm/contacts'))
  },
  {
    path: '/crm/customers',
    name: 'Customers',
    component: () => lazyLoadView(import('@views/crm/customers'))
  },
  {
    path: '/crm/opportunities',
    name: 'Opportunities',
    component: () => lazyLoadView(import('@views/crm/opportunities'))
  },
  {
    path: '/crm/leads',
    name: 'Leads',
    component: () => lazyLoadView(import('@views/crm/leads'))
  },
  {
    path: '/ecommerce/ecommercedashboard',
    name: 'Dashboard',
    component: () => lazyLoadView(import('@views/ecommerce/ecommercedashboard'))
  },
  {
    path: '/ecommerce/products',
    name: 'Products',
    component: () => lazyLoadView(import('@views/ecommerce/products'))
  },
  {
    path: '/ecommerce/productdetail',
    name: 'Product Detail',
    component: () => lazyLoadView(import('@views/ecommerce/productdetail'))
  },
  {
    path: '/ecommerce/productedit',
    name: 'Product Edit',
    component: () => lazyLoadView(import('@views/ecommerce/productedit'))
  },
  {
    path: '/ecommerce/orders',
    name: 'Orders',
    component: () => lazyLoadView(import('@views/ecommerce/orders'))
  },
  {
    path: '/ecommerce/sellers',
    name: 'Sellers',
    component: () => lazyLoadView(import('@views/ecommerce/sellers'))
  },
  {
    path: '/email/inbox',
    name: 'Inbox',
    component: () => lazyLoadView(import('@views/email/inbox'))
  },
  {
    path: '/email/reademail',
    name: 'Read Email',
    component: () => lazyLoadView(import('@views/email/reademail'))
  },
  {
    path: '/email/emailcompose',
    name: 'Compose Email',
    component: () => lazyLoadView(import('@views/email/emailcompose'))
  },
  {
    path: '/errors/error404',
    name: 'Error 404',
    component: () => lazyLoadView(import('@views/errors/error404'))
  },
  {
    path: '/errors/error500',
    name: 'Error 500',
    component: () => lazyLoadView(import('@views/errors/error500'))
  },
  {
    path: '/adminui/widgets',
    name: 'Widgets',
    component: () => lazyLoadView(import('@views/adminui/widgets'))
  },
  {
    path: '/adminui/animations',
    name: 'Animations',
    component: () => lazyLoadView(import('@views/adminui/animations'))
  },
  {
    path: '/adminui/nestable',
    name: 'Nestable List',
    component: () => lazyLoadView(import('@views/adminui/nestable'))
  },
  {
    path: '/adminui/rangeslider',
    name: 'Range Slider',
    component: () => lazyLoadView(import('@views/adminui/rangeslider'))
  },
  {
    path: '/adminui/sweetalert',
    name: 'Sweetalert',
    component: () => lazyLoadView(import('@views/adminui/sweetalert'))
  },
  {
    path: '/adminui/tour',
    name: 'Tour page',
    component: () => lazyLoadView(import('@views/adminui/tour'))
  },
  {
    path: '/forms/advanced',
    name: 'Form Advanced',
    component: () => lazyLoadView(import('@views/forms/advanced'))
  },
  {
    path: '/forms/elements',
    name: 'Basic Elements',
    component: () => lazyLoadView(import('@views/forms/elements'))
  },
  {
    path: '/forms/quilljs',
    name: 'Quilljs Editor',
    component: () => lazyLoadView(import('@views/forms/quilljs'))
  },
  {
    path: '/forms/uploads',
    name: 'File Uploads',
    component: () => lazyLoadView(import('@views/forms/uploads'))
  },
  {
    path: '/forms/validation',
    name: 'Form Validation',
    component: () => lazyLoadView(import('@views/forms/validation'))
  },
  {
    path: '/forms/wizard',
    name: 'Form Wizard',
    component: () => lazyLoadView(import('@views/forms/wizard'))
  },
  {
    path: '/tables/basictable',
    name: 'Basic Tables',
    component: () => lazyLoadView(import('@views/tables/basictable'))
  },
  {
    path: '/tables/advancedtable',
    name: 'Advanced Tables',
    component: () => lazyLoadView(import('@views/tables/advancedtable'))
  },
  {
    path: '/maps/google',
    name: 'Google Maps',
    component: () => lazyLoadView(import('@views/maps/google'))
  },
  {
    path: '/apps/kanbanboard',
    name: 'Kanban Board',
    component: () => lazyLoadView(import('@views/apps/kanbanboard'))
  },
  {
    path: '/apps/calendar',
    name: 'Calendar',
    component: () => lazyLoadView(import('@views/apps/calendar'))
  },
  {
    path: '/apps/appcontacts',
    name: 'Apps Contacts',
    component: () => lazyLoadView(import('@views/apps/appcontacts'))
  },
  {
    path: '/apps/projects',
    name: 'Projects',
    component: () => lazyLoadView(import('@views/apps/projects'))
  },
  {
    path: '/apps/tickets',
    name: 'Tickets',
    component: () => lazyLoadView(import('@views/apps/tickets'))
  },
  {
    path: '/apps/companies',
    name: 'Companies',
    component: () => lazyLoadView(import('@views/apps/companies'))
  },
]

// Lazy-loads view components, but with better UX. A loading view
// will be used if the component takes a while to load, falling
// back to a timeout view in case the page fails to load. You can
// use this component to lazy-load a route with:
//
// component: () => lazyLoadView(import('@views/my-view'))
//
// NOTE: Components loaded with this strategy DO NOT have access
// to in-component guards, such as beforeRouteEnter,
// beforeRouteUpdate, and beforeRouteLeave. You must either use
// route-level guards instead or lazy-load the component directly:
//
// component: () => import('@views/my-view')
//
function lazyLoadView(AsyncView) {
  const AsyncHandler = () => ({
    component: AsyncView,
    // A component to use while the component is loading.
    loading: require('@views/_loading').default,
    // Delay before showing the loading component.
    // Default: 200 (milliseconds).
    delay: 200,
    // A fallback component in case the timeout is exceeded
    // when loading the component.
    error: require('@views/_timeout').default,
    // Time before giving up trying to load the component.
    // Default: Infinity (milliseconds).
    timeout: 10000,
  })

  return Promise.resolve({
    functional: true,
    render(h, { data, children }) {
      // Transparently pass any props or children
      // to the view component.
      return h(AsyncHandler, data, children)
    },
  })
}
