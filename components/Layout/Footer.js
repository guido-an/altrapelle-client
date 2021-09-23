import styled from 'styled-components'
import Logo from '../atoms/Logo'

export default function Footer () {
    return(
        <div>
            {/* <LogoContainer>
                <Logo/>
            </LogoContainer> */}
        </div>
    )
}

const LogoContainer = styled.div `
  display: flex;
  justify-content: center;
  padding-top: 40px;
  background-color: #fafafa;
`