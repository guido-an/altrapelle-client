import styled from 'styled-components'
import Image from 'next/image'
import ContainerApp from '../atoms/ContainerApp'
import Logo from '../atoms/Logo'

export default function Footer () {
  return (
    <Container>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <FooterSectionsContainer>
        <FooterSection>
          <Title>Contatti</Title>
          <MyLink as='a' href='mailto:info@difar.it'>Email: info@difar.it</MyLink>
          <MyLink as='a' href='tel:+090.9912376'>Telefono: 090.9912376</MyLink>
          <MyLink as='a' href='tel:800.913639'>Numero Verde 800.913639</MyLink>
        </FooterSection>
        <FooterSection>
          <Title>Social</Title>
          <MyLink as='a' href='https://www.instagram.com/altrapelle/'>Instagram</MyLink>
          <MyLink as='a' href='https://www.facebook.com/AltraPelle'>Facebook</MyLink>
        </FooterSection>
        <FooterSection>
          <Title>Pagamenti</Title>
          <Image src='/icons/credit-cards-logo.png' width='213px' height='32px' />
        </FooterSection>
        <FooterSection>
          <Title>Termini e Condizioni</Title>
          <MyLink as='a' href='/spedizioni'>Spedizioni</MyLink>
          <MyLink as='a' href='/privacy-policy'>Privacy Policy</MyLink>
        </FooterSection>
        <FooterSection>
          <Title>Credits</Title>
          <a href='https://www.vanillamarketing.it/' target='_blank' rel='noopener'>
            <LogoCreditsContainer>
              <Image src='/footer/logo-vanilla-marketing.png' width='190' height='68' />
            </LogoCreditsContainer>
          </a>
        </FooterSection>
      </FooterSectionsContainer>
    </Container>
  )
}

const Container = styled.div`
      padding: 0px ${({ theme }) => theme.mobileContainer};
`

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 0 0;
      @media(min-width: 968px){
          padding: 40px 0 20px;
      }
`
const FooterSectionsContainer = styled.div`
     margin-top: 40px;
     padding-bottom: 40px;
       @media(min-width: 968px){
           margin-top: 0;
           display: flex;
           justify-content: space-between;
           padding: 0 ${({ theme }) => theme.desktopContainer} 40px;
       }
`
const FooterSection = styled.div`
     margin-top: 40px;
         @media(min-width: 968px){
             margin-top: 10px;
         }
`
const Title = styled.p`
  color: ${({ theme }) => theme.colors.blue};
  font-weight: 600;
`
const MyLink = styled.p`
  color: ${({ theme }) => theme.colors.greyText};
  display: block;
  margin-bottom: 10px;
`
const LogoCreditsContainer = styled.div`
  width: 120px;
`
