import PropTypes from 'prop-types'
import styled from 'styled-components'

export default function TopBar({ topBarText }) {
    return (
        <Container>
          {topBarText.map((text, i) => {
              return (
                  <div key={i}>
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
     padding: 5px;
      @media(min-width: 1200px){
        display: flex;
        justify-content: space-evenly;
        text-align: left;
      }
`
const TopBarTitle = styled.h3`
      font-weight: 400;
`
const TopBarText = styled.p`
      color: #fff;
      position: relative;
      bottom: 15px;
`

const { array } = PropTypes
TopBar.propTypes = {
    topBarText: array.isRequired
  }

