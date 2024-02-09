function Card(props){
    return(
<div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">{props.data.planname}</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">{props.data.price}<small class="text-body-secondary fw-light">/mo</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
            {
                props.data.features.map((features)=>{
                  return <li>{features.name}</li>
                })
               }

             
              <li>Email support</li>
              <li>Help center access</li>
            </ul>
            <button type="button" class="w-100 btn btn -primary ">Sign up for free</button>
          </div>
        </div>
      </div>
    );
}
export default Card;