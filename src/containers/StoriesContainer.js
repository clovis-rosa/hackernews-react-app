/* eslint-disable import/prefer-default-export */
import React, { useEffect, useState } from 'react';
import {
  GlobalStyle,
  StoriesContainerWrapper,
} from '../styles/StoriesContainerStyles';
import { Story } from '../components/Story';
import { getStoryIds } from '../services/hnApi';

export const StoriesContainer = () => {
  const [storyIds, setstoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then((data) => setstoryIds(data));
    // getStoryIds().then((data) => data && setstoryIds(data));
  }, []);
  // [] = when the component mounts, do this...

  return (
    <>
      <GlobalStyle />
      <StoriesContainerWrapper className="container">
        <h1>Hacker News Stories</h1>
        {storyIds.map((storyId) => (
          <Story key={storyId} storyId={storyId} />
        ))}
      </StoriesContainerWrapper>
    </>
  );
};
