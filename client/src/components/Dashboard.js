import { faBox, faDollarSign, faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Dashboard() {
    return (
        <section className="main-wrap">
            <div className="content-main" style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                    <h2>Admin Dashboard</h2>
                    <p>Whole data about site here</p>
                </div>
                <div>
                    <input type="Button" className="btn btn-primary" value="Logout" />
                </div>
            </div>
    
            <div className="row justify-content-center">
                <div className="col-lg-3">
                    <div className="card card-body mb-4">
                        <article className="icontext">
                            <span className="icon icon-sm rounded-circle bg-primary-light">
                                <FontAwesomeIcon icon={faDollarSign} />
                            </span>
                            <div className="text">
                                <h6 className="mb-1 card-title">Revenue</h6>
                                <span> 0.00</span>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="card card-body mb-4">
                        <article className="icontext">
                            <span className="icon icon-sm rounded-circle bg-success-light">
                                <FontAwesomeIcon icon={faTruck} />
                            </span>
                            <div className="text">
                                <h6 className="mb-1 card-title">Orders</h6>
                                <span>orderCount</span>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="card card-body mb-4">
                        <article className="icontext">
                            <span className="icon icon-sm rounded-circle bg-warning-light">
                                <FontAwesomeIcon icon={faBox} />
                            </span>
                            <div className="text">
                                <h6 className="mb-1 card-title">Products</h6>{" "}
                                <span>itemCount</span>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
    
            <div className="card mb-4">
                <header className="card-header">
                    <h4>Latest Orders</h4>
                </header>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-hover">
                            <thead>
                            <tr>
                                <th>#ID</th>
                                <th scope="col">Customer ID</th>
                                <th scope="col">Order Date</th>
                                <th scope="col">Total Price</th>
                                <th scope="col">Order Status</th>
                                <th scope="col" className="text-center">
                                Action
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td scope="col"></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td className="text-center" style={{ color: "blue" }}></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    )
}