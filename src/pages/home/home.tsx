import * as React from 'react';
import './home.css';
import {Container, Row, Col, Card} from 'react-bootstrap';

function Home() {

    // TODO update entry setup to allow for articles

    return <React.Fragment>
        <main className="main-container container">
            <Row>
                <Col md={12}>
                    <Card className={'header-card'}>
                        <Card.Body>
                            <h2 className={'title'}>The Cocktail Exchange</h2>
                            <h5 className={'subtitle'}>Building the most comprehensive library of cocktail knowledge, one step at a time</h5>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col md={8} className={'article-col'} >
                    {/*<Card className={'article-card'}>*/}
                    {/*    <Card.Body>*/}
                    {/*        <h3 className={'article-name'}>Instant Acid Adjusting</h3>*/}
                    {/*        <div className={'article-date'}>Date!</div>*/}
                    {/*        <div className={'article-contents'}>Body!</div>*/}
                    {/*    </Card.Body>*/}
                    {/*</Card>*/}
                </Col>
                <Col md={4}>
                    <Card className={'about-card'}>
                        <Card.Body>
                            <h4>About</h4>
                            body
                        </Card.Body>
                    </Card>
                    <Card className={'about-card'}>
                        <Card.Body>
                            <h4>Recent Articles</h4>
                            {/* TODO load up here */}
                            {/*body*/}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </main>
    </React.Fragment>

}

export default Home;
