import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 0.25em;
  display: flex;
  height: 1rem;
  overflow: hidden;
  font-size: 0.75rem;
  background-color: #e9ecef;
  border-radius: 0.25rem;
`;

const Bar = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-pack: center;
  justify-content: center;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  background-color: #007bff;
  transition: width 0.6s ease;
`;

const Progress = ({ percentage }) => (
  <Container>
    <Bar
      className='progress-bar progress-bar-striped bg-success'
      role='progressbar'
      style={{ width: `${percentage}%` }}>
      {percentage > 0 ? `${percentage}%` : ''}
    </Bar>
  </Container>
);

Progress.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default Progress;
