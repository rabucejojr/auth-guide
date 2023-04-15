import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import path from "path";

export default defineConfig({
    plugins: [
        laravel({
            input: [
                "resources/sass/app.scss",
                "resources/sass/_variable.scss",
                "resources/js/app.js",
                "resources/js/scripts.js",
                "resources/js/datatables-simple-demo.js",
                "resources/assets/demo/chart-area-demo.js",
                "resources/assets/demo/chart-bar-demo.js",
                "resources/assets/demo/chart-pie-demo.js",
                "resources/assets/demo/datatables-demo.js",
                "resources/assets/demo/img/error-404-monochrome.svg",
                "resources/css/app.css",
                "resources/css/styles.css",
            ],
            refresh: true,
        }),
    ],
});
