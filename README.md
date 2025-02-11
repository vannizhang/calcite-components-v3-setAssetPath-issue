## Getting Started

Before you start, ensure you have the latest version of [Node.js](https://nodejs.org/en/) and NPM installed. The current Long Term Support (LTS) release is recommended.

1. Fork this repository and clone your fork to your local machine:
    ```sh
    git clone https://github.com/vannizhang/calcite-components-v3-setAssetPath-issue.git
    ```

2. Navigate to the project's root directory and install the necessary packages:
    ```sh
    npm install
    ```

3. To run and test the application locally (http://localhost:8080):
    ```sh
    npm run start
    ```
    This command starts a server instance and listens for connections on port `8080`.

## Issue with `setAssetPath`

Navigate to the entry point of the application at `./src/index.tsx` and comment out the line that sets the asset path:
```ts
// setAssetPath('https://js.arcgis.com/calcite-components/2.13.2/assets');
```

Run the application again, and you will notice the launch icon is missing. The console will display the following error message:

![Error Screenshot](./public/error-screenshot.jpg)
