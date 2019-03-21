import '../lib/react-ui-tree.css';
import './theme.css';
import './app.css';
import cx from 'classnames';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Tree from '../lib/react-ui-tree.js';
import tree from './tree';
import packageJSON from '../package.json';
import SortableTree from 'react-sortable-tree';
import 'react-sortable-tree/style.css'; 
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      treeData: [{ title: () => this.renderTitle('Test'), children: [{ title: 'Egg', children: [{ title: 'omlette1' },{ title: 'omlette2' }] }] }],
    };
  }
  renderTitle = (text) => {
    // u can add endpoint block html here for each node
    return <span style={{'color': 'red'}}>{text}<br/>
            <span style={{'color': 'red'}}>{text}</span><br/>
            <span style={{'color': 'red'}}>{text}</span><br/>
          </span>;
  }
  render() {
    return (
      <div className="app">
        <div style={{ height: 400 }}>
        <SortableTree
          treeData={this.state.treeData}
          onChange={treeData => this.setState({ treeData })}
          canDrag={false}
          // nodeContentRenderer={this.nodeContentRenderer}
          />
      </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
