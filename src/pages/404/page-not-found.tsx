import * as React from 'react';
import './page-not-found.css';
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";


function PageNotFound() {
    const navigate = useNavigate();

    return <main className="main-container container-fluid">
        <div className={'user-settings-container'} >
            <div className={'notfound-main-div d-flex justify-content-center align-middle'} data-testid={"404-header"}>
                <div>
                    <h1>Oh no. We lost the page you're looking for.</h1>
                    <h3>Let's get you back:</h3>
                    <br/>
                    <Button variant={"outline-primary"} onClick={()=>navigate(-1)}>Go Back</Button>
                </div>
            </div>
        </div>
    </main>
}

export default PageNotFound;
