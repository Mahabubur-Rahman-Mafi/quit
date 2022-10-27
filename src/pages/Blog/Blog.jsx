import React from 'react';
import { Container } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import cors from '../../Assest/cors-min.jpg'
import fb from "../../Assest/firebase-min.jpg"
import pri from '../../Assest/private-min.jpg'
import nd from '../../Assest/node-min.jpg'
const Blog = () => {
    return (
      <div>
        <Container>
          {/* what is `cors`? */}
          <Card>
            <Card.Img variant="top" src={cors} />
            <Card.Body>
              <Card.Title>what is `cors`?</Card.Title>
              <Card.Text>
                Cross-Origin Resource Sharing (CORS) is an HTTP-header based
                mechanism that allows a server to indicate any origins (domain,
                scheme, or port) other than its own from which a browser should
                permit loading resources. CORS also relies on a mechanism by
                which browsers make a "preflight" request to the server hosting
                the cross-origin resource, in order to check that the server
                will permit the actual request. In that preflight, the browser
                sends headers that indicate the HTTP method and headers that
                will be used in the actual request.
              </Card.Text>
            </Card.Body>
          </Card>
          {/* Why are you using `firebase`? What other options do you have to 
           implement authentication? */}
          <Card>
            <Card.Img variant="top" src={fb} />
            <Card.Body>
              <Card.Title>
                Why are you using `firebase`? What other options do you have to
                implement authentication?
              </Card.Title>
              <Card.Text>
                Firebase Authentication provides backend services, easy-to-use
                SDKs, and ready-made UI libraries to authenticate users to your
                app. It supports authentication using passwords, phone numbers,
                popular federated identity providers like Google, Facebook and
                Twitter, and more. Firebase Authentication integrates tightly
                with other Firebase services, and it leverages industry
                standards like OAuth 2.0 and OpenID Connect, so it can be easily
                integrated with your custom backend.
              </Card.Text>
            </Card.Body>
          </Card>
          {/* How does the private route work? */}
          <Card>
            <Card.Img variant="top" src={pri} />
            <Card.Body>
              <Card.Title>How does the private route work?</Card.Title>
              <Card.Text>
                The private route component is similar to the public route, the
                only change is that redirect URL and authenticate condition. If
                the user is not authenticated he will be redirected to the login
                page and the user can only access the authenticated routes If he
                is authenticated (Logged in).
              </Card.Text>
            </Card.Body>
          </Card>
          {/* What is Node? How does Node work? */}
          <Card>
            <Card.Img variant="top" src={nd} />
            <Card.Body>
              <Card.Title>What is Node? How does Node work?</Card.Title>
              <Card.Text>
                Node.js is a JavaScript runtime environment that achieves low
                latency and high throughput by taking a “non-blocking” approach
                to serving requests. In other words, Node.js wastes no time or
                resources on waiting for I/O requests to return. In the
                traditional approach to creating web servers, for each incoming
                request or connection the server spawns a new thread of
                execution or even forks a new process to handle the request and
                send a response. Conceptually, this makes perfect sense, but in
                practice it incurs a great deal of overhead.
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </div>
    );
};

export default Blog;