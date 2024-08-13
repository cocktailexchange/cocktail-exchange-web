import * as React from 'react';
import './menu.css';
import {Container, Row, Col, Card} from 'react-bootstrap';

type Section = {
    title: string,
    drinks: Drink[],
}
type Drink = {
    name: string,
    subtext: string,
    ingredients: string,
}

const currentDrinks: Section[] = [
    {
        title: 'Originals',
        drinks: [
            {
                name: 'Ube Banana Painkiller',
                subtext: 'Bright and funky',
                ingredients: 'Jamaican Rum, Toasted Coconut, Spiced Ube Banana Milk, Orange, Lactic',
            },
            {
                name: 'Sherry / Shiitake',
                subtext: 'Deeply layered sipper, fungi included',
                ingredients: 'Rye, Sherry Finished Rum Blend, Shiitake, Averna, Nocino',
            },
            {
                name: 'Nine Amaro Sazerac',
                subtext: 'Inspired by the Amor y Amargo staple',
                ingredients: 'Blend of Amari, Green Chartreuse, Peychaud\'s, Orange Cream Citrate',
            },
        ]
    },
    {
        title: 'Friends and Family',
        drinks: [
            {
                name: 'Baby Face',
                subtext: 'The Dead Rabbit\'s spicy tequila sour',
                ingredients: 'Reposado Tequila, Clairin Trempè, Shichimi Togarashi, Guava, Lime, Peach',
            },
            {
                name: 'Café Lunaire',
                subtext: 'By Jarod Sadoian, MIT \'10',
                ingredients: 'Cognac, Coffee, Cinnamon, Chile, Barrel-Aged Bitters',
            },
            // {
            //     name: 'Smokey the Bear',
            //     subtext: 'From "Back Bear", a pandemic-era Backbar menu',
            //     ingredients: 'Mezcal, Mastiha, Sweet Vermouth, Fernet, Stone Pine',
            // },
        ]
    },
    {
        title: 'Deep Cuts',
        drinks: [
            {
                name: 'Port au Prince',
                subtext: 'Modern take on Don the Beachcomber\'s 1930\'s classic',
                ingredients: 'Clairin, Overproof Rum, Falernum, Lime, Pineapple, Pomegranate',
            },
            {
                name: 'Diamondback',
                subtext: 'Rich and herbal Manhattan twist',
                ingredients: 'Rye, Apple, Yellow Chartreuse',
            },
        ]
    },
]


function Home() {

    // TODO update entry setup to allow for articles

    return <React.Fragment>
        <main className="main-container container">
            <Row>
                <Col md={12}>
                    {currentDrinks.map((section) => (
                        <div className={'drink-section'}>
                            <div className={'drink-section-title'}>{section.title}</div>
                            {section.drinks.map((drink) => (
                                <div className={'drink'}>
                                    <div className={'drink-name'}>{drink.name}</div>
                                    <div className={'drink-subtext'}>{drink.subtext}</div>
                                    <div className={'drink-ingredients'}>{drink.ingredients}</div>
                                </div>
                            ))}
                        </div>
                    ))}
                </Col>
            </Row>
        </main>
    </React.Fragment>

}

export default Home;
