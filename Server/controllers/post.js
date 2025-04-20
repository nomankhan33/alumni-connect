import { db } from "../connect.js"
import jwt from 'jsonwebtoken'
import moment from "moment/moment.js"

export const getPosts = (req, res) => {
    const q = "SELECT p.*, u.id AS userid, name FROM posts AS p JOIN users AS u ON (u.id=p.userid) ORDER BY p.id DESC"

    db.query(q, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(data)
    })
}
export const getOtherUserPosts = (req, res) => {
    const q = `SELECT p.*, u.id AS userid, name FROM posts AS p JOIN users AS u ON (u.id=p.userid) WHERE p.username='${req.params.username}' ORDER BY p.id DESC`

    db.query(q, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(data)
    })
}

// export const addPost= (req, res)=>{
//     const token=req.cookies.accessToken
//     if(!token) return res.status(401).json("Not logged in");

//     jwt.verify(token, "secretkey", (err, userInfo)=>{
//         if(err) return res.status(403).json("Token not valid")

//         const q="INSERT INTO posts (`desc` , `createdat`, `userid`) VALUES (?)"
//         const values=[
//             req.body.desc,
//             moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'),
//             userInfo.id
//         ]

//         db.query(q, [values], (err,data)=>{
//             if (err) return res.status(500).json(err);
//             return res.status(200).json("Post has been created")
//         })
//     })
// }

export const addPost = (req, res) => {
    console.log(req.body);
    const q = "INSERT INTO posts (`desc` , `createdat`, `userid`,`username`) VALUES (?)"
    const values = [
        req.body.desc,
        moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'),
        req.body.userid,
        req.body.username
    ]

    db.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("Post has been created")
    })

}