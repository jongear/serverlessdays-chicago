import React from 'react'
import { Flex, Box } from 'rebass'
import anteater from '../../assets/anteater_mascot.png'
import dino from '../../assets/dino_mascot.png'
import moth from '../../assets/moth_mascot.png'
import octo from '../../assets/octo_mascot.png'
import owl from '../../assets/owl_mascot.png'
import unicorn from '../../assets/unicorn_mascot.png'

class Footer extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    return (
      <Flex
        flexWrap="wrap"
        justify="center"
        align="center"
        style={{ marginBottom: '100px' }}
      >
        <Box
          width={1}
          px={3}
          pb={4}
          justify="center"
          align="center"
          style={{ textAlign: 'center' }}
        >
          <span>
            <a
              href="mailto:chicago@serverlessdays.io"
              title="Email us at chicago@serverlessdays.io"
              style={{
                color: '#ff6300',
                textDecoration: 'none'
              }}
            >
              chicago@serverlessdays.io
            </a>
          </span>
        </Box>
        <Box>
          <img
            src={anteater}
            style={{ maxHeight: '100px' }}
            alt="Anteater mascot"
          />
        </Box>
        <Box>
          <img
            src={dino}
            style={{ maxHeight: '100px' }}
            alt="dinosaur mascot"
          />
        </Box>
        <Box>
          <img src={moth} style={{ maxHeight: '100px' }} alt="moth mascot" />
        </Box>
        <Box>
          <img src={octo} style={{ maxHeight: '100px' }} alt="octopus mascot" />
        </Box>
        <Box>
          <img src={owl} style={{ maxHeight: '100px' }} alt="owl mascot" />
        </Box>
        <Box>
          <img
            src={unicorn}
            style={{ maxHeight: '100px' }}
            alt="unicorn mascot"
          />
        </Box>
      </Flex>
    )
  }
}

export default Footer
