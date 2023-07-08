import { FILTERS_BUTTONS } from '../Consts'
import { type FilterValue } from '../Types'

interface Props {
  onFilterChange: (filter: FilterValue) => void
  filterSelected: FilterValue
}

export const Filters: React.FC<Props> = ({ filterSelected, onFilterChange }) => {
  return (
    <ul className="filters">
      {Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
        const isSeleted = key === filterSelected
        const className = isSeleted ? 'selected' : ''

        return (
          <li key={key}>
            <a
              href={href}
              className={className}
              onClick={(e) => {
                e.preventDefault()
                onFilterChange(key as FilterValue)
              }}>
              {literal}
            </a>
          </li>
        )
      })}
      {/* <li>
        <a
          className={`${filterSelected === 'all' ? 'selected' : ''}`}
          onClick={() => {
            onFilterChange('all')
          }}>
          Todos
        </a>
      </li>

      <li>
        <a
          className={`${filterSelected === 'active' ? 'selected' : ''}`}
          onClick={() => {
            onFilterChange('active')
          }}>
          Activos
        </a>
      </li>

      <li>
        <a
          className={`${filterSelected === 'completed' ? 'selected' : ''}`}
          onClick={() => {
            onFilterChange('completed')
          }}>
          completados
        </a>
      </li> */}
    </ul>
  )
}
