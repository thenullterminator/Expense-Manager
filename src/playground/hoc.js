import React from 'react';
import ReactDOM from 'react-dom';

const Info=(props)=>(
      <div>
            <h3>This is User personal Info of {props.name}</h3>
      </div>
);

const requireAuth=(WrappedComp)=>{

      return (props)=>(
            
            <div>
                  {props.isAuth? <WrappedComp {...props}/>:<h1>First Login</h1>}
            </div>
      );
};

const AdminInfo=requireAuth(Info);

ReactDOM.render(<AdminInfo name="DJ" isAuth={true}/>,document.getElementById('app'));

