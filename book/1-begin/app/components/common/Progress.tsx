import { NProgress } from '@tanem/react-nprogress'
import React from 'react'

import Bar from './Bar'
import Container from './Container'
import Spinner from './Spinner'

type Props = {
  isAnimating: boolean;
};
// const Progress: React.FC<{ isAnimating: boolean }> = ({ isAnimating }) => (
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


// import Container from '@material-ui/core/Container'
// import LinearProgress from '@material-ui/core/LinearProgress'
// import { makeStyles, Theme } from '@material-ui/core/styles'
// import { useNProgress } from '@tanem/react-nprogress'
// import React from 'react'

// const useStyles = makeStyles<
//   Theme,
//   Pick<ReturnType<typeof useNProgress>, 'animationDuration' | 'isFinished'>
// >({
//   bar: ({ animationDuration }) => ({
//     transitionDuration: `${animationDuration}ms`,
//   }),
//   container: ({ animationDuration, isFinished }) => ({
//     opacity: isFinished ? 0 : 1,
//     pointerEvents: 'none',
//     transition: `opacity ${animationDuration}ms linear`,
//   }),
// })

// const Progress: React.FC<{ isAnimating: boolean }> = ({ isAnimating }) => {
//   const { animationDuration, isFinished, progress } = useNProgress({
//     isAnimating,
//   })
//   const classes = useStyles({ animationDuration, isFinished })

//   return (
//     <Container classes={{ root: classes.container }} disableGutters={true}>
//       <LinearProgress
//         classes={{ bar1Determinate: classes.bar }}
//         value={progress * 100}
//         variant="determinate"
//       />
//     </Container>
//   )
// }

// export default Progress
