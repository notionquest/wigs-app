import React, { Component } from 'react';
import Photos from '../photo/photos';


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
      <div className="container-fluid border">
        <div className="row">
          {/* Home Filter */}
          <div className="col-2 border">
            <div className="row">
              <div className="col bg-secondary">
                <p className="d-inline text-white font-weight-bold">Filters</p>
              </div>
            </div>
            <div className="card">
              <div className="bg-info text-white">
                <p className="d-inline p-2 text-white font-weight-bold">Size</p>
              </div>
              <div className="card-body">

                {this.state.filters.sizes.map(size =>
                  <div className="card-text" key={size}>
                    <div className="row">
                      <input type="checkbox" id={size} />
                      <label htmlFor={size} className="text-dark font-weight-normal">{size}</label>
                    </div>
                  </div>

                )}
              </div>
            </div>
          </div>
          <div>
            {/* Home Body */}
            <div>
              <Photos />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainHome;