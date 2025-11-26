declare module '@theme/IdealImage' {
  import type { ComponentType, ImgHTMLAttributes } from 'react';

  export interface IdealImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
    img: {
      src: string;
      preSrc: string;
      width: number;
      height: number;
    } | string;
    alt?: string;
    className?: string;
  }

  const IdealImage: ComponentType<IdealImageProps>;
  export default IdealImage;
}
