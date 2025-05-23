import React from 'react';
import { FaRegCheckSquare } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const TodoArea = () => {
   return (
      <div className="todo-wrapper w-full">
         <div className="todo-list">
            <div className="todo-item flex justify-between">
               <div className="item-content-wrapper flex items-center justify-between">
                  <div className="item-content">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Quasi, possimus. Animi repudiandae natus, maxime atque
                     omnis facilis porro accusantium officia nam dolore
                     assumenda veritatis ex voluptatum dolorum laboriosam error
                     provident.
                  </div>
                  <div className="item-deadline">JAN.10</div>
               </div>
               <div className="item-buttons flex items-center min-w-fit mx-3 g-3">
                  <div className="button-check">
                     <FaRegCheckSquare />
                     {/* T O D O hover: <FaCheckSquare /> */}
                  </div>
                  <div className="button-delete">
                     <MdDelete />
                     {/* T O D O hover: <MdDeleteForever /> */}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default TodoArea;
