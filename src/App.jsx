import React from 'react';
import Header from './components/header/Header';
import TodoArea from './components/todoArea/TodoArea';
import DoneArea from './components/doneArea/DoneArea';

const App = () => {
   return (
      <div className="wrapper w-screen flex items-center justify-center">
         <div className="page-wrapper flex items-center justify-center flex-col w-[60%] gap-3">
            <Header />
            <TodoArea />
            <DoneArea />
         </div>
      </div>
   );
};

export default App;
