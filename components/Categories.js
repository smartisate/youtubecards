import Link from 'next/link';

const Categories = ({categories}) => {
  
  return (
    <div id="categoriesContent">
      {
        categories.map(el => (
          <div key={el.id} className="ycBtnCategory">{el.title}</div>
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
    {
      id:6,
      title:"Soundtracks",
    },
    {
      id:7,
      title:"Thoughts",
    },
    {
      id:8,
      title:"Vocabulary",
    },    
    {
      id:9,
      title:"Piano",
    },
    {
      id:10,
      title:"Live",
    },
  ]
};

/*
{
  id:6,
  title:"Soundtracks",
},
{
  id:7,
  title:"Thoughts",
},
{
  id:8,
  title:"Vocabulary",
},    
{
  id:9,
  title:"Piano",
},
{
  id:10,
  title:"Live",
}, */

export default Categories;