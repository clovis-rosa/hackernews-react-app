/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StoryWrapper = styled.section`
  padding-top: 10px;
  margin-bottom: 20px;
  border-top: 1px solid #cccccc;

  &:first-of-type {
    border-top: 0;
  }

  &:last-of-type {
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

export const StoryTitle = styled.h2`
  margin-bottom: 5px;
  margin: 0;

  a {
    color: #0a0a23;
    background-color: #f8dc3d;
    text-decoration: none;
  }
`;

export const StoryMeta = styled.div`
  > span {
    font-size: 14px;
  }

  > span:first-child {
    margin-right: 4px;
  }

  > span:not(:first-child):before {
    content: '|';
    margin: 0 8px;
  }
`;

export const StoryMetaElement = styled.span`
  font-weight: 700;
  color: ${(props) => props.color || 'red'};
`;
