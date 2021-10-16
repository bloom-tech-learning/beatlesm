import React from 'react'
// We'll need a Link and the useRouteMatch hook from 'react-router-dom'
import { Link, useRouteMatch } from 'react-router-dom';

export default function OrderForm(props) {
  const {
    values,
    submit,
    change,
    disabled,
    errors,
  } = props

  const onChange = evt => {    
    const { name, value, checked, type } = evt.target;
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse);
  }

  console.log('onChange: ', onChange);

  return (
    <div className='form-wrapper' id = 'pizza-form'>
      <div className='form-header'>
        <h3>Build Your Own Pizza</h3>
        <img className='home-image' src='https://source.unsplash.com/F6-U5fGAOik'  alt='Lambda Eat'  />
      </div>
      <div className='form-group'>
      <h2> Build Your Own Pizza</h2> 

        <div className ='shadow'>
        <p><strong>Choice of Size</strong></p>
        <p>Required</p>
        </div>        

        <div div className='select'> 
          <label className="label">
            <select onChange={onChange} value={values.size} name='size'>
              <option value=''>- Select an size -</option>
              <option value='9'>9</option>
              <option value='12'>12</option>
              <option value='18'>18</option>            
            </select>
          </label> 
        </div>

        <div className ='shadow'>
        <p><strong>Choice of Sauce</strong></p>
        <p>Required</p>
        </div>    
        
        <div className='radio'>
          <label className="label"> <input type="radio" name="sauce" value="originalRed" onChange={onChange} checked={values.sauce === "originalred"} /> Original Red</label>
          <label className="label"> <input type="radio" name="sauce" value="garlicRanch" onChange={onChange} checked={values.sauce === "garlicRanch"} /> Garlic Ranch</label>
          <label className="label"> <input type="radio" name="sauce" value="bbqSauce" onChange={onChange} checked={values.sauce === "bbqSauce"} /> BBQ Sauce</label>
          <label className="label"> <input type="radio" name="sauce" value="spinachAlfredo" onChange={onChange} checked={values.sauce === "spinachAlfredo"} /> Spinach Alfredo</label>
        </div>

        <div className ='shadow'>
        <p><strong>Add Toppings</strong></p>
        <p>Choose up to 10</p>
        </div>    

        <div className='checkbox'>                            
          <label className="label"> <input type="checkbox" name="pepperoni" onChange={onChange} checked={values.pepperoni} /> Pepperoni </label>
          <label className="label"> <input type="checkbox" name="dicedtomatos" onChange={onChange} checked={values.dicedtomatos} /> Diced Tomatos </label>
          <label className="label"> <input type="checkbox" name="sausage" onChange={onChange} checked={values.sausage} /> Sausage </label>
          <label className="label"> <input type="checkbox" name="blackOlives" onChange={onChange} checked={values.blackOlives} /> Black Olives </label>
          <label className="label"> <input type="checkbox" name="canadianBacon" onChange={onChange} checked={values.canadianBacon} /> Canadian Bacon </label>
          <label className="label"> <input type="checkbox" name="roastedGarlic" onChange={onChange} checked={values.roastedGarlic} /> roastedGarlic </label>
          <label className="label"> <input type="checkbox" name="spicyItalianSauage" onChange={onChange} checked={values.spicyItalianSauage} /> Spicy Italian Sauage </label>
          <label className="label"> <input type="checkbox" name="artichokeHearts" onChange={onChange} checked={values.artichokeHearts} /> Artichoke Hearts </label>
          <label className="label"> <input type="checkbox" name="grilledChicker" onChange={onChange} checked={values.grilledChicker} /> Grilled Chicker </label>
          <label className="label"> <input type="checkbox" name="threeCheese" onChange={onChange} checked={values.threeCheese} /> Three Cheese </label>
          <label className="label"> <input type="checkbox" name="Onions" onChange={onChange} checked={values.Onions} /> Onions </label>
          <label className="label"> <input type="checkbox" name="pineApple" onChange={onChange} checked={values.pineApple} /> Pine Apple </label>
          <label className="label"> <input type="checkbox" name="greenPepper" onChange={onChange} checked={values.greenPepper} /> Green Pepper </label>
          <label className="label"> <input type="checkbox" name="extraChesse" onChange={onChange} checked={values.extraChesse} /> Extra Chesse </label>
        </div> 

        <div className ='shadow'>
        <p><strong>Choice of Substitute</strong></p>
        <p>Choose up to 1</p>
        </div>   

        <div className='checkbox'>
        <label className="label"> <input type="checkbox" name="glutenFreeCrust" onChange={onChange} checked={values.glutenFreeCrust} /> Gluten Free Crust </label>
        </div>   

        <div className ='shadow'>
        <p><strong>Special Instruction</strong></p>
        </div>   
        
        <div  className ='special'>      
          <Link to= '/special'>            
            <p>Anything else you like to add?</p>
          </Link>           
        </div>

        <div  className ='order'>
          <Link to= '/order'>            
            <label className="label"> <input value={values.qty} onChange={onChange} name='qty' type='number' /> </label>
            <button id='submitBtn' >Add to Order </button>
          </Link>         
        </div>
      
      </div>  

    </div>
  )
}