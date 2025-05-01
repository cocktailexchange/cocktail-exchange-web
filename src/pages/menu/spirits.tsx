import * as React from 'react';
import './menu.css';
import {Container, Row, Col, Card} from 'react-bootstrap';
import upIcon from './up.png';
import tallIcon from './tall.png';
import ofIcon from './of.png';
import ofTikiIcon from './oftiki.png';
import {useMatch} from "react-router-dom";


type SpritSection = {
    title: string,
    drinks: Spirit[],
    subsections: SpritSection[],
}
type Spirit = {
    name: string,
    subtext: string,
}



const currentDrinks: SpritSection[] = [
    {
        "title": "Whisky",
        "drinks": [],
        "subsections": [
            {
                "title": "America",
                "drinks": [],
                "subsections": [
                    {
                        "title": "Bourbon",
                        "drinks": [
                            {
                                "name": "Bardstown, Origin Series Bottled-in-Bond",
                                "subtext": "Kentucky 6yr 50% "
                            },
                            {
                                "name": "Barton 1792, Thomas S. Moore Cognac Cask",
                                "subtext": "Kentucky 46.7% "
                            },
                            {
                                "name": "Barton 1792, 1792 Full Proof \u2013 Gordon\u2019s Single Barrel Select",
                                "subtext": "Kentucky 62.5% "
                            },
                            {
                                "name": "Barton 1792, 1792 12yr",
                                "subtext": "Kentucky 12yr 48.3% "
                            },
                            {
                                "name": "Buffalo Trace, Blanton\u2019s Single Barrel",
                                "subtext": "Kentucky 46.5% "
                            },
                            {
                                "name": "Buffalo Trace, Colonel E.H. Taylor Small Batch",
                                "subtext": "Kentucky 50% "
                            },
                            {
                                "name": "Doc Swinson\u2019s, Alter Ego Triple Cask",
                                "subtext": "Indiana (MGP) 47.9% "
                            },
                            {
                                "name": "Heaven Hill, Elijah Craig Private Barrel \u2013 Gordon\u2019s 6612899",
                                "subtext": "Kentucky 9yr 66.15% "
                            },
                            {
                                "name": "Heaven Hill, Larceny Barrel Proof Y324",
                                "subtext": "Kentucky 62.9% "
                            },
                            {
                                "name": "Isaac Bowman, Port Barrel Finished",
                                "subtext": "Virginia 46% "
                            },
                            {
                                "name": "Maker\u2019s Mark, Private Selection - Gordon\u2019s ",
                                "subtext": "Kentucky 54.45% "
                            },
                            {
                                "name": "Michter\u2019s, US1 Bourbon",
                                "subtext": "Kentucky 45.7% "
                            },
                            {
                                "name": "Michter\u2019s, Bomberger\u2019s Declaration 2022",
                                "subtext": "Kentucky 54% "
                            },
                            {
                                "name": "Rabbit Hole, Heigold",
                                "subtext": "Kentucky 47.5% "
                            }
                        ],
                        "subsections": []
                    },
                    {
                        "title": "Rye",
                        "drinks": [
                            {
                                "name": "Balcones, Texas Rye Cask Strength \u2013 Total Wine 20166",
                                "subtext": "Texas 66% "
                            },
                            {
                                "name": "Heaven Hill, Rittenhouse Rye",
                                "subtext": "Kentucky 50% "
                            },
                            {
                                "name": "High West, A Midwinter Night\u2019s Dram Act 11 Scene 3",
                                "subtext": "Utah 49.3% "
                            },
                            {
                                "name": "Kentucky Owl, Last Rye Batch",
                                "subtext": "Kentucky 10yr 56.4% "
                            },
                            {
                                "name": "Willett, Premier Drams Single Barrel 20421",
                                "subtext": "Kentucky 7yr 51.1% "
                            }
                        ],
                        "subsections": []
                    }
                ]
            },
            {
                "title": "Scotland",
                "drinks": [],
                "subsections": [
                    {
                        "title": "Speyside",
                        "drinks": [
                            {
                                "name": "Glenfiddich, 14yr Bourbon Barrel Reserve",
                                "subtext": "Speyside 14yr 43% "
                            },
                            {
                                "name": "Linkwood, The Impex Collection 800832",
                                "subtext": "Speyside 15yr 58.9% "
                            },
                            {
                                "name": "Linkwood, Signatory 1996 8730",
                                "subtext": "Speyside 54.8yr 22% "
                            },
                            {
                                "name": "Linkwood, Gordon & Macphail 1995 8088",
                                "subtext": "Speyside 54.5yr 27% "
                            }
                        ],
                        "subsections": []
                    },
                    {
                        "title": "Islay",
                        "drinks": [
                            {
                                "name": "Ardbeg, Uigeadail",
                                "subtext": "Islay 54.2% Peated "
                            },
                            {
                                "name": "Bowmore, Single Cask Nation 160491",
                                "subtext": "Islay 11yr 56.9% Peated "
                            },
                            {
                                "name": "Bruichladdich, The Laddie Eight",
                                "subtext": "Islay 8yr 50% "
                            },
                            {
                                "name": "Bruichladdich, 18yr",
                                "subtext": "Islay 18yr 50% "
                            },
                            {
                                "name": "Bruichladdich, Octomore 11.1",
                                "subtext": "Islay 5yr 59.4% Peated "
                            },
                            {
                                "name": "Bruichladdich, Octomore 13.2",
                                "subtext": "Islay 5yr 58.3% Peated "
                            },
                            {
                                "name": "Bruichladdich, Octomore 14.3",
                                "subtext": "Islay 5yr 61.4% Peated "
                            },
                            {
                                "name": "Coal Ila, Single Cask Nation 314029",
                                "subtext": "Islay 11yr 56.9% Peated "
                            },
                            {
                                "name": "Laphroaig, 10yr",
                                "subtext": "Islay 10yr 43% Peated "
                            },
                            {
                                "name": "Laphroaig, Lore",
                                "subtext": "Islay 48% Peated "
                            },
                            {
                                "name": "Laphroaig, Elements L 2.0",
                                "subtext": "Islay 59.6% Peated "
                            }
                        ],
                        "subsections": []
                    }
                ]
            },
            {
                "title": "Japan",
                "drinks": [
                    {
                        "name": "Suntory, Hibiki Japanese Harmony",
                        "subtext": "Japan 43% "
                    },
                    {
                        "name": "Suntory, The Chita Single Grain",
                        "subtext": "Japan 43% "
                    },
                    {
                        "name": "Suntory, The Yamazaki 12yr",
                        "subtext": "Japan 12yr 43% "
                    },
                    {
                        "name": "Suntory, The Yamazaki 18yr",
                        "subtext": "Japan 18yr 43% "
                    }
                ],
                "subsections": []
            },
            {
                "title": "World",
                "drinks": [
                    {
                        "name": "Amrut, Special Limited Edition \u2013 Norfolk Whisky Group",
                        "subtext": "Bengaluru 7yr 60% "
                    },
                    {
                        "name": "Chichibu, Ichiro\u2019s Malt & Grain",
                        "subtext": "Japan 46% "
                    }
                ],
                "subsections": []
            }
        ]
    },
    {
        "title": "Mezcal",
        "drinks": [],
        "subsections": [
            {
                "title": "Americana",
                "drinks": [
                    {
                        "name": "Del Maguey, Florencio Carlos Sarmiento \u2013 Arroqueno",
                        "subtext": "Oaxaca 49% "
                    },
                    {
                        "name": "El Jolgorio, Eustaquio Velasco Ruiz,\u00a0Justina Ruiz Perez \u2013 Ancestral Coyote",
                        "subtext": "Oaxaca 14yr 52.5% "
                    },
                    {
                        "name": "El Jolgorio, Pedro Vasquez \u2013 Todos Santos Mezcaleros Arroque\u00f1o",
                        "subtext": "Oaxaca 16yr 55% "
                    },
                    {
                        "name": "Rezpiral, Berta Vasquez  \u2013 Series 6 Coyote",
                        "subtext": "Oaxaca 15-16yr 46.1% "
                    },
                    {
                        "name": "Rezpiral, Berta Vasquez  \u2013 Series 7 Arroque\u00f1o",
                        "subtext": "Oaxaca 18-19yr 43.5% "
                    }
                ],
                "subsections": []
            },
            {
                "title": "Karwinskii",
                "drinks": [
                    {
                        "name": "El Jolgorio, Ignacio Parada \u2013 Cenizo",
                        "subtext": "Oaxaca 13yr 52% "
                    },
                    {
                        "name": "Rezpiral, Simeon Ramirez \u2013 Tobasiche & San Martinero",
                        "subtext": "Oaxaca 11-14yr 50.4% "
                    },
                    {
                        "name": "Vago, Aquilino Garcia \u2013 Cuishe",
                        "subtext": "Oaxaca 51.7% "
                    }
                ],
                "subsections": []
            },
            {
                "title": "Potatorum",
                "drinks": [
                    {
                        "name": "Del Maguey, Rogelio Martinez Cruz \u2013 Tobala",
                        "subtext": "Oaxaca 45% "
                    },
                    {
                        "name": "Vago, Emiligdio Jarquin \u2013 Tobala",
                        "subtext": "Oaxaca 50% "
                    }
                ],
                "subsections": []
            },
            {
                "title": "Angustifolia",
                "drinks": [
                    {
                        "name": "5 Sentidos, Pechuga de Mole Poblano",
                        "subtext": "Oaxaca 45.7% "
                    },
                    {
                        "name": "Rezpiral, Aureliano Hernandez \u2013 Espad\u00edn Capon",
                        "subtext": "Oaxaca 10yr 46% "
                    }
                ],
                "subsections": []
            },
            {
                "title": "Inaequidens",
                "drinks": [
                    {
                        "name": "Maguey Melate, Miguel Ortiz Villagomez \u2013 Inaequidens",
                        "subtext": "Oaxaca 7-8yr 53% "
                    }
                ],
                "subsections": []
            }
        ]
    },
    {
        "title": "Rum",
        "drinks": [],
        "subsections": [
            {
                "title": "America",
                "drinks": [
                    {
                        "name": "Privateer, Distiller\u2019s Drawer Kenmore Select",
                        "subtext": "Massachusetts 50% "
                    }
                ],
                "subsections": []
            },
            {
                "title": "Barbados",
                "drinks": [
                    {
                        "name": "Foursquare, 2010",
                        "subtext": "Barbados 12yr 60% "
                    },
                    {
                        "name": "Foursquare, Isonomy",
                        "subtext": "Barbados 17yr 58% "
                    },
                    {
                        "name": "Foursquare, Touchstone",
                        "subtext": "Barbados 14yr 61% "
                    }
                ],
                "subsections": []
            },
            {
                "title": "Guyana",
                "drinks": [
                    {
                        "name": "Diamond, Hamilton 151 Overproof",
                        "subtext": "Guyana 75.7% "
                    },
                    {
                        "name": "El Dorado, 12yr",
                        "subtext": "Guyana 12yr 40% "
                    }
                ],
                "subsections": []
            },
            {
                "title": "Haiti",
                "drinks": [
                    {
                        "name": "Barbancourt, 8yr",
                        "subtext": "Haiti 8yr 43% "
                    },
                    {
                        "name": "Boukman, Botanical Rhum",
                        "subtext": "Haiti 45% "
                    },
                    {
                        "name": "Chelo, Clairin Sajous",
                        "subtext": "Haiti 55.2% "
                    }
                ],
                "subsections": []
            },
            {
                "title": "Jamaica",
                "drinks": [
                    {
                        "name": "Doctor Bird",
                        "subtext": "Jamaica 50% "
                    },
                    {
                        "name": "Hampden, 8yr",
                        "subtext": "Jamaica 8yr 46% "
                    },
                    {
                        "name": "Hampden, Great House 2023",
                        "subtext": "Jamaica 57% "
                    },
                    {
                        "name": "J. Wray & Nephew, Coruba",
                        "subtext": "Jamaica 40% "
                    },
                    {
                        "name": "J. Wray & Nephew, Overproof",
                        "subtext": "Jamaica 63% "
                    },
                    {
                        "name": "Worthy Park, Hamilton Jamaican Pot Still Black",
                        "subtext": "Jamaica 46.5% "
                    }
                ],
                "subsections": []
            },
            {
                "title": "Martinique",
                "drinks": [
                    {
                        "name": "Rhum J.M, VSOP",
                        "subtext": "Martinique 3yr 43% "
                    },
                    {
                        "name": "Saint James, Down Island 07-772 A",
                        "subtext": "Martinique 6yr 57.9% "
                    }
                ],
                "subsections": []
            },
            {
                "title": "Saint Lucia",
                "drinks": [
                    {
                        "name": "Saint Lucia Distillers, Chairman\u2019s Reserve",
                        "subtext": "Saint Lucia 40% "
                    }
                ],
                "subsections": []
            },
            {
                "title": "World",
                "drinks": [
                    {
                        "name": "Denizen, Merchant\u2019s Reserve",
                        "subtext": "8yr 43% "
                    },
                    {
                        "name": "Planteray, Stiggins\u2019 Fancy Smoky Formula",
                        "subtext": "40% "
                    }
                ],
                "subsections": []
            }
        ]
    },
    {
        "title": "Brandy",
        "drinks": [
            {
                "name": "Clear Creek, Douglas Fir Brandy",
                "subtext": "Oregon 47.7% "
            },
            {
                "name": "Clear Creek, Pear Brandy",
                "subtext": "Oregon 40% "
            },
            {
                "name": "Clear Creek, Reserve Apple Brandy",
                "subtext": "Oregon 8yr 40% "
            },
            {
                "name": "Pierre Ferrand, Ambre Cognac",
                "subtext": "France 40% "
            },
            {
                "name": "Rhine Hall, Apple Brandy",
                "subtext": "Illinois 40% "
            },
            {
                "name": "Rhine Hall, Mango Brandy",
                "subtext": "Illinois 40% "
            },
            {
                "name": "St George, Raspberry Brandy",
                "subtext": "California 40% "
            }
        ],
        "subsections": []
    },
    {
        "title": "Gin",
        "drinks": [
            {
                "name": "Beefeater, London Dry Gin",
                "subtext": "England 40% "
            },
            {
                "name": "Suntory, Roku",
                "subtext": "Japan 43% "
            }
        ],
        "subsections": []
    },
    {
        "title": "Tequila",
        "drinks": [
            {
                "name": "Olmeca, Altos Plata",
                "subtext": "Mexico 40% "
            }
        ],
        "subsections": []
    },
    {
        "title": "Vodka",
        "drinks": [
            {
                "name": "Belvedere, Organic Infusions Blackberry & Lemongrass",
                "subtext": "Poland 40% "
            }
        ],
        "subsections": []
    },
    {
        "title": "Other Spirits",
        "drinks": [
            {
                "name": "Kinmen, Kaoliang",
                "subtext": "58% "
            },
            {
                "name": "Moutai, Chun",
                "subtext": "China 53% "
            },
            {
                "name": "Pernod, Absinthe Superieure",
                "subtext": "France 68% "
            },
            {
                "name": "St George, Green Chile",
                "subtext": "California 40% "
            }
        ],
        "subsections": []
    },
    {
        "title": "Amaro",
        "drinks": [
            {
                "name": "Abbazia di Praglia",
                "subtext": "Italy 32% "
            },
            {
                "name": "Averna",
                "subtext": "Italy 29% "
            },
            {
                "name": "Braulio, Riserva Speciale 2017",
                "subtext": "Italy 24.7% "
            },
            {
                "name": "Cynar",
                "subtext": "Italy 16.5% "
            },
            {
                "name": "Fernet Branca",
                "subtext": "Italy 39% "
            }
        ],
        "subsections": []
    },
    {
        "title": "Liqueurs",
        "drinks": [
            {
                "name": "Ancho Reyes, Chile Ancho",
                "subtext": "Mexico 40% "
            },
            {
                "name": "Aperol",
                "subtext": "Italy 11% "
            },
            {
                "name": "B\u00e9n\u00e9dictine",
                "subtext": "France 40% "
            },
            {
                "name": "Bittermens, Hiver Amer",
                "subtext": "New York 30% "
            },
            {
                "name": "Campari",
                "subtext": "Italy 24% "
            },
            {
                "name": "Chareau, Aloe",
                "subtext": "California 25% "
            },
            {
                "name": "Chartreuse, Green",
                "subtext": "France 55% "
            },
            {
                "name": "Chartreuse, Yellow",
                "subtext": "France 43% "
            },
            {
                "name": "Clement, Creole Shrubb",
                "subtext": "Martinique 40% "
            },
            {
                "name": "Foursquare, Spiced Rum",
                "subtext": "Barbados 35% "
            },
            {
                "name": "Galliano, Ristretto",
                "subtext": "Italy 30% "
            },
            {
                "name": "Giffard, Caribbean Pineapple",
                "subtext": "France 20% "
            },
            {
                "name": "Giffard, Pamplemousse",
                "subtext": "France 16% "
            },
            {
                "name": "Giffard, Vanille de Madagascar",
                "subtext": "France 20% "
            },
            {
                "name": "Grand Marnier",
                "subtext": "France 40% "
            },
            {
                "name": "John D. Taylor\u2019s, Velvet Falernum",
                "subtext": "Barbados 11% "
            },
            {
                "name": "Kalani, Coconut",
                "subtext": "Mexico 30% "
            },
            {
                "name": "Kleos, Mastiha",
                "subtext": "Greece 30% "
            },
            {
                "name": "Kronan, Swedish Punsch",
                "subtext": "Sweden 25% "
            },
            {
                "name": "Luxardo, Marashino Originale",
                "subtext": "Italy 32% "
            },
            {
                "name": "Nixta, Licor De Elote",
                "subtext": "Mexico 30% "
            },
            {
                "name": "Nux Alpina, Walnut",
                "subtext": "Austria 32% "
            },
            {
                "name": "Pierre Ferrand, Dry Curacao",
                "subtext": "France 40% "
            },
            {
                "name": "Preservation, Very Olde St. Nick Winter Maple",
                "subtext": "Kentucky 50.78% "
            },
            {
                "name": "Spirits and Spice, Bananas Foster",
                "subtext": "USA 15% "
            },
            {
                "name": "Spirits and Spice, Mighty Melon Cream",
                "subtext": "USA 15% "
            },
            {
                "name": "St Germain",
                "subtext": "France 20% "
            },
            {
                "name": "Tree House, Krystall Peppermint Schnapps",
                "subtext": "Massachusetts 50% "
            },
            {
                "name": "Tree House, Maple",
                "subtext": "Massachusetts 20% "
            },
            {
                "name": "Yuzuri, Yuzu",
                "subtext": "Japan 30.3% "
            },
            {
                "name": "Zirbenz, Stone Pine",
                "subtext": "Austria 35% "
            }
        ],
        "subsections": []
    }
]

const menus = {
    "": currentDrinks,
}

export function SpiritsList() {
    const matchSubMenu = useMatch(`:menuName`)

    // @ts-ignore
    const menu = menus[matchSubMenu?.params.menuName || ""] || currentDrinks

    const sectionHandler = (section: any, i: number) => (
        <div className={'drink-section spirits-section'}>
            <div className={`drink-section-title title${i}`}>{section.title}</div>
            {section.drinks.map((drink: any) => (
                <div className={'drink'}>
                    <div className={'drink-text'}>
                        <div className={'drink-name'}>{drink.name}</div>
                        {/*&nbsp;&nbsp;*/}
                        <div className={'drink-subtext'}>{drink.subtext}</div>
                    </div>
                </div>
            ))}
            {section.subsections.map((m: any) => sectionHandler(m, i+1))}
        </div>
    )

    return <React.Fragment>
        <main className="main-container container">
            <Row>
                <Col md={12}>
                    {menu.map((m: any) => sectionHandler(m, 0))}
                </Col>
            </Row>
        </main>
    </React.Fragment>

}
