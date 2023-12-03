import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Manual.css';

const Manual = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div className="Manual" data-testid="Manual">
      <div className="capa">
        <div className="burbujas">

        <span style={{'--i': 11}}></span>
        <span style={{'--i': 12}}></span>
        <span style={{'--i': 24}}></span>
        <span style={{'--i': 10}}></span>
        <span style={{'--i': 14}}></span>
        <span style={{'--i': 23}}></span>
        <span style={{'--i': 18}}></span>
        <span style={{'--i': 16}}></span>
        <span style={{'--i': 19}}></span>
        <span style={{'--i': 20}}></span>
        <span style={{'--i': 22}}></span>
        <span style={{'--i': 25}}></span>
        <span style={{'--i': 18}}></span>
        <span style={{'--i': 21}}></span>
        <span style={{'--i': 15}}></span>
        <span style={{'--i': 13}}></span>
        <span style={{'--i': 26}}></span>
        <span style={{'--i': 17}}></span>
        <span style={{'--i': 13}}></span>
        <span style={{'--i': 28}}></span>
        
        </div>
      </div>
    </div>
  );
};

Manual.propTypes = {};
Manual.defaultProps = {};

export default Manual;