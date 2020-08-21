import React from "react";
// import Footer from "./components/footer";
// import HomeBody from "./components/homebody";
import Header from "./components/header";
import { CardList } from "./components/card-list/card-list.component";

import "./App.css";

// function App() {
//   return (
//     <div className="App">

//       {/* <HomeBody /> */}
//       {/* <Footer /> */}
//     </div>
//   );
// }

// export default App;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
      response.json().then((users) => this.setState({ monsters: users }))
    );
  }

  render() {
    return (
      <div className="App">
        {/* <input type="search" placeholder="search monsters" onChange={e => } /> */}
        <Header />
        <CardList monsters={this.state.monsters}></CardList>
      </div>
    );
  }
}

export default App;
