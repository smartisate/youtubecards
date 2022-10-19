import Head from 'next/head';
import Link from 'next/link';
import Categories from '../components/categories';
import Container from '../components/container';

const Index = (props) => {

  const shortVideos = [
    {
      title:"Video title 1",
      short_video:"https://semantic-ui.com/images/wireframe/image.png",
      last_viewed:"Last updated 3 mins ago"
    },
    {
      title:"Video title 2",
      short_video:"https://semantic-ui.com/images/wireframe/image.png",
      last_viewed:"Last updated 3 mins ago"
    },
    {
      title:"Video title 3",
      short_video:"https://semantic-ui.com/images/wireframe/image.png",
      last_viewed:"Last updated 3 mins ago"
    },
    {
      title:"Video title 4",
      short_video:"https://semantic-ui.com/images/wireframe/image.png",
      last_viewed:"Last updated 3 mins ago"
    },
    {
      title:"Video title 5",
      short_video:"https://semantic-ui.com/images/wireframe/image.png",
      last_viewed:"Last updated 3 mins ago"
    },
    {
      title:"Video title 6",
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
        <div className="card-deck">
          {
            shortVideos.map(el => (
            <div className="card">
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