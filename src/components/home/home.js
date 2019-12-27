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
      <div class="container-fluid border">


        {/* Home Filter */}
        <div class="col-2 border">
          <div class="row">
            <div class="col">
              <label class="badge badge-primary text-left">Filters</label>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <label class="badge badge-secondary">Size</label>
            </div>
          </div>
          {this.state.filters.sizes.map(size =>
            <div class="row">
              <div class="col">
                <ul>
                  <ol>
                    <input type="checkbox" id={size} />
                    <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">{size}</label>
                  </ol>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Home Body */}
        <div class="col-10 border">
          <h2>Home</h2>
        </div>

      </div>
    );
  }
}

export default MainHome;