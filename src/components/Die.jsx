import PropTypes from "prop-types";

function Die(props) {
    return (
        <button className="die">{props.value}</button>
    )
}

Die.propTypes = {
    value: PropTypes.number
};

export default Die;
