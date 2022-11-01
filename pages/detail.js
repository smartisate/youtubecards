import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

const Index = (props) => {
  return (
    <div>
      <Layout>
        <div className='d-flex justify-content-center'>
          <div>
            <div>
              <img src="https://semantic-ui.com/images/wireframe/image.png" className="img-fluid" alt="Responsive image"/>
            </div>
          </div>
          <div>
            <ul className="list-group">
              <li className="list-group-item">Cras justo odio</li>
              <li className="list-group-item">Dapibus ac facilisis in</li>
              <li className="list-group-item">Morbi leo risus</li>
              <li className="list-group-item">Porta ac consectetur ac</li>
              <li className="list-group-item">Vestibulum at eros</li>
            </ul>
          </div>
        </div>
      </Layout>
    </div>
  );
}


export default Index