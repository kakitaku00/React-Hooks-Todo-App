import React,{useState} from 'react'
import { useHistory} from 'react-router-dom';

function Form({addTodo}) {

  const [myText , changeMyText] = useState('')
  const history = useHistory()

  const handleSave = () =>{
    if(!myText)return
    addTodo(myText)
    history.push('/')
  }

  return (
    <div className="form">
      <label htmlFor="text">追加:</label>
      <input
        type="text"
        id="text"
        value={myText}
        onChange={e=>changeMyText(e.currentTarget.value)}
      />
      <input type="button" value="追加" onClick={handleSave}/>
    </div>
  );
}
export default Form