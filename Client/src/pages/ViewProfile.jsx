import React, { useEffect, useState } from 'react'
import Header from '../components/header/Header'
// import { AuthContext } from "../context/authContext";
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'
import OthersPosts from '../components/posts/OthersPost'
import './ViewProfile.css'
import { Box, Stack, Avatar } from "@mui/material";

const API_URL = process.env.REACT_APP_API_URL;

export default function ViewProfile() {
    // const { currentUser, editProfile } = useContext(AuthContext);

    const [inputs, setInputs] = useState({})
    const params = useParams();
    const url = `${API_URL}/users/edit/` + params.username;

    const getData = async () => {
        const res = await axios.get(url);
        console.log(res.data[0]);
        // setInputs(res.data[0])
        if (res.data.length !== 0) {
            setInputs(res.data[0])
            setInputs(prev => ({ ...prev, currentuser: params.username }))
        } else {
            navigate("/home");
        }
    }

    const navigate = useNavigate();

    // const [err, setErr] = useState(null);

    console.log(inputs);



    const getName = (value) => {

        return `${value.split(" ")[0][0].toUpperCase()}`;
    }



    useEffect(() => {
        getData()
    });
    return (
        <div className='backimg'>
            <Header />
            <div class="container-xl px-4 mt-4">
                <hr class="mt-0 mb-4" />
                <div class="row">
                    <div class="col-xl-4">
                        {/* <!-- Profile picture card--> */}
                        <div class="card mb-4 mb-xl-0">
                            <div class="card-header">User Data</div>
                            <div class="card-body">
                                <div className="d-flex justify-content-center">
                                    <Box >
                                        <Stack spacing={2}>
                                            <Avatar className="avatar"
                                                sx={{ width: 60, height: 60, bgcolor: "lightblue", color: "black" }}
                                                children={getName(`${inputs.name}`)}
                                            />
                                        </Stack>

                                    </Box>
                                </div>
                                <div class="mb-3 text-left">
                                    <label class="bio-heading" for="inputUsername">Bio:</label>
                                    <p class="form-control" id="exampleFormControlTextarea1" rows="3" name='bio'>{inputs.bio}</p>
                                </div>
                                <div class="panel-body bio-graph-info">
                                    <div class="row">
                                        <div class="bio-row">
                                            <p><span>username </span>: {inputs.username}</p>
                                        </div>
                                        <div class="bio-row">
                                            <p><span>Name </span>: {inputs.name}</p>
                                        </div>
                                        <div class="bio-row">
                                            <p><span>Profession </span>: {inputs.profession}</p>
                                        </div>
                                        <div class="bio-row">
                                            <p><span>Organization</span>: {inputs.organisation}</p>
                                        </div>
                                        <div class="bio-row">
                                            <p><span>Location </span>: {inputs.location}</p>
                                        </div>
                                        <div class="bio-row">
                                            <p><span>Email </span>: {inputs.email}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-8">
                        {/* <!-- Account details card--> */}
                        <div class="card mb-4">
                            <div class="card-header">Posts</div>
                            <div class="card-body">
                                <OthersPosts username={params.username} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
