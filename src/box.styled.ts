import styled, { CSSObject, FunctionInterpolation } from '@emotion/styled';
import {
  compose,
  createSfp,
  background,
  border,
  color,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
  typography,
} from '@andideve/styled-system';

import { SystemProps, BoxProps } from './box.types';

const systemProps = compose<SystemProps>(
  background,
  border,
  color,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
  typography,
);
const shouldForwardProp = createSfp(systemProps.propNames);

const styles: (CSSObject | FunctionInterpolation<BoxProps>)[] = [systemProps];

export const Styled = styled('div', { shouldForwardProp })(...styles);

export default Styled;
