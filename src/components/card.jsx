import { RiBookmarkLine } from '@remixicon/react';
function Card(props){
    return(
       <div className="card">

         <div className="logo">
                 <img src={props.src} alt="logo" />
                 <h5>Save <RiBookmarkLine size={12} /></h5>
         </div>
           
         <div className="container">
             <div className="name">
                <h2>{props.name}</h2>
                <p>{props.time} days ago</p>
             </div>
             <div className="work">
               <h1>{props.job}</h1>
               <div className="btn">
                 <h3>{props.tag1}</h3>
                 <h3>{props.tag2}</h3>
               </div>
             </div>
         </div>

          <hr />

         <div className="bottom">
             <div className="charge">
               <h2>{props.amount}/hr</h2>
               <p>{props.place}</p>
             </div>
             <div className="apply">
               <button>Apply now</button>
             </div>
         </div>
         
      </div>
    )
}
export default Card