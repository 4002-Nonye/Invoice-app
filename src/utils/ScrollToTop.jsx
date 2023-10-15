import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import PropTypes from 'prop-types';

function ScrollToTop({ children }) {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    children
  );
}

export default ScrollToTop;

// ScrollToTop.defaultProps = {
//   children: [],
// };

// ScrollToTop.propTypes = {
//   children: PropTypes.node,

// };
