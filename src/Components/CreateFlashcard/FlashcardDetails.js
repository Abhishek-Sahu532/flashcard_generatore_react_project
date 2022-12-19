import React from "react";
// import { useFormik} from 'formik'
// import {Formik, Form, Field, ErrorMessage} from 'formik'
import { useFormik } from "formik";
import { useState } from "react";

// import * as Yup from 'yup'

//child2
function FlashcardDetails(props) {
  const initialValues = {
    addTerm: "",
    addDefination: "",
    imageUpload: "",
  };

  // const validationSchema = Yup.object({
  //   addTerm: Yup.string().required('Required'),
  //   addDefination: Yup.string().required('Required')
  // })

  const validate = (values) => {
    let error = {};
    if (!values.addTerm) {
      error.addTerm = "Required";
    }
    if (!values.addDefination) {
      error.addDefination = "Required";
    }
    return error;
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  let onTriggerComponent2 = (values) => {
    props.parentCallback(formik.values);
  };

  const formik = useFormik({
    initialValues,
    validate,
    onTriggerComponent2,
    // validationSchema,
    onSubmit,
  });
  const [inputList, setInputList] = useState([
    { EnterTerm: "", EnterDefination: "" },
  ]);


  const [count, setCount] = useState(0);

  const addMore = () => {
    setInputList([...inputList, { EnterTerm: "", EnterDefination: "" }]);
  };

  const removeRow =(i)=>{
    const list=[...inputList];
    list.splice(i,1);
    setInputList(list);
  }
  //  console.log(formik.values)

  return (
    <div className="p-3 bg-slate-300  mx-10 my-10 mx-auto">
      {inputList.map((x, index) => {
        return (
          <form
            key={index}
            className="form-control"
            onChange={onTriggerComponent2}
          >
            <table className="table-auto">
              <thead className="text-center">
                <tr>
                  <td></td>
                  <td className="decoration-gray-300 text-lg font-bold text-slate-700">
                    Enter Term
                    <span className="after:content-['*'] form-label inline-block mb-2 "></span>
                  </td>
                  <td className="decoration-gray-300 text-lg font-bold text-slate-700">
                    Enter Defination
                    <span className="after:content-['*'] form-label inline-block mb-2 "></span>
                  </td>
                  <td></td>
                </tr>
              </thead>
              <tbody>
                <tr className="mx-7">
                  <td className="bg-red-400 w-8 p-2 text-white font-bold rounded-full">
                    {count}
                  </td>
                  {/* INPUT FOR ADD TERM */}
                  <td>
                    <div className="form-control">
                      <input
                        className="w-80 rounded mx-12 p-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-50 rounded-md sm:text-sm focus:ring-1"
                        type="text"
                        name="addTerm"
                        id="addTerm"
                        onChange={formik.handleChange}
                        value={formik.values.addTerm}
                        onBlur={formik.handleBlur}
                      />

                      {formik.touched.addTerm && formik.errors.addTerm ? (
                        <div className="erros">{formik.errors.addTerm}</div>
                      ) : null}
                    </div>
                  </td>

                  {/* INPUT FOR DEFINITION */}
                  <td>
                    {" "}
                    <div className="form-control">
                      <input
                        className="w-80 rounded mx-12 p-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-50 rounded-md sm:text-sm focus:ring-1"
                        type="text"
                        name="addDefination"
                        id="addDefination"
                        onChange={formik.handleChange}
                        value={formik.values.addDefination}
                        onBlur={formik.handleBlur}
                      />

                      {formik.touched.addDefination &&
                      formik.errors.addDefination ? (
                        <div className="erros">
                          {formik.errors.addDefination}
                        </div>
                      ) : null}
                    </div>
                  </td>
                  <td>
                    {/* BUTTON TO CHOOSE FILE */}
                    {/* <button>
                      {" "}
                      <input
                        type="file"
                        name="imageFile"
                        id="imageFile"
                        className=" w-15 mx-6 w-30 file:mr-4 file:py-2 file:px-4 file:p-4 file:border-0 file:text-sm file:font-semibold file:bg-white file:text-violet-700 hover:file:bg-violet-100 text sm text-slate-300"
                        onChange={formik.handleChange}
                        value={formik.values.imageFile}
                        onBlur={formik.handleBlur}
                      />
                    </button> */}
                   <button class="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={removeRow}>
        Remove
      </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
      );
    })}
      
      
      {/* BUTTON TO ADD ROW */}
      <button
        className="bg-transparent  text-blue-700 font-semibold hover:text-white py-2 px-4 border border-none hover:border-transparent rounded mt-5"
        name="addRow"
        id="addRow"
        onClick={() => {
          setCount(count + 1);
          addMore();
        }}
        >
        +Add More
      </button>
    </div>
  );
}

export default FlashcardDetails;
