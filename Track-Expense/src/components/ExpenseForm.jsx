  import { useState } from "react";

  export default function ExpenseForm  ({setExpenses}) {

    // const[title,setTitle] = useState("");
    // const[category,setCategory] = useState("");
    // const[amount,setAmount] = useState("");  

    // make one state object for all three inputs
    const [expenseData, setExpenseData] = useState({
      title: "",
      category: "",
      amount: ""
    });

    //form validation function
    const [errors, setErrors] = useState({});

    const validateForm = (data) => {
      const errorData = {};

      if(!data.title){
        errorData.title = "Title is required";  
      }

      if(!data.category){
        errorData.category = " Select Category ";  
      }

      if(!data.amount){
        errorData.amount = "Amount is required";  
      }

      setErrors(errorData);
      return errorData;
    }

    const handleSubmit = (e) => {
      e.preventDefault();

     const validateResult = validateForm(expenseData);
     if(Object.keys(validateResult).length){
       return; //stop form submission if errors exist
     }
     //fetch form data here with key-value pairs || oneway data handling
     setExpenses((prevState) => [...prevState, {...expenseData,id:crypto.randomUUID()}]); 

     //e.target.reset(); ..not helpful in controlled components
      setExpenseData({
        title: "",
        category: "",
        amount: ""
      });
    }

     // function to get form data
    // const getFormData = (form) => {
    //  const formdata = new FormData(form);
    //  const data = {};
    //  for(const [key,value] of formdata.entries()) { // use entries() for key-value pairs
    //    data[key] = value;
    //  }
    //  return data;
    // }


    const handleChange = (e) => {
      const {name,value} = e.target;
      setExpenseData((prevState) =>
         ({...prevState, 
          [name]: value}));
    }



  return (
     <form className="expense-form" onSubmit={handleSubmit} >
          <div className="input-container">
            <label htmlFor="title">Title</label>
            <input
             id="title"
             name="title"
             value={expenseData.title}
             onChange={handleChange}
              />
              <p className="error">{errors.title}</p>
          </div>
          <div className="input-container">
            <label htmlFor="category">Category</label>
             <select
              id="category" 
              name="category" 
              value={expenseData.category}
              onChange={handleChange}>
                  <option hidden>Select Category</option>
                  <option value="grocery">Grocery</option>
                  <option value="clothes">Clothes</option>
                  <option value="bills">Bills</option>
                  <option value="education">Education</option>
                  <option value="medicine">Medicine</option>
             </select>
              <p className="error">{errors.category}</p>
          </div>
          <div className="input-container">
            <label htmlFor="amount">Amount</label>
            <input
             id="amount"
             name="amount" 
             value={expenseData.amount}
             onChange={handleChange} />
              <p className="error">{errors.amount}</p>
          </div>
          <button className="add-btn">Add</button>
        </form>
  )
}
