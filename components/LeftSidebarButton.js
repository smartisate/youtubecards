import Link from 'next/link';
const LeftSidebarButton = ({title}) => {
  return (
    <button className='leftSidebarButton'>
      {title}
    </button>
  );
}

export default LeftSidebarButton;
