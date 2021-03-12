import ColorThief from "colorthief";
import { useEffect, useState } from 'react';

type IPalette = {
  dominant: null | string
  palette: string[]
}

const arrayOfColorsToStyle = (arr: [number, number, number]) => {
  return `rgba(${arr[0]}, ${arr[1]}, ${arr[2]}, 1)`
}

export const usePalette = (imageUrl: string) => {
  const [colors, setColors] = useState({
    dominant: null,
    palette: []
  } as IPalette)

  useEffect(() => {
    const image = new Image();
    image.src = imageUrl;
    image.crossOrigin = 'Anonymous';

    image.onload = function () {
        const colorThief = new ColorThief();
        const palettes = colorThief.getPalette(this, 10);

        const mapOfPalet = palettes.map(palette => arrayOfColorsToStyle(palette))

        setColors({
          dominant: mapOfPalet[0],
          palette: mapOfPalet
        })
    }
  }, [imageUrl])

  return { colors }
}