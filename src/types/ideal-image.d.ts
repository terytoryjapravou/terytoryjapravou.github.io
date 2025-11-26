declare module '@theme/IdealImage' {
  import type { ComponentType, ImgHTMLAttributes } from 'react';

  export interface IdealImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
    img: string;
    alt?: string;
    className?: string;
  }

  const IdealImage: ComponentType<IdealImageProps>;
  export default IdealImage;
}
