import "./App.css";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { Breadcrumb } from "./components/Breadcrumb";
import { EmployeeList } from "./components/List/index.jsx";
import { Footer } from "./components/Footer";
import { Card } from "./components/Card";
import { useEffect, useState } from "react";
import Modal from "./components/Modal";
import axios from "axios";
import SpinnerLoading from "./components/List/Spinner_Loading";



function App() {
  const [employees, setEmployee] = useState([]);
  const [modal, activeModal] = useState({ state: 0, values: null });
  const [sidebarClass, setSidebarClass] = useState("sb-nav-fixed");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (modal.values === null) {
      axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response => setEmployee(response.data))
        .catch(err => console.log(err));
      activeModal(e => ({ ...e, values: "" }));
    }
    return () => { };
  }, [modal]);

  function toggleSidebarClass() {
    setSidebarClass(
      sidebarClass.includes("toggled")
        ? "sb-nav-fixed"
        : "sb-nav-fixed sb-sidenav-toggled"
    );
  }

  return (
    <>
      <div className={sidebarClass + " pr ov-y"}>
        <Navbar toggleSidebarClass={toggleSidebarClass} />
        <div id="layoutSidenav">
          <div id="layoutSidenav_nav">
            <Sidebar />
          </div>
          <div id="layoutSidenav_content">
            <main className="h-75">
              <div className="container-fluid px-4">
                <h1 className="mt-4">Tables</h1>
                <Breadcrumb />
                <Card>
                  DataTables is a third party plugin that is used to generate the
                  demo table below. For more information about DataTables, please
                  visit the
                  <a target="_blank" href="https://datatables.net/">
                    official DataTables documentation
                  </a>
                  .
                </Card>
                <Card title="DataTable Example">
                  <EmployeeList activeModal={activeModal} items={employees} />
                </Card>
              </div>
            </main>
            <Footer />
          </div>
        </div>
      </div>
      {
        modal.state === 1
          ? <Modal
            status={modal}
            setEmployee={setEmployee}
            initialVal={employees}
            values={null}
            changeStatus={activeModal}
            loading={setLoading} />
          : modal.state === 2
          && <Modal
            status={modal}
            setEmployee={setEmployee}
            initialVal={employees}
            values={modal.values}
            changeStatus={activeModal}
            loading={setLoading} />
      }{
        loading && <SpinnerLoading />
      }

    </>
  );
}

export default App;
