import './CSS/TodoItems.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faCheckCircle, faCircle, faTimes} from '@fortawesome/free-solid-svg-icons'
import {FaCheckCircle, FaCircle, FaTimes} from 'react-icons/fa';

export default function TodoItems({id,display,text, todos, setTodos}) {

  const Delete = (id) => {
    let data = JSON.parse(localStorage.getItem('todos'));
    data = data.filter((todo)=>todo.id !==id);
    setTodos(data);
    
  }

    const toggle = (id) =>{
      let data = JSON.parse(localStorage.getItem('todos'));
      for(let i = 0;i<data.length;i++)
       {
        if(data[i].id===id) {
          if(data[i].display===""){
            data[i].display = "lineThrough";
          }
          else {
            data[i].display = "";
          }
          break;
        }
      }
      setTodos(data); 
    }



  return (
    <div className="todoitems">
      <div className='todoitemsContainer ' onClick={()=>{toggle(id)}}>
      {/* <FontAwesomeIcon icon="check-square" />  */}
{/*       {display===""?<FontAwesomeIcon icon={FaCircle} className="untick" />:<FontAwesomeIcon icon={FaCheckCircle} className="tick" />}
      </div> */}
      {display===""?<FaCircle className="untick" />:<FaCheckCircle className="tick" />}
      </div>

      <input 
      id="todoItemsText"
      className={`${display}`} value={text} readOnly={true}  />
          
        <div className="crossHelp" onClick={()=>{Delete(id)}}>
{/*           <FontAwesomeIcon icon={FaTimes} className="cross" />     */}
          <FaTimes className="cross" />    
      </div>
    </div>
  )
}
