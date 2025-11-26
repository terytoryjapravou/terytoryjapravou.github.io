// Type declarations for image assets

// When using @docusaurus/plugin-ideal-image
interface IdealImageModule {
  default: {
    src: string;
    preSrc: string;
    width: number;
    height: number;
  };
}

declare module '*.png' {
  const value: IdealImageModule['default'];
  export default value;
}

declare module '*.jpg' {
  const value: IdealImageModule['default'];
  export default value;
}

declare module '*.jpeg' {
  const value: IdealImageModule['default'];
  export default value;
}

declare module '*.gif' {
  const value: IdealImageModule['default'];
  export default value;
}

declare module '*.webp' {
  const value: IdealImageModule['default'];
  export default value;
}

declare module '*.avif' {
  const src: string;
  export default src;
}

declare module '*.ico' {
  const src: string;
  export default src;
}

declare module '*.bmp' {
  const src: string;
  export default src;
}

declare module '*.tiff' {
  const src: string;
  export default src;
}

declare module '*.tif' {
  const src: string;
  export default src;
}
