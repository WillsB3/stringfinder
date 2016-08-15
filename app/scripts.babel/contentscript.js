'use strict';

console.log('\'Allo \'Allo! Content script');

var NODETYPES_TO_IGNORE = [
  'script',
  'iframe'
];

// Get all nodes in the document.
var nodes = document.querySelectorAll('*');
var content;

// Convert NodeList to array.
nodes = Array.prototype.slice.call(nodes);

// TODO: Filter node type...

// Extract node content
content = nodes.map(x => x.textContent.trim());

// Filter out empty nodes
content = content.filter(t => {
  return !!t;
});

// Filter to only unique strings
content.filter(function(value, index, self) { 
  return self.indexOf(value) === index;
});

content = new Set(content);

for (var item of content) {
  console.log(item);
}

// console.log(content);
