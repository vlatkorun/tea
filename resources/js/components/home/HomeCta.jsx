import React from 'react';
import { Jumbotron, Button, Container } from 'reactstrap';

const HomeCta = () => (
    <Jumbotron>
        <Container>
            <h1 className="display-3">Demo App</h1>
            <p className="lead">
                This is the demo application for the assignment.
            </p>
            <hr className="my-2" />
            <p>
                Click on the "Start" button bellow to enter a keyword and to fetch tweets from the Twitter API.
            </p>
            <p className="lead">
                <Button color="primary">
                    Start
                </Button>
            </p>
        </Container>
    </Jumbotron>
);

export default HomeCta;