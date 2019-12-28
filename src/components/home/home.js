import React, { Component } from 'react';


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
          <div className="col-2 border d-table">
            <div className="row">
              <div className="col bg-primary">
                <p className="text-white font-weight-bold">Filters</p>
              </div>
            </div>
            <div className="card">
              <div className="card-header col-xs-12 col-md-12 bg-info text-white d-flex">
                <p>Size</p>
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
            <div className="col-10 border d-table">
              <h2>Home</h2>
            </div>
          </div>
        </div>

        <div>
          <footer id="sticky-footer" className="py-4 bg-dark text-white-50">
            <div className="container text-center">
              <small>Copyright &copy; Wigs Website</small>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default MainHome;