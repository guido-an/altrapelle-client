import styled from 'styled-components';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

export default function IntroHeading({ children, bgColor }) {
  const variants = {
    hidden: { opacity: 0, y: 'calc(100vw * -0.05)', x: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
  };
  return (
    <motion.main
      variants={variants} // Pass the variant object into Framer Motion
      initial="hidden" // Set the initial state to variants.hidden
      animate="enter" // Animated state to variants.enter
      transition={{ type: 'linear', delay: 0.5, duration: 0.5 }} // Set the transition to linear
    >
      <Container bgColor={bgColor}>
        <Title bgColor={bgColor}>{children}</Title>
      </Container>
    </motion.main>
  );
}

const Container = styled.div`
  background-color: ${({ bgColor, theme }) =>
    bgColor === 'blue' ? theme.colors.blue : theme.colors.backgroundGrey};
  border-radius: 4px;
  padding: 20px;
  margin-top: 10px;
`;

const Title = styled.h1`
  color: ${({ bgColor, theme }) => (bgColor === 'blue' ? '#fff' : theme.colors.blue)};
  text-align: ${({ align }) => align};
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 120%;
  text-align: center;
`;

const { string } = PropTypes;

IntroHeading.propTypes = {
  children: string.isRequired,
  bgColor: string,
};
