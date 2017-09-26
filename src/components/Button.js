import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {

    render = () => (
        <div style={{display:"flex", justifyContent:"center"}}>
            <button onClick={this.props.onClick} style={ Object.assign(styles.base, styles[this.props.kind])} > 
                {
                    this.props.icon ? 
                        <this.props.icon size={30} />
                    : null
                }
                { this.props.icon ? ' ' : null }
                { this.props.title.toUpperCase() }
            </button>
        </div>
    )
}

Button.propTypes = {
    title: PropTypes.string,
    kind: PropTypes.oneOf(['primary', 'danger']).isRequired,
    onClick: PropTypes.func.isRequired,
    icon: PropTypes.element
}

const styles = {
    base: {
        outline:"none", 
        backgroundColor: '#003ea3',  
        color: 'white',
        border:"1px solid #fff",  
        borderRadius: 28,
        marginBottom:10, 
        marginTop:10, 
        height:"50px",  
        width:200,
        fontSize: 15
    },
    primary: {
        backgroundColor: '#003ea3'
    },

    danger: {
        backgroundColor: '#FF4136'
    }
}

export default Button ;