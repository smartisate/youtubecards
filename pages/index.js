import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Categories from "../components/Categories";

import Layout from "../components/Layout";

import { useRouter } from "next/router";
import AppContext from "../components/AppContext"

const Index = ({ shortVideos }) => {  

  const context = useContext(AppContext);
  const router = useRouter();

  useEffect( () => {

    const resizeHandler768 = e => {
      console.log("target event (max-width: 768px) = "+e.target.matches);
      context.setModalSidebarEnable( e.target.matches );
      context.setDisplaySidebarCompressed( true );
    };
    window.matchMedia("(max-width: 768px)").addEventListener('change', resizeHandler768);

    const resizeHandler1200 = e => {
      console.log("target event (min-width: 1201px) = "+e.target.matches);
      context.setDisplaySidebarCompressed( false );
      context.setModalSidebarEnable( ! e.target.matches );
    };
    window.matchMedia("(min-width:1201px)").addEventListener('change', resizeHandler1200);

    return () => {
      console.log("UNMOUNT COMPONENT");
      window.removeEventListener("change", resizeHandler768);
      window.removeEventListener("change", resizeHandler1200);
    };
  },[]);

  return (
    <>
      
        <Layout>
          <div id="categoriesContainer">
            <Categories />
          </div>
          <div id="mainContainer">
            <div id="mainContainerVideos">
              {shortVideos.map((el) => (
                <section className="ycCard" key={el.id}>
                  
                    <a onClick={() => {
                          context.setDisplaySidebarCompressed(false);
                          router.push('/detail')
                      }}>
                      <div className="ycCardVideoContent">
                        <img
                          className="img-responsive ycCardVideo"
                          src={el.short_video}
                        />
                      </div>
                    </a>
                  
                  <div className="card-body ycCardBody">
                    <div className="card-title ycCardTitle">{el.title}</div>
                    <div className="ycVideoAuthor">{el.author}</div>
                    <span className="ycCardVideoMetadataInline">
                      <small className="text-muted">{el.metadata_views}</small>
                    </span>
                    <span className="ycCardVideoMetadataInline ycCardVideoMetadataPubAgo">
                      <small className="text-muted">
                        {el.metadata_pub_ago}
                      </small>
                    </span>
                  </div>
                </section>
              ))}
            </div>
          </div>
        </Layout>      
    </>
  );
};

Index.defaultProps = {
  shortVideos: [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      short_video: "https://semantic-ui.com/images/wireframe/image.png",
      author: "BRAINY DOSE",
      metadata_views: "3K",
      metadata_pub_ago: "1 year ago",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet",
      short_video: "https://semantic-ui.com/images/wireframe/image.png",
      author: "David Bombai",
      metadata_views: "761K",
      metadata_pub_ago: "1 day ago",
    },
    {
      id: 3,
      title: "consectetur adipiscing elit",
      short_video: "https://semantic-ui.com/images/wireframe/image.png",
      author: "Wendover Productions",
      metadata_views: "261K",
      metadata_pub_ago: "1 year ago",
    },
    {
      id: 4,
      title: "sed do eiusmod tempor incididunt",
      short_video: "https://semantic-ui.com/images/wireframe/image.png",
      author: "David Bombai",
      metadata_views: "1K",
      metadata_pub_ago: "1 month ago",
    },
    {
      id: 5,
      title: "ut labore et dolore magna aliqua",
      short_video: "https://semantic-ui.com/images/wireframe/image.png",
      author: "BRAINY DOSE",
      metadata_views: "261K",
      metadata_pub_ago: "1 year ago",
    },
    {
      id: 6,
      title: "Lobortis feugiat vivamus at augue eget arcu",
      short_video: "https://semantic-ui.com/images/wireframe/image.png",
      metadata_views: "3M",
      metadata_pub_ago: "1 year ago",
    },
    {
      id: 7,
      title:
        "Nullam eget felis eget nunc lobortis mattis aliquam faucibus purus. Senectus et netus et malesuada fames ac",
      short_video: "https://semantic-ui.com/images/wireframe/image.png",
      author: "Think School",
      metadata_views: "4K",
      metadata_pub_ago: "1 year ago",
    },
    {
      id: 8,
      title: "Et ultrices neque ornare aenean euismod",
      short_video: "https://semantic-ui.com/images/wireframe/image.png",
      author: "BRAINY DOSE",
      metadata_views: "356",
      metadata_pub_ago: "1 year ago",
    },
  ],
};

export default Index;
