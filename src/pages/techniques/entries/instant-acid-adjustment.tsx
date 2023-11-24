import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import Latex from 'react-latex';

export const InstantAcidAdjustmentEntry = {
    key: "instant-acid-adjustment",
    name: "Instant Acid Adjustment",
    icon: <FontAwesomeIcon icon={faStar}/>,
    content: () => {
        return (
            <div>
                <h1>Instant Acid Adjustment</h1>
                <h2>The Math</h2>
                <p>
                    If our base solution (most likely juice) has pH <Latex>{'$p_{base}$'}</Latex>, and our target pH is <Latex>{'$p_{target}$'}</Latex>,
                    then our goal is to determine the recipe for an instant adjustment
                    solution that, when <Latex>{'$V_{solution}$'}</Latex> milliliters of solution is added to
                    <Latex>{'$V_{base}$'}</Latex> milliliters of the base, produces the correct target pH <Latex>{'$p_{target}$'}</Latex>.
                </p>
            </div>
        )
    }
}