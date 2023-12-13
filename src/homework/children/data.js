export const Content = [
  {
    title: "Importance of components",
    data: [
      "Passing data from a parent component to a child component: Props allow you to pass data from a parent component to a child component so that the child can use the data in its rendering logic or functionality.",
      "Controlling component behavior: Props can be used to control the behavior of a component by passing in values that determine how the component should behave in different situations.",
      "Customizing component appearance: Props can be used to customize the appearance of a component by passing in values that affect the component's styling or layout.",
      "Implementing conditional rendering: Props can be used to implement conditional rendering logic by passing in values that determine whether or not certain parts of a component should be displayed.",
      "Adding event handlers: Props can be used to add event handlers to a component so that it can respond to user interactions, such as clicks or keyboard input.",
    ],
  },
  {
    title: "Uses of Props",
    data: [
      "Modularity: Components allow you to break down a complex application into smaller, reusable parts, making it easier to understand and maintain over time.",
      "Reusability: Because components are modular and can be used multiple times throughout an application, they allow you to write less code and reduce the likelihood of bugs.",
      "Encapsulation: Components provide a clear boundary between different parts of an application, which helps to prevent unintended side effects and makes it easier to reason about how the application works.",
      "Composability: Components can be composed together to create more complex interfaces, making it easy to build up a rich user experience without having to write lots of custom code.",
      "Scalability: By breaking an application down into components, it becomes much easier to scale the application up over time as new features are added or the user base grows. This is because each component can be optimized and improved independently of the rest of the application.",
    ],
  },
];
export const title = "Assignment";
export const getSlug = (str = "") =>
  str
    .split("")
    .map((word) => word.toLowerCase())
    .join("-");
