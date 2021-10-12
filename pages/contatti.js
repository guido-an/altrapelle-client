import styled from 'styled-components'
import ContainerApp from '../components/atoms/ContainerApp'
import IntroPage from '../components/molecules/IntroPage'

export default function Contatti(){
    return(
        <ContainerApp>
           <IntroPage>Contatti</IntroPage>
            <ContainerPage>  
               <p>Altrapelle® è un’esclusiva Difar Distribuzione s.r.l.</p>
               <ContainerSection>
                  <p><strong>Sede Operativa</strong></p>
                  <p>Via Ciantro 67 c/o Centro Mercantile Sicilia Capannone A8 98057 Milazzo (ME)</p>
                  <p>Telefono <a href="tel:090.9912376" rel="noopener">090.9912376</a></p>
                  <p>Fax 090.9912753</p>
               </ContainerSection>
               <ContainerSection>
                  <p><strong>Servizio Clienti</strong></p>
                  <p>Per esigenze e richieste relative ai prodotti Altrapelle e-mail: <a href="mailto:info@difar.it">info@difar.it</a> </p>
                  <p>Numero Verde <a href="tel:800.913639" rel="noopener">800.913639</a></p>
               </ContainerSection>
            </ContainerPage>
        </ContainerApp>
    )
}

const ContainerPage = styled.div `
    margin:20px 0 80px;
    box-shadow: ${({ theme }) => theme.boxShadow};
    padding: 10px 20px;
      @media(min-width: 968px){
           width: 60%;
           margin: 40px auto;
           padding: 40px 80px;
           border-radius: 4px;
      }
`

const ContainerSection = styled.div `
    margin-top: 30px;
        p {
            line-height: 20px;
        }
`