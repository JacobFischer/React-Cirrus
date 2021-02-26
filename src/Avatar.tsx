import React from 'react';
import {
  Size,
  defaultComponent,
  sizeClass,
  BaseComponentProps,
} from './utils';

export type AvatarProps = BaseComponentProps<{
  size?: Size;
  name?: string;
}>;

const DefaultAvatar = defaultComponent('div', 'avatar');

export const Avatar: React.FunctionComponent<AvatarProps> = ({
  as,
  size,
  name = '?',
  ...rest
}) => {
  const Component = as || DefaultAvatar;

  return (
    (
      <Component
        className={sizeClass('avatar-', size)}
        data-text={name}
        {...rest}
      />
    ) || <button />
  );
};

export default Avatar;
