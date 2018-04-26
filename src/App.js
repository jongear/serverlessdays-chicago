import React, { Component } from 'react'
import './App.css'
import logo from './assets/logo_color.png'
import { Flex, Box } from 'rebass'
import Button from './components/Button'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Flex>
          <Flex
            style={{
              padding: '1.45rem 1.0875rem',
              fontFamily: 'Consolas,monaco,monospace'
            }}
          >
            <Box
              pb={[0, '1vh', '2vh', '3vh']}
              fontSize={[1, 2, 2]}
              width={[1, 1 / 3, 1 / 3]}
              style={{
                padding: '1.45rem 1.0875rem',
                backgroundColor: '#fff'
              }}
              px={3}
              flex="1 1 auto"
            >
              <img
                src={logo}
                alt="Serverlss Days Chicago 2018"
                style={{
                  width: '100%',
                  maxWidth: '420px'
                }}
              />
              <Flex>
                <h2>October 12th, Location TBD</h2>
              </Flex>
              <Flex>Jun 01 2018 - Call for Papers opens</Flex>
              <Flex>Jun 30 2018 - Tickets go on sale</Flex>
              <Flex>Sep 18 2018 - CFP closes</Flex>
              <Flex>Sep 21 2018 - Final speaker announcement</Flex>
              <Flex>Oct 12 2018 - ServerlessDays Chicago</Flex>
            </Box>
          </Flex>
        </Flex>

        <Flex
          flexWrap="wrap"
          justify="center"
          align="center"
          style={{
            backgroundColor: 'rgba(0,0,0,.8)',
            color: '#fff',
            fontFamily: 'avenir next,avenir,sans-serif'
          }}
        >
          <Flex justify="center" align="center">
            <Box>
              <p
                style={{
                  fontSize: '2.25rem',
                  padding: '0 1.0rem 1.0rem 1.0rem'
                }}
              >
                One Day. One Track. One Community
              </p>
              <Flex
                flexWrap="wrap"
                justify="center"
                align="center"
                style={{ fontSize: '1.25rem' }}
              >
                <Box
                  width={[1, 1 / 3]}
                  flex="1 1 auto"
                  style={{ padding: '0 1.0rem 1.0rem 1.0rem' }}
                >
                  <Button
                    style={{
                      width: '100%'
                    }}
                  >
                    <a href="google">Call for Papers</a>
                  </Button>
                </Box>
                <Box
                  width={[1, 1 / 3]}
                  flex="1 1 auto"
                  style={{ padding: '0 1.0rem 1.0rem 1.0rem' }}
                >
                  <Button
                    primary
                    style={{
                      width: '100%'
                    }}
                  >
                    Tickets
                  </Button>
                </Box>
                <Box
                  width={[1, 1 / 3]}
                  flex="1 1 auto"
                  style={{ padding: '0 1.0rem 1.0rem 1.0rem' }}
                >
                  <Button
                    style={{
                      width: '100%'
                    }}
                  >
                    Sponsor
                  </Button>
                </Box>
              </Flex>
            </Box>
          </Flex>

          <Flex flexWrap="wrap" justify="center" align="center">
            <Box width={1}>
              <p
                style={{
                  fontSize: '2.25rem',
                  textAlign: 'center'
                }}
              >
                Code of Conduct
              </p>
            </Box>
            <Box
              width={[1, 1, 1 / 3]}
              px={3}
              style={{
                textAlign: 'left'
              }}
            >
              <h2>Code of Conduct</h2>
              <p>
                All attendees, speakers, sponsors and volunteers at our
                conference are required to agree with the following code of
                conduct. Organisers will enforce this code throughout the event.
                We are expecting cooperation from all participants to help
                ensuring a safe environment for everybody.
              </p>
              <p>tl;dr: Jeff says be excellent with each other</p>
              <h3>The Quick Version </h3>
              <p>
                Our conference is dedicated to providing a harassment-free
                conference experience for everyone, regardless of gender, gender
                identity and expression, age, sexual orientation, disability,
                physical appearance, body size, race, or religion (or lack
                thereof). We do not tolerate harassment of conference
                participants in any form. Sexual language and imagery is not
                appropriate for any conference venue, including talks,
                workshops, parties, Twitter and other online media. Conference
                participants violating these rules may be sanctioned or expelled
                from the conference without a refund at the discretion of the
                conference organisers.
              </p>
              <h3>The Less Quick Version</h3>
              <p>
                Harassment includes offensive verbal comments related to gender,
                age, sexual orientation, disability, physical appearance, body
                size, race, religion, sexual images in public spaces, deliberate
                intimidation, stalking, following, harassing photography or
                recording, sustained disruption of talks or other events,
                inappropriate physical contact, and unwelcome sexual attention.
                Participants asked to stop any harassing behavior are expected
                to comply immediately. Sponsors are also subject to the
                anti-harassment policy. In particular, sponsors should not use
                sexualised images, activities, or other material. Booth staff
                (including volunteers) should not use sexualised
                clothing/uniforms/costumes, or otherwise create a sexualised
                environment. If a participant engages in harassing behavior, the
                conference organisers may take any action they deem appropriate,
                including warning the offender or expulsion from the conference
                with no refund. If you are being harassed, notice that someone
                else is being harassed, or have any other concerns, please
                contact a member of conference staff immediately. Conference
                staff can be identified as they’ll be wearing branded t-shirts.
                Conference staff will be happy to help participants contact
                hotel/venue security or local law enforcement, provide escorts,
                or otherwise assist those experiencing harassment to feel safe
                for the duration of the conference. We value your attendance. We
                expect participants to follow these rules at conference and
                workshop venues and conference-related social events.
              </p>
            </Box>
          </Flex>

          <Footer />
        </Flex>
      </div>
    )
  }
}

export default App
