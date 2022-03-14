import propTypes from 'prop-types';
import Styled from './Button.styles';

function Button({ children, onClick }) {
  return <Styled.Button onClick={onClick}>{children}</Styled.Button>;
}

Button.propTypes = {
  children: propTypes.node.isRequired,
  onClick: propTypes.func,
};

Button.defaultProps = {
  onClick: () => {},
};

export default Button;
