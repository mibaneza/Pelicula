'use strict';

const e = React.createElement;
const rce = React.createElement;
class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this awdwa.';
    }

    return e(
      'button',
      {
        onClick: () => 
        this.setState({
          liked: true
        })
      },
      'Like'
    );
  }
}
const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);

class Texto extends React.Component {
  constructor(props) {
    super(props);
    //this.state = { liked: false };
  }

  render() {
 /*   if (this.state.liked) {
      return 'You liked this awdwa.';
    }
*/
    return rce(
      'h1',
      null,
      "Hola mundo"
    );
  }
}
const domContainerr = document.querySelector('#like_button');
ReactDOM.render(rce(Texto), domContainerr);



