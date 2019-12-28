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


        <div class="row">
          {/* Home Filter */}
          <div class="col-2 border d-table">
            <div class="row">
              <div class="col bg-primary">
                <p class="text-white font-weight-bold">Filters</p>
              </div>
            </div>
            <div class="card">
              <div class="card-header col-xs-12 col-md-12 bg-info text-white d-flex">
                <p>Size</p>
              </div>
              <div class="card-body">
                {this.state.filters.sizes.map(size =>
                  <ul>
                    <ol>
                      <input type="checkbox" id={size} />
                      <label for="colFormLabelSm" >{size}</label>
                    </ol>
                  </ul>
                )}
              </div>
            </div>
          </div>
          <div>
            {/* Home Body */}
            <div class="col-10 border d-table">
              <h2>Home</h2>
            </div>
          </div>
        </div>

        <div>
          <footer id="sticky-footer" class="py-4 bg-dark text-white-50">
            <div class="container text-center">
              <small>Copyright &copy; Wigs Website</small>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default MainHome;