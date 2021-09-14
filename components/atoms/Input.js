import styled from 'styled-components'
import PropTypes from 'prop-types'

// width: ${({ width }) => width}; example

const MyInput = styled.input`
   
`

const Input = ({ type, placeholder, handleChange, name, value, required, checked }) => {
    return(
        <MyInput 
          type={type} 
          placeholder={placeholder}
          name={name}
          onChange={handleChange} // function on change
          required={required}
          value={value}
          checked={checked}
        />
    )
}

  const { string, func, bool } = PropTypes

  Input.propTypes = {
      type: string.isRequired,
      placeholder: string,
      name: string.isRequired,
      handleChange: func.isRequired,
      value: PropTypes.oneOfType([
        string.isRequired,
        bool.isRequired
      ]),
      required: bool,
  }

export default Input

