import React from "react";
import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

const Faq = () => {
  return (
    <div className="faqBG pb-4">
    <div className=" container py-lg-5 py-sm-3 mx-auto">
      <div className="text-center pt-5 pb-5">
        <h2 className="text-uppercase title-shadow">FAQ</h2>
        <hr className="hr blurry-ruler" />
        <p className="text-muted">
        Answered Frequently Asked Questions, Still Confused ?
        </p>
      </div>
      <Accordion className="mb-4">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h5>
              Explain CORS (Cross-Origin Resource Sharing) and Write its
              Importance.
            </h5>
          </Accordion.Header>
          <Accordion.Body>
            CORS stands for Cross-origin resource sharing. It is basically
            defined as a browser mechanism that enables web pages from one
            domain to have controlled access to resources that are located at
            different domains (cross-domain request). In other words, it allows
            scripts running on a browser client to interact with and access
            resources from other origins. It provides and extends flexibility to
            the SOP (Same-Origin Policy). A same-origin policy restricts a
            website's ability to access resources outside its source domain. For
            example, if a JavaScript app wanted to call an API (Application
            Programming Interface) running on another domain, it would be
            blocked and prevented from doing so because of the SOP. Due to
            restrictions caused by the same-origin policy, CORS was
            introduced.When a website's CORS policy is set up poorly, it also
            poses the risk of cross-domain attacks. As such, it cannot prevent
            cross-origin attacks such as CSRF (Cross-Site Request Forgery).
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <h5>What do you mean by ETag (Entity Tag) and how does it work?</h5>
          </Accordion.Header>
          <Accordion.Body>
            The ETag (entity tag) is a part of the HTTP protocol. This is one of
            several mechanisms that HTTP provides to validate Web caches, which
            allows conditional requests to be made from a browser to resources.
            Moreover, Etags make sure that simultaneous updates of the same
            resource don't overwrite each other (mid-air collisions).<br></br>
            ETags are opaque identifiers assigned by a server to a specific
            version of a resource found at a specific URL. Every time the
            resource representation at that URL changes, an entirely new ETag is
            assigned. As such, ETags can be compared in the same way as
            fingerprints and determine if two representations of a resource are
            identical.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <h5>Explain HTML5 Web storage.</h5>
          </Accordion.Header>
          <Accordion.Body>
            HTML5 has many great features, including Web Storage, which is
            sometimes referred to as DOM storage (Document Object Model
            Storage). Web applications can use Web Storage to store data locally
            in the browser on the user/client’s side. Data is stored in the form
            of a key/value pair in the user's browser. Using web storage to
            store data is similar to using cookies, but web storage is faster
            and more convenient. Web Storage should never be used to store
            sensitive data. It isn't "more secure" than cookies since it isn't
            transmitted over the wire and isn't encrypted.<br></br>
            <br></br>
            Types of Web Storage:<br></br>
            As outlined below, there are two types of web storage with different
            scopes and lifespans: Local Storage: This storage uses
            Windows.localStorage object that stores data with no expiration
            date. Once stored in local storage, the data will remain available
            even after the user's browser is closed and reopened. Session
            Storage: This storage uses the Windows.sessionStorage object that
            stores data for one or single session only. As soon as the user
            closes his browser, data is lost or deleted from the browser, and
            the session would be lost.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <h5>Explain DOM (Document Object Model)?</h5>
          </Accordion.Header>
          <Accordion.Body>
            DOM stands for Document Object Model. It is basically a
            cross-platform, language-independent API (Application Programming
            Interface) for XML (Extensible Markup Language) and HTML documents.
            To put it simply, DOM describes the logical structure of documents
            and how one can access and manipulate them. For example, here is an
            HTML document that illustrates the DOM hierarchy.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <h5>
              While building a web application, how do you consider SEO,
              maintainability, UX, performance, and security?
            </h5>
          </Accordion.Header>
          <Accordion.Body>
            Security should be a top priority in any organization that handles
            vital data. On the other hand, SEO and UX should be prioritized for
            small and medium-sized online businesses. You will need to pay more
            attention to performance and SEO if you write an online publication.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>
            <h5>What is an event loop in Node JS?</h5>
          </Accordion.Header>
          <Accordion.Body>
            Asynchronous programming in JavaScript is made possible by the event
            loop. With JS, all operations occur on a single thread, but we can
            create the illusion of multi-threading by using smart data
            structures. Event loop takes care of anything that's async using a
            queue and listener. <br></br>
            <br></br>
            So, when an async function has to be executed (or an I/O has to be
            performed), the main thread sends it to another thread, allowing v8
            (Javascript engine) to continue running its code. The event loop
            consists of different phases with specific tasks like pending
            callbacks, close callbacks, timers, idle or prepare, poll, check,
            with different FIFO (First-In-First-Out) queues.<br></br>
            <br></br>
            Conclusion <br></br>
            In an era of economic uncertainty, web development is one of the
            most promising careers to pursue. In spite of this, web developer
            interviews can be intimidating, and if you are unprepared, you will
            become overwhelmed and lose confidence. In order to be competitive,
            you must be able to have a competitive edge and skill sets that set
            you apart from the rest. To be successful, you must have a thorough
            understanding and hands-on experience with integrating new
            technologies, CSS3, HTML5 APIs, front-end scripting language
            libraries, and languages like JavaScript, Python, PHP, etc.
            Furthermore, you must be knowledgeable about configuring
            applications on web servers and databases, managing SEO keywords,
            browser compatibility and web security.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>
            <h5>What is the purpose of closures in JavaScript?</h5>
          </Accordion.Header>
          <Accordion.Body>
            In JavaScript, a closure is known as a JavaScript closure or JS
            closure. Closures allow you to access the scope (variables and
            parameters) of an outer function from an inner function. Every time
            a JavaScript function is created, a closure is created. JavaScript
            closures allow you to control which variables are and are not in
            scope in a given function, as well as which variables are shared
            among siblings within the same containing scope.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
    </div>
  );
};

export default Faq;
