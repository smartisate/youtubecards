import { useContext } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Categories from "../components/Categories";
import {
  SidebarToggleContext,
  SidebarToggleProvider,
} from "../components/context/SidebarToggleContext";

import Layout from "../components/Layout";
import MyLink from "../components/MyLink";

const Index = ({ shortVideos }) => {  
  return (
    <>
      <SidebarToggleProvider>
        <Layout>
          <div id="categoriesContainer">
            <Categories />
          </div>
          <div id="mainContainer">
            <div id="mainContainerVideos">
              {shortVideos.map((el) => (
                <section className="ycCard" key={el.id}>
                  <MyLink href="/detail">                    
                      <div className="ycCardVideoContent">
                        <img
                          className="img-responsive ycCardVideo"
                          src={el.short_video}
                        />
                      </div>
                  </MyLink>
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
      </SidebarToggleProvider>
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
