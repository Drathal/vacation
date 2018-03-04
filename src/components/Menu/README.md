# Menu Component

A component that displays a icon menu and the application head

## Usage

```javascript
import Menu from './components/Menu'
```

## Code

```jsx
<Menu
    menuitems = { menuitems }
    onMenuItemClick={ action('button-click') }
    title={ 'title text' }/>
```

## Props

|  propName   |                       propType                       |  default   | required |                  description                   |
| ----------- | ---------------------------------------------------- | ---------- | -------- | ---------------------------------------------- |
| `title`     | `string`                                             | `#title#`  | 🚫        | Text to display ad title                       |
| `onMenuItemClick`      | `func`                                     | `f => f`     | 🚫        | function to be executed on menu button click, will receive path to route to |
| `menuitems`  | `arrayOf[{ icon, path }]`             | `[]` | 🚫        | array of menu items. <br/>path: will be supplied to onMenuItemClick. <br/>icon : a icon componeny  |
