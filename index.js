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
    render() {
        const { count } = this.state;
        return React.createElement(React.Fragment, null,
            React.createElement('h2', null, count),
            React.createElement('button', null, '+'),
            React.createElement('button', null, '-')
        );
    }
}
const root = document.getElementById('root');

// const container = React.createRoot(root);

// const child = React.createElement(Heading, { titleProps: 'titleProps', className: "color" }, 'Brad', 'Vasya');
const child = React.createElement(Counter, {})
    // ReactDOM.createPortal(child, container);
ReactDOM.render(child, root);