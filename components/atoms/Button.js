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
    width: ${({ width }) => width || '200px'};
    margin: ${({ margin }) => margin};
    text-align: center;
    box-shadow: ${({ theme }) => theme.boxShadow};
    font-weight: 300;
    letter-spacing: 0.2px;
      &:hover {
          cursor: pointer;
          background-color: ${({ theme, bgHover }) => bgHover || theme.colors.lightBlue };
          color: ${({ colorHover }) => colorHover || '#fff'};
      }
`


export default function Button ({ children, href = "#", margin, bgColor, bgHover, colorHover, width, handleOnClick }){
  return (
        <Link href={href}>
          <MyButton 
             margin={margin} 
             bgColor={bgColor}
             bgHover={bgHover}
             colorHover={colorHover}
             width={width}
             onClick={handleOnClick}
             >
             {children}
          </MyButton>
        </Link>
    )
}

  const { string, func } = PropTypes

  Button.propTypes = {
     children: string.isRequired,
     href: string,
     margin: string.isRequired,
     bgColor: string,
     bgHover: string,
     colorHover: string,
     width: string,
     handleOnClick: func
  }



