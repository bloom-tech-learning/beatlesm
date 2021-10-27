console.log('------------------ bind.js -----------------------');

const module = {
    x: 42,
    getX: function() {
      return this.x;
    }
  };
  
  const unboundGetX = module.getX;  
  console.log('unboundGetX', unboundGetX); // The function gets invoked at the global scope
  console.log('module.getX:', module.getX);
  console.log('module.getX():', module.getX());
  // expected output: undefined
  
  /* 
  const boundGetX = unboundGetX.bind(module);
  console.log(boundGetX());
   */

  const boundGetX = module.getX.bind(module);
  console.log('module.getX.bind(module):', module.getX.bind(module));


  // expected output: 42

  console.log('------------------ bind.js and .call-----------------------');

  const aGhostN = {
    name: "Casper",
    phrase: 'Booo!',
    ghost: function() {
      console.log(this);
      return this.phrase;
    }
  }

  console.log("aGhostN.name:", aGhostN.name);
  console.log('aGhostN.ghost .call:', aGhostN.ghost.call(aGhostN));
  console.log('aGhostN.ghost .bind:', aGhostN.ghost.bind(aGhostN));
  console.log('aGhostN.ghost:', aGhostN.ghost);
 
  console.log('aGhostN.ghost():', aGhostN.ghost());


  