import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const PageCollumn = styled.div`
  height: 100vh;
  ${({ styles }) => css`
    ${styles.alignItems ? `align-items: ${styles.alignItems};` : ''}
    background-color: ${styles.backgroundColor};
    ${styles.display ? `display: ${styles.display};` : ''}
    ${styles.flex ? `flex: ${styles.flex};` : ''}
    ${styles.justifyContent ? `justify-content: ${styles.justifyContent};` : ''}
    width: ${styles.width};
  `}
`;

PageCollumn.propTypes = {
  styles: PropTypes.shape({
    backgroundColor: PropTypes.string.isRequired,
    flex: PropTypes.number.isRequired,
  }).isRequired,
};

export default PageCollumn;
