/* eslint-disable import/prefer-default-export */
import React, { useEffect, useState } from 'react';
import {
  GlobalStyle,
  StoriesContainerWrapper,
} from '../styles/StoriesContainerStyles';
import { Story } from '../components/Story';
import { getStoryIds } from '../services/hnApi';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';

export const StoriesContainer = () => {
  const { count } = useInfiniteScroll();
  const [storyIds, setstoryIds] = useState([]);

  useEffect(() => {
    // console.log('count', count);
    getStoryIds().then((data) => setstoryIds(data));
    // getStoryIds().then((data) => data && setstoryIds(data));
  }, [count]);
  // [] = when the component mounts, do this...

  return (
    <>
      <GlobalStyle />
      <StoriesContainerWrapper>
        <h1>
          <span role="img" aria-label="emoji">
            ⚡
          </span>{' '}
          Hacker News Stories
        </h1>
        {storyIds.slice(0, count).map((storyId) => (
          <Story key={storyId} storyId={storyId} />
        ))}
      </StoriesContainerWrapper>
    </>
  );
};
