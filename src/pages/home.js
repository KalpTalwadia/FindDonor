import React, {useState, useCallback}from 'react'
import {DonorCard, Search} from '../components'
import {useContent} from '../hooks'
import {  InputAdornment, InputLabel, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {Button} from '../components/button/index'
import './home.css'
export default function Home() {
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
    
    const [next, setNext] = useState(0);
    const classes = useStyles();
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [bloodGroup, setBloodGroup] = useState('');
    const [email, setEmail] = useState('');
    const [residentState, setResidentState] = useState('');
    const [contact, setContact] = useState('');
    const [city,setCity] =  useState('');
    const {donor}= useContent('donor',city)
    
    const validateForm=(event)=>{
        event.preventDefault();
        const user={
          'name':name,
          'email':email,
          'state': residentState,
          'city' : city,
          'bloodGroup':bloodGroup,
          'age' : age,
          'contact' : contact,
        }
    }
    if(next === 0)
        return (
            <div>
                <div className="Needy_Details">
                <form className={classes.root} onSubmit={validateForm}>
                    <p>Find a Plasma Donor for Yourself</p>
                    <TextField  
                        label="Name" 
                        variant="outlined" 
                        size="medium" 
                        required
                        onChange={e=>(setName(e.target.value))}
                        margin="normal"
                    />
                    <TextField  
                        label="Age" 
                        variant="outlined" 
                        size="medium" 
                        required
                        onChange={e=>(setAge(e.target.value))}
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
                        label="State" 
                        variant="outlined" 
                        size="medium" 
                        required
                        onChange={e=>(setResidentState(e.target.value))}
                        margin="normal"
                    />
                    <TextField
                        label="Mobile Number"
                        InputProps={{
                            startAdornment:<InputAdornment position="start">+91</InputAdornment>
                        }}
                        variant="outlined"
                        onChange={e=>(setContact(e.target.value))}
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
                {/* <TextField
                    id="date_negative"
                    type="date"
                    label="Date last negative"
                    defaultValue="2017-05-24"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    onChange={e=>(setDate(e.target.value))}
                    margin="normal"
                /> */}
                    <Button type='submit' buttonStyle='button--outlined' buttonColor='primary' type='submit'>Submit</Button>
                </form>
            </div>
        </div>
    )
    else 
        return (
            <>
                <Search setFunction ={setCity} />
                {donor && donor.map((data)=>(
                    <DonorCard
                        key={data.docId}
                        name={data.name}
                        city={data.city}
                        date={new Date(data.date?.toDate()).toUTCString()}
                        blood_group={data.blood_group}
                    />
                ))}
                {
                    donor.length===0 && (<h1>No donors</h1>)
                }
                
            </>
         )


    
}
