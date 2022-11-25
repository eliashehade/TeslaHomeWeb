import './App.css';
import Header from './components/Header';


import lambohurecan from './images/alexa.png'
import lambourus from './images/cortana.png'
import lamboavendator from './images/siri.png'


import Item from './components/Item.js';
function App() {
  return (
    <div className="App">
      < Header />
      <div className="app_itemContainer">
       
        <Item
        title='lamborghini hurecan'
        desc='$200,000'
        descLink=''
        backgroundImg={lambohurecan}
        leftBtnTxt= 'CUSTOM ORDER'
        leftBtnLinke=''
        rightBtnTxt='LEARN MORE'
        rightBtnLink=''
        twoButtons='true'
        first
        />
        <Item
        title='lamborghini urus'
        desc='Money-back guarantee'
        descLink=''
        backgroundImg={lambourus}
        leftBtnTxt= 'CUSTOM ORDER'
        leftBtnLinke=''
        rightBtnTxt='LEARN MORE'
        rightBtnLink=''
        twoButtons='true'
        />
        <Item
        title='lamborghini avendator'
        desc='Money-back guarantee'
        descLink=''
        backgroundImg={lamboavendator}
        leftBtnTxt= 'CUSTOM ORDER'
        leftBtnLinke=''
        rightBtnTxt='LEARN MORE'
        rightBtnLink=''
        twoButtons='true'
        />
       
       
      </div>

    </div>
  );
}

export default App;