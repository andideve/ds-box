import React from 'react';
import {
  BackgroundProps,
  BorderProps,
  ColorProps,
  FlexboxProps,
  GridProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TypographyProps,
} from '@andideve/styled-system';
import { Theme } from '@andideve/ds-core';

export type SystemProps = BackgroundProps &
  BorderProps &
  ColorProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  PositionProps &
  ShadowProps &
  SpaceProps &
  TypographyProps;

interface ExtendProps extends SystemProps {
  color?: string; // override for `SystemProps.color`
}

export interface BaseBoxProps extends ExtendProps {
  ref?: React.Ref<any>;
  as?: React.ElementType;
  theme?: Theme;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export type BoxProps = BaseBoxProps & React.HTMLAttributes<HTMLDivElement>;
