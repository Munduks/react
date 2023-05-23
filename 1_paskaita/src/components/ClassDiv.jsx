
import React from "react";
import ClassButton from "./ClassButton";
import PropTypes from 'prop-types'

class ClassDiv extends React.Component {
    render(){
        return(
            <div>
                <h3>antraste</h3>
                <p>paragrafas</p>
                <ClassButton name="mygtuko tekstas2" />
            </div>
        )
    }
}

ClassDiv.propTypes ={
    name:PropTypes.string
}

export default ClassDiv;