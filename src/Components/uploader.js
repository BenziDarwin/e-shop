import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {useSelector,useDispatch} from 'react-redux'
import {bindActionCreators} from 'redux'
import { ActionCreators } from '../ActionMaker/Actions'

function Uploader() {
  const profileImg = useSelector((state) => state.image.image);
  const dispatch = useDispatch();

const {setImage,removeImage} = bindActionCreators(ActionCreators, dispatch)

  console.log(profileImg)
  const imgHandler = (e) => {
    const reader = new FileReader();
      reader.onload = () => {
        if(reader.readyState === 2) {
          setImage(reader.result)
          console.log(reader.result)
        }
      }
      reader.readAsDataURL(e.target.files[0])
  }

  return (
    <div className="page">
      <div className="container">
        <h1 className="heading">Add your image</h1>
        <div className="img-holder">
          <img src={profileImg} alt="profile image" className="img" />
        </div>
        <input type="file" name="image-uploader" id="input" accept="image/*" onChange={imgHandler}/>
      </div>
    </div>
  )
}

export default Uploader
