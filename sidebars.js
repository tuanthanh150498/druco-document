/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  tutorialSidebar: [
    'introduce',
    {
      type: 'category',
      label: 'Products',
      items: [
        {
          type: 'doc',
          id: 'products-doc/create-doc',
        },
        {
          type: 'doc',
          id: 'products-doc/edit-doc',
        },
        {
          type: 'doc',
          id: 'products-doc/delete-doc',
        },
        {
          type: 'doc',
          id: 'products-doc/categories-doc',
        },
        {
          type: 'doc',
          id: 'products-doc/tags-doc',
        },
        {
          type: 'doc',
          id: 'products-doc/brands-doc',
        },
      ],
    },
  ],

};

module.exports = sidebars;
