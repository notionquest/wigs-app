import React, { useState } from 'react';

const MainHome = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      {/* Home Filter */}
      <div class="w-25 p-3">
        <div class="row">
          <div class="col-2 font-weight-bolder">
            Filter
          </div>
        </div>
        <div class="row">
          <div class="col-3 font-weight-bold">
            Size
          </div>
        </div>
        <div class="row">
          <div class="col-3">
            <input type="checkbox" name="size" id="small" />
            <label for="small">Small</label>
          </div>
        </div>
        <div class="row">
          <div class="col-3">
            <input type="checkbox" name="size" id="medium" />
            <label for="medium">Medium</label>
          </div>
        </div>
        <div class="row">
          <div class="col-3">
            <input type="checkbox" name="size" id="large" />
            <label for="large">Large</label>
          </div>
        </div>
      </div>
      {/* Home Body */}
      <div>
        <h2>Home</h2>
      </div>
    </div>
  );
}

export default MainHome;