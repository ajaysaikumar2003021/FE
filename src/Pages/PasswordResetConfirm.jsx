import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {URL_SERVER} from "../serverurl";

const PasswordResetConfirm = (props) => {

    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (!searchParams.get('token')) {
            navigate("/", { replace: true });
        }
    }, [searchParams, navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setMsg("");

        const content = {
            "password": password,
            "token": searchParams.get('token')
        }

        console.log(content);

        fetch(`${URL_SERVER}/password_reset/confirm/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(content)
        })
        .then(res => {
            console.log(res.status);
            if (res.ok) {
                setMsg(`Your password has been updated!`);
                setPassword("");
            } else {
                return res.text().then(text => { throw new Error(text) })
            }
            return res.json();
        })
        .then(res => {
            console.log('In 2nd, ', res);
            // alert('Error: ', res)
        })
        .catch(err => {
            console.log('In 3rd, ', err);
            alert('Error: ', err)
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
                <label htmlFor="new_password" className="form-label fw-bold">
                    New Password
                </label>
                <input
                    type="password"
                    className="form-control"
                    id="new_password"
                    aria-describedby="new password field"
                    name="new_password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                    Confirm
                </button>
            </form>
            <br />
            {msg && <p className="text-success text-center">{msg}</p>}
            </div>
        </div>
        </>
    );
};

export default PasswordResetConfirm;
