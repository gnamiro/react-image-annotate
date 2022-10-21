# React Image Annotate

Retinal Image annotator, Designed in NBIC lab

## Features

- Simple input/output format
- Bounding Box, Circle and Polygon Annotation
- Zooming, Scaling, Panning
- Multiple Images
- Cursor Crosshair

![Screenshot of Annotator](./imgs/Screenshot%20from%202022-10-21%2023-40-37.png)


To get the proper fonts, make sure to import the Inter UI or Roboto font, the
following line added to a css file should suffice.

## Props

All of the following properties can be defined on the Annotator...

| Prop                     | Type (\* = required)                             | Description                                                                             | Default       |
| ------------------------ | ------------------------------------------------ | --------------------------------------------------------------------------------------- | ------------- |
| `taskDescription`        | \*`string`                                       | Markdown description for what to do in the image.                                       |               |
| `allowedArea`            | `{ x: number, y: number, w: number, h: number }` | Area that is available for annotation.                                                  | Entire image. |
| `regionTagList`          | `Array<string>`                                  | Allowed "tags" (mutually inclusive classifications) for regions.                        |               |
| `regionClsList`          | `Array<string>`                                  | Allowed "classes" (mutually exclusive classifications) for regions.                     |               |
| `imageTagList`           | `Array<string>`                                  | Allowed tags for entire image.                                                          |               |
| `imageClsList`           | `Array<string>`                                  | Allowed classes for entire image.                                                       |               |
| `enabledTools`           | `Array<string>`                                  | Tools allowed to be used. e.g. "select", "create-point", "create-box", "create-polygon" | Everything.   |
| `showTags`               | `boolean`                                        | Show tags and allow tags on regions.                                                    | `true`        |
| `selectedImage`          | `string`                                         | URL of initially selected image.                                                        |               |
| `images`                 | `Array<Image>`                                   | Array of images to load into annotator                                                  |               |
| `showPointDistances`     | `boolean`                                        | Show distances between points.                                                          | `false`       |
| `pointDistancePrecision` | `number`                                         | Precision on displayed points (e.g. 3 => 0.123)                                         |               |
| `onExit`                 | `MainLayoutState => any`                         | Called when "Save" is called.                                                           |               |
| `RegionEditLabel`        | `Node`                                           | React Node overriding the form to update the region (see [`RegionLabel`](https://github.com/waoai/react-image-annotate/blob/master/src/RegionLabel/index.js))                                                          |               |
| `allowComments`          | `boolean`                                        | Show a textarea to add comments on each annotation.                                     | `false`       |
| `hidePrev`               | `boolean`                                        | Hide `Previous Image` button from the header bar.                                       | `false`       |
| `hideNext`               | `boolean`                                        | Hide `Next Image` button from the header bar.                                           | `false`       |
| `hideClone`              | `boolean`                                        | Hide `Clone` button from the header bar.                                                | `false`       |
| `hideSettings`           | `boolean`                                        | Hide `Settings` button from the header bar.                                             | `false`       |
| `hideFullScreen`         | `boolean`                                        | Hide `FullScreen/Window` button from the header bar.                                    | `false`       |
| `hideSave`               | `boolean`                                        | Hide `Save` button from the header bar.                                                 | `false`       |

## Developers

### Development

This project uses [react-storybook](https://storybook.js.org/). To begin developing run the following commands in the cloned repo.

1. `yarn install`
2. `yarn storybook`

A browser tab will automatically open with the project components.

See more details in the [contributing guidelines](https://github.com/waoai/react-image-annotate/wiki/Setup-for-Development).

### Icons

Consult these icon repositories:

- [Material Icons](https://material.io/tools/icons/)
- [Font Awesome Icons](https://fontawesome.com/icons?d=gallery&m=free)


## Forked from 

https://github.com/UniversalDataTool/react-image-annotate
