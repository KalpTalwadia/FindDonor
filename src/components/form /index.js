import {  InputAdornment, InputLabel, TextField } from '@material-ui/core'
import React,{useState,useCallback} from 'react'
import './form.css'
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {Button} from '../button/index'
import {useDropzone} from 'react-dropzone'

const useStyles = makeStyles((theme) => ({
    root: {
    
      '& .MuiButtonBase-root': {
        color:"#276afb",
      },
      '& .MuiButton-outlined': {
        border:"1px solid #276afb",
      }
    },
  }));


export default function Form() {



    const classes = useStyles();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [number, setNumber] = useState('');
    const [bloodGroup, setBloodGroup] = useState('');
    const [date, setDate] = useState('');
    const [files,setFiles]= useState();
    const onDrop = useCallback(acceptedFiles => {
      setFiles(acceptedFiles);
    }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
  
    const validateForm=(event)=>{
      event.preventDefault()
      console.log("name",name);
      console.log("email",email);
      console.log("city",city);
      console.log("number",number);
      console.log("bloodGroup",bloodGroup);
      console.log("date",date);
    }

    return (
      <>
      <div className="Condition_Card">
        <ul>
          Eligibility Criteria
          <li>Should have tested positive for COVID-19.</li>
          <li>Needed to have symptoms like breathing problem, cough, cold, fever, body ache.</li>
          <li>Do not have any children (women only).</li>
          <li>Do not have diabetes.</li>
          <li>Do not have high blood pressure.</li>
          <li>Not over the age of 65.</li>
        </ul>
        
        

      </div>
        <div className="Form_Container">
            <div className="Personal_Details">
        
            <form className={classes.root} onSubmit={validateForm}>
            <p>Register as a donor</p>
            <TextField  
                label="Name" 
                variant="outlined" 
                size="medium" 
                required
                onChange={e=>(setName(e.target.value))}
                margin="normal"
            />
            <TextField 
                label="Email" 
                variant="outlined" 
                required
                onChange={e=>(setEmail(e.target.value))}
                margin="normal"
            />
            <TextField 
                label="City" 
                variant="outlined" 
                size="medium" 
                required
                onChange={e=>(setCity(e.target.value))}
                margin="normal"
            />
            <TextField
                label="Mobile Number"
                InputProps={{
                    startAdornment:<InputAdornment position="start">+91</InputAdornment>
                }}
                variant="outlined"
                onChange={e=>(setNumber(e.target.value))}
                margin="normal"
            />

        
<FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Blood Group</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          label="Blood Group"
          required={true}
          onChange={e=>(setBloodGroup(e.target.value))}
          margin="normal"
        >
          <MenuItem value="-1">
            <em>None</em>
          </MenuItem>
          <MenuItem value="A+">A+</MenuItem>
          <MenuItem value="A-">A-</MenuItem>
          <MenuItem value="B+">B+</MenuItem>
          <MenuItem value="O+">O+</MenuItem>
          <MenuItem value="O-">O-</MenuItem>
          <MenuItem value="AB+">AB+</MenuItem>
          <MenuItem value="AB-">AB-</MenuItem>
        </Select>
      </FormControl>
            <TextField
                id="date_negative"
                type="date"
                label="Date last negative"
                defaultValue="2017-05-24"
                InputLabelProps={{
                shrink: true,
                }}
                onChange={e=>(setDate(e.target.value))}
                margin="normal"
            />
            <Button type='submit' buttonStyle='button--outlined' buttonColor='primary' type='submit'>Submit</Button>
            </form>
            </div>
          <div className="Report">
          
          <div {...getRootProps()}>
          <label htmlFor='reportFiles'>Attach negative report/discharge report</label>
            <input {...getInputProps()} id='reportFiles' />
            <p>Drag 'n' drop files here, or click to select files</p>
          </div>
          {files && files.map((file)=>(
              <p>{file.name}</p>
            ))}
          </div>
        </div>
        </>
    )
}
