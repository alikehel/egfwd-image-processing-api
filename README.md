# egfwd-image-processing-api

## Overview

This is an API that can be used in two different ways. The first, as a simple placeholder API that allows us to place images into our frontend with the size set via url parameters. The second use case is as a library to serve properly scaled versions of our images to the frontend to reduce page load size.

## Requirement

* Node.JS installed
* Dependencies In `packege.json` file

## How to build and start the server

### 1. Install all dependencies

`npm install`

### 3. Start the Server

`npm run start`

This command will start the server running on port `3000`. And the front end homepage will be accessible at `http://localhost:3000`

## Testing, Prettier and Linting

### 1. Linting

`npm run lint`

### 2. Prettier

`npm run prettier`

### 3. Testing

`npm run test`

## Endpoints and Functionality

### Resize endpoint

`http://localhost:3000/convert?imageNmae=<width>&width=<width>&height=<height>`

`http://localhost:3000/convert?imageName=image1&width=500&height=500`

This endpoint is used to resize all images found in the `assets/images` directory and saving them in the `assets/thumbnails` directory. Then, it will serve these images to the frontend to be viewed.

If a dimension is given that has all images already resized to that dimension, no futher resizing will take place. Instead, the already resized images with the appropriate dimensions will be pushed to the frontend.
