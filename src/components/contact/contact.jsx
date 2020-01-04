import React, { Component } from 'react';
import { Container, Card, CardHeader, CardBody } from 'reactstrap';
import Icon from 'react-icons-kit';
import { ic_phone } from 'react-icons-kit/md/ic_phone';
import { Twitter, Facebook, Mail } from 'react-social-sharing'

export default class Contact extends Component {
  render() {
    return (
      <Container>
        <Card className="border-1 border-dark">
          <CardHeader className="bg-white mb-3 pd-3"><h4>Contact</h4></CardHeader>
          <CardBody>
            <div className="row ">
              <div className="col font-weight-bold">
                Wigs Private Limited
                </div>
            </div>
            <div className="row">
              <div className="col">
                Belgrave House,
                </div>
            </div>
            <div className="row">
              <div className="col">
                76 Buckingham Palace Rd,
                </div>
            </div>
            <div className="row">
              <div className="col">
                Belgravia,
                </div>
            </div>
            <div className="row">
              <div className="col">
                London SW1W 9AX
                </div>
            </div>
            <div className="row">
              <div className="col">
                <Icon icon={ic_phone} size={25} />
                <span className="pl-3">
                  <a href="tel:+44-020-1234-1234">+44 020 1234 1234</a>
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <Mail solidcircle small message="Hi, Thanks for your email!" />
                <Twitter solid small message={process.env.REACT_APP_TWITTER_NAME + " Your message"}/>
                <Facebook solid small message="Your message" link={process.env.REACT_APP_FACEBOOK_WIGS_HOME_URL}/>
              </div>              
            </div>
          </CardBody>
        </Card>
      </Container>
    );
  }
}