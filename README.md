# Saber Colors

A light-weight JavaScript library providing essential color manipulation utilities.

## Installation

You can install the library using npm:

`npm i saber-colors`

## CDN

You can also use the library via CDN by adding the following code to your html file:

`<script src="https://cdn.statically.io/gh/ahmed0saber/saber-colors/main/dist/saber-colors.min.js"></script>`

## API

### `isHex(color)`

Checks if a given string is a valid HEX color.

**Parameters:**
- `color` (string): The color string to check.

**Returns:**
- `boolean`: `true` if the color is a valid HEX, `false` otherwise.

### `parseColor(color)`

Parses a color string or array and returns an RGB array.

**Parameters:**
- `color` (string | array): The color to parse.

**Returns:**
- `array`: The RGB array.

### `convertRgbArrayToHex(rgb)`

Converts an RGB array to a HEX color string.

**Parameters:**
- `rgb` (array): The RGB array to convert.

**Returns:**
- `string`: The HEX color string.

### `convertHexToRgbArray(hex)`

Converts a HEX color string to an RGB array.

**Parameters:**
- `hex` (string): The HEX color string to convert.

**Returns:**
- `array`: The RGB array.

### `getRelativeLuminance(color)`

Calculates the relative luminance of a color.

**Parameters:**
- `color` (string | array): The color to calculate luminance for.

**Returns:**
- `number`: The relative luminance.

### `getContrastRatio(color1, color2)`

Calculates the contrast ratio between two colors.

**Parameters:**
- `color1` (string | array): The first color.
- `color2` (string | array): The second color.

**Returns:**
- `number`: The contrast ratio.

### `isAccessibleByColors(color1, color2)`

Checks if the contrast ratio between two colors meets accessibility standards.

**Parameters:**
- `color1` (string | array): The first color.
- `color2` (string | array): The second color.

**Returns:**
- `object`: An object with accessibility results for graphical user interface, large text, and normal text.

### `isAccessibleByContrastRatio(contrastRatio)`

Checks if a given contrast ratio meets accessibility standards.

**Parameters:**
- `contrastRatio` (number): The contrast ratio to check.

**Returns:**
- `object`: An object with accessibility results for graphical user interface, large text, and normal text.

## Tests

To run the tests for this library, use the following command:

`npm run test`

## Build

To build this library into vanilla JS, use the following command:

`npx webpack --config webpack.config.cjs`

## License

This project is licensed under the MIT License - see the [LICENSE.txt](LICENSE.txt) file for details.
