import Head from 'next/head';
import Link from 'next/link';
import Categories from '../components/categories';
import Container from '../components/container';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


const Index = (props) => {

  const shortVideos = [
    {
      id:1,
      title:"Video title 1",
      short_video:"https://semantic-ui.com/images/wireframe/image.png",
      last_viewed:"Last updated 3 mins ago"
    },
    {
      id:2,
      title:"Video title 2",
      short_video:"https://semantic-ui.com/images/wireframe/image.png",
      last_viewed:"Last updated 3 mins ago"
    },
    {
      id:3,
      title:"Video title 3",
      short_video:"https://semantic-ui.com/images/wireframe/image.png",
      last_viewed:"Last updated 3 mins ago"
    },
    {
      id:4,
      title:"Video title 4",
      short_video:"https://semantic-ui.com/images/wireframe/image.png",
      last_viewed:"Last updated 3 mins ago"
    },
    {
      id:5,
      title:"Video title 5",
      short_video:"https://semantic-ui.com/images/wireframe/image.png",
      last_viewed:"Last updated 3 mins ago"
    },
    {
      id:6,
      title:"Video title 6",
      short_video:"https://semantic-ui.com/images/wireframe/image.png",
      last_viewed:"Last updated 3 mins ago"
    },
    {
      id:7,
      title:"Video title 7",
      short_video:"https://semantic-ui.com/images/wireframe/image.png",
      last_viewed:"Last updated 3 mins ago"
    },
    {
      id:8,
      title:"Video title 8",
      short_video:"https://semantic-ui.com/images/wireframe/image.png",
      last_viewed:"Last updated 3 mins ago"
    }

  ];

  return (    
    <div>      
      <Container>
        <hr/>
        <Categories/>
        <hr/>
        <div className="row justify-content-center">
          {
            shortVideos.map(el => (
            <div className="card col-2 border-light" key={el.id}>
                <Link href="/detail">
                  <a>
                    <img className="card-img-top" src={el.short_video} alt="Card image cap" />
                  </a>
                </Link>
                <div className="card-body">
                  <h5 className="card-title">{el.title}</h5>              
                  <p className="card-text">
                    <small className="text-muted">{el.last_viewed}</small>
                  </p>
                </div>
            </div>
            ))
          }
        </div>
      </Container>
    </div>
  );
}

export default Index