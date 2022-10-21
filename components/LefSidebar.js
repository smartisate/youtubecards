import Link from 'next/link';
import LeftSidebarButton from './LeftSidebarButton';

const LeftSidebar = () => {
  return (
    <div className='d-flex flex-column'>
      <LeftSidebarButton title="Principal" url="/"/>
      <LeftSidebarButton title="Shorts" url="/"/>
      <LeftSidebarButton title="Suscripciones" url="/"/>
      <LeftSidebarButton title="Biblioteca" url="/"/>
    </div>
  );
}

export default LeftSidebar;