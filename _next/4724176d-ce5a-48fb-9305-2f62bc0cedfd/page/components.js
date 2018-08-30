module.exports=__NEXT_REGISTER_PAGE("/components",function(){return{page:webpackJsonp([8],{312:function(e,n,a){e.exports=a(313)},313:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=a(0),m=a.n(t),o=a(16);a.n(o);n.default=function(e){var n=e.components;!function(e,n){if(null==e)return{};var a,t,m={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(m[a]=e[a]);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(m[a]=e[a])}}(e,["components"]);return m.a.createElement(o.MDXTag,{name:"wrapper",components:n},m.a.createElement(o.MDXTag,{name:"h1",components:n,props:{id:"components"}},"Components"),m.a.createElement(o.MDXTag,{name:"p",components:n},"MDX Docs includes several components to quickly create custom documentation sites.\nAll MDX Docs components' styles can be customized with ",m.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"theming.md"}},"theming"),"."),m.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"installation"}},"Installation"),m.a.createElement(o.MDXTag,{name:"p",components:n},"The MDX Docs components can be installed separately from ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"npm init docs")," with the following:"),m.a.createElement(o.MDXTag,{name:"pre",components:n},m.a.createElement(o.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-sh"}},"npm i mdx-docs\n")),m.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"layout"}},"Layout"),m.a.createElement(o.MDXTag,{name:"pre",components:n},m.a.createElement(o.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx"}},"import React from 'react'\nimport App, { Container } from 'next/app'\nimport { Layout } from 'mdx-docs'\n\nexport default class MyApp extends App {\n  static async getInitialProps ({ Component, router, ctx }) {\n    let page = {}\n    if (Component.getInitialProps) {\n      page = await Component.getInitialProps(ctx)\n    }\n    return { page }\n  }\n\n  render () {\n    const { Component, page } = this.props\n\n    return (\n      <Container>\n        <Layout {...this.props}>\n          <Component {...page} />\n        </Layout>\n      </Container>\n    )\n  }\n}\n")),m.a.createElement(o.MDXTag,{name:"p",components:n},"To add a sidebar, header, and pagination, pass components as props."),m.a.createElement(o.MDXTag,{name:"pre",components:n},m.a.createElement(o.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"import { Layout, SideNav, Header, Pagination } from 'mdx-docs'\n")),m.a.createElement(o.MDXTag,{name:"pre",components:n},m.a.createElement(o.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx"}},"<Layout\n  {...this.props}\n  sidebar={<SideNav />}\n  header={(\n    <Header>\n      Custom header\n    </Header>\n  )}\n  pagination={<Pagination />}>\n  <Component {...page} />\n</Layout>\n")),m.a.createElement(o.MDXTag,{name:"h3",components:n,props:{id:"props"}},"Props"),m.a.createElement(o.MDXTag,{name:"table",components:n},m.a.createElement(o.MDXTag,{name:"thead",components:n,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"thead"},m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Prop"),m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Type"),m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Description"))),m.a.createElement(o.MDXTag,{name:"tbody",components:n,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"theme")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"object"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Object of styles to theme components")),m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"components")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"object"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Object of React components for MDX and live code examples")),m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"routes")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"array"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Array of route objects for creating navigation")),m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"basepath")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"string"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"String for URL basepath used in links")),m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"sidebar")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"node"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Element to render in the left sidebar")),m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"sidebarWidth")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"string"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"CSS width of the sidebar")),m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"header")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"node"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Element to render at the top of the page")),m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"footer")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"node"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Element to render at the bottom of the main right column")),m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"router")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"object"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Router object from Next.js")))),m.a.createElement(o.MDXTag,{name:"h3",components:n,props:{id:"theming"}},"Theming"),m.a.createElement(o.MDXTag,{name:"p",components:n},"The following top-level keys can be used to set theming for the entire application."),m.a.createElement(o.MDXTag,{name:"table",components:n},m.a.createElement(o.MDXTag,{name:"thead",components:n,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"thead"},m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Theme key"),m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Description"))),m.a.createElement(o.MDXTag,{name:"tbody",components:n,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"font")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Base font-family")),m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"lineHeight")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Base line-height")),m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"colors")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Object of colors for ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"text"),", ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"background"),", etc.")))),m.a.createElement(o.MDXTag,{name:"h4",components:n,props:{id:"colors"}},"Colors"),m.a.createElement(o.MDXTag,{name:"table",components:n},m.a.createElement(o.MDXTag,{name:"thead",components:n,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"thead"},m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Color key"),m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Description"))),m.a.createElement(o.MDXTag,{name:"tbody",components:n,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"text")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Foreground text color")),m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"background")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Background color")),m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"link")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Link color")))),m.a.createElement(o.MDXTag,{name:"p",components:n},"Use the ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Layout")," key in your theme to style the root element."),m.a.createElement(o.MDXTag,{name:"pre",components:n},m.a.createElement(o.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"// example theme.js\nexport default {\n  Layout: {\n    color: 'tomato'\n  }\n}\n")),m.a.createElement(o.MDXTag,{name:"p",components:n},"Other elements can be styled with the following keys"),m.a.createElement(o.MDXTag,{name:"table",components:n},m.a.createElement(o.MDXTag,{name:"thead",components:n,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"thead"},m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Theme key"),m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Description"))),m.a.createElement(o.MDXTag,{name:"tbody",components:n,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"Layout")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"The root element of the component")),m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"LayoutSidebar")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"The left sidebar component")),m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"LayoutOverlay")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"The overlay that appears on small viewports when the menu is open")),m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"LayoutMain")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"The main content area to the right of the sidebar")),m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"LayoutContainer")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Element with max width to center the page contents")))),m.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"sidenav"}},"SideNav"),m.a.createElement(o.MDXTag,{name:"p",components:n},"The SideNav component can be used in the Layout component's ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"sidebar")," prop to provide navigation links for the ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"routes")," prop."),m.a.createElement(o.MDXTag,{name:"h3",components:n,props:{id:"props-1"}},"Props"),m.a.createElement(o.MDXTag,{name:"table",components:n},m.a.createElement(o.MDXTag,{name:"thead",components:n,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"thead"},m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Prop"),m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Type"),m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Description"))),m.a.createElement(o.MDXTag,{name:"tbody",components:n,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"routes")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"array"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Array of routes, provided by the Layout component via context")))),m.a.createElement(o.MDXTag,{name:"h3",components:n,props:{id:"theming-1"}},"Theming"),m.a.createElement(o.MDXTag,{name:"p",components:n},"The SideNav links can be styled with the ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"NavLink")," theme key."),m.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"navlink"}},"NavLink"),m.a.createElement(o.MDXTag,{name:"p",components:n},"The NavLink component is the same component used in the SideNav component.\nUse this component to add matching navigation links outside of the SideNav component."),m.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"pagination"}},"Pagination"),m.a.createElement(o.MDXTag,{name:"p",components:n},"The Pagination component can be used in the Layout component's ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"footer")," prop to provide navigation links to the previous and next pages."),m.a.createElement(o.MDXTag,{name:"h3",components:n,props:{id:"props-2"}},"Props"),m.a.createElement(o.MDXTag,{name:"table",components:n},m.a.createElement(o.MDXTag,{name:"thead",components:n,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"thead"},m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Prop"),m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Type"),m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Description"))),m.a.createElement(o.MDXTag,{name:"tbody",components:n,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"routes")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"array"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Array of routes, provided by the Layout component via context")))),m.a.createElement(o.MDXTag,{name:"h3",components:n,props:{id:"theming-2"}},"Theming"),m.a.createElement(o.MDXTag,{name:"p",components:n},"The Pagination components can be styled with the following theme keys."),m.a.createElement(o.MDXTag,{name:"table",components:n},m.a.createElement(o.MDXTag,{name:"thead",components:n,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"thead"},m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Theme key"),m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Description"))),m.a.createElement(o.MDXTag,{name:"tbody",components:n,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"Pagination")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"The root element of the component")),m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"LayoutContainer")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Max width element to center contents. This is the same component used in the Layout component")),m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"PaginationLink")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"The links used for previous and next pages")))),m.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"header"}},"Header"),m.a.createElement(o.MDXTag,{name:"p",components:n},"The Header component can be used in the Layout component's ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"header")," prop to add a page header at the top."),m.a.createElement(o.MDXTag,{name:"h3",components:n,props:{id:"props-3"}},"Props"),m.a.createElement(o.MDXTag,{name:"table",components:n},m.a.createElement(o.MDXTag,{name:"thead",components:n,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"thead"},m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Prop"),m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Type"),m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Description"))),m.a.createElement(o.MDXTag,{name:"tbody",components:n,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"toggleMenu")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"function"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Toggles visibility of menu on mobile, provided via context from the Layout component")))),m.a.createElement(o.MDXTag,{name:"h3",components:n,props:{id:"theming-3"}},"Theming"),m.a.createElement(o.MDXTag,{name:"table",components:n},m.a.createElement(o.MDXTag,{name:"thead",components:n,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"thead"},m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Theme key"),m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Description"))),m.a.createElement(o.MDXTag,{name:"tbody",components:n,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"Header")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"The root element of the component")),m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"MenuButton")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"The hamburger menu button displayed on mobile")))),m.a.createElement(o.MDXTag,{name:"hr",components:n}),m.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"other-components"}},"Other Components"),m.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"root"}},"Root"),m.a.createElement(o.MDXTag,{name:"p",components:n},"The Root component is used in the Layout component to provide ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"theme")," and ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"components")," context and to set base typographic styles.\nYou do not need to add this component when using the Layout component."),m.a.createElement(o.MDXTag,{name:"table",components:n},m.a.createElement(o.MDXTag,{name:"thead",components:n,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"thead"},m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Prop"),m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Type"),m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Description"))),m.a.createElement(o.MDXTag,{name:"tbody",components:n,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"theme")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Object"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Object of styles for theming components")),m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"components")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Object"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Object of components for MDX and live code examples")))),m.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"container"}},"Container"),m.a.createElement(o.MDXTag,{name:"p",components:n},"Element for centering content with a max-width."),m.a.createElement(o.MDXTag,{name:"h3",components:n,props:{id:"theming-4"}},"Theming"),m.a.createElement(o.MDXTag,{name:"table",components:n},m.a.createElement(o.MDXTag,{name:"thead",components:n,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"thead"},m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Theme key"),m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Description"))),m.a.createElement(o.MDXTag,{name:"tbody",components:n,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"LayoutContainer")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"The root element with a max-width of ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"768px"))))),m.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"livecode"}},"LiveCode"),m.a.createElement(o.MDXTag,{name:"p",components:n},"Wrapper around ",m.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/FormidableLabs/react-live"}},"react-live")," for rendering fenced code blocks as live code examples.\nAny code block with the ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},".jsx")," language attribute will render a sandbox, with the ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"components")," object in scope."),m.a.createElement(o.MDXTag,{name:"p",components:n},"This component is rendered by the default ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"components.code")," when wrapping an application with the Layout or Root components."),m.a.createElement(o.MDXTag,{name:"h3",components:n,props:{id:"props-4"}},"Props"),m.a.createElement(o.MDXTag,{name:"table",components:n},m.a.createElement(o.MDXTag,{name:"thead",components:n,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"thead"},m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Prop"),m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Type"),m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Description"))),m.a.createElement(o.MDXTag,{name:"tbody",components:n,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"code")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"String"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"JSX code string")),m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"components")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Object"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Object of components to provide in scope")))),m.a.createElement(o.MDXTag,{name:"h3",components:n,props:{id:"theming-5"}},"Theming"),m.a.createElement(o.MDXTag,{name:"p",components:n},"The LiveCode component can be customized with the following theme keys."),m.a.createElement(o.MDXTag,{name:"table",components:n},m.a.createElement(o.MDXTag,{name:"thead",components:n,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"thead"},m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Theme key"),m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Description"))),m.a.createElement(o.MDXTag,{name:"tbody",components:n,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"LiveCode")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"The root element")),m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"LivePreview")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"The top element with live component preview")),m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"LiveEditor")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"The code editor")),m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"LiveError")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Error message that shows when there are syntax errors")))),m.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"menubutton"}},"MenuButton"),m.a.createElement(o.MDXTag,{name:"p",components:n},"The hamburger icon button displayed on mobile to toggle the visibility of the menu."),m.a.createElement(o.MDXTag,{name:"h3",components:n,props:{id:"theming-6"}},"Theming"),m.a.createElement(o.MDXTag,{name:"table",components:n},m.a.createElement(o.MDXTag,{name:"thead",components:n,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"thead"},m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Theme key"),m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Description"))),m.a.createElement(o.MDXTag,{name:"tbody",components:n,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"MenuButton")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"The root button element")))),m.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"mdx-components"}},"MDX Components"),m.a.createElement(o.MDXTag,{name:"p",components:n},"The following components are included in default MDX scope when using the Layout or Root components"),m.a.createElement(o.MDXTag,{name:"ul",components:n},m.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"a")),m.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"code")),m.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"pre"))))}}},[312]).default}});