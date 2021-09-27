import styled from 'styled-components'
import PropTypes from 'prop-types'

const Title = styled.h2 `
    color: ${({ theme}) =>theme.colors.blue };
    text-align: ${({ align }) => align};
    font-weight: 700;
    font-size: 2rem;
    line-height: 100%;
    @media(min-width: 968px){
        font-size: 2.5rem;
    }
`


export default function TitleSection ({ children, align }){
    return <Title align={align}>{children}</Title>
}

  const { string } = PropTypes

  TitleSection.propTypes = {
     children: string.isRequired,
     align: string.isRequired
  }



