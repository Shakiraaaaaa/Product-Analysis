import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1>Blogs</h1>
            <h2>What is context API? Purpose of context API</h2>
            <h6>A React app can use the React Context API to generate global variables that can be passed around. This is an alternative to "prop drilling," which entails passing props from grandparent to child to parent and so on. Context is also marketed as a simpler, lighter way to Redux state management.
                React.create All you need is Context(). It will give you a customer and a provider. Provider is a component that supplies the state to its children, as its name suggests. It will contain the "store" and serve as the parent of all components that may require it. A component that consumes and uses the state is known as a consumer.

            </h6>
            <h2>What is semantic tag</h2>
            <h6>Semantic HTML tags provide information about their contents in addition to how they appear on a page. The browser recognizes text encased in the code> tag as some kind of coding language right away. Instead of attempting to render the code, the browser recognizes that the text is being used as an example of code in an article or online tutorial.</h6>
        </div>
    );
};

export default Blogs;