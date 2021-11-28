Presentation Slides :

## Build a Simple, Stateless Component

1. In `Welcome.js`, fill in {`Name`} with the proper keywords to pass in input data `Name` from App.js to the Welcome page.

```jsx
return <h1>Hello, {props.name}</h1>;
```

2. On the other hand, in `App.js ` render the Welcome component and specify the input value.

```jsx
<Welcome name="Nancy" />
```

3. Show the students the final result.

## Build a Stateful Component

1. Change the function component `TimeInterval` to a class component. Remember using React code snippets, **rcc**.

```jsx
class Timer extends React.Component {
  ...

  render() {
    return (
      <div>
        Seconds: {`Changing Value of Seconds`}
      </div>
    );
  }
}
```

2. Initiate the value of Seconds using **state**.

```jsx
constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }
```

3. Write a proper description of the method tick() to update seconds.

```jsx
  tick() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }));
  }
```

4. Use `componentDidMount()` to start the timer and `componentWillUnmount()` to clear it.

```jsx

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
```

5. Render the changing value of seconds corrently inside the component.

## Build a To-Do List App

1. In `ToDoList.js`, start with defining **state** in the base constructor.

```jsx
...
this.state = { items: [], text: '' };
...
```

2. Complete the code used for **setState** so that it would update the state properly.

```jsx
     this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
   ...
```

3. Complete the code of the handleSubmit() method.

```jsx
   ...
     const newItem = {
      text: this.state.text,
      id: Date.now()
    };
   ...
```

4. Pass the suitable props to `ListItems.js`.

```jsx
<ListItems items={this.state.items} />
```

5. In `ListItems.js`, utilize the passed props to display the list items.

```jsx
{
  this.props.items.map((item) => <li key={item.id}>{item.text}</li>);
}
```
