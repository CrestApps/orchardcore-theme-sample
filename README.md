This project is intended to allow easy theme creation.

To create a new theme copy the `src/Themes/ThemeTemplate` into a new folder in `src/Themes`

In the theme folder, the file `Assets.json` file is to allow you to compile multiple input file into a single output file.

To install custom packages for your theme. Change directory to the new theme folder, and execute `npm install your-package-name`

## Getting started
Execute `npm install` in the root of the project. This command will install all the needed packages.

To build the resources, execute `gulp` command which will build the final files located in the `wwwroot` folder of every theme.

Here are some best practices to use when designing the site using Figma. 

### Defined the following color names
- Primary
- Secondary
- Info
- Dark
- Light
- Danger (red)
- Success (green)
- Warning (yellow/orange)
- Black
- White

### Use Layout Grid to align content
- Make the layout "Columns" type using 12 columns
- Center the grid using 86 and 24 for the gutter
