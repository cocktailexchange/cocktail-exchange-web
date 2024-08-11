import * as React from 'react';
import './ingredients.css';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {flattenListWithLookup, SidebarCategory, SidebarMenu} from "../../components/sidebar/sidebar";
import { useNavigate, useLocation } from 'react-router-dom';
import {APP_URLS} from "../../util/urls";
import {Container, Row, Col} from 'react-bootstrap';


const ingredients: Array<SidebarCategory> = [
    {
        name: "Common Spirits",
        entries: [
            {
                key: "gin",
                name: "Gin",
                icon: <FontAwesomeIcon icon={faStar}/>,
                content: () => {return <div>Content! 11</div>}
            },
            {
                key: "rum",
                name: "Rum",
                icon: <FontAwesomeIcon icon={faStar}/>,
                content: () => {return <div>Content! 11</div>}
            },
            {
                key: "tequila",
                name: "Tequila",
                icon: <FontAwesomeIcon icon={faStar}/>,
                content: () => {return <div>Content! 11</div>}
            },
            {
                key: "mezcal",
                name: "Mezcal",
                icon: <FontAwesomeIcon icon={faStar}/>,
                content: () => {return <div>Content! 11</div>}
            },
            {
                key: "whiskey",
                name: "Whisk(e)y",
                icon: <FontAwesomeIcon icon={faStar}/>,
                content: () => {return <div>Content! 11</div>}
            },
            {
                key: "brandy",
                name: "Brandy",
                icon: <FontAwesomeIcon icon={faStar}/>,
                content: () => {return <div>Content! 11</div>}
            },
        ]
    },
    {
        name: "Liqueurs",
        entries: [
            {
                key: "amaro",
                name: "Amaro",
                icon: <FontAwesomeIcon icon={faStar}/>,
                content: () => {return <div>Content! 11</div>}
            },
        ]
    },
    {
        name: "Fortified Wines",
        entries: [
            {
                key: "vermouth",
                name: "Vermouth",
                icon: <FontAwesomeIcon icon={faStar}/>,
                content: () => {return <div>Content! 11</div>}
            },
            {
                key: "sherry",
                name: "Sherry",
                icon: <FontAwesomeIcon icon={faStar}/>,
                content: () => {return <div>Content! 11</div>}
            },
            {
                key: "port",
                name: "Port",
                icon: <FontAwesomeIcon icon={faStar}/>,
                content: () => {return <div>Content! 11</div>}
            },
            {
                key: "apertif-wines",
                name: "Apertif Wines",
                icon: <FontAwesomeIcon icon={faStar}/>,
                content: () => {return <div>Content! 11</div>}
            },
        ]
    },
    {
        name: "Bitters",
        entries: [
            {
                key: "bitters",
                name: "Bitters",
                icon: <FontAwesomeIcon icon={faStar}/>,
                content: () => {return <div>Content! 11</div>}
            },
        ]
    },
];

const ingredientsByKey = flattenListWithLookup(ingredients);

function Ingredients() {
    // TODO handle alias

    const navigate = useNavigate();
    const location = useLocation();

    const [activeKey, setActiveKey] = React.useState<string|null>(null)

    React.useEffect(() => {
        // Parse the search/query parameters
        const params = new URLSearchParams(location.search);

        // Get the value of the 'c' parameter
        const cParam = params.get('c');

        // Update the activeKey state if 'c' parameter exists
        if (cParam) {
            setActiveKey(cParam);
        }
    }, [location.search]);

    React.useEffect(() => {
        if (activeKey) {
            navigate(`${APP_URLS.ingredients}?c=${activeKey}`);
        }
    }, [activeKey])

    return <React.Fragment>
        <SidebarMenu activeKey={activeKey} setActiveKey={setActiveKey} categories={ingredients}/>
        <main className="main-container container-fluid">
            <Container className={'technique-container'}>
                {activeKey && ingredientsByKey[activeKey] && ingredientsByKey[activeKey].content()}
            </Container>
        </main>
    </React.Fragment>

}

export default Ingredients;
