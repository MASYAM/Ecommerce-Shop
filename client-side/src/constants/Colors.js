import color from "color";
import { CurrentTheme } from "./Theme";

const defaultColors = {
    primary: '#db0011',
    secondary: '#af000d',
    third: '#FFC107',
    get  primaryLighter() {
        return color(this.primary)
        .lighten(0.1)
        .hex();
    },
    get primaryMoreLighter () {
        return color(this.primary)
        .lighten(0.2)
        .hex();
    },
    get primaryDarker () {
        return color(this.primary)
        .darken(0.1)
        .hex();
    },
    get primaryMoreDarker () {
        return color(this.primary)
        .darken(0.2)
        .hex();
    },
    get secondaryLighter () {
        return color(this.secondary)
        .lighten(0.1)
        .hex();
    },
    get secondaryMoreLighter () {
        return color(this.secondary)
        .lighten(0.2)
        .hex();
    },
    get secondaryDarker () {
        return color(this.secondary)
        .darken(0.1)
        .hex();
    },
    get secondaryMoreDarker () {
        return color(this.secondary)
        .darken(0.2)
        .hex();
    },
    supportingBgColor: '#c7c7c7',
    supportingColor: '#A0A0A0',
    nonSelectedColor: '#c7c7c7',
    normalButtonTextColor: '#1A1AA0',
    cancelButtonTextColor: '#c7c7c7',
    confirmButtonTextColor: 'green',
}


export default  {
    ... defaultColors,
    ... CurrentTheme.Colors,
};
