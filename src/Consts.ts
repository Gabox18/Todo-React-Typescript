export const TODOS_FILTERS = {
  ALL: 'all',
  ACTIVE: 'active',
  COMPLETED: 'completed'
} as const // ----> este const es de typeScript y hace que la propiedades sean solo de lectura
// no permite que sean sobre-escritas

export const FILTERS_BUTTONS = {
  [TODOS_FILTERS.ALL]: {
    literal: 'Todos',
    href: `?filter${TODOS_FILTERS.ALL}`
  },
  [TODOS_FILTERS.ACTIVE]: {
    literal: 'Activos',
    href: `?filter${TODOS_FILTERS.ACTIVE}`
  },
  [TODOS_FILTERS.COMPLETED]: {
    literal: 'Completados',
    href: `?filter${TODOS_FILTERS.COMPLETED}`
  }
} as const
