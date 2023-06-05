interface PaletteColor {
    light?: string;
    main: string;
    dark?: string;
}

interface Palette {
    primary: PaletteColor;
    info: PaletteColor;
    success: PaletteColor;
    error: PaletteColor;
}

export type ColorPallet = Palette;
