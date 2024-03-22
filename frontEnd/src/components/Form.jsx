function Form({children}){
    return (
      <form className="flex flex-col  space-y-2 space-x-2 justific-center px-5 pt-5 pb-5 mt-5 mb-5 border content-center bg-transparent">
          {children}
      </form>
    );
  }
  
  export default Form;