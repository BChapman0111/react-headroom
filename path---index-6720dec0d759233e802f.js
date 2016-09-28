webpackJsonp([3],{186:function(e,n){e.exports={data:{allMarkdown:{edges:[{node:{bodyHTML:"<p><a href=\"https://github.com/KyleAMathews/react-headroom\">Code on Github</a></p>\n<p>React Headroom is a React Component to hide/show your header on scroll. The header on this site is a living example. When you scroll down, it slides out of view and slides back in when scrolling up.</p>\n<p>Fixed headers are nice for persistent navigation but they can also get in the way by taking up valuable vertical screen space. Using this component lets you have your persistent navigation while preserving screen space when the navigation is not needed.</p>\n<h2>Install</h2>\n<p><code>npm install react-headroom</code></p>\n<h2>Using React Headroom</h2>\n<p>It's very simple actually :)</p>\n<p>Here's an example:</p>\n<pre><code class=\"language-javascript\">&#x3C;Headroom>\n  &#x3C;h1>You can put anything you'd like inside the Headroom Component&#x3C;/h1>\n&#x3C;/Headroom>\n</code></pre>\n<p><a href=\"https://github.com/KyleAMathews/react-headroom/blob/master/www/page-templates/index.js\">See the code for this website.</a></p>\n<h3>Overriding animation</h3>\n<p>The component is intended to be plug 'n play meaning it has sensible defaults for animating the header in and out. If you'd like to override the default animation, you have two options.</p>\n<p>One option is you can override the default inline styles like the following example:</p>\n<pre><code class=\"language-javascript\">&#x3C;Headroom style={{\n  webkitTransition: 'all .5s ease-in-out'\n  mozTransition: 'all .5s ease-in-out'\n  oTransition: 'all .5s ease-in-out'\n  transition: 'all .5s ease-in-out'\n}}>\n  &#x3C;h1>You can put anything you'd like inside the Headroom Component&#x3C;/h1>\n&#x3C;/Headroom>\n</code></pre>\n<p>Another option is to use CSS. The component has a <code>headroom</code> class as well as a <code>headroom--pinned</code> or <code>headroom--unpinned</code> depending on its pinned state. As CSS can't override inline styles, first disable the animation styles by passing in the <code>disableInlineStyles</code> prop. Then in your CSS do something like:</p>\n<pre><code class=\"language-javascript\">.headroom {\n  top: 0;\n  left: 0;\n  right: 0;\n  zIndex: 1;\n}\n.headroom--unfixed {\n  position: relative;\n  transform: translateY(0);\n}\n.headroom--scrolled {\n  transition: transform 200ms ease-in-out;\n}\n.headroom--unpinned {\n  position: fixed;\n  transform: translateY(-100%);\n}\n.headroom--pinned {\n  position: fixed;\n  transform: translateY(0%);\n}\n</code></pre>\n<h3>Other props</h3>\n<ul>\n<li><code>onPin</code> — callback called when header is pinned</li>\n<li><code>onUnpin</code> — callback called when header is unpinned</li>\n<li><code>upTolerance</code> — scroll tolerance in px when scrolling up before component is pinned</li>\n<li><code>downTolerance</code> — scroll tolerance in px when scrolling down before component is pinned</li>\n<li><code>disable</code> — disable pinning and unpinning</li>\n<li><code>wrapperStyle</code> — pass styles for the wrapper div (this maintains the components vertical space at the top of the page).</li>\n<li><code>parent</code> — provide a custom 'parent' element for scroll events. <code>parent</code> should be a function which resolves to the desired element.</li>\n<li><code>pinStart</code> — height in px where the header should start and stop pinning. Useful when you have another element above Headroom component.</li>\n</ul>\n"}}]}},pathContext:{path:"/",component:"/Users/kylemathews/programs/react-headroom/www/page-templates/index.js"}}}});
//# sourceMappingURL=path---index-6720dec0d759233e802f.js.map