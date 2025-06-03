import * as React from 'react';
import './menu.css';
import {Container, Row, Col, Card} from 'react-bootstrap';
 import upIcon from './up.png';
 import tallIcon from './tall.png';
 import ofIcon from './of.png';
 import ofTikiIcon from './oftiki.png';
import {useMatch} from "react-router-dom";


type Section = {
    title: string,
    drinks: Drink[],
}
type Drink = {
    name: string,
    subtext: string,
    ingredients: string,
    image: string
}



const currentDrinks: Section[] = [
    {
        title: 'Originals',
        drinks: [
            // {
            //     name: 'Ube Banana Painkiller',
            //     subtext: 'Bright and funky',
            //     ingredients: 'Jamaican Rum, Toasted Coconut, Spiced Ube Banana Milk, Orange, Lactic',
            //     image: ofTikiIcon,
            // },
        // ]
    // },
    // {
        // title: 'Classic Twists',
        // drinks: [
            // {
            //     name: 'TODO Gin Shaken',
            //     subtext: 'TODO',
            //     ingredients: 'TODO',
            //     image: upIcon,
            // },

            {
                name: 'Flor de Maguey',
                    subtext: 'Herbaceous mezcal martini',
                ingredients: 'Arroqueño, Aloe, Elixir Végétal de la Grande-Chartreuse',
                image: upIcon,
            },
            {
                name: 'Orchard Rob Roy',
                subtext: 'Malty and lightly peated',
                ingredients: 'Scotch, Calvados, Sweet Vermouth',
                image: upIcon,
            },
            // {
            //     name: 'Sherry / Shiitake',
            //     subtext: 'Deeply layered sipper, fungi included',
            //     ingredients: 'Rye, Sherry Finished Rum Blend, Shiitake, Averna, Nocino',
            //     image: ofIcon,
            // },
            {
                name: 'Beeswax Old Fashioned',
                subtext: 'Extra silky',
                ingredients: 'Beeswax-Washed Bourbon, Demerara Gomme, Bitters',
                image: ofIcon,
            },
            {
                name: 'Nine Amaro Sazerac',
                subtext: 'Inspired by the Amor y Amargo staple',
                ingredients: 'Blend of Amari, Green Chartreuse, Peychaud\'s, Orange Cream Citrate',
                image: ofIcon,
            },
            // {
            //     name: 'CB²',
            //     subtext: 'A chocolate banana Boulevardier',
            //     ingredients: 'Bourbon, Sweet Vermouth, Banana, Campari, Cacao',
            //     image: ofIcon,
            // },
        ]
    },
    // {
    //     title: 'Friends and Family',
    //     drinks: [
    //         // {
    //         //     name: 'Baby Face',
    //         //     subtext: 'The Dead Rabbit\'s spicy tequila sour',
    //         //     ingredients: 'Reposado Tequila, Clairin Trempè, Shichimi Togarashi, Guava, Lime, Peach',
    //         //     image: upIcon,
    //         // },
    //         {
    //             name: 'Café Lunaire',
    //             subtext: 'By Jarod Sadoian, MIT \'10',
    //             ingredients: 'Cognac, Coffee, Cinnamon, Chile, Barrel-Aged Bitters',
    //             image: ofIcon,
    //         },
    //         {
    //             name: 'Smokey the Bear',
    //             subtext: 'From "Back Bear", a pandemic-era Backbar menu',
    //             ingredients: 'Mezcal, Mastiha, Sweet Vermouth, Fernet, Stone Pine',
    //             image: upIcon,
    //         },
    //     ]
    // },
    {
        title: 'Modernist Tiki',
        drinks: [
            {
                name: 'Romero',
                subtext: 'A nutty and grassy old fashioned',
                ingredients: 'Scotch, Walnut, Coconut, Cacao, Mace',
                image: ofIcon,
            },
            {
                name: 'Mai Tai',
                subtext: 'Bright and lively',
                ingredients: 'Jamaican Rum, Martinique Rum, Orange, Almond, Lime',
                image: ofTikiIcon,
            },
            {
                name: 'Port au Prince',
                subtext: 'Don the Beachcomber\'s 1930\'s classic',
                // subtext: 'Modern take on Don the Beachcomber\'s 1930\'s classic',
                ingredients: 'Clairin, Overproof Rum, Falernum, Lime, Pineapple, Pomegranate',
                image: tallIcon,
            },
        ]
    },
    // {
    //     title: 'Deep Cuts',
    //     drinks: [
    //         {
    //             name: 'Diamondback',
    //             subtext: 'Rich and herbal Manhattan twist',
    //             ingredients: 'Rye, Apple, Yellow Chartreuse',
    //             image: upIcon,
    //         },
    //     ]
    // },
    {
        title: 'Updated Classics',
        drinks: [
            {
                name: 'Oaxacan Firing Squad Special',
                subtext: 'A nod to the Hawthorne',
                ingredients: 'Tequila, Mezcal, Lime, Pomegranate, Habenero, Agave',
                image: tallIcon,
            },
            {
                name: 'Espresso Martini',
                subtext: 'Rich and creamy',
                ingredients: 'Vodka, Dota Caturra & Catuai, Ristretto Liqueur, Vanilla, Demerara',
                image: upIcon,
            },
            {
                name: 'Rum Old Fashioned',
                subtext: 'From the world\'s finest rum distillers',
                ingredients: 'Foursquare, Hampden, Cane, Bitters',
                image: ofIcon,
            },
        ]
    },
]

