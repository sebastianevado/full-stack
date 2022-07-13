import React, { useReducer, useState } from 'react';
import { Sub } from '../types';
import useNewSubForm  from '../hooks/useNewSubForm';

interface FormProps {
  onNewSub: (newSub: Sub) => void
}

const Form = ({ onNewSub }: FormProps) => {
  // const [inputValues, setInputValues] = useState<FormState["inputValues"]>(initialState);
  const [inputValues, dispatch] = useNewSubForm();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onNewSub(inputValues)
    dispatch({ type: "clear" })
    // handleClear()
  }
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = event.target;
    dispatch({
      type: "change_value",
      payload: {
        inputName: name,
        inputValue: value
      }
    })
    // setInputValues({
    //   ...inputValues,
    //   [event.target.name]: event.target.value
    // })
  }
  const handleClear = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch({ type: "clear" })
    // setInputValues(initialState)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={inputValues.nick} type="text" name='nick' placeholder='nickname' />
        <input onChange={handleChange} value={inputValues.subMonths} type="number" name='subMonths' placeholder='subMonths' />
        <input onChange={handleChange} value={inputValues.avatar} type="url"
          name='avatar' placeholder='URL image' />
        <textarea onChange={handleChange} value={inputValues.description} name='description' placeholder='description' />
        <button type='button' onClick={handleClear}>  Clean  </button>
        <button type='submit'>Save new Sub</button>
      </form>
    </div>
  );
};

export default Form;
