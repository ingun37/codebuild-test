const puppeteer = require('puppeteer');
const path = require('path')
const fs = require("fs");

const binPath = puppeteer.executablePath()

const dirPath = path.dirname(binPath)
const libPath = path.resolve(dirPath, "libEGL.so")

puppeteer.launch({
    // headless: false,
    args: ["--no-sandbox", "--disable-web-security"],
}).then(browser => {
    return browser.newPage().then(page=>{
        return page.goto("https://threejs.org/examples/#webgl_geometry_cube")
    }).then(response => {
        return new Promise(done => {
            setTimeout(done, 5000);
        })
    }).then(()=>{
        return browser.close()
    })
})