# Next.js with Tailwind CSS Example

This is an example project that demonstrates how to use [Next.js](https://nextjs.org/), a popular React framework, in combination with [Tailwind CSS](https://tailwindcss.com/), a utility-first CSS framework.

## Project Structure

The project is structured as a standard Next.js application. The `pages` directory contains the application's pages, and the `components` directory contains reusable React components.

Styles are defined in the `src/constants/styleGuide.ts` file using Tailwind CSS classes. For specific components, you can define additional styles directly within the components themselves using Tailwind CSS. Here's how:

```ts
export const CustomComponent = () => {
    const customStyle = "bg-blue-500 text-white p-4";
    const titleStyle = "text-2xl font-bold mb-2";
    const descriptionStyle = "text-lg";

    return (
        <div className={customStyle}>
            <h2 className={titleStyle}>Hello, world!</h2>
            <p className={descriptionStyle}>This is a custom component.</p>
        </div>
    );
};
```

## Running the Project

To run the project, first install the dependencies:

`npm install`

Then, start the development server:

`npm run dev`

Open http://localhost:3000 with your browser to see the result.

## Contributing

Contributions are welcome! Please feel free to submit a pull request.
If you're interested in expanding this example or require any specific features, please don't hesitate to reach out. I'm open to collaboration and would be happy to help. You can contact me [here](https://www.chethanprabhakar.com/#contact).

## License

This project is open source and available under the MIT License.