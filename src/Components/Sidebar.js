import axios from 'axios'
import React, { useEffect } from 'react'
import {ListGroup,ListGroupItem} from "react-bootstrap"
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../ActionMaker/Actions'

const Sidebar = (props) => {
    const groupData = useSelector((state) => state.group)
    const categoryData = useSelector((state) => state.category)
    const itemData = useSelector((state) => state.items)
    const dispatch = useDispatch();

    const {setGroups,loadCategories,loadItems} = bindActionCreators(ActionCreators,dispatch);

    useEffect(() => {
        setGroups();
        loadCategories();
        loadItems();
    },[groupData])

    const Display = () => {
        console.log(groupData)
    }

    return (
        <div>
              <ListGroup className="sidebar my-3 me-3 ms-2">

                  {groupData.groups && groupData.groups.map((group) => {
                      if (group.group === "Home & Office") {
                          return (
                            <>
                                <ListGroup.Item id={group._id} action onClick={() => Display(group._id)}>
                                    Home & Office
                                </ListGroup.Item>
                                <div>
                                    {}
                                </div>
                            </>
                          )
                      }
                  })}
                <ListGroup.Item onClick={() => Display()} action>
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


export default Sidebar
