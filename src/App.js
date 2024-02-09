import logo from './logo.svg';
import './App.css';
import"bootstrap/dist/css/bootstrap.min.css"
import Card from "./Card"

function App() {
  let priceCardDetail=[
    {
      planname:'free',
      price:'0',
      features:[
        {
          name:'10 users included',
        },
        {
          name:"2 gb of storage",
        },
        {
          name:"2 gb of storage",
        },
        {
          name:"2 gb of storage",
        },
        {
          name:"2 gb of storage",
        },

      ],
      
      
    },
    {
      planname:'plus',
      price:'15',
      features:[
        {
          name:'25 users included',
          
        },
        {
          name:"7 gb of storage",
        },
      ]

    },
    {
      planname:'pro',
      price:'29',
      
      features:[
        {
          name:'25 users included',
        },
        {
          name:"7 gb of storage",
        },
      ]
    },
  ]
  return (
    <div className="container">
      <div className="row">
        {
          priceCardDetail.map((card)=>{
            return<Card data={card}/>
          })
        }
       
        
      </div>
    </div>
  );
}

export default App;
