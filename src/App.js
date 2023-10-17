import './App.css';
import Header from "./components/Header";
import React,{useState} from 'react';
import ListItem from './components/ListItem';

export default function App() {
  const [todoName,setTodoName] = useState("");
  const [list,setList] = useState([]);
  const updateTodoName = (e) => {
    setTodoName(e.target.value);
  }
  const addTodo = () => {
    setList([...list,{
      name: todoName,
      completed: false
    }]);
    console.log(todoName);
    setTodoName("");
  }
  const onDone = (item) => {
    let newList = list.map(listItem => {
      if(listItem.name === item.name){
        return {...listItem, completed: !listItem.completed}
      }
      return listItem;
    })
    console.log(item);
    setList(newList);
  }
  const onDelete = (item) => {
    let newList = list.filter(listItem => {
      if(listItem.name === item.name){
        return false
      }
      return true;
    })
    console.log(item);
    setList(newList);
  }
  return (
        <div class="center">
          <Header />
          <div>
            <table class="center">
              <input type="text" placeholder="Enter todo value.." className="text-input"
              value={todoName} required onChange={updateTodoName}/>
              <button className="button-add" type="submit" onClick={addTodo}>Add</button>
              {list.map(item => <ListItem obj={item} onDone={onDone} onDelete={onDelete}/> )}
            </table>
          </div>
        </div>
  )
}
