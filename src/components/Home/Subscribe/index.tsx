import { Container } from '../../../styles/container'
import { Button } from '../../Button'
import { Section } from './styles'

export function Subscribe(){
  return(
    <Section>
      <Container>
        <div className="subscribe">
          <p>Are you looking for a House or Customer for you Property sale?</p>
          <Button>Subscribe now</Button>
        </div>
      </Container>
    </Section>
  )
}