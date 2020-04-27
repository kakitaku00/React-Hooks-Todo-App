import React from 'react'
import { Link } from 'react-router-dom';

function List({items,toggleTodo}) {
  return (
    <ul className="list">
{items.map((item,i) => (
<li key={item.key}>
<p>{item.title}</p>
<button type="button" onClick={()=>toggleTodo(item.key)} >
{item.checked?"再開":"終了"}
</button>
<Link to={`delete/${item.key}`}>削除</Link>
</li>
))}
    </ul>
  );
}
export default List