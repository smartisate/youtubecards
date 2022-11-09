import Link from 'next/link';
const LeftSidebarButton = ({title, expanded}) => {
  return (
    <button className='leftSidebarButton'>
      <a href=''><div className={`bi bi-house-door-fill  ${ expanded? 'ycSidebarBtnIcon ycSidebarBtnIconExpanded' : 'ycSidebarIcon' } `}></div></a>
      <div className={`  ${ expanded? 'ycSidebarBtnText ycSidebarBtnTextExpanded' : 'ycSidebarBtnText' }`}>{title}</div>
    </button>
  );
}

export default LeftSidebarButton;
