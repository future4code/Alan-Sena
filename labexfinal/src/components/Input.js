

const Input = (props) => {
  
  return (
    <>
      <label>{props.label}</label>
      <input 
        placeholder={props.placeholder} 
        name={props.name} 
        type={props.type || 'text'}
        onChange={props.onchange}
        value={props.value}
      ></input> 
    </>
  )
}

export default Input;
