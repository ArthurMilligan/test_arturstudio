import React from "react";
import { FC, Suspense, lazy, useMemo } from "react";

interface IIconProps{
    name: 'checked' | 'unchecked'|'edit';
    size: number;
}

const Icon: FC<IIconProps> = ({name, size}) =>{
    const IconSVG = useMemo(
        () =>
          lazy(
            () =>
              import(
                `./icons/${name}.svg`
              )
          ),
        [name]
      );

      return (
        <Suspense fallback={<svg width={size} height={size} />}>
          <IconSVG
            viewBox='0 0 24 24'
            width={size}
            height={size}
          />
        </Suspense>
      );
}

export default Icon;