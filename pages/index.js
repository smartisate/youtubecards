import Head from 'next/head';

const Index = (props) => {
  return (    
    <div>
      <Head>
        <title>Next.js Project</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/flatly/bootstrap.min.css"/>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"/>
      </Head>
    
      <div className="container-fluid">

        <div>
          <i className="bi-youtube" style={{ fontSize: 30 }} />          
          youtube
        </div>

        <div className="card-deck">


          <div className="card">
            <img className="card-img-top" src="https://semantic-ui.com/images/wireframe/image.png" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>              
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>


          <div className="card">
            <img className="card-img-top" src="https://semantic-ui.com/images/wireframe/image.png" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>              
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>


          <div className="card">
            <img className="card-img-top" src="https://semantic-ui.com/images/wireframe/image.png" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>              
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>


          <div className="card">
            <img className="card-img-top" src="https://semantic-ui.com/images/wireframe/image.png" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>              
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>

          <div className="card">
            <img className="card-img-top" src="https://semantic-ui.com/images/wireframe/image.png" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>              
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>

          <div className="card">
            <img className="card-img-top" src="https://semantic-ui.com/images/wireframe/image.png" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>              
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>


        </div>


      </div>      
    </div>
  );
}


export default Index