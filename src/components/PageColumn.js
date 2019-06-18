import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const PageColumn = styled.div`
  height: 100vh;
  overflow-y: auto;
  ${({ styles }) => css`
    ${styles.alignItems ? `align-items: ${styles.alignItems};` : ''}
    background-color: ${styles.backgroundColor};
    ${styles.boxSizing ? `box-sizing: ${styles.boxSizing};` : ''}
    ${styles.display ? `display: ${styles.display};` : ''}
    ${styles.flex ? `flex: ${styles.flex};` : ''}
    ${styles.justifyContent ? `justify-content: ${styles.justifyContent};` : ''}
    ${styles.padding ? `padding: ${styles.padding};` : ''}
    width: ${styles.width};
  `}
`;

PageColumn.propTypes = {
  styles: PropTypes.shape({
    backgroundColor: PropTypes.string.isRequired,
    flex: PropTypes.number.isRequired,
  }).isRequired,
};

export default PageColumn;
