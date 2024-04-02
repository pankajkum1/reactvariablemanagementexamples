react variable management example

1. context example

The only way to change data in a store is to “dispatch” an action. Once again, Redux has taken its inspiration from Flux architecture and requires that these actions be in Flux Standard Action (FSA) format. FSAs consist of a simple JavaScript object which always must have a type property and can contain payload, meta, and error properties. We are going to focus mostly on the payload.

Once an action has been dispatched (the store provides this dispatch method for us), the current state as well as the action dispatched are passed to the reducer. The reducer is a pure function in React. Its primary aim is to create a new state based on the current state and the action’s type and payload properties. Remember that a pure function always creates the same output, given the same input parameters, no matter how many times it is called. This behavior makes reducers predictable and easy to test.

Component hierarchy

Component is designed => business logic and rendering logic

prop drilling in combination with state management (useState)
to manage variables across different components

useContext API to share variables across child components
