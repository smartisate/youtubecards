import Link from 'next/link';

const Categories = ({categories}) => {
  
  return (
    <div id="categoriesContainer" className="d-flex justify-content-center">
      {
        categories.map(el => (
          <div key={el.id}>
            <button type="button" className="ycCategory">{el.title}</button>
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