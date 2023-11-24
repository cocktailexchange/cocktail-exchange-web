import * as React from 'react';
import './techniques.css';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {flattenListWithLookup, SidebarCategory, SidebarMenu} from "../../components/sidebar/sidebar";
import { useNavigate, useLocation } from 'react-router-dom';
import {APP_URLS} from "../../util/urls";
import {InstantAcidAdjustmentEntry} from "./entries/instant-acid-adjustment";
import {Container, Row, Col} from 'react-bootstrap';


const techniques: Array<SidebarCategory> = [
    {
        name: "Essentials",
        entries: [
            {
                key: "measuring",
                name: "Measuring",
                icon: <FontAwesomeIcon icon={faStar}/>,
                content: () => {return <div>Content! 11</div>}
            },
            {
                key: "stirring",
                name: "Stirring",
                icon: <FontAwesomeIcon icon={faStar}/>,
                content: () => {return <div>Content! 11</div>}
            },
            {
                key: "shaking",
                name: "Shaking",
                icon: <FontAwesomeIcon icon={faStar}/>,
                content: () => {return <div>Content! 11</div>}
            },
            {
                key: "swizzling",
                name: "Swizzling",
                icon: <FontAwesomeIcon icon={faStar}/>,
                content: () => {return <div>Content! 11</div>}
            },
            {
                key: "straining",
                name: "Straining",
                icon: <FontAwesomeIcon icon={faStar}/>,
                content: () => {return <div>Content! 11</div>}
            },
            {
                key: "muddling",
                name: "Muddling",
                icon: <FontAwesomeIcon icon={faStar}/>,
                content: () => {return <div>Content! 11</div>}
            },
            {
                key: "essentials-glassware",
                name: "Glassware",
                icon: <FontAwesomeIcon icon={faStar}/>,
                content: () => {return <div>Content! 11 Aliased</div>}
            },
            {
                key: "essentials-ice",
                name: "Ice",
                icon: <FontAwesomeIcon icon={faStar}/>,
                content: () => {return <div>Content! 11 Aliased</div>}
            },
        ]
    },
    {
        name: "Understanding Balance",
        entries: [
            {
                key: "acidity",
                name: "Acidity",
                icon: <FontAwesomeIcon icon={faStar}/>,
                content: () => {return <div>Content! 11</div>}
            },
            {
                key: "sweetness",
                name: "Sweetness",
                icon: <FontAwesomeIcon icon={faStar}/>,
                content: () => {return <div>Content! 11</div>}
            },
            {
                key: "texture",
                name: "Texture",
                icon: <FontAwesomeIcon icon={faStar}/>,
                content: () => {return <div>Content! 11</div>}
            },
            {
                key: "temperature-dilution",
                name: "Temperature & Dilution",
                icon: <FontAwesomeIcon icon={faStar}/>,
                content: () => {return <div>Content! 11</div>}
            },
        ]
    },
    {
        name: "Core Cocktail Formats",
        entries: [
            {
                key: "old-fashioned-format",
                name: "Old Fashioned",
                icon: <FontAwesomeIcon icon={faStar}/>,
                content: () => {return <div>Content! 11</div>}
            },
            {
                key: "manhattan-martini-format",
                name: "Manhattan / Martini",
                icon: <FontAwesomeIcon icon={faStar}/>,
                content: () => {return <div>Content! 11</div>}
            },
            {
                key: "sour-format",
                name: "Sour",
                icon: <FontAwesomeIcon icon={faStar}/>,
                content: () => {return <div>Content! 11</div>}
            },
            {
                key: "exotic-format",
                name: "Tiki / Exotic Cocktail",
                icon: <FontAwesomeIcon icon={faStar}/>,
                content: () => {return <div>Content! 11</div>}
            },
            {
                key: "sidecar-format",
                name: "Sidecar",
                icon: <FontAwesomeIcon icon={faStar}/>,
                content: () => {return <div>Content! 11</div>}
            },
            {
                key: "highball-format",
                name: "Highball",
                icon: <FontAwesomeIcon icon={faStar}/>,
                content: () => {return <div>Content! 11</div>}
            },
            {
                key: "flip-format",
                name: "Flip",
                icon: <FontAwesomeIcon icon={faStar}/>,
                content: () => {return <div>Content! 11</div>}
            },
        ],
    },
    {
        name: "Ice",
        entries: [
            {
                key: "essentials-ice-alias",
                name: "Ice Essentials",
                icon: <FontAwesomeIcon icon={faStar}/>,
                content: () => {return <div>Content! 11</div>},
                alias: "essentials-ice"
            },
            {
                key: "glassware-temperature",
                name: "Glassware Temperature",
                icon: <FontAwesomeIcon icon={faStar}/>,
                content: () => {return <div>Content! 11</div>}
            },
        ]
    },
    {
        name: "Glassware",
        entries: [
            {
                key: "essentials-glassware-alias",
                name: "Glassware Essentials",
                icon: <FontAwesomeIcon icon={faStar}/>,
                content: () => {return <div>Content! 11</div>},
                alias: "essentials-glassware",
            },
        ]
    },
    {
        name: "Garnishes",
        entries: [
            {
                key: "twists",
                name: "Twists",
                icon: <FontAwesomeIcon icon={faStar}/>,
                content: () => {return <div>Content! 11</div>}
            },
            {
                key: "flamed-peels",
                name: "Flamed Peels",
                icon: <FontAwesomeIcon icon={faStar}/>,
                content: () => {return <div>Content! 11</div>}
            },
            {
                key: "smoking",
                name: "Smoking",
                icon: <FontAwesomeIcon icon={faStar}/>,
                content: () => {return <div>Content! 11</div>}
            },
            {
                key: "rims",
                name: "Rims",
                icon: <FontAwesomeIcon icon={faStar}/>,
                content: () => {return <div>Content! 11</div>}
            },
        ]
    },
    {
        name: "Infusions",
        entries: [
            {
                key: "oleo-saccharum",
                name: "Oleo Saccharums",
                icon: <FontAwesomeIcon icon={faStar}/>,
                content: () => {return <div>Content! 11</div>}
            },{
                key: "fat-washing",
                name: "Fat Washing",
                icon: <FontAwesomeIcon icon={faStar}/>,
                content: () => {return <div>Content! 11</div>}
            },
            {
                key: "milk-washing",
                name: "Milk Washing",
                icon: <FontAwesomeIcon icon={faStar}/>,
                content: () => {return <div>Content! 11</div>}
            },
            {
                key: "rapid-infusing",
                name: "Rapid Infusing",
                icon: <FontAwesomeIcon icon={faStar}/>,
                content: () => {return <div>Content! 11</div>}
            },
        ]
    },
    {
        name: "Extractions",
        entries: [

        ]
    },
    {
        name: "Acid Adjusting",
        entries: [
            {
                key: "acid-adjusted-citrus",
                name: "Acid Adjusted Citrus",
                icon: <FontAwesomeIcon icon={faStar}/>,
                content: () => {return <div>Content! 11</div>}
            },
            InstantAcidAdjustmentEntry
        ]
    },
    {
        name: "Clarification",
        entries: [
            {
                key: "clarified-milk-punch",
                name: "Clarified Milk Punch",
                icon: <FontAwesomeIcon icon={faStar}/>,
                content: () => {return <div>Content! 11</div>}
            },
            {
                key: "agar-clarification",
                name: "Agar Clarification",
                icon: <FontAwesomeIcon icon={faStar}/>,
                content: () => {return <div>Content! 11</div>}
            },
        ]
    },
    {
        name: "Emulsification",
        entries: [

        ]
    },
    {
        name: "Hydrocolloids and Gels",
        entries: [
            {
                key: "cold-oil-spherification",
                name: "Cold Oil Spherification",
                icon: <FontAwesomeIcon icon={faStar}/>,
                content: () => {return <div>Content! 11</div>}
            },
            {
                key: "direct-spherification",
                name: "Direct Spherification",
                icon: <FontAwesomeIcon icon={faStar}/>,
                content: () => {return <div>Content! 11</div>}
            },
        ]
    },
    {
        name: "Carbonation & Nitrogenation",
        entries: [
            {
                key: "carbonation",
                name: "Carbonation",
                icon: <FontAwesomeIcon icon={faStar}/>,
                content: () => {return <div>Content! 11</div>}
            },
            {
                key: "nitrogenation",
                name: "Nitrogenation",
                icon: <FontAwesomeIcon icon={faStar}/>,
                content: () => {return <div>Content! 11</div>}
            },
        ]
    }
];

const techniquesByKey = flattenListWithLookup(techniques);

function Techniques() {
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
            navigate(`${APP_URLS.techniques}?c=${activeKey}`);
        }
    }, [activeKey])

    return <React.Fragment>
        <SidebarMenu activeKey={activeKey} setActiveKey={setActiveKey} categories={techniques}/>
        <main className="main-container container-fluid">
            <Container className={'technique-container'}>
                {activeKey && techniquesByKey[activeKey] && techniquesByKey[activeKey].content()}
            </Container>
        </main>
    </React.Fragment>

}

export default Techniques;
