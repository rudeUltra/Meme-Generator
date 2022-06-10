import React from "react";


export default function Meme(){
    
    const [meme, setmeme]=React.useState({
        toptext:"",
        bottomtext:"",
        memeimg:"./images/bruh.jpg",
        
    });
    const[allmemes,setallmemes]=React.useState([]);

    function handlesubmit(){
        const randomnum=Math.floor(Math.random()*allmemes.length)
        const url=allmemes[randomnum].url
        setmeme(prev=>({
            ...prev,
            memeimg:url
        }))
    }

    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res=>res.json())
        .then(data=>setallmemes(data.data.memes))
        
    },[])
    console.log(allmemes);

    function handlechange(event){
        const {name,value}=event.target;
        setmeme(prev=>({
            ...prev,
            [name]:value
        }))
      
    }
    return (
        <main>
            <form className="form">
                <input className="form-input"  onChange={handlechange} placeholder="top text" name="toptext" value={meme.toptext} type="text"/>
                <input className="form-input"  onChange={handlechange} value={meme.bottomtext} name="bottomtext" placeholder="bottom text" type="text"/>
                <button className="form-button" type="button" onClick={handlesubmit}>Create new Meme SUs 😐</button>
            </form>
            <div className="meme">
            <img src={meme.memeimg} className="meme-img"/>
            <h2 className="top-text" >{meme.toptext}</h2>
            <h2 className="bottom-text"cd >{meme.bottomtext}</h2>
            </div>
        </main>
    )
}
