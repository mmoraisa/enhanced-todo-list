import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const PageCollumn = styled.div`
  height: 100vh;
  ${({ styles }) => css`
    background-color: ${styles.backgroundColor};
    width: ${styles.width};
  `}
`;

PageCollumn.propTypes = {
  styles: PropTypes.shape({
    backgroundColor: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
  }).isRequired,
};

export default PageCollumn;
