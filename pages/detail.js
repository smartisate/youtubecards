import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";

import { useContext } from "react";
import AppContext from "../components/AppContext";

const Detail = () => {
  const context = useContext(AppContext);

  return (
    <>
      <Layout>
        <div className="d-flex justify-content-center">
          <div>
            <div>
              <img
                src="https://semantic-ui.com/images/wireframe/image.png"
                className="img-fluid"
              />
            </div>
          </div>
          <div>
            <ul className="list-group">
              <li className="list-group-item">
                {"DISPLAY_SIDEBAR=" + context.displaySidebar}
              </li>
              <li className="list-group-item">Cras justo odio</li>
              <li className="list-group-item">Dapibus ac facilisis in</li>
              <li className="list-group-item">Morbi leo risus</li>
              <li className="list-group-item">Porta ac consectetur ac</li>
              <li className="list-group-item">Vestibulum at eros</li>
            </ul>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Detail;
