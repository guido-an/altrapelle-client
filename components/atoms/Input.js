import styled from 'styled-components'
import PropTypes from 'prop-types'

// width: ${({ width }) => width}; example

const MyInput = styled.input`
    width: ${({ width }) => width || '100%'};
    height: ${({ height }) => height || '40px'};
    border-radius: 4px;
    border: 1px solid #d2d2d2;
    margin-bottom: 10px;
    padding-left: 10px;
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box;    /* Firefox, other Gecko */
    box-sizing: border-box;
    color: ${({ theme }) => theme.colors.greyText};
       &:focus {
         outline: none;
       }
`

const Input = ({ type, placeholder, handleChange, name, value, required, checked, width, height }) => {
    return(
        <MyInput 
          type={type} 
          placeholder={placeholder}
          name={name}
          onChange={handleChange} // function on change
          required={required}
          value={value}
          checked={checked}
          width={width}
          height={height}
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
      width: string,
      required: bool,
  }

export default Input

