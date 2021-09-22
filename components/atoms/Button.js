import styled from 'styled-components'
import PropTypes from 'prop-types'

const MyButton = styled.a `
    background-color: ${({ theme, bgColor }) => bgColor || theme.colors.blue };
    color: #fff;
    padding: 12px 0;
    border-radius: 35px;
    font-size: 14px;
    display: block;
    width: 200px;
    margin: ${({ margin }) => margin};
    text-align: center;
    box-shadow: 0 4px 14px 0 rgb(0 0 0 / 39%);
      &:hover {
          cursor: pointer;
          background-color: ${({ theme, bgHover }) => bgHover || theme.colors.lightBlue };
      }
    @media(min-width: 968px){
       
    }
`


export default function Button ({ children, margin, bgColor, bgHover }){
    return <MyButton 
             margin={margin} 
             bgColor={bgColor}
             bgHover={bgHover}>
               {children}
             </MyButton>
}

  const { string } = PropTypes

  Button.propTypes = {
     children: string.isRequired,
     margin: string.isRequired,
     bgColor: string,
     bgHover: string
  }



