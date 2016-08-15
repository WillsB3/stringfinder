'use strict';

chrome.runtime.onInstalled.addListener(details => {
  console.log('previousVersion', details.previousVersion);
});

chrome.browserAction.setBadgeText({text: '\'Allo'});

console.log('\'Allo \'Allo! Event Page for Browser Action');

chrome.browserAction.onClicked.addListener(tab => {
  console.log('Searching for strings on ' + tab.url);
  chrome.tabs.executeScript(null, { file: 'scripts/contentscript.js'} );
});
