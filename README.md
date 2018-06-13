# Setup
- **Clone or download** this repo on your local hard drive
- Install Visual Studio 2017: https://www.visualstudio.com/thank-you-downloading-visual-studio/?sku=Community&rel=15 
- Launch Visual Studio 2017
- Go to **"File" -> "Open" -> "Web Site..."** and navigate to your folder where the repo has been copied
- OR host the the file in node.js, IIS or your favorite way to host a web server
- **Launch index.html in MS Edge** to check the site is working as expected

# Demos Script
## 1 - W3C Manifest
- Navigate to https://southridge.azurewebsites.net/ and show quickly you can play some videos
- Now navigate to https://www.pwabuilder.com and enter the URL: https://southridge.azurewebsites.net/ into the first textbox
- Click **"Get Started"**
- Show it generates the **W3C Manifest** for you and that you can either download or copy it to include in your project
- **Add a new description**: "the best video site on the web" and show it has updated dynamically the manifest on the right

## 2 - Service Worker

- Go back to **PWA Builder** where you left it off and go to **step 2** to configure a new service worker
- Select the **"Cache-first network"** option
- Show the local version of the same PWA running
- Press **F12 in Edge** and show the **"Debugger" tab** and then click on the **"Service Workers"** node to show that no service worker is currently installed
- Go back to **PWA Builder** and click on the **"copy" button** on the top right to **copy the code to register** the service worker in the clipboard
- Jump into VS Code, in the **index.html** page inside the *if(navigator.serviceWorker) {}* code block
- **Paste** the registration code of the Service Worker **inside this block** and save the file
- Go back to **PWA Builder** site and now **copy the code of the service worker** itself in the clipboard
- **Paste** it in Visual Studio Code inside the **pwabuilder-sw.js** file and save it
- Go back to the **localhost** version of the PWA and **press F5** to refresh the page
- In F12, **show the Console tab** to check that the service worker has been registered successfully
- In F12, show again the **Debugger tab** and the Service Workers node. We now have a SW running on our site.
- In F12, **click on "Inspect"** the pwabuilder-sw.js file, new instance of the F12 tool will be created attached to the Service Worker
- Navigate to the **Console tab** and click the clear button to clean the currently displayed logs
- **Refresh the site** to now see the various assets being served by the SW's cache from the Console tab 

## 3 - Publish to the store

- Go back to **PWA Builder**: https://preview.pwabuilder.com/ and still using https://southridge.azurewebsites.net/, go to **step 3**
- Click on **Generate AppX** and download it
- Inside the "Store Packages" / "windows10" folder, execute the **"test_install.ps1"** script to side-load the PWA
- **Launch the "SouthRidge" application** from the Start Menu

## 4 - Windows API in a PWA

- Navigate to https://preview.pwabuilder.com/ and click on the **"Windows APIs" tab**
- Choose the **"Toggle Compact Overlay mode"** option and copy the code
- Press **F12** inside the installed side-loaded "SouthRidge" app
- **Paste** the code into the **F12 console tab** to execute it
- Launch a video inside the app to display the video player
- Then **copy the usage code** from the site and **paste** it in the F12 **console tab** to show the application's window will be resized to compact mode thanks to that

# Contributing

This project welcomes contributions and suggestions.  Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.microsoft.com.

When you submit a pull request, a CLA-bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., label, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.
