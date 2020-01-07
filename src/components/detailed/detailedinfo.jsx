import React, { Component } from 'react'
import ImageZoom from 'react-medium-image-zoom'
import { Media, Nav, NavItem, NavLink, Row, TabContent, TabPane, Col } from 'reactstrap';
import classnames from 'classnames';

class DetailedInfo extends Component {
    constructor(props) {
        super();
        this.state = {
            activeTab: '1'
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <Media>
                            <Media left href="#">
                                <ImageZoom
                                    image={{
                                        src: 'https://i.picsum.photos/id/29/300/300.jpg',
                                        alt: 'Golden Gate Bridge',
                                        className: 'img',
                                        style: { width: '20em' }
                                    }}
                                    zoomImage={{
                                        src: 'https://i.picsum.photos/id/29/300/300.jpg',
                                        alt: 'Golden Gate Bridge'
                                    }}
                                />
                            </Media>
                        </Media>
                    </div>
                    <div className="col-6">
                        <Nav tabs>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: this.state.activeTab === '1' })}
                                    onClick={() => this.toggle('1')}>
                                    Details
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: this.state.activeTab === '2' })}
                                    onClick={() => this.toggle('2')}>
                                    Tab 2
                                </NavLink>
                            </NavItem>
                        </Nav>

                        <TabContent activeTab={this.state.activeTab}>
                            <TabPane tabId="1">

                                <div className="row">
                                    <div className="col-2">
                                        Description:
                                    </div>
                                    <div className="col-10">
                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-2">
                                        Price:
                                    </div>
                                    <div className="col-10">
                                        £ 120
                                    </div>
                                </div>
                            </TabPane>
                            <TabPane tabId="2">
                                <Row>
                                    <Col sm="12">
                                        <h4>Tab 2 Contents</h4>
                                    </Col>
                                </Row>
                            </TabPane>
                        </TabContent>

                    </div>
                </div>
            </div>);





        {/* <div className="row">
                    <div className="col-4">
                        <span className="border border-primary">
                            <ImageZoom
                                image={{
                                    src: 'https://i.picsum.photos/id/29/300/300.jpg',
                                    alt: 'Golden Gate Bridge',
                                    className: 'img',
                                    style: { width: '20em' }
                                }}
                                zoomImage={{
                                    src: 'https://i.picsum.photos/id/29/300/300.jpg',
                                    alt: 'Golden Gate Bridge'
                                }}
                            />
                        </span>
                    </div>

                    <div className="col-4">
                        <p>Description</p>
                    </div>
                </div> */}
    }

}

export default DetailedInfo;

//https://codepen.io/anon/pen/rQEbOJ?editors=0010