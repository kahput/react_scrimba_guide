import PropTypes from "prop-types";

function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "#FFFFFF"
    };

    return (
        <button
            onClick={props.hold}
            className="die"
            style={styles}
            aria-pressed={props.isHeld}
            aria-label={`Die with value ${props.value}, ${props.isHeld ? "held" : "not held"}`}
        >{props.value}</button>
    )
}

Die.propTypes = {
    value: PropTypes.number,
    isHeld: PropTypes.bool,
    hold: PropTypes.func
};

export default Die;
