import React, {useState} from "react";

// inputs
function AddTodo({todo, setTodo}) {
    const [form, setForm] = useState("");
  
    const onChangeInput = (e) => {
      setForm(e.target.value);
    };
  
//  event - add inputs to array 
    const onSubmit = (e) => {
      e.preventDefault();
      if (form === "") {
        return false;
      }
      setTodo([
        ...todo,
        { id: Math.random(), form: form, isEditable: false, isCompleted: false },
      ]);
      setForm("");
    };
    
    // form sets
    return <div>
            <form onSubmit={onSubmit}>
            <input
                name='form'
                value={form}
                className='new-todo'
                placeholder='What needs to be done?'
                onChange={onChangeInput}
            />
            </form>
        </div>;
}


// // some listing dersten
// {toDos.map((toDos, i) => (
//      <div key={i}>{toDos}</div>
// ))};


export default AddTodo; 