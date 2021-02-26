import React from 'react';
import classnames from 'classnames';
import {
  StandardColor,
  Size,
  colorClass,
  defaultComponent,
  sizeClass,
  ReactComponentWithClass,
  BaseComponentProps,
} from './utils';

type HTMLButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export type ButtonProps = BaseComponentProps<
  {
    color?: StandardColor;
    size?: Size;
    outline?: boolean;
    animated?: boolean;
    loading?: boolean | 'left' | 'right';
    hideText?: boolean;
    close?: boolean;
    shape?: 'default' | 'pilled' | 'circle';
  },
  HTMLButtonProps,
  'button' | 'div' | 'submit'
>;

const DefaultButton: React.FunctionComponent<HTMLButtonProps> = (p) => (
  <button {...p} />
);

const DefaultDiv = defaultComponent('div', 'btn');

const DefaultSubmit: ReactComponentWithClass = ({ children, ...p }) => (
  <input type="submit" value={String(children)} {...p} />
);

export const Button: React.FunctionComponent<ButtonProps> = ({
  as = 'button',
  color = '',
  size = '',
  outline,
  animated,
  loading,
  hideText,
  close,
  shape = 'default',
  ...rest
}) => {
  const Component =
    as === 'div'
      ? DefaultDiv
      : as === 'submit'
      ? DefaultSubmit
      : as === 'button'
      ? DefaultButton
      : as;

  return (
    (
      <Component
        className={classnames(
          {
            outline: Boolean(outline),
            'btn-animated': Boolean(animated),
            animated: Boolean(loading),
            loading: Boolean(loading),
            'loading-left': loading === 'left',
            'loading-right': loading === 'right',
            'hide-text': Boolean(hideText),
            'btn-close': Boolean(close),
            [`btn--${shape}`]: Boolean(shape !== 'default'),
          },
          colorClass('btn', color),
          sizeClass('btn', size),
        )}
        {...rest}
      />
    ) || <button />
  );
};

export default Button;
