import React, {useState}from 'react'
import {DonorCard, Search} from '../components'
import {useContent} from '../hooks'

export default function Home() {
    const [city,setCity] =  useState('');
    const [next, setNext] = useState(0);
    const {donor}= useContent('donor',city)
    console.log(donor)

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [bloodGroup, setBloodGroup] = useState('');
    const [email, setEmail] = useState('');
    const [residentState, setResidentState] = useState('');
    const [contact, setContact] = useState('');

    if(next === 0)
        return (
            <div>
                <div className="Personal_Details">
        
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
