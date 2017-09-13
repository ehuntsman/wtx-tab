# Wavetronix Chrome New Tab Extension
Created with HTML5, CSS, and E6 Javascript

[Chrome Developer Dashboard](https://chrome.google.com/webstore/developer/dashboard)
_Unknown if multiple people/accounts can edit same chrome extension._

## View Development on Chrome Extensions
In your menu, click Window/Extensions. At the top, click `Developer Mode`. In doin this, you'll allow the option to add your own unpacked extensions to work on.

Click `Load unpacked extension...` and select the folder where the extension is located. The folder will likely be called `wtx-tab` if you cloned from this repository.

Make sure all other new tab extensions are turned off, including the official `Wavetronix Tab` extension. Enable the new `Wavetronix Tab`, which will have `Loaded from: ~/Development/ect`, where your file is located.

Once enabled, any changes made and saved will appear on a new chrome tab on refresh.

## File Setup
All styles are in saved in the `css` folder.

All fonts are saved in the `fonts` folder.

All images are stored in the `images` folder.

All javascript files are located in the `js` folder.

The main folder contains an `index.html`, `manifest.json`, and this `README.md`.

## Deployment
#### Update the manifest.json
Once all files are saved and ready to go, open the `manifest.json` file and on line 4 change the version number.
If the change is a bug fix or small change, update the last number only. If the change is significant and changes the experience for the user, change the middle number and set the last number to 0. If the change is an overhaul and requires the user to see a completely different experience, _or_ the code is overhauled to a new language or version, update the first number and change the middle and last number to 0.
#### Zip Folder
When the `manifest.json` file is updated, compress the enitre folder into a zip file. On a Mac, this can be done by right clicking the folder and selecting compress.
#### GitHub
Push your changes up to GitHub.
#### Upload to Chrome Dashboard
[Chrome Developer Dashboard](https://chrome.google.com/webstore/developer/dashboard)
Go to the Chrome Developer Dashboard and select `Edit` for the `Wavetronix Tab`. Then select `Upload Updated Package`. Click `Choose file` and select the newly created .zip file from your computer. Then select `upload`.
Once the file is finished uplaoding, click back to `Wavetronix Tab` on the breadcrumb menu at the top of the page.
In the Detailed Description, add a small comment about the update you just made.
Make any other changes on the page that need to be made, then select `Publish changes`.
It takes up to an hour for the newly packaged extension to appear in the store. Individuals might take up to 24 hours before their extension is updated (especially if they do not shut down their computers/Chrome).