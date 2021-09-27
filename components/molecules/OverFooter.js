import React, { useTheme } from 'styled-components'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Product from './Product'
import Button from '../atoms/Button'

export default function OverFooter (){
    const theme = useTheme()
    return(
        <Container>
            <div>
              <OverTitle>HAI BISOGNO DI ASSISTENZA?</OverTitle>
              <Title>CONTATTA IL NOSTRO CUSTOMER CARE</Title>
              <P>Saremo felici di risolvere ogni tuo problema.</P>
            </div>
            <BtnContainer>
              <Button 
                 href="/contatti" 
                 margin="40px 0 0"
                 bgColor={theme.colors.lightBlue}
                 bgHover={theme.colors.backgroundGrey}
                 colorHover="#222"
                 >Contatti</Button>
            </BtnContainer>
        </Container>
    )
}

const Container = styled.div ` 
      background-color: ${({ theme }) => theme.colors.blue};
      padding: 20px ${({ theme }) => theme.mobileContainer} 60px;
    @media(min-width: 768px){
        display: flex;
        justify-content: space-evenly;
    }
`
const OverTitle = styled.p `
    color: #fff;
    position: relative;
    top: 20px;
`
const Title = styled.h2 `
    color: #fff
`
const P = styled.p `
    color: #fff
`
const BtnContainer = styled.div `
     @media(min-width: 768px){
        position: relative;
        top: 30px;
    }
`






