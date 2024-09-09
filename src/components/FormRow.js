import React from 'react'

const FormRow = ({type, name, value,handleChange,labelText}) => {
  return (
    <div>
    <label htmlFor="name" className="form-label">
      {name}
    </label>
    <input 
    type={type} 
    name={name}
    placeholder={labelText} 
    value={value} 
    onChange={(e) => handleChange(e)} 
    className="form-input"
    />
    </div>
  )
}

export default FormRow