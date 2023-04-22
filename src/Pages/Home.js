import React from 'react'
import './homeStyles.css'
// import DirectMessageButton from '../Components/DirectMessageButton'

function DirectMessageButton(props) {

  return (
    <div 
        className='dmButton'
        onClick={() => {}}    
    >
        <p>{props.name}</p>
    </div>
  )
}

function Home() {
  return (
    <div>
      <div className='directMessagesSection'>
        <h3>Messages</h3>
        <DirectMessageButton name={"Michelle"} />
        <DirectMessageButton name={"Roahn"} />
        <DirectMessageButton name={"Dez"} />
        <DirectMessageButton name={"Figgy"} />
      </div>
      <div className='detailsSection'>
        <h2>The deatils of whatever you're looking at will be shown here</h2>
        <h3>and more content!</h3>
      </div>
    </div>
  )
}

export default Home