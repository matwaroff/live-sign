import React from 'react';
import {Row, Col, Container} from 'reactstrap';
import useServerStatus from "../hooks/useServerStatus";

export default function OnTheAir() {
    const status = useServerStatus();

    function getClassName(){
        return status ? "on" : "off";
    }

    return(
        <Container fluid className="vw-100">
            <Row className="on-the-air">
                <Col className={getClassName()}>
                    <div className="on-air-container ota-border">
                        <div className="ota-text">
                            {(status) ? "ON AIR" : "OFF AIR" }
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}