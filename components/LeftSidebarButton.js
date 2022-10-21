import Link from 'next/link';

const LeftSidebarButton = ({title, url}) => {
  return (
    <Link className="" href={url}>
      <a className="left-sidebar-button-link">
          {title}
      </a>
    </Link>
  );
}

export default LeftSidebarButton;