import React,{useState,useEffect} from 'react'
import '../App.css'
import {useHistory} from 'react-router-dom'
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component';

export default function Form() {
    const [name,setName] = useState("")
    const [phone,setPhone] = useState("")
    const [email,setEmail] = useState("")
    const history = useHistory();
    const PostData = ()=>{ 
      fetch("/data",{
          method:"post",
          headers:{
              "Content-Type":"application/json",
          },
          body:JSON.stringify({
              name,
              phone,
              email
          })
      }).then(res=>res.json())
      .then(data=>{
          if(data.error){
              store.addNotification({
                  title: "Sorry",
                  message: data.error,
                  type: "danger",
                  insert: "top",
                  container: "top-right",
                  animationIn: ["animated", "fadeIn"],
                  animationOut: ["animated", "fadeOut"],
                  dismiss: {
                      duration: 2000
                    }
              })
           }
           else{
              store.addNotification({
                  title: "Congratulate",
                  message: data.message,
                  type: "success",
                  insert: "top",
                  container: "top-right",
                  animationIn: ["animated", "fadeIn"],
                  animationOut: ["animated", "fadeOut"],
                  dismiss: {
                      duration: 2000
                    }
              })
               history.push('/')
           }            
      })
      .catch(err=>{
          console.log(err)
      })
      .catch(err=>{
          console.log(err)
      }) 
  }


    return (
        <div classname="row">
            <h1 style={{textAlign:"center",paddingTop:"20px"}}>Form</h1>
        <div className="form-container">
        <div class="form-group">
          <label for="exampleInputEmail1">Enter Name</label>
          <input type="text" class="form-control" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Enter Name" />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Enter Phone</label>
          <input type="text" class="form-control" value={phone} onChange={(e)=>{setPhone(e.target.value)}} placeholder="Enter Password" />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Enter Email</label>
          <input type="email" class="form-control" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter Email" />
        </div>
        <button type="submit" onClick={()=>{PostData()}} class="btn btn-primary">Submit</button>
      </div>
        <h5 style={{textAlign:"center",marginTop:"20px",paddingBottom:"150px"}}>Made By Vicky Kumar</h5>

      </div>
    )
}
