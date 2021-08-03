/* Copyright 2020 the Deno authors. All rights reserved. MIT license. */

import React, {useState} from "react";

const Checked = ():React.ReactElement=>(
    <svg className='inline mr-2' aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
      <path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
    </svg>
  )


function ModulesListOrderDropDown(props: {
  onChange?: any;
  selected: string;
}): React.ReactElement {
  const [isOpen, setIsOpen] = useState(false)
  const toggleDropDown = (e)=>{

    setIsOpen(!isOpen)
    document.onmouseup = (e)=>{
      setIsOpen(false)
    }
    
  }
  return (
    <div id="pol">
        <div className='h-full mt-1 ml-1 drop-down-button'>
            <button onClick={toggleDropDown} value="tedst" className=" px-3 py-2 block w-full leading-normal bg-white rounded-lg outline-none appearance-none mt-1">
            <svg width="25" height="25" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512"><g><path xmlns="http://www.w3.org/2000/svg" d="m366.996094 512c-11.046875 0-20-8.953125-20-20v-316.007812h-85.992188c-15.777344 0-29.894531-9.433594-35.96875-24.035157-6.097656-14.660156-2.8125-31.398437 8.367188-42.648437l91.09375-91.632813c11.332031-11.398437 26.425781-17.675781 42.5-17.675781 16.074218 0 31.167968 6.277344 42.5 17.675781l91.09375 91.632813c11.183594 11.246094 14.46875 27.988281 8.371094 42.648437-6.074219 14.601563-20.195313 24.035157-35.972657 24.035157h-21.988281c-11.046875 0-20-8.953126-20-20 0-11.046876 8.953125-20 20-20h19.710938l-89.582032-90.113282c-3.769531-3.789062-8.785156-5.878906-14.132812-5.878906-5.34375 0-10.363282 2.089844-14.132813 5.878906l-89.582031 90.113282h83.714844c22.058594 0 40 17.945312 40 40v316.007812c0 11.042969-8.953125 20-20 20zm0 0" fill="#9fa6b2" data-original="#000000" style="" class=""/><path xmlns="http://www.w3.org/2000/svg" d="m144.988281 512c-16.074219 0-31.167969-6.277344-42.5-17.675781l-91.09375-91.632813c-11.183593-11.25-14.46875-27.988281-8.367187-42.648437 6.070312-14.601563 20.191406-24.039063 35.96875-24.039063h85.992187v-316.003906c0-11.046875 8.953125-20 20-20s20 8.953125 20 20v316.007812c0 22.054688-17.945312 40-40 40h-83.714843l89.582031 90.113282c3.769531 3.789062 8.789062 5.878906 14.132812 5.878906s10.363281-2.089844 14.132813-5.878906l89.582031-90.113282h-19.710937c-11.046876 0-20-8.953124-20-20 0-11.046874 8.953124-20 20-20h21.988281c15.777343 0 29.894531 9.433594 35.96875 24.035157 6.097656 14.660156 2.816406 31.402343-8.367188 42.648437l-91.09375 91.632813c-11.332031 11.398437-26.425781 17.675781-42.5 17.675781zm0 0" fill="#9fa6b2" data-original="#000000" style="" class=""/></g></svg>
            </button>
            
        </div>
        <div className={`absolute bg-white border border-gray-200 rounded-md ${isOpen ? 'block' : 'hidden'}`}>
            <button value='star_count' className='border-b border-gray-200 block px-5 py-3 w-full text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out' onClick={props.onChange}>{props.selected === 'star_count' ? <Checked/> : ''}<span>Stars</span></button>
            <button value='search_score' className='block px-5 py-3 w-full text-left hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out' onClick={props.onChange}><p>{props.selected === 'search_score' ? <Checked/> : ''}Popularity</p></button>
        </div>
        
    </div>
  );
}

export default ModulesListOrderDropDown;
