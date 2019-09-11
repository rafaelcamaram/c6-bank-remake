import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Row = props => {
  return <RowElement {...props}>{props.children}</RowElement>;
};

const RowElement = styled.View`
  flex-direction: row;
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  margin-top: ${props => props.marginTop};
  margin-bottom: ${props => props.marginBottom};
  margin-left: ${props => props.marginLeft};
  margin-right: ${props => props.marginRight};
`;

Row.propTypes = {
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  marginTop: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  marginBottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  marginLeft: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  marginRight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Row.defaultProps = {
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  marginTop: 0,
  marginBottom: 0,
  marginLeft: 0,
  marginRight: 0,
};

export default Row;
