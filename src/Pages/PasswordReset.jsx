import React, { useState } from "react";
import {URL_SERVER} from "../serverurl";

const PasswordReset = (props) => {

    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setMsg("");

        fetch(`${URL_SERVER}/password_reset/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: `{"email":"${email}"}`
        })
        .then(res => {
            console.log(res.status);
            if (res.ok) {
                setMsg(`A password reset link has been sent your email: ${email}`);
                setEmail("");
            } else {
                return res.text().then(text => { throw new Error(text) })
            }
        })
        .catch(err => {
            // console.log(err);
            alert(err)
       })

        console.log("done");
    }

    return (
        <>
        <div className="container-fluid">
            <h2 className="curriculum-head">Password Reset</h2>
            <div className="container form-login">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label fw-bold">
                    UHCL Email
                </label>
                <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                    Submit
                </button>
            </form>
            <br />
            {msg && <p className="text-success text-center">{msg}</p>}
            </div>
        </div>
        </>
    );
};

export default PasswordReset;
