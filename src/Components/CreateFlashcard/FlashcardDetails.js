import React from 'react'
// import { useFormik} from 'formik'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'

function FlashcardDetails(){

const initialValues = {
  addTerm: "",
  addDefination: "",
  imageUpload: "",
};

const validationSchema = Yup.object({
  addTerm: Yup.string().required('Required'),
  addDefination: Yup.string().required('Required')
})


// const validate = values =>{
//   let error = {};
//   if (!values.addTerm) {
//     error.addTerm = "Required";
//   }
//   if (!values.addDefination) {
//     error.addTerm = "Required";
//   }
//   return error;
// }

const onSubmit = values =>{
  console.log(values)
}
//   const formik = useFormik({
//     initialValues, 
//     // validate,
//     validationSchema,
//     onSubmit
//  }) 


    return (
      <div className="p-3 bg-slate-300  mx-10 my-10 mx-auto">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form>
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
                  <td className="bg-red-400 w-1/2 p-2 text-white font-bold rounded-full">
                    1
                  </td>
                  {/* INPUT FOR ADD TERM */}
                  <td>
                    <div className="form-control">
                      <Field
                        className="w-80 rounded mx-12 p-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-50 rounded-md sm:text-sm focus:ring-1"
                        type="text"
                        name="addTerm"
                        id="addTerm"
                      />
                      <ErrorMessage name="addTerm" />
                    </div>
                  </td>

                  {/* INPUT FOR DEFINITION */}
                  <td>
                    {" "}
                    <div className="form-control">
                      <Field
                        className="w-80 rounded mx-12 p-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-50 rounded-md sm:text-sm focus:ring-1"
                        type="text"
                        name="addDefination"
                        id="addDefination"
                      />
                      <ErrorMessage name="addDefination" />
                    </div>
                  </td>
                  <td>
                    {/* BUTTON TO CHOOSE FILE */}
                    <button>
                      {" "}
                      <Field
                        type="file"
                        name="imageFile"
                        id="imageFile"
                        className=" w-15 mx-6 w-30 file:mr-4 file:py-2 file:px-4 file:p-4 file:border-0 file:text-sm file:font-semibold file:bg-white file:text-violet-700 hover:file:bg-violet-100 text sm text-slate-300"
                      />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>

            {/* BUTTON TO ADD ROW */}
            <button
              className="bg-transparent  text-blue-700 font-semibold hover:text-white py-2 px-4 border border-none hover:border-transparent rounded mt-5"
              name="addRow"
              id="addRow"
            >
              +Add More
            </button>
          </Form>
        </Formik>
      </div>
    );
}


export default FlashcardDetails