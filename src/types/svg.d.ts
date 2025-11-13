// Type declarations for SVG assets

declare module '*.svg' {
  import React from 'react';

  // SVG can be imported as a React component or as a URL string
  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  const src: string;

  export { ReactComponent };
  export default src;
}
