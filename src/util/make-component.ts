import { FC } from 'react';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface DefaultProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  component?: string | FC;
}

export function makeComponent<T>(component: any): FC<DefaultProps & T> {
  const Component = component ? component : ('div' as any);
  return Component as FC<DefaultProps & T>;
}
