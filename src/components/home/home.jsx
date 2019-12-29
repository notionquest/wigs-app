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
      <div className="container-fluid">
        <div className="row">
          {/* Home Filter */}
          <div className="col-2">
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
                      <label htmlFor={size} className="text-dark font-weight-normal"><small>{size}</small></label>
                    </div>
                  </div>

                )}
              </div>
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