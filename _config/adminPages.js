export default {
  aircraftType: {
    permission: 'iflight.aircraftType.manage',
    activated: true,
    authenticated: true,
    path: '/fly/aircraftType/index',
    name: 'qfly.admin.aircraftType',
    crud: import('@imagina/qfly/_crud/aircraftType'),
    page: () => import('@imagina/qcrud/_pages/admin/crudPage'),
    layout: () => import('@imagina/qsite/_layouts/master.vue'),
    title: 'ifly.cms.sidebar.aircraftType',
    icon: 'fab fa-avianex',
    subHeader: {
      refresh: true,
    }
  },
  airline: {
    permission: 'iflight.airline.manage',
    activated: true,
    authenticated: true,
    path: '/fly/airline/index',
    name: 'qfly.admin.airline',
    crud: import('@imagina/qfly/_crud/airline'),
    page: () => import('@imagina/qcrud/_pages/admin/crudPage'),
    layout: () => import('@imagina/qsite/_layouts/master.vue'),
    title: 'ifly.cms.sidebar.airline',
    icon: 'fas fa-luggage-cart',
    subHeader: {
      refresh: true,
    }
  },
  airport: {
    permission: 'iflight.airport.manage',
    activated: true,
    authenticated: true,
    path: '/fly/airport/index',
    name: 'qfly.admin.airport',
    crud: import('@imagina/qfly/_crud/airport'),
    page: () => import('@imagina/qcrud/_pages/admin/crudPage'),
    layout: () => import('@imagina/qsite/_layouts/master.vue'),
    title: 'ifly.cms.sidebar.airport',
    icon: 'fas fa-city',
    subHeader: {
      refresh: true,
    }
  },
  flight: {
    permission: 'iflight.flight.manage',
    activated: true,
    authenticated: true,
    path: '/fly/flight/index',
    name: 'qfly.admin.flight',
    crud: import('@imagina/qfly/_crud/flight'),
    page: () => import('@imagina/qcrud/_pages/admin/crudPage'),
    layout: () => import('@imagina/qsite/_layouts/master.vue'),
    title: 'ifly.cms.sidebar.flight',
    icon: 'fas fa-plane-departure',
    subHeader: {
      refresh: true,
    }
  },
  flightSchedule: {
    permission: 'iflight.flightSchedule.manage',
    activated: true,
    authenticated: true,
    path: '/fly/flightSchedule/index',
    name: 'qfly.admin.flightSchedule',
    crud: import('@imagina/qfly/_crud/flightSchedule'),
    page: () => import('@imagina/qcrud/_pages/admin/crudPage'),
    layout: () => import('@imagina/qsite/_layouts/master.vue'),
    title: 'ifly.cms.sidebar.flightSchedule',
    icon: 'fas fa-clock',
    subHeader: {
      refresh: true,
    }
  },
  flightScheduleLeg: {
    permission: 'iflight.flightScheduleLeg.manage',
    activated: true,
    authenticated: true,
    path: '/fly/flightScheduleLeg/index',
    name: 'qfly.admin.flightScheduleLeg',
    crud: import('@imagina/qfly/_crud/flightScheduleLeg'),
    page: () => import('@imagina/qcrud/_pages/admin/crudPage'),
    layout: () => import('@imagina/qsite/_layouts/master.vue'),
    title: 'ifly.cms.sidebar.flightScheduleLeg',
    icon: 'fas fa-braille',
    subHeader: {
      refresh: true,
    }
  }
}

