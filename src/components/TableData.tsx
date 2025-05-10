import { useTranslation } from "react-i18next"
import { useDataContext } from "../hooks/useData"
import table from '../styles/table.module.css'


export const TableData = () => {
  const { t } = useTranslation('', { keyPrefix: 'register.table' })

  const {data} = useDataContext()
  const { players } = data
  return (
    <table className={table.table} >
      <thead>
        <tr>
          <th>
            {t('numberPlayer')}

          </th>
          <th>{t('player')}</th>
          <th>
            {t('position')}
          </th>
          
        </tr>
      </thead>
      <tbody>
        {players.map((player) => (
          <tr key={player.id}>
            <td>{player.number}</td>
            <td>{player.name}</td>
            <td>{player.position}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
