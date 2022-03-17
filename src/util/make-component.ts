import { FC } from 'react';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface DefaultProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  component?: keyof React.ReactDOM | React.ComponentType;
}

// TODO: forward refs
/**
 * This function will give the correct types to the component it is wrapping.
 * @param component Component to wrap
 * @returns
 */
export function makeComponent<T>(component: any, defaultComponent: DefaultProps['component'] = 'div'): FC<DefaultProps & T> {
  const Component = component ? component : defaultComponent;
  return Component as FC<DefaultProps & T>;
}
