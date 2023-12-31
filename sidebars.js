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
  // homepage: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  // myAutogeneratedSidebar: [
  //   {
  //     type: 'autogenerated',
  //     dirName: '.', // '.' means the current docs folder
  //   },
  // ],

  homepage: [
    {
      type: "category",
      label: "Getting Started",
      className: "homepage-sidebar-item",
      link: {
        type: "doc",
        id: "getting-started",
      },
      customProps: {
        sidebar_icon: "BiRocket",
      },
      collapsed: true,
      items: [
        {
          type: "category",
          label: "Installation",
          className: "homepage-sidebar-item",
          collapsed: true,
          items: [
            {
              type: "doc",
              id: "getting-started/installation/windows",
              label: "Windows",
              className: "docpage-sidebar-item",
            },
            {
              type: "doc",
              id: "getting-started/installation/linux",
              label: "Linux",
              className: "docpage-sidebar-item",
            }
          ],
        },
        {
          type: "category",
          label: "Setup Network Topology",
          className: "homepage-sidebar-item",
          collapsed: true,
          items: [
            {
              type: "doc",
              id: "getting-started/setup-topology/overview",
              label: "Overview",
              className: "docpage-sidebar-item",
            },
            {
              type: "doc",
              id: "getting-started/setup-topology/vmware",
              label: "Setup for VMWare",
              className: "docpage-sidebar-item",
            },
            {
              type: "doc",
              id: "getting-started/setup-topology/qemu-kvm",
              label: "Setup for QEMU/KVM",
              className: "docpage-sidebar-item",
            },
            {
              type: "doc",
              id: "getting-started/setup-topology/test-network",
              label: "Test Network Topology",
              className: "docpage-sidebar-item",
            }
          ],
        },
        {
          type: "doc",
          id: "getting-started/first-test-case",
          label: "First Test Case",
          className: "docpage-sidebar-item",
        },
      ],
    },
    
  ],
};

module.exports = sidebars;
