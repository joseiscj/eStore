import React from 'react';
import ThemeContext from '../../context/ThemeContext';

const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};

class ThemedButton extends React.Component {  // Provider component implementation of Context.Provider
  constructor(props) {
    super(props);

    this.state = { // Define initial state
      theme: themes.light,
      toggleTheme: this.toggleTheme,
    }
  }

  toggleTheme = () => {
    this.setState(state => ({
      theme:
        state.theme === themes.dark
          ? themes.light
          : themes.dark,
    }));
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        { this.props.children }
      </ThemeContext.Provider>
    )
  }
};
  

export default ThemedButton;