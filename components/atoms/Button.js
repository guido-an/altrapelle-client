import styled from 'styled-components'
import PropTypes from 'prop-types'
import Link from 'next/link'

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
    box-shadow: ${({ theme }) => theme.boxShadow};
    font-weight: 300;
    letter-spacing: 0.2px;
      &:hover {
          cursor: pointer;
          background-color: ${({ theme, bgHover }) => bgHover || theme.colors.lightBlue };
          color: #fff;
      }
    @media(min-width: 968px){
       
    }
`


export default function Button ({ children, href, margin, bgColor, bgHover }){
    return (
        <Link href={href}>
          <MyButton 
             margin={margin} 
             bgColor={bgColor}
             bgHover={bgHover}
             >
             {children}
          </MyButton>
        </Link>
    )
}

  const { string } = PropTypes

  Button.propTypes = {
     children: string.isRequired,
     href: string,
     margin: string.isRequired,
     bgColor: string,
     bgHover: string
  }



