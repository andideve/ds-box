import React, { forwardRef } from 'react';

import Styled from './box.styled';
import { BaseBoxProps } from './box.types';

export function createBox<T = HTMLDivElement, P = React.HTMLAttributes<HTMLDivElement>>(
  tag: keyof JSX.IntrinsicElements = 'div',
) {
  const Component = Styled.withComponent(tag);
  return forwardRef<T, P & BaseBoxProps>(({ children, ...rest }, ref) => (
    <Component ref={ref} {...rest}>
      {children}
    </Component>
  ));
}

export const Box = createBox();

export default Box;
