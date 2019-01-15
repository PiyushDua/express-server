# <p align = "center">CLIENT-SERVER ARCHITECTURE</p>
## Introduction

* In client server computing, the clients requests a resource and the server provides that resource. A server may serve multiple clients at the same time while a client is in contact with only one server.
* Client/server architecture is a computing model in which the server hosts, delivers and manages most of the resources and services to be consumed by the client. This type of architecture has one or more client computers connected to a central server over a network or internet connection. This system shares computing resources.
* Client/server architecture is also known as a networking computing model or client/server network because all the requests and services are delivered over a network.
* Client/server architecture is a producer/consumer computing architecture where the server acts as the producer and the client as a consumer. The server houses and provides high-end, computing-intensive services to the client on demand. These services can include application access, storage, file sharing, printer access and/or direct access to the server’s raw computing power.
* Client/server architecture works when the client computer sends a resource or process request to the server over the network connection, which is then processed and delivered to the client. A server computer can manage several clients simultaneously, whereas one client can be connected to several servers at a time, each providing a different set of services. In its simplest form, the internet is also based on client/server architecture where web servers serve many simultaneous users with website data.

![CLIENT-SERVER Image](https://www.tutorialspoint.com/assets/questions/media/10924/Client%20Server%20Architecture.PNG "Client-Server")

### Characteristics of Client-Server Architecture

* The client server computing works with a system of request and response. The client sends a request to the server and the server responds with the desired information.
* The client and server should follow a common communication protocol so they can easily interact with each other. All the communication protocols are available at the application layer.
* A server can only accommodate a limited number of client requests at a time. So it uses a system based to priority to respond to the requests.
* Denial of Service attacks hindera servers ability to respond to authentic client requests by inundating it with false requests.
* An example of a client server computing system is a web server. It returns the web pages to the clients that requested them.

### Advantages of Client-Server Architecture
* All the required data is concentrated in a single place i.e. the server. So it is easy to protect the data and provide authorisation and authentication.
* The server need not be located physically close to the clients. Yet the data can be accessed efficiently.
* It is easy to replace, upgrade or relocate the nodes in the client server model because all the nodes are independent and request data only from the server.
* All the nodes i.e clients and server may not be build on similar platforms yet they can easily facilitate the transfer of data.

### Disadvantages of Client-Server Architecture
* If all the clients simultaneously request data from the server, it may get overloaded. This may lead to congestion in the network.
* If the server fails for any reason, then none of the requests of the clients can be fulfilled. This leads of failure of the client server network.
* The cost of setting and maintaining a client server model are quite high.

## <p align = "center">HOW A REQUEST GET SERVED</p>
#### HTTP request
* A simple request message from a client computer consists of the following components:
  * A request line to get a required resource, for example a request GET /content/page1.html is requesting a resource called /content/page1.html from the server.
  * Headers (Example – Accept-Language: EN).
  * An empty line.
  * A message body which is optional.

#### HTTP response
* A simple response from the server contains the following components:
  * HTTP Status Code (For example HTTP/1.1 301 Moved Permanently).
  * Headers (Example – Content-Type: html)
  * An empty line.
  * A message body which is optional.

![REQUEST-RESPONSE Image](https://www.ntu.edu.sg/home/ehchua/programming/webprogramming/images/HTTP.png "Request-Response")

#### Step-1  Parsing the URL
* A URL is typed into the address bar of a web browser.
* The browser checks for the IP in its browser cache. If not found, it send a request to DNS.
* The browser parses the URL to find: the •protocol type, •host, •port, and •request-URI path.
* The browser forms a HTTP request.

#### Step-2  Sending the request
* A socket connection is opened from our user’s computer to the IP address.
* HTTP request is sent to the host & the machine waits to get a response back.
* Web server receives the request.

#### Step-3  The Server response
* Our host checks for more information to process the request: • headers, • GET, POST, PUT,... methods.
* If successful, the server returns a 200 status code (as the resource was found), response headers, and the requested data back to the browser.
* If the server fails to process or complete the request, it returns an 404 error message instead.

#### Step-4  Browser rendering
* The browser receives the response with a html document to parse into a DOM [Document Object Model]. For this, it translates html elements & attributes into nodes with the "Document Object" set as the root of the tree.
* When external script, image, style sheets are parsed, new requests are made to the server.
* When stylesheets are parsed, each applicable styles gets attached to the matching node in the DOM tree.
* Javascript files are parsed & executed.
  * HTML5 adds an option to mark the script as asynchronous so these will be parsed & executed by a different thread.
  * This way the page rendering is not halted.
  * DOM nodes are updated.
  * Firefox innately blocks scripts rendering while stylesheets remain un-loaded.
* In parallel to the DOM tree being constructed, the browser constructs a "render tree" of "frames" or "render objects". This is the visual representation of the node elements.
* The browser renders the page. The page is viewable & interact-able.

#### Step-5  HTTP persistent connection
* Connection: Keep-Alive header.
  * This initiates a single TCP connection for sending & receiving multiple HTTP requests / responses, instead of opening a new connection for every single request / response pair.

  * It is set from the initial browser request header, and informs the server to not drop this connection. When the client sends another request, it uses the same connection. This will continue until either the client or the server decides to drop the connection.














