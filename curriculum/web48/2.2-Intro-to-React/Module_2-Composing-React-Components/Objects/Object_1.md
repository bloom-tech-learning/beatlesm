#  Objective 1 - Use JavaScript modules to export and import components

## <span style="color:red">Overview</span>

When JavaScript was first introduced, inserting it into a web application meant writing the code inside a script tag inside an HTML file. The script ran sequentially, that is, from top to bottom. Back then, if you wanted to use the same code in another project, you had to copy and paste it. There were also performance issues - namely, functions and variables were all global - if you weren't careful, you could quickly see the trouble with declarations holding unexpected values. Eventually, including an `<src>` attribute did allow for more reusability, but it was still dependent on order and still globally scoped.

Then, a little over ten years ago, developers used module patterns like IIFE (Immediately Invoked Function Expression, pronounced 'iffy'). This function runs as soon as it is defined. For example, take the seemingly normal-looking code below. On closer inspection, you'll notice the enclosing parentheses wrapping the anonymous function, as well as another set of calling parentheses, which results in the immediate execution of the code. While this keeps the global space tidy and grants privacy to any inner variables, it's somewhat fragile and none too eloquent.

```
(function() {
  //lexically enclosed function statement
})();
```

You can read more about the history of programming modules and IIFE here (Links to an external site.)

### Server side JS

The release of Node.js in 2009 meant that JavaScript could now execute outside of the browser. With the adoption of a common JavaScript specified standard library known as CommonJS, we have defined terms for sending data to and from our file systems. These advances were a complete game-changer for JavaScript developers, but all still relied heavily on third-party bundlers and transpilers to address common issues. Tools like webpack and rollup would compile packs of modules and assign any missing dependencies before sending them off to the browser. Transpilers such as Babel handle translating source code for the browser and convert the latest features of ES6 (any not supported in the browser) into compatible ES5. While handy, all of these programs require downloading, updating, and configuring.

### JS modules (ECMAScript modules)

This brings us to today—the first standardized syntax for using modules in JavaScript. Where past methods relied on specific functions or third-party libraries, we can now export functions, data, and components from our files by merely prefixing the export keyword with the latest version of JS. Then, when we want to bring such features into our file, we use the `import` keyword, the name of the exported item, and specify where it's located. And that's it. No dependencies or configurations; everything is ready to go right out of the box.


## Follow Along

Let's go through some examples. If you open a new CodeSandbox and create a few different files, you can try this out.

`export` exports a single named function that can now be imported into another module using the import keyword

```
export const emphasize = str => {
  return str.toUpperCase();
};
```

When `export default` is specified (either inline or at the end of the file), the declaration that follows is exported by default. Additional modules will need to be exported (and imported) by name.

```
const emphasize = str => {
  return str.toUpperCase();
};

export default emphasize;
```

Multiple items exported from one module can then be imported into separate modules or extracted for use with object destructuring in the import declaration (see import examples below).

This pattern is incredibly efficient; most errors are syntactical or from renaming or changing your file structure. Another advantage of modules is that top-level variables do not pollute the global object. In addition to connecting our project files, bringing in a library or an external component to our project is a matter of downloading it with our CLI and then directly importing it to our file. Fonts, loaders, middleware, pretty much anything you need. We won't go into any detail about any of these libraries right now but refer to the docs for download commands and directions for implementation. For now, let's take a better look at the import and export line syntax.

Importing a file/module starts with declaring the `import` keyword followed by the name of the import, then the `from` keyword followed by the module specifier. The module specifier usually is a file path or an npm module name. We will be working with file paths today.

Import examples

-   A single named export

```
import { a } from './directory/fileName'
```

-   Multiple named exports

```
import { item1, item2, item3 } from './directory/items.js'
```

-   Exported as default

```
import Component from './folderName/Component.js'
```

### File path specification

The prefixing './' on the file URL points to a unique location of your file system. It indicates the file for import is exported elsewhere in the current directory. When the file is read, the loader knows where it is located in the directory tree. Adding an additional dot ('../') to the path will indicate a location one directory higher. Use the table below to reference quick file location indicators.

File Location           |	Path prefix
| --------------------- | -------------- |
Current Directory       |	./
Parent Directory        |	../
Parent of Parent Dir    |	../../

## Challenge

Using the CodeSandbox you've been trying this out in, make a React component in one file that is exported as the default export, and see if you can import it and render it in the App component. This is a good chance to try it out on your own before we do it together later.





[Previous](../README.md) | [Next](./Object_2.md)