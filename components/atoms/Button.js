import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from 'next/link';
export default function Button({
  children,
  href,
  margin,
  bgColor,
  bgHover,
  color,
  colorHover,
  width,
  handleOnClick,
}) {
  const button = (
    <MyButton
      margin={margin}
      bgColor={bgColor}
      bgHover={bgHover}
      colorHover={colorHover}
      width={width}
      onClick={handleOnClick}
      color={color}
      as={!href && 'button'} // with no href this works as a button (for submitting form)
    >
      {children}
    </MyButton>
  );

  return href ? (
    <Link scroll={false} href={href}>
      {button}
    </Link>
  ) : (
    button
  );
}

const MyButton = styled.a`
  background-color: ${({ theme, bgColor }) => bgColor || theme.colors.blue};
  color: ${({ color }) => color || '#fff'};
  padding: 13px 0;
  border-radius: 35px;
  border: none;
  font-size: 14px;
  display: block;
  width: ${({ width }) => width || '200px'};
  margin: ${({ margin }) => margin || '40px auto 0'};
  text-align: center;
  box-shadow: ${({ theme }) => theme.boxShadow};
  font-weight: 300;
  letter-spacing: 0.2px;
  &:hover {
    cursor: pointer;
    background-color: ${({ theme, bgHover }) => bgHover || theme.colors.lightBlue};
    color: ${({ colorHover }) => colorHover || '#fff'};
  }
`;

const { string, func } = PropTypes;
Button.propTypes = {
  children: string.isRequired,
  href: string,
  margin: string,
  bgColor: string,
  bgHover: string,
  colorHover: string,
  width: string,
  handleOnClick: func,
};
