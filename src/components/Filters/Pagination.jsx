import React from 'react'
import { withAuth } from '../../hoc/WithAuth.jsx'

class Pagination extends React.Component {
  render() {
    const { onChangePage, page, total_pages } = this.props
    return (
      <div className="pagination form-group row col-12">
        <button
          type="button"
          className="btn btn-light col-4"
          onClick={() => onChangePage(page - 1)}
          disabled={page === 1}
        >
          Назад
        </button>
        <div className="col-4 total-pages">{`${page} из ${total_pages}`}</div>
        <button
          type="button"
          className="btn btn-light col-4"
          onClick={() => onChangePage(page + 1)}
          disabled={page === Number(total_pages)}
        >
          Вперед
        </button>
      </div>
    )
  }
}

export default withAuth(Pagination)
