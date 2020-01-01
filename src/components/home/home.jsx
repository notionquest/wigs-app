import React, { Component } from 'react';
import Photos from '../photo/photos';
import { Badge, Card, CardBody, Button, CardHeader, CardTitle, CardText } from 'reactstrap';


class MainHome extends Component {
  constructor(props) {
    super();
    this.state = {
      filters: {
        sizes: ["Small", "Medium", "Large"]
      }
    };
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          {/* Home Filter */}
          <div className="col-2">
            <div className="row">
              <div className="col">
                <h4><Badge>Filters</Badge></h4>
              </div>
            </div>
            {/*             <div className="card">
              <div className="col">
                <h5><Badge color="primary">Size</Badge></h5>
              </div>
              <div className="card-body">
                {this.state.filters.sizes.map(size =>
                  <div className="card-text" key={size}>
                    <div className="row">
                      <input type="checkbox" id={size} />
                      <label htmlFor={size} className="text-dark font-weight-normal"><small>{size}</small></label>
                    </div>
                  </div>
                )}
              </div>
            </div> */}
            <div className="row">
              <Card className="border-0">
                <CardTitle >
                  <div className="row">
                    <div className="col-1">
                    </div>
                    <div className="col-4">
                      <h5><Badge color="primary">Size</Badge></h5>
                    </div>
                  </div>
                </CardTitle>
                <CardBody>
                {this.state.filters.sizes.map(size =>
                  <div className="row">
                    <div className="col-2"></div>
                    <div>
                      <input type="checkbox" id={size} />
                      <label htmlFor={size} className="text-dark font-weight-normal"><small>{size}</small></label>
                    </div>
                  </div>
                )}
                </CardBody>
              </Card>
            </div>
          </div>
          <div className="col-10">
            {/* Home Body */}
            <Photos />
          </div>
        </div>
      </div>
    );
  }
}

export default MainHome;