import React from 'react';

const Header = () => {
   return (
      <div className="header-wrapper w-full">
         <div className="header-title">
            <h2>Todo List</h2>
         </div>
         <div className="header-info w-full flex justify-between">
            <div className="info-date">2024.FEB.12.MON PM 7:13</div>
            <div className="info-counter flex gap-3">
               <div className="counter-todo">todo: 0</div>
               <div className="counter-done">done: 1</div>
            </div>
         </div>
         <div className="header-input">
            <input
               type="text"
               placeholder="What needs to be done? (press enter to add)"
               className="w-full"
            />
         </div>
      </div>
   );
};

export default Header;
