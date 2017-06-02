import React from 'react';


const Main = props => (
  <div>
    {props.children}
  </div>
  );

Main.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node
  ]).isRequired
};

export default Main;
