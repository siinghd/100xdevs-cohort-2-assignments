import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

interface ReactElement {
  type: string;
  props: {
    href?: string;
    children?: string | ReactElement | ReactElement[];
  };
}

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
// Define the structure of the React-like element object

const createElement = (reactElement: ReactElement): HTMLElement => {
  // Create the element
  const element = document.createElement(reactElement.type);

  Object.entries(reactElement.props).forEach(([key, value]) => {
    if (key === 'children') {
      if (typeof value === 'string') {
        element.textContent = value;
      } else if (Array.isArray(value)) {
        value.forEach((child) => {
          element.appendChild(createElement(child));
        });
      } else {
        element.appendChild(createElement(value));
      }
    } else {
      element.setAttribute(key, value.toString());
    }
  });

  return element;
};

const customRender = (
  reactElement: ReactElement,
  containerPath: string
): void => {
  const container = document.querySelector(containerPath);
  if (!container) {
    console.error(`The container ${containerPath} was not found.`);
    return;
  }
  const element = createElement(reactElement);
  container.appendChild(element);
};

// Example usage:
const reactElement: ReactElement = {
  type: 'a',
  props: {
    href: 'https://hsingh.site',
    children: 'Click me!',
  },
};
// use the root element
customRender(reactElement, '#root');
