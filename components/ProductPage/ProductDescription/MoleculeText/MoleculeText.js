import PropTypes from 'prop-types'
import styled from 'styled-components'

export default function MoleculeText({ moleculeText }) {
    return (
        <>
          <Text>{moleculeText.introduction}</Text>
            <ul>
               {moleculeText.list.map((item, i) => <Li key={i}>{item}</Li>)}
            </ul>
          <Text>{moleculeText.lastPart}</Text>
       </> 
    )
}

const Text = styled.p `
      color: ${({ theme }) => theme.colors.blue};
`
const Li = styled.li `
      color: ${({ theme }) => theme.colors.lightBlue};
      font-weight: 500;
`

const { object } = PropTypes

MoleculeText.propTypes = {
      moleculeText: object.isRequired
  }