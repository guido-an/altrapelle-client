
import styled from 'styled-components'
import CookieConsent, { Cookies } from 'react-cookie-consent'
import Link from 'next/link'

export default function CookieBanner () {
  return (
    <CookieConsent
      location='bottom'
      buttonText='Accetto'
      cookieName='myAwesomeCookieName2'
      style={{ background: '#153d6d' }}
      buttonStyle={{ color: '#222', fontSize: '13px' }}
      expires={150}
    >
      <Container>
        <span>Utilizziamo i cookies per fornire all’utente la migliore esperienza possibile nel nostro sito.</span>
        <span> Puoi saperne di più su quali cookies utilizziamo leggendo la <Link href='/privacy-policy'><a style={{ color: '#fff' }}>privacy policy</a></Link>
        </span>
      </Container>
    </CookieConsent>

  )
}

const Container = styled.div`
    width: 90%;
    margin: 0 auto;
    text-align: center;
      @media(min-width: 968px){
        width: 80%;
      }
`
