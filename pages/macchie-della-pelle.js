import styled from 'styled-components'
import Image from 'next/image'
import ContainerApp from "../components/atoms/ContainerApp";
import IntroPage from "../components/molecules/IntroPage";
import OverFooter from '../components/molecules/OverFooter';

export default function MacchieDellaPelle(){
    return(
        <>
        <ContainerApp>
            <IntroPage>Macchie della pelle</IntroPage>
            <SecondContainer>
                <IntroSectionContainer>
                    <TitleIntro>Perché si manifesta l'iperpigmentazione?</TitleIntro>
                </IntroSectionContainer>
                <IntroText>
                    L’iperpigmentazione può essere causata da diversi fattori come l’esposizione solare,
                    l’invecchiamento cutaneo, terapie farmacologiche e variazioni ormonali tipiche della
                    gravidanza che inducono un accumulo anormale di melanina con formazione di
                    macchie scure localizzate su varie zone del corpo.
                </IntroText>
                <FirstSectionContainer>
                    <Title>FATTORI SCATENANTI <SpanTitle>dell'iperpigmentazione cutanea</SpanTitle></Title>
                    <IconsContainer>
                        <IconContainer>
                           <Image src="/icons/macchie-della-pelle/cambiamenti-ormonali.png" width="180" height="180"/> 
                           <TitleIcon>CAMBIAMENTI</TitleIcon>
                           <TitleIcon>ORMONALI</TitleIcon>
                        </IconContainer>
                        <IconContainer>
                           <Image src="/icons/macchie-della-pelle/esposizione-solare.png" width="180" height="180"/> 
                           <TitleIcon>ESPOSIZIONE</TitleIcon>
                           <TitleIcon>SOLARE</TitleIcon>
                        </IconContainer>
                        <IconContainer>
                           <Image src="/icons/macchie-della-pelle/invecchiamento-cutaneo.png" width="180" height="180"/> 
                           <TitleIcon>INVECCHIAMENTO</TitleIcon>
                           <TitleIcon>CUTANEO</TitleIcon>
                        </IconContainer>
                        <IconContainer>
                           <Image src="/icons/macchie-della-pelle/patologie-metaboliche.png" width="180" height="180"/> 
                           <TitleIcon>PATOLOGIE</TitleIcon>
                           <TitleIcon>METABOLICHE</TitleIcon>
                        </IconContainer>
                    </IconsContainer>
                </FirstSectionContainer>
                <Title>CAUSE <SpanTitle>della formazione delle macchie scure</SpanTitle></Title>
                  <ImageCausesContainer>
                     <Image src="/macchie-della-pelle/cause-formazione-macchie-scure.png" width="1234" height="667"/>
                  </ImageCausesContainer>
                  <CausesTextContainer>
                      <CausesText>
                          La melanina è prodotta dai
                           melanociti nello strato basale
                           dell’epidermide.
                           I fattori scatenanti, tra cui i
                           raggi UV, innescano la formazione
                           di <strong>radicali liberi</strong>.
                      </CausesText>
                      <CausesText>
                           I raggi UV, unitamente ai radicali
                           liberi, innescano l’azione agenti
                           biologici che agiscono sulle cellule
                           <strong> produttrici di pigmenti</strong>, chiamate
                           melanociti, stimolando la produzione
                           dell’<strong> enzima Tirosinasi</strong>.
                      </CausesText>
                      <CausesText>
                          La Tirosinasi induce la produzione di 
                          <strong> Melanina</strong>, a partire dal precursone
                          Tirosina, che viene trasferita dai
                          melanociti ai cheratinociti sulla
                          superfi cie cutanea conferendo <strong>colore
                          scuro</strong> ad alcune zone cutanee. 
                      </CausesText>
                  </CausesTextContainer>
                  <Title>FORME COMUNI <SpanTitle>di iperpigmentazione</SpanTitle></Title>
                  <Image src="/macchie-della-pelle/forme-comuni-di-iperpigmentazione.jpg" width="1000" height="317"/>
            </SecondContainer>
        </ContainerApp>
        <OverFooter />
        </>
    )
}

const SecondContainer = styled.div `
         margin-top: 10px;
         padding: 0 0 80px;
     @media(min-width: 968px){
         margin: 10px ${({ theme }) => theme.desktopContainer};
         padding: 0;

     }
`

// Intro
const IntroSectionContainer = styled.div `
    margin-top: 10px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.lightBlue};
    padding: 10px ${({ theme }) => theme.mobileContainer};
`

const TitleIntro = styled.h2 `
    text-align: left;
    color: #fff;
    font-size: 1.1rem;
    font-weight: 500;
    @media(min-width: 968px){
         text-align: center;
     }
`
const IntroText = styled.p `
   margin-top: 10px;
   @media(min-width: 968px){
      width: 80%;
      margin: 10px auto 0;
      line-height: 26px;
   }
`
// Title section
const Title = styled.h2 `
   color: ${({ theme }) => theme.colors.blue};
   margin-top: 30px;
      @media(min-width: 968px){
        margin-top: 40px;
     } 
`
const SpanTitle = styled.span `
   color: ${({ theme }) => theme.colors.blue};
   font-weight: 400;
   font-size: 1.3rem;
   position: relative;
   bottom: 5px;
      @media(min-width:768px){
         bottom: 0;
      }
`
// Reasons 
const FirstSectionContainer = styled.div `
      @media(min-width:768px){
        position: relative;
        top: 10px;
      }
`
const IconsContainer = styled.div `
    margin-top: 20px;
    width: 180px;
    margin: 0 auto;
      @media(min-width: 968px){
         display: flex;
         justify-content: space-between;
         width: 100%;
      }
`
const IconContainer = styled.div `
      & h3:nth-child(3) {
         position: relative;
         bottom: 50px;
      }
`
const TitleIcon = styled.h3 `
   color: ${({ theme }) => theme.colors.blue};
   font-weight: 500;
   position: relative;
   bottom: 30px;
   font-size: 1.1rem;
   text-align: center;
`
const ImageCausesContainer = styled.div `
     @media(min-width: 968px){
        background-color: ${({ theme }) => theme.colors.backgroundGrey};
        border-radius: 4px;
        padding: 20px;
     }
   
`
// Causes 
const CausesTextContainer = styled.div `
       @media(min-width: 968px){
          display: flex;
          justify-content: space-between;
       }
   
`
const CausesText = styled.p `
    font-size: 0.8rem;
    line-height: 23px;
    @media(min-width: 968px){
          max-width: 30%;
       }
`



