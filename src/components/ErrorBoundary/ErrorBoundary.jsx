import React from "react";
class ErrorBoundary extends React.Component{
    constructor(props){
        super(props);
        this.state={hasError:false,error:null}
    }

    static getDerivedStateFromError(error){
return {hasError:true,error}
    }

    render(){
        if(this.state.hasError){
          <div>
      <button>Try again</button>    {/* it must be actionable */}
    
    </div>
        }
            return this.props.children; //*5 actually i use this class(errorBoudary...etc) to wrap componet so jo bhi  componet hai wahi children hai idhr 

    }
}

export default ErrorBoundary;