import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {ListGroup,ListGroupItem} from "react-bootstrap"

const SidebarLeft = (props) => {
  const [expand, setExpand] = useState("")

  const expandHandler = () => {
    if(expand === "expand") {
      setExpand("")
    }
    else{
      setExpand("expand")
    }
    console.log(expand)
  }
    return (
        <div>
              <ListGroup className="sidebar my-3 me-3 ms-2">
                <ListGroup.Item action>
                    Home & office
                </ListGroup.Item>
                <ListGroup.Item action>
                  Scholastic materials
                </ListGroup.Item>
                <ListGroup.Item action>
                    Fashion
                </ListGroup.Item>
                <ListGroup.Item action>
                    Phones and Phone accessories
                </ListGroup.Item>
                <ListGroup.Item action>
                    Food & Groceries
                </ListGroup.Item>
                <ListGroup.Item action>
                    Car Accessories
                </ListGroup.Item>
                <ListGroup.Item action>
                    TVs & Sound Systems
                </ListGroup.Item>
                <ListGroup.Item action>
                    Health Care & Cosmetics
                </ListGroup.Item>
                <ListGroup.Item action>
                    Others
                </ListGroup.Item>
            </ListGroup>
        </div>
    )
}

SidebarLeft.propTypes = {
    props: PropTypes
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default SidebarLeft
