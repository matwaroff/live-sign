import React from 'react';
import {Button, Col, Container, Row} from "reactstrap";
import useServerStatus from "../hooks/useServerStatus";
import StatusService from "../statusService";

export default function OTAButton(props){
    let status = useServerStatus();
    function handleClick(){
        StatusService.toggle().then((res) => {
            console.log("status:", res.data.status);
        })
    }
    return (
        <Container fluid className="vw-100">
            <Row className="">
                <Col>
                    <div className="">
                        <div className="">
                            {status}
                            <Button onClick={handleClick}>Toggle</Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}