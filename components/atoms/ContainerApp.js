import styled from 'styled-components'
import PropTypes from 'prop-types'
export default function ContainerApp ({ children }){
    return <MyContainer>{children}</MyContainer>
}

const MyContainer = styled.div`
     margin: 0 ${({ theme }) => theme.mobileContainer};
         @media(min-width: 768px){
           margin: 0 ${({ theme }) => theme.desktopContainer} 80px;
         }
`
  const { node } = PropTypes

  ContainerApp.propTypes = {
     children: node.isRequired,
  }



