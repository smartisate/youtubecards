import Link from 'next/link';

const Categories = ({categories}) => {
  
  return (
    <div className="d-flex justify-content-center">
      {
        categories.map(el => (
          <div className="p-1" key={el.id}>
            <button type="button" className={`btn btn-light`}>{el.title}</button>
          </div>

        ))
      }
    </div>
  );
}

Categories.defaultProps = {
  categories: [
    {
      id:1,
      title:"Todos",
    },
    {
      id:2,
      title:"En tiempo real",
    },
    {
      id:3,
      title:"Programación",
    },    
    {
      id:4,
      title:"Vehiculos",
    },
    {
      id:5,
      title:"Música",
    },    
  ]
};

export default Categories;