const classicsOct5th2024: Section[] = [
    {
        title: 'Shaken',
        drinks: [
            {
                name: 'Daiquiri',
                subtext: 'Rum, Lime, Sugar',
                ingredients: '',
                image: upIcon,
            },
            {
                name: 'Whiskey Sour',
                subtext: 'Bourbon, Lemon, Sugar, Egg White',
                ingredients: '',
                image: upIcon,
            },
        ]
    },
    {
        title: 'Stirred',
        drinks: [
            {
                name: 'Old Fashioned',
                subtext: 'Bourbon, Bitters, Sugar',
                ingredients: '',
                image: ofIcon,
            },
            {
                name: 'Negroni',
                subtext: 'Gin, Campari, Sweet Vermouth',
                ingredients: '',
                image: ofIcon,
            },
            {
                name: 'Martini',
                subtext: 'Gin, Dry Vermouth',
                ingredients: '',
                image: upIcon,
            },
        ]
    },
];

const menus = {
    "": currentDrinks,
    "classicsOct5th2024": classicsOct5th2024,
}

export function Menu() {
    const matchSubMenu = useMatch(`:menuName`)

    // @ts-ignore
    const menu = menus[matchSubMenu?.params.menuName || ""] || currentDrinks

    return <React.Fragment>
        <main className="main-container container">
            <Row>
                <Col md={12}>
                    {menu.map((section: any) => (
                        <div className={'drink-section'}>
                            <div className={'drink-section-title'}>{section.title}</div>
                            {section.drinks.map((drink: any) => (
                                <div className={'drink'}>
                                    <div className={'drink-icon'}>
                                        <img src={drink.image} />
                                    </div>
                                    <div className={'drink-text'}>
                                        <div className={'drink-name'}>{drink.name}</div>
                                        <div className={'drink-subtext'}>{drink.subtext}</div>
                                        <div className={'drink-ingredients'}>{drink.ingredients}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </Col>
            </Row>
        </main>
    </React.Fragment>

}


export function ChristmasMenu() {
    const matchSubMenu = useMatch(`:menuName`)

    // @ts-ignore
    const menu = menus[matchSubMenu?.params.menuName || ""] || currentDrinks

    return <React.Fragment>
        <main className="main-container container">
            <Row>
                <Col md={12}>
                    {menu.map((section: any) => (
                        <div className={'drink-section'}>
                            <div className={'drink-section-title'}>{section.title}</div>
                            {section.drinks.map((drink: any) => (
                                <div className={'drink'}>
                                    <div className={'drink-icon'}>
                                        <img src={drink.image} />
                                    </div>
                                    <div className={'drink-text'}>
                                        <div className={'drink-name'}>{drink.name}</div>
                                        <div className={'drink-subtext'}>{drink.subtext}</div>
                                        <div className={'drink-ingredients'}>{drink.ingredients}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </Col>
            </Row>
        </main>
    </React.Fragment>

}
