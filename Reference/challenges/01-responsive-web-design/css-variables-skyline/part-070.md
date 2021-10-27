---
id: 5d822fd413a79914d39e990e
title: Part 70
challengeType: 0
dashedName: part-70
---

# --description--

Give the `bb4-window` class a `width` of `18%`, a `height` of `90%`, and add your `--window-color4` variable as the `background-color`.

# --hints--

You should give `.bb4-window` a `width` of `18%`.

```js
assert.equal(new __helpers.CSSHelp(document).getStyle(".bb4-window")?.width, "18%");
```

You should give `.bb4-window` a `height` of `90%`.

```js
assert.equal(new __helpers.CSSHelp(document).getStyle(".bb4-window")?.height, "90%");
```

You should give `.bb4-window` a `background-color` of `--window-color4`.

```js
assert.equal(new __helpers.CSSHelp(document).getStyle(".bb4-window")?.backgroundColor.trim(), "var(--window-color4)");
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>    
  <head>
    <title>freeCodeCamp Skyline Project</title>
    <link href="styles.css" rel="stylesheet" type="text/css" />   
  </head>

  <body>
    <div class="background-buildings">
      <div></div>
      <div></div>
      <div class="bb1 building-wrap">
        <div class="bb1a bb1-window"></div>
        <div class="bb1b bb1-window"></div>
        <div class="bb1c bb1-window"></div>
        <div class="bb1d"></div>
      </div>
      <div class="bb2">
        <div class="bb2a"></div>
        <div class="bb2b"></div>
      </div>
      <div class="bb3"></div>
      <div></div>
      <div class="bb4 building-wrap">
        <div class="bb4a"></div>
        <div class="bb4b"></div>
        <div class="bb4c">
          <div class="bb4-window"></div>
          <div class="bb4-window"></div>
          <div class="bb4-window"></div>
          <div class="bb4-window"></div>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>

    <div class="foreground-buildings">
      <div></div>
      <div></div>
      <div class="fb1"></div>
      <div class="fb2"></div>
      <div></div>
      <div class="fb3"></div>
      <div class="fb4"></div>
      <div class="fb5"></div>
      <div class="fb6"></div>
      <div></div>
      <div></div>
    </div>
  </body>
</html>
```

```css
:root {
  --building-color1: #aa80ff;
  --building-color2: #66cc99;
  --building-color3: #cc6699;
  --building-color4: #538cc6;
  --window-color1: black;
  --window-color2: #8cd9b3;
  --window-color3: #d98cb3;
  --window-color4: #8cb3d9;
}

* {
  border: 1px solid black;
  box-sizing: border-box;
}

body {
  height: 100vh;
  margin: 0;
  overflow: hidden;
}

.background-buildings, .foreground-buildings {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-evenly;
  position: absolute;
  top: 0;
}

.building-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* BACKGROUND BUILDINGS - "bb" stands for "background building" */
.bb1 {
  width: 10%;
  height: 70%;
}

.bb1a {
  width: 70%;
}
  
.bb1b {
  width: 80%;
}
  
.bb1c {
  width: 90%;
}

.bb1d {
  width: 100%;
  height: 70%;
  background: linear-gradient(
      var(--building-color1) 50%,
      var(--window-color1)
    );
}

.bb1-window {
  height: 10%;
  background: linear-gradient(
      var(--building-color1),
      var(--window-color1)
    );
}

.bb2 {
  width: 10%;
  height: 50%;
}

.bb2a {
  border-bottom: 5vh solid var(--building-color2);
  border-left: 5vw solid transparent;
  border-right: 5vw solid transparent;
}

.bb2b {
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(
      var(--building-color2),
      var(--building-color2) 6%,
      var(--window-color2) 6%,
      var(--window-color2) 9%
    );
}

.bb3 {
  width: 10%;
  height: 55%;
  background: repeating-linear-gradient(
      90deg,
      var(--building-color3),
      var(--building-color3),
      var(--window-color3) 15%
    );
}

.bb4 {
  width: 11%;
  height: 58%;
}

.bb4a {
  width: 3%;
  height: 10%;
  background-color: var(--building-color4);
}

.bb4b {
  width: 80%;
  height: 5%;
  background-color: var(--building-color4);
}
  
.bb4c {
  width: 100%;
  height: 85%;
  background-color: var(--building-color4);
}
--fcc-editable-region--

--fcc-editable-region--
/* FOREGROUND BUILDINGS - "fb" stands for "foreground building" */
.fb1 {
  width: 10%;
  height: 60%;
  background-color: var(--building-color4);
}

.fb2 {
  width: 10%;
  height: 40%;
  background-color: var(--building-color3);
}

.fb3 {
  width: 10%;
  height: 35%;
  background-color: var(--building-color1);
}
  
.fb4 {
  width: 8%;
  height: 45%;
  background-color: var(--building-color1);
  position: relative;
  left: 10%;
}

.fb5 {
  width: 10%;
  height: 33%;
  background-color: var(--building-color2);
  position: relative;
  right: 10%;
}

.fb6 {
  width: 9%;
  height: 38%;
  background-color: var(--building-color3);
}
    
```