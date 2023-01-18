React;
ReactDOM;
class Heading extends React.Component {

    render() {
        const { className, titleProps, children } = this.props
            // console.log(this);
        return React.createElement('h1', {
            className: className,
            title: titleProps
        }, 'Hi, React!', ...children);
    }
}
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    increment=()=>{
        // this.state.count++;
        this.setState({count:this.state.count+1});
        console.log(this.state.count);

    }
    decrement=()=>{
        // this.state.count--;
        this.setState({count:this.state.count-1});

        console.log(this.state.count);
    }
    render() {
        const { count } = this.state;
        return React.createElement(React.Fragment, null,
            React.createElement('h2', {className:'color'}, count),
            React.createElement('button', {onClick:this.increment}, '+'),
            React.createElement('button', {onClick:this.decrement}, '-')
        );
    }
}
const root = document.getElementById('root');

const container = ReactDOM.createRoot(root);

// const child = React.createElement(Heading, { titleProps: 'titleProps', className: "color" }, 'Brad', 'Vasya');
const child = React.createElement(Counter, {})
    // ReactDOM.createPortal(child, container);
container.render(child);