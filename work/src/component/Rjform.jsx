import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup';
function Rjform(){
    
    var initialValues ={
        firstname:'',
        middlename:'',
        lastname:'',
        bdate:'',
        gender:'',
        saddress:'',
        saddress2:'',
        city:'',
        state:'',
        zipcode:'',
        email:'',
        contact:'',
        courses:'',
        comments:''
    }
    onsubmit = ((values)=>{console.log(values)})
    var validationSchema = Yup.object({
        firstname:Yup.string().required('Field is required'),
        lastname:Yup.string().required('Field is required'),
        saddress:Yup.string().required('Field is required'),
        city:Yup.string().required('Field is required'),
        state:Yup.string().required('Field is required'),
        zipcode:Yup.string().required('Field is required'),
        email:Yup.string().required('Field is required'),
        contact:Yup.string().required('Field is required')
    })
    

    return(
        <div>
            <h1 style={{marginLeft:'400px',marginTop:'25px',color:'white'}}>Registration Form</h1>
            <b style={{marginLeft:'400px',marginTop:'25px',color:'white'}}>Fill out the form carefully for registration</b><br/><br/><hr style={{color:'white'}}/>
            
            <Formik initialValues={initialValues} onSubmit={onsubmit} validationSchema={validationSchema}>
                {
                    (ch)=>{
                        return <Form>

                            <div className='container' style={{marginLeft:'420px'}}>

                                <table>
                                    <tr>
                                        <td><label style={{color:'white'}}>First Name</label><br/></td>
                                        <td>&nbsp;&nbsp;&nbsp;<label style={{color:'white'}}>Middle Name</label><br/></td>
                                        <td>&nbsp;&nbsp;&nbsp;<label style={{color:'white'}}>Last Name</label><br/></td>
                                    </tr>
                                    <tr>
                                        <td> <Field name='firstname'></Field>
                                        <ErrorMessage name='firstname' component='div' style={{color:'white'}}></ErrorMessage></td>
                                        <td>&nbsp;&nbsp;&nbsp;<Field name='middlename'></Field></td>
                                        <td>&nbsp;&nbsp;&nbsp;<Field name='lastname'></Field>
                                        <ErrorMessage name='lastname' component='div' style={{color:'white'}}></ErrorMessage></td>
                                    </tr>
                                </table><br/>
                          
                            
                            <label style={{color:'white'}}>Birth Date</label><br/>
                            <Field name='bdate' type='date'></Field><br/><br/>
                            
                            <label style={{color:'white'}}>Gender</label><br/>
                            <Field name='gender' value='male' type='radio'></Field><span style={{color:'white'}}>Male</span> &nbsp;
                            <Field name='gender' value='female' type='radio'></Field><span style={{color:'white'}}>Female</span> &nbsp;
                            <Field name='gender' value='others' type='radio'></Field><span style={{color:'white'}}>Others</span><br/><br/>

                            <label style={{color:'white'}}>Address Line1</label><br/>
                            <Field  name='saddress' size="75"></Field><ErrorMessage name='saddress' component='div' style={{color:'white'}}></ErrorMessage><br/><br/>

                            <label style={{color:'white'}}>Address Line2</label><br/>
                            <Field  name='saddress2'size="75"></Field><br/><br/>

                            <table>
                                <tr>
                                    <td><label style={{color:'white'}}>City</label><br/></td>
                                    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label style={{color:'white'}}>State</label><br/></td>
                                </tr>
                                <tr>
                                    <td><Field  name='city' size='26'></Field><ErrorMessage name='city' component='div' style={{color:'white'}}></ErrorMessage></td>
                                    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Field  name='state' size='26' ></Field><ErrorMessage name='state' component='div' style={{color:'white'}}></ErrorMessage></td>
                                </tr>
                            </table><br/>
                             
                            <label style={{color:'white'}}>Postal / Zip Code</label><br/>
                            <Field  name='zipcode' size='26' ></Field><ErrorMessage name='zipcode' component='div' style={{color:'white'}}></ErrorMessage><br/><br/>
                            
                            <table>
                                <tr>
                                    <td><label style={{color:'white'}}>Email ID</label></td>
                                    <td><label style={{color:'white'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contact</label></td>
                                </tr>
                                <tr>
                                    <td><Field  name='email' size='26' ></Field><ErrorMessage name='email' component='div' style={{color:'white'}}></ErrorMessage></td>
                                    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Field  name='contact' size='26' ></Field><ErrorMessage name='contact' component='div' style={{color:'white'}}></ErrorMessage></td>
                                </tr>
                            </table><br/>



                            <label style={{color:'white'}}>Courses</label><br/>
                            
                            <Field name='courses' type='checkbox' value='Html' ></Field><span style={{color:'white'}}>HTML </span>&nbsp;
                            <Field name='courses' type='checkbox' value='Css'></Field><span style={{color:'white'}}>CSS </span>&nbsp;
                            <Field name='courses' type='checkbox' value='JavaScript'></Field><span style={{color:'white'}}>Java Script</span>&nbsp;
                            <Field name='courses' type='checkbox' value='ReactJS'></Field><span style={{color:'white'}}>React JS</span><br/>
                            <Field name='courses' type='checkbox' value='Mongodb'></Field><span style={{color:'white'}}>Mongo DB</span> &nbsp;
                            <Field name='courses' type='checkbox' value='ExpressJs'></Field><span style={{color:'white'}}>Express JS </span> &nbsp;
                            <Field name='courses' type='checkbox' value='NodeJS'></Field><span style={{color:'white'}}>Node Js</span><br/><br/>
                             
                            <label style={{color:'white'}}>Additional Comments</label><br/>
                            <textarea name='comments'  cols="80" rows="5"></textarea><br/><br/>

                            <button disabled={!ch.dirty || !ch.isValid} style={{marginLeft:"250px"}}>Register</button><br/><br/><br/><br/><br/>

                            </div>




                            
                            






                        </Form>
                    }
                }
                
                

            </Formik>
            
        </div>
    )
}

export default Rjform