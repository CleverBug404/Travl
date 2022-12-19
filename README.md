Architecture

Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).

In the course of completing our Travlr full-stack application, the project evolved, from a static HTML website, to an Express HTML website, and then an SPA application was added, using AngularJS. All along the way, JavaScript was employed to provide functionality to the website, sometimes in combination with Express HTML and sometimes in combination with AngularJS. Additionally, TypeScript was used to implement the components of the SPA.

Express HTML provided powerful tools to define and configure routes and API endpoints. Handlebars was a very useful feature for transforming templated HTML into real HTML (at runtime). It also enabled me to share templates across pages, thereby facilitating reuse of effort (e.g., for the nav panel). JavaScript was an essential tool in the development of controllers to serve the routes and API.

AngularJS provided powerful component defining tools. These components proved to be reusable and did an excellent job at allowing me to separate concerns. AngularJS’s components acted as extension elements in HTML documents, powerfully allowing me to insert these components where needed in the HTML. The AngularJS components include TypeScript files that bind a TypeScript class to the HTML extensions. TypeScript proved itself a far more elegant tool for defining classes which are then automatically translated into JavaScript by the compiler. AngularJS also enabled me to incorporate security into the application.

Why did the backend use a NoSQL MongoDB database?

This question has several answers. Using a NoSQL MongoDB database was a requirement for the project. Our decision to develop a MEAN stack application implicitly indicated that a NoSQL MongoDB database would be our preferred database backend. As for the attributes of a MongoDB database that make it an ideal DB for this application, I would include among them the use of JSON which integrates nicely with JavaScript and TypeScript. In terms of representation, Mongo’s use of JSON closely parallels our models. Finally, our application did not require us to join documents across collections. While Mongo DB allows joining, joining is more straightforward in SQL DBs. Without the need for joins or complex joins, there was no reason to consider an SQL DB.

Functionality

How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?

JSON is not a programming language. It is a lightweight format for transmitting stored data. In this sense, JSON is much like XML with the significant difference that its representation is based on JavaScript’s syntax for literals (i.e., JS’s object, array, string, number, and boolean value syntax). JSON ties together the frontend and the backend development pieces by serializing JavaScript values into JSON strings and by deserializing JSON strings into JavaScript values. Data transmitted from the frontend to the backend is serialized as JSON and then deserialized by MongoDB into MongoDB queries, directives, and documents. Likewise, MongoDB serializes result sets and responses containing response information, collections, and documents into JSON which, in turn, are deserialized by the frontend into JavaScript objects.

Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.

The Card and CardList components are excellent examples of refactoring. We began with static HTML which contained a series of information about trips. Each trip contained an image, title, description, and other content. A CardList component was developed to iteratively display this information via Angular. The CardList itself was then refactored to reference a Card component. The Card component contained the trip-specific information and image. The CardList arranged these Cards into a list. The benefits of this technique include reusability and separation of concerns. The display and layout of a specific trip is handled by the Card. It has no need to know about the context in which it is displayed. The display and layout of the list of cards needs only to know that it is displaying cards but had no need to know about the specifics of a Card. Both the Card and the CardList could be used by other pages or even on the same page in a different context. For example, we could have added a hover feature to Card images that would have overlayed more details about the trip it describes and it could include another instance of the Card itself in this overlay.

Testing

Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.

Endpoints are API routes that used to access the internal functionality of the application. Methods (i.e. put, get, post, and delete) are used to qualify the access (i.e., create, retrieve, update, and delete to the backend). Security wraps these calls to ensure that only those with credentials to perform the operation are permitted to do so. Security depends upon authentication – the secure process of confirming the identity of the user and retrieving the user’s credentials.

Reflection

How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

The skills I have learned and developed through this course include a better understanding of HTML, proficiency in JavaScript programming, a further development of my MongoDB skills, an introduction to TypeScript, and an introduction to Angular. Beyond the specific tools, I have learned through experience exactly what a full-stack application is, how the different parts work together, and how to integrate the front-end of a web-application with its backend. I have also learned more about the REST model in general, how to structure a web application, and how to manage the plethora of parts that work together as whole.

Since I aspire to become a developer, I believe all of these skills are useful skills to carry in my toolbox of experience. In the current market, knowledge of MEAN development is highly desirable. Knowledge of full-stack development in general will also extend to help me learn other full-stack suites.
