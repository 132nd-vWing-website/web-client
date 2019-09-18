import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  width: 100%;
  margin: 0;
  padding: 0;

  margin-bottom: 1em;
`;

const StepItem = styled.div`
  margin-right: 16px;
  white-space: nowrap;

  position: relative;
  display: inline-block;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  overflow: hidden;
  vertical-align: top;

  color: rgba(0, 0, 0, 0.25);
`;

const ActiveStep = styled(StepItem)`
  font-weight: 500;
  color: black;
`;

const StepIcon = styled.div`
  display: inline-block;
  vertical-align: top;

  width: 32px;
  height: 32px;
  margin-right: 8px;
  font-size: 16px;
  line-height: 30px;
  text-align: center;
  color: rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 32px;
  -webkit-transition: background-color 0.3s, border-color 0.3s;
  transition: background-color 0.3s, border-color 0.3s;
`;

const ActiveStepIcon = styled(StepIcon)`
  border-color: #1890ff;
  background: #1890ff;
  color: white;
`;

const StepTitle = styled.div`
  position: relative;
  display: inline-block;
  padding-right: 16px;
  font-size: 16px;
  line-height: 32px;

  ::after {
    background-color: #e8e8e8;
    position: absolute;
    top: 16px;
    left: 100%;
    display: block;
    width: 9999px;
    height: 1px;
    background: #e8e8e8;
    content: '';
  }
`;

export default function Steps({ current, steps }) {
  const items = steps.map((step, index) =>
    index === current ? (
      <ActiveStep key={step.title}>
        <ActiveStepIcon>{index + 1}</ActiveStepIcon>
        <StepTitle>{step.title}</StepTitle>
      </ActiveStep>
    ) : (
      <StepItem key={step.title}>
        <StepIcon>{index + 1}</StepIcon>
        <StepTitle>{step.title}</StepTitle>
      </StepItem>
    ),
  );

  return <Container>{items}</Container>;
}

Steps.propTypes = {
  current: PropTypes.number.isRequired,
  steps: PropTypes.array.isRequired,
};
