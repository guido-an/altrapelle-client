import styled from 'styled-components'
import PropTypes from 'prop-types'

const OverTitle = styled.h2 `
    color: ${({ theme}) =>theme.colors.greyText };
    text-align: ${({ align }) => align};
    font-weight: 400;
    font-size: 1rem;
    text-transform: uppercase;
    position: relative;
    top: 20px;
    @media(min-width: 968px){
        font-size: 1.1rem;
        top: 30px;
    }
`


export default function OverTitleSection ({ children, align }){
    return <OverTitle align={align}>{children}</OverTitle>
}

  const { string } = PropTypes

  OverTitleSection.propTypes = {
     children: string.isRequired,
     align: string.isRequired
  }



