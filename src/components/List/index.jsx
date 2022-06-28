import "./style.css";
const itemsName = ["Id", "Name", "Username", "Email", "Address", "Phone", "Website", "Company"]
export function EmployeeList(props) {
  const { items, activeModal } = props;
  return (
    <>
      <div className="dataTable-wrapper dataTable-loading no-footer sortable searchable fixed-columns">
        <div className="dataTable-top">
          <div className="dataTable-dropdown">
            <label>
              <select className="dataTable-selector">
                <option value="5">5</option>
                <option value="10" defaultValue="">
                  10
                </option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="25">25</option>
              </select>{" "}
              entries per page
            </label>
          </div>
          <div className="dataTable-search">
            <button className="btn btn-primary" onClick={() => activeModal(e => ({ ...e, state: 1 }))}>Add</button>
          </div>
        </div>
        <div className="dataTable-container">
          <table className="table-bordered">
            <thead>
              <tr>
                {
                  itemsName.map(e => <th key={e + "_thead"}>{e}</th>)
                }
              </tr>
            </thead>
            <tfoot>
              <tr>
                {
                  itemsName.map(e => <th key={e + "_tfoot"}>{e}</th>)
                }
              </tr>
            </tfoot>
            <tbody>

              {(items || []).map((item) => (
                <tr key={item.name} onClick={() => activeModal(e => ({ values: item, state: 2 }))} className="pointer-cursor">
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.address.street}</td>
                  <td>{item.phone}</td>
                  <td>{item.website}</td>
                  <td>{item.company.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="dataTable-bottom">
          <div className="dataTable-info">Showing 1 to 10 of 57 entries</div>
          <nav className="dataTable-pagination">
            <ul className="dataTable-pagination-list">
              <li className="active">
                <a href="#" data-page="1">
                  1
                </a>
              </li>
              <li className="">
                <a href="#" data-page="2">
                  2
                </a>
              </li>
              <li className="">
                <a href="#" data-page="3">
                  3
                </a>
              </li>
              <li className="">
                <a href="#" data-page="4">
                  4
                </a>
              </li>
              <li className="">
                <a href="#" data-page="5">
                  5
                </a>
              </li>
              <li className="">
                <a href="#" data-page="6">
                  6
                </a>
              </li>
              <li className="pager">
                <a href="#" data-page="2">
                  ›
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
