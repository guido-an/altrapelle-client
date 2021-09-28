import PropTypes from 'prop-types'
import styled from 'styled-components'

export default function TopBar({ product }) {
    return (
        <Container>
          {product.topBarText.map(text => {
              return (
                  <div>
                    <TopBarTitle>{ text[0] }</TopBarTitle>
                    <TopBarText>{ text[1] }</TopBarText>
                  </div>
              )
          })}
        </Container>
    )
}



const Container = styled.div`
     background-color: ${({ theme }) => theme.colors.lightBlue};
     border-radius: 4px;
     text-align: center;
     color: #fff;
     padding: 10px;
      @media(min-width: 1200px){
        display: flex;
        justify-content: space-evenly;
        text-align: left;
      }
`
const TopBarTitle = styled.h3`
      font-weight: 400;
      padding: 10px 0 0;
      @media(min-width: 1200px){
        
      }
`
const TopBarText = styled.p`
      color: #fff;
      position: relative;
      bottom: 15px;
      @media(min-width: 1200px){
        
      }
`

const { object } = PropTypes

TopBar.propTypes = {
     product: object.isRequired
  }

