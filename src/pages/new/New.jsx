import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  TextField,
  Typography
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

///

///

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  //
  const formik = useFormik({
    initialValues: {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      policy: false
    },
    validationSchema: Yup.object({
      email: Yup
        .string()
        .max(255)
        .required(
          'Promo code is required'),
      firstName: Yup
        .string()
        .max(255)
        .required(
          'Title is required'),
      lastName: Yup
        .string()
        .max(255)
        .required(
          'Description name is required'),
      password: Yup
        .string()
        .max(255)
        .required(
          'Number is required'),
      policy: Yup
        .boolean()
        .oneOf(
          [true],
          'This field must be checked'
        )
    }),
    
  });
//

  return (
    <>
    
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1 style={{color: "rgb(165, 92, 220)", padding: "0% 40%"}}>promo_code</h1>
        </div>
        <div className="bottom">
        
          <div className="right">
            <form>
  
          <div className="newUser">
      
      <form className="newUserForm">
        <div className="newUserItem">
        <label >Title *</label>
        <TextField
              error={Boolean(formik.touched.firstName && formik.errors.firstName)}
              
              helperText={formik.touched.firstName && formik.errors.firstName}
              label=""
              margin="0"
              name="firstName"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.firstName}
              variant="outlined"
              style={{width: "100%", rows:"4", cols:"50"}}
  
            />
        </div>
        <div className="newUserItem">
        <label>Description *</label>
        <TextField
              error={Boolean(formik.touched.lastName && formik.errors.lastName)}
              
              helperText={formik.touched.lastName && formik.errors.lastName}
              label=""
              margin="0"
              name="lastName"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.lastName}
              variant="outlined"
              style={{width: "370px"}}
             
            />
        </div>
        <div className="newUserItem">
        <label>Promo code *</label>
        <TextField
              error={Boolean(formik.touched.email && formik.errors.email)}
              
              helperText={formik.touched.email && formik.errors.email}
              label=""
              margin="0"
              name="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.email}
              variant="outlined"
            />
        </div>
        <div className="newUserItem">
        <label>Maximum redumption per user *</label>
        <TextField
              error={Boolean(formik.touched.password && formik.errors.password)}
              
              helperText={formik.touched.password && formik.errors.password}
              label=""
              margin="0"
              name="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.password}
              variant="outlined"
            />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="date" class="form-controls bottoms"
           id="birthday" name="birthday" />
        </div>

        <div className="newUserItem">
          <label>Choose service *</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="one">All</option>
            <option value="two">Local</option>
            <option value="three">Outstanding</option>
          </select>
        </div>
       
        <div className="newUserItem">
          <label>Location *</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="one">Coimbatore</option>
            <option value="two">ooty</option>
            <option value="three">Trichy</option>
          </select>
        </div>

        <div className="newUserItem">
          <label>Discount Type *</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Flat</option>
            <option value="no">Percent</option>
          </select>
        </div>
      
        
       
        <div className="align">  
        <button className="newUserButton-cancel" style={{color:"rgb(165, 92, 220)", background:"white"}}><CancelOutlinedIcon sx={{ fontSize: 14 }}/> Cancel</button>

          <span><button className="newUserButton"><AddCircleOutlineOutlinedIcon sx={{ fontSize: 14 }}/> Add Promo</button></span>
         
          </div>
        </form>
      
        </div>   
        </form>
          </div>
        </div>
      </div>
    </div>

   
    </>
  );
};


export default New;
