import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/header/Header'
import { AuthContext } from "../context/authContext";
import { useNavigate } from 'react-router-dom';
import './EditProfile.css';
import axios from 'axios';
import { Box, Stack, Avatar } from "@mui/material";

const API_URL = process.env.REACT_APP_API_URL;

export default function EditProfile() {

    const { currentUser, editProfile } = useContext(AuthContext);

    const [inputs, setInputs] = useState({})

    const url = `${API_URL}/api/users/edit/` + currentUser.username;

    const getData = async () => {
        const res = await axios.get(url);
        console.log(res.data[0]);
        // setInputs(res.data[0])
        if (res.data.length !== 0) {
            setInputs(res.data[0])
            setInputs(prev => ({ ...prev, currentuser: currentUser.username }))
        } else {
            setInputs({
                username: currentUser.username,
                name: currentUser.name,
                email: currentUser.email,
                profession: '',
                organisation: '',
                location: '',
                phone: '',
                birthday: '',
                bio: '',
                currentuser: currentUser.username
            })
        }
    }

    const navigate = useNavigate();

    const [err, setErr] = useState(null);

    console.log(inputs);

    const handleChange = (e) => {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const handleEdit = async (e) => {
        e.preventDefault()
        setInputs(prev => ({ ...prev }))
        try {
            await editProfile(inputs);

            navigate("/home");

        } catch (err) {
            setErr(err.response.data)
            console.log(err);
        }
    }

    //   useEffect(() => getData());
    useEffect(() => {
        getData()
    }, []);


    const getName = (value) => {

        return `${value.split(" ")[0][0]}`;
    }


    return (
        <div className='backimg'>
            <Header />
            <div class="container-xl px-4 mt-4">
                <hr class="mt-0 mb-4" />
                <div class="row">
                    <div class="col-xl-4">
                        {/* <!-- Profile picture card--> */}
                        <div class="card mb-4 mb-xl-0">
                            <div class="card-header">Profile Picture</div>
                            <div class="card-body ">
                                <div className="d-flex justify-content-center">
                                    <Box >
                                        <Stack spacing={2}>
                                            <Avatar className="avatar"
                                                sx={{ width: 80, height: 80, bgcolor: "lightblue", color: "black" }}
                                                children={getName(`${inputs.name}`)}
                                            />
                                        </Stack>

                                    </Box>
                                </div>
                                <div class="mb-3 text-left">
                                    <label class="bio-heading" for="inputUsername">Achievements:</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Tell us about yourself." value={inputs.bio} name='bio' onChange={handleChange}></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-8">
                        {/* <!-- Account details card--> */}
                        <div class="card mb-4">
                            <div class="card-header">Account Details</div>
                            <div class="card-body">
                                <form>
                                    {/* <!-- Form Group (username)--> */}
                                    <div class="mb-3">
                                        <label class="small mb-1" for="inputUsername">Username</label>
                                        <input class="form-control" id="inputUsername" type="text" placeholder="Enter your Username" value={inputs.username} name='username' onChange={handleChange} disabled readonly />
                                    </div>
                                    {/* <!-- Form Row--> */}
                                    <div class="row gx-3 mb-3">
                                        {/* <!-- Form Group (first name)--> */}
                                        <div class="col-md-6">
                                            <label class="small mb-1" for="inputFirstName">Name</label>
                                            <input class="form-control" id="inputFirstName" type="text" placeholder="Enter your name" value={inputs.name} name='name' onChange={handleChange} />
                                        </div>
                                        {/* <!-- Form Group (last name)--> */}
                                        <div class="col-md-6">
                                            <label class="small mb-1" for="inputLastName">Profession</label>
                                            <input class="form-control" id="inputLastName" type="text" placeholder="Enter your Profession" value={inputs.profession} name='profession' onChange={handleChange} />
                                        </div>
                                    </div>
                                    {/* <!-- Form Row        --> */}
                                    <div class="row gx-3 mb-3">
                                        {/* <!-- Form Group (organization name)--> */}
                                        <div class="col-md-6">
                                            <label class="small mb-1" for="inputOrgName">Organization name</label>
                                            <input class="form-control" id="inputOrgName" type="text" placeholder="Enter your Organisation Name" value={inputs.organisation} name='organisation' onChange={handleChange} />
                                        </div>
                                        {/* <!-- Form Group (location)--> */}
                                        <div class="col-md-6">
                                            <label class="small mb-1" for="inputLocation">Location</label>
                                            <input class="form-control" id="inputLocation" type="text" placeholder="Enter your Location" value={inputs.location} name='location' onChange={handleChange} />
                                        </div>
                                    </div>
                                    {/* <!-- Form Group (email address)--> */}
                                    <div class="mb-3">
                                        <label class="small mb-1" for="inputEmailAddress">Email address</label>
                                        <input class="form-control" id="inputEmailAddress" type="email" placeholder="Enter your Email" value={inputs.email} name='email' onChange={handleChange} disabled readonly />
                                    </div>
                                    {/* <!-- Form Row--> */}
                                    <div class="row gx-3 mb-3">
                                        {/* <!-- Form Group (phone number)--> */}
                                        <div class="col-md-6">
                                            <label class="small mb-1" for="inputPhone">Phone number</label>
                                            <input class="form-control" id="inputPhone" type="tel" placeholder="Enter your Phone No." value={inputs.phone} name='phone' onChange={handleChange} />
                                        </div>
                                        {/* <!-- Form Group (birthday)--> */}
                                        <div class="col-md-6">
                                            <label class="small mb-1" for="inputBirthday">Birthday</label>
                                            <input class="form-control" id="inputBirthday" type="text" placeholder="Enter your Date of Birth" value={inputs.birthday} name='birthday' onChange={handleChange} />
                                        </div>
                                    </div>
                                    {/* <!-- Save changes button--> */}
                                    <button class="btn btn-primary" type="button" onClick={handleEdit}>Save changes</button>
                                    <button type="button" class="btn btn-secondary" onClick={() => { navigate("/home") }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
