const Person = props =>{
    return React.createElement('div',{}, [
        React.createElement('h1', {}, props.name),
        React.createElement('p',{},props.occupation)
    ])
}

const App = () =>{
    return React.createElement('div',{}, [
        React.createElement('h1', {class: 'title'}, 'React IS rendered'),
        React.createElement(Person, {name: 'Eva', occupation:'Yoga instructor'}, null),
        React.createElement(Person, {name: 'Walle', occupation:'Robot'}, null),
        React.createElement(Person, {name: 'Russ', occupation:'clerk'}, null),
    ]);
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));