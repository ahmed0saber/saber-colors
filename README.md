# Saber Colors

A light-weight JavaScript library providing essential color manipulation utilities.

## Installation

You can install the library using npm:

`npm i saber-colors`

## CDN

You can also use the library via CDN by adding the following code to your html file:

`<script src="https://cdn.statically.io/gh/ahmed0saber/saber-colors/main/dist/saber-colors.min.js"></script>`

and using our API through the `SaberColors` object, such as the following example:

`SaberColors.isHex('ff0000')`

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

### `getAccessibilityStatusByColors(color1, color2)`

Checks if the contrast ratio between two colors meets accessibility standards.

**Parameters:**
- `color1` (string | array): The first color.
- `color2` (string | array): The second color.

**Returns:**
- `object`: An object with accessibility results for graphical user interface, large text, and normal text.

### `getAccessibilityStatusByContrastRatio(contrastRatio)`

Checks if a given contrast ratio meets accessibility standards.

**Parameters:**
- `contrastRatio` (number): The contrast ratio to check.

**Returns:**
- `object`: An object with accessibility results for graphical user interface, large text, and normal text.

### `getRandomHexColor()`

Returns a randomly generated Hex color.

**Returns:**
- `string`: The Hex color.

### `getRandomRgbColorArray()`

Returns a randomly generated RGB color.

**Returns:**
- `array`: The RGB color array.

### `isRgb(rgbArray)`

Checks if a given array is a valid RGB color.

**Parameters:**
- `rgbArray` (array): The RGB color array to check.

**Returns:**
- `boolean`: `true` if the array is a valid RGB color, `false` otherwise.

## Tests

To run the tests for this library, use the following command:

`npm run test`

## Build

To build this library into vanilla JS, use the following command:

`npm run build`

## Contributing

Contributions are welcome! If you would like to contribute to saber-colors.js, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes.
4. Write test cases if possible.
4. Run the test suites and modify your code if anyone failed till all test suites succeed.
5. Commit your changes
6. Push your changes to your fork.
7. Submit a pull request to the main repository.

If you don't have any idea about what to contribute with, here are some ideas:

- **Feature Requests**: Suggest new features on the `issues` page.
- **Bug Reports**: Report errors or bugs on the `issues` page.
- **Issue Resolution**: Address validated issues from the `issues` page.
- **Code Updates and Refactoring**: Refactor code or make updates to enhance the project.
- **Documentation**: Help improve the project's documentation, including the `README.md` file.
- **Add Test Cases**: Add more test cases that can help keep the code quality high over time.

For more detailed guidance on contributing to open source projects, check out this YouTube playlist: [Contributing to Open Source Projects (in Arabic)](https://youtube.com/playlist?list=PLNknCqb-phEjNHT607vp-4e4o3wgK9SoN).

## License

This project is licensed under the MIT License - see the [LICENSE.txt](LICENSE.txt) file for details.
