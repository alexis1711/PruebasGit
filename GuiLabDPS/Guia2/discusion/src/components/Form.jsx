import React,{useState} from "react"
import Todo from "./Todo"

const Form = () => {
    const[todo, setTodo] = useState({
        inp1:'',
        inp2:'' 
    })
    const[todos, setTodos] = useState([
        
    ])
    
    const handleChange = e => {
        console.log(e.target.value)
        setTodo({...todo,[e.target.name]: e.target.value})
    }
    //const handleChange1 = e => setTodo1({[e.target.name]: e.target.value})
    const handleClick = e => {
        if(Object.keys(todo.inp1).length === 0 || todo.inp1.trim() === '' || Object.keys(todo.inp2).length === 0 || todo.inp2.trim() === ''){
            alert('el campo no puede estar vacio')
            return
        }
        /*if(Object.keys(todo1).length === 0 || todo1.todo1.trim() === ''){
            alert('el campo no puede estar vacio')
            return
        }*/
        setTodos([...todos, todo]);
    }

    const deleteTodo = indice => {
        const newTodos = [...todos]
        newTodos.splice(indice,1)
        setTodos(newTodos)
    }

    return (
        <>
        <form onSubmit={e => e.preventDefault()}>
            <label>Agregar tarea</label><br />
            <input type="text" name="inp1" value={todo.inp1} onChange={handleChange}/>
            <input type="text" name="inp2" value={todo.inp2} onChange={handleChange}/>
            <button onClick={handleClick}>agregar</button>
        </form>
            {
                /*todos.map((value, index) => (<h3>{value.inp1} - {value.inp2}</h3>))*/


                
                todos.map((value, index) => (
                    <Todo todo={value.inp1} todo1={value.inp2} key={index} index={index} deleteTodo={deleteTodo}/>
                ))
                
            }
        </>
    )
}

export default Form