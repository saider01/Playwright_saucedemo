import { devices, PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
    testMatch: "fixtures.spec.ts",
    reporter :[["list"], ["junit", {outputFile: "reports/result.xml"}]],
    timeout: 60000, //ms
    retries: 1,
    projects:[
        {
            name:'Chrome_',
            use: {
                    browserName:'chromium',
                    channel: 'chrome',
            }
        }
        /*{
            name: 'Desktop_Safari',
            use: {
                browserName: 'webkit',
                viewport: {width: 1200, height: 750},
            }
        },
        {
            name: 'Mobile_Crome',
            use: devices['Pixel 5'],
        },
        {
            name: 'Mobile_Safari',
            use: devices['iPhone 12'],
        },
        {
            name: 'Desktop_Firefox',
            use: {
                browserName: 'firefox',
                viewport: {width: 800, height: 600},
            }
        }*/
    ],

    
    use:{
        baseURL:"https://www.saucedemo.com/",
        screenshot: "only-on-failure",
        video: "retry-with-video",
        storageState: "Cart.json"
    }
    /*
    use:{
        baseURL:"https://www.saucedemo.com/",
        screenshot: "only-on-failure",
        video: "retry-with-video"
    }*/
}

export default config;