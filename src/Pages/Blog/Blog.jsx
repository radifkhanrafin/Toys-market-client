import React from 'react';
import usetitle from '../../Component/Dynamic_Title/usetitle';

const Blog = () => {
    usetitle("Blog")
    return (
        <div>
            <div className='my-8'>
                <h3 className='text-3xl mb-3 font-bold'> Q1: What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>
                <p>
                    An access token and a refresh token are both types of tokens used in OAuth 2.0 to authenticate users and grant them access to protected resources.
                    Access tokens are short-lived tokens that are used to make authenticated requests to a protected resource. They are typically used to access resources that are not sensitive or that do not require a high level of security. Access tokens expire after a certain period of time, and they must be refreshed before they can be used again.
                    Refresh tokens are long-lived tokens that are used to obtain new access tokens. They are typically used to access resources that are sensitive or that require a high level of security. Refresh tokens do not expire, and they can be used to obtain new access tokens as needed.
                    Access tokens and refresh tokens are both stored on the client-side. The best place to store them depends on the type of application and the level of security required. For example, access tokens can be stored in the browser's local storage or in a cookie. Refresh tokens should be stored in a secure location, such as a database or a hardware security module.

                    Here are some best practices for storing access tokens and refresh tokens on the client-side:

                    Encrypt access tokens and refresh tokens before storing them. This will help to protect them from unauthorized access.
                    Store access tokens and refresh tokens in a secure location. This could be a database, a hardware security module, or a secure file.
                    Limit the access that users have to access tokens and refresh tokens. Only give users the access that they need to perform their tasks.
                    Rotate access tokens and refresh tokens regularly. This will help to protect them from being compromised.
                    By following these best practices, you can help to ensure that your access tokens and refresh tokens are secure and that your users' data is protected.
                </p>
            </div>
            <div className='my-8'>
                <h3 className='text-3xl mb-3 font-bold'> Q2: Compare SQL and NoSQL databases?</h3>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Feature</th>
                                <th>SQL Databases</th>
                                <th>Favorite Color</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <th>1</th>
                                <td>Data model</td>
                                <td>Relational</td>
                                <td>Non-relational</td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <th>2</th>
                                <td>Query language</td>
                                <td>SQL</td>
                                <td>No SQL</td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <th>3</th>
                                <td>Data types</td>
                                <td>	Numbers, strings, dates, etc.</td>
                                <td>Varies depending on the database</td>
                            </tr>
                            {/* row 4 */}
                            <tr>
                                <th>4</th>
                                <td>Queries</td>
                                <td>Complex queries</td>
                                <td>Simple queries</td>
                            </tr>
                            {/* row 5 */}
                            <tr>
                                <th>5</th>
                                <td>Transaction management</td>
                                <td>Yes</td>
                                <td>No</td>
                            </tr>
                            {/* row 6 */}
                            <tr>
                                <th>6</th>
                                <td>Performance</td>
                                <td>Good for complex queries</td>
                                <td>Good for simple queries and high volume of data</td>
                            </tr>
                            {/* row 7  */}
                            <tr>
                                <th>7</th>
                                <td>Scalability</td>
                                <td>Vertical</td>
                                <td>Horizontal</td>
                            </tr>
                            {/* row 8 */}
                            <tr>
                                <th>8</th>
                                <td>Cost</td>
                                <td>Typically more expensive</td>
                                <td>Typically less expensive
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='my-8'>
                <h3 className='text-3xl mb-3 font-bold'> Q3: What is express js? What is Nest JS </h3>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Feature</th>
                                <th>Express.js</th>
                                <th>Next.js</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <th>1</th>
                                <td>Framework type	</td>
                                <td>Minimal</td>
                                <td>Opinionated</td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <th>2</th>
                                <td>Architectural pattern</td>
                                <td>None</td>
                                <td>MVC</td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <th>3</th>
                                <td>Architectural pattern</td>
                                <td>No</td>
                                <td>Yes</td>
                            </tr>
                            {/* row 4 */}
                            <tr>
                                <th>4</th>
                                <td>Routing</td>
                                <td>Basic</td>
                                <td>Advanced</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Blog;