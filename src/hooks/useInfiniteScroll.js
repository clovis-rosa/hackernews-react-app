/* eslint-disable import/prefer-default-export */

import { useState, useEffect } from 'react';
import { STORY_INCREMENT, MAX_STORIES } from '../constants';
import { debounce } from '../utils/debounce';

export const useInfiniteScroll = () => {
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(STORY_INCREMENT);

  // const handleScroll = debounce(() => {
  //   if (
  //     window.innerHeight + document.documentElement.scrollTop !==
  //       document.documentElement.offsetHeight ||
  //     loading
  //   ) {
  //     return false;
  //   }

  //   setLoading(true);
  // }, 500);

  // IF THE USER HAS SCROLLED TO THE BOTTOM OF THE PAGE
  const handleScroll = debounce(() => {
    const scrollDistToBottom = Math.floor(
      document.documentElement.offsetHeight -
        (window.innerHeight + document.documentElement.scrollTop)
    );

    if (scrollDistToBottom > 5 || loading) return false;

    setLoading(true);
  }, 300);

  useEffect(() => {
    if (!loading) return;

    if (count + STORY_INCREMENT >= MAX_STORIES) {
      setCount(MAX_STORIES);
    } else {
      setCount(count + STORY_INCREMENT);
    }

    setLoading(false);
  }, [loading]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { count };
};
