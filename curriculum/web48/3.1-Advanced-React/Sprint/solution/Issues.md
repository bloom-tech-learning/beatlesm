# Sprint Challenge 3.1: Advanced React - React Plants 🌿  - some issues

##  3.1.1 - How to use the emojis properly?

- Emojis should be wrapped in <span>, have role="img", and have an accessible description with aria-label or aria-labelledby
  for example: `<span role="img" aria-label="plants"> 🌿 </span>`

## 3.1.2 - The issue of 
![ScreenShot](ScreenShot.png)

- The answer is (Plantlist.js):
```
componentDidMount () {
    this._isMounted = true;
     
      ...

  }  

componentWillUnmount() {
    this.setState = (state,callback)=>{
      return;
    };
}  
```