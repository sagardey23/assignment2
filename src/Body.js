import React, { useState } from "react";
import './formStyling.css';

function Body() {

    const [name, setName] = useState("")
    const [department, setDepartment] = useState("")
    const [rating, setRating] = useState("")
    const [data, setData] = useState([])


    const handleClick = (event) => {
        event.preventDefault()
        const tempObj = {
            name: name,
            dept: department,
            rating: rating
        }
        const tempArr = [...data]
        tempArr.push(tempObj);
        setData(tempArr);

    }

    return (
        <>
            <h1 className="header">EMPLOYEE FEEDBACK FORM</h1>
            <form action='' className="instyle">
                <label htmlFor='name' className="labels">Name:</label>
                <input type='text' id='name' name='name' className="inpstyle" value={name} onChange={(e) => setName(e.target.value)} />
                <br></br>
                <label htmlFor='department' className="labels">Department:</label>
                <input type='text' id='department' name='department' className="inpstyle" value={department} onChange={(e) => setDepartment(e.target.value)} />
                <br></br>
                <label htmlFor='rating' className="labels">Rating:</label>
                <input type='number' id='rating' name='rating' className="inpstyle" value={rating} onChange={(e) => setRating(e.target.value)} /> <br></br>

                <button id="substyle" onClick={handleClick}> Submit</button>

            </form>
            <hr className="hline"></hr>



            <div className="parent" >

                {data.map((value, index) => {
                    return (
                        <div key={index} className="cont1" >

                            <span> Name :{value.name} | </span>
                            <span>Department: {value.dept}|</span>
                            <span>Rating: {value.rating}</span>

                        </div>
                    )
                })}
            </div>


        </>


    )
}

export default Body
























