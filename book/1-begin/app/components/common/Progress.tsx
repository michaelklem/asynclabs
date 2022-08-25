import { NProgress } from '@tanem/react-nprogress'
import React from 'react'
import Bar from './Bar'
import Container from './Container'
import Spinner from './Spinner'

type Props = {
  isAnimating: boolean;
};
const Progress = ({ isAnimating }, Props) => (
  <NProgress isAnimating={isAnimating}>
    {({ animationDuration, isFinished, progress }) => (
      <Container animationDuration={animationDuration} isFinished={isFinished}>
        <Bar animationDuration={animationDuration} progress={progress} />
        <Spinner />
      </Container>
    )}
  </NProgress>
)

export default Progress