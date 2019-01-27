## Modules

<dl>
<dt><a href="#mdc.module_pages">pages</a></dt>
<dd><p>All MDC templates</p>
</dd>
<dt><a href="#pdfBuilder.module_mdc">mdc</a></dt>
<dd><p>The pieces that make up the various pdf templates are broken down to &#39;components&#39; in
order to make templating PDFs a little bit easier. These components are then used to put
together a document definition and create a PDF. This also exposes those components
and make them reusable.</p>
</dd>
</dl>

## Classes

<dl>
<dt><a href="#Login">Login</a></dt>
<dd><p>Login (Main) Component</p>
</dd>
<dt><a href="#EventList">EventList</a></dt>
<dd><p>EventList Component</p>
</dd>
<dt><a href="#HeaderCarousel">HeaderCarousel</a></dt>
<dd><p>HeaderCarousel Component</p>
</dd>
<dt><a href="#ProfileDashboard">ProfileDashboard</a></dt>
<dd><p>ProfileDashboard</p>
</dd>
<dt><a href="#LoginStep">LoginStep</a></dt>
<dd><p>LoginStep (Main) Component</p>
</dd>
<dt><a href="#ProfileStep">ProfileStep</a></dt>
<dd><p>ProfileStep (Main) Component</p>
</dd>
<dt><a href="#Register">Register</a></dt>
<dd><p>Register Component</p>
</dd>
</dl>

## Objects

<dl>
<dt><a href="#frontPage - MDC Frontpage Definition">frontPage - MDC Frontpage Definition</a> : <code>object</code></dt>
<dd><p>Standard 132nd MDC Frontpage</p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#API_ROOT">API_ROOT</a></dt>
<dd><p>This needs to point at the API root. Updating this to i.e /api/v2/ will change all connected Actions</p>
</dd>
<dt><a href="#registerUser">registerUser</a> ⇒ <code>Promise</code></dt>
<dd><p>Register User Action</p>
</dd>
<dt><a href="#setEventsLoading">setEventsLoading</a></dt>
<dd><p>EVENTS(S) LOADING</p>
</dd>
<dt><a href="#getAllEvents">getAllEvents</a></dt>
<dd><p>GET ALL EVENTS</p>
</dd>
<dt><a href="#getEvent">getEvent</a></dt>
<dd><p>GET EVENT</p>
</dd>
<dt><a href="#setMissionsLoading">setMissionsLoading</a></dt>
<dd><p>MISSION(S) LOADING</p>
</dd>
<dt><a href="#getAllMissions">getAllMissions</a></dt>
<dd><p>GET ALL MISSIONS</p>
</dd>
<dt><a href="#getMission">getMission</a></dt>
<dd><p>GET MISSION</p>
</dd>
<dt><a href="#WrappedLoginForm">WrappedLoginForm</a></dt>
<dd><p>WrappedLoginForm - For enabling AntD Form decorators on LoginForm</p>
</dd>
<dt><a href="#WrappedLoginForm">WrappedLoginForm</a></dt>
<dd><p>WrappedLoginForm - For enabling AntD Form decorators on LoginForm</p>
</dd>
<dt><a href="#WrappedProfileForm">WrappedProfileForm</a></dt>
<dd><p>WrappedProfileForm - For enabling AntD Form decorators on LoginForm</p>
</dd>
<dt><a href="#WrappedRegisterForm">WrappedRegisterForm</a></dt>
<dd><p>WrappedRegisterForm - For enabling AntD Form decorators on LoginForm</p>
</dd>
<dt><a href="#defaultData">defaultData</a></dt>
<dd><p>Default Data-object for a MDC to use as default values when generating an MDC
It is important that each key/value pair has a value of either int, string or an array of objects!</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#App">App()</a></dt>
<dd><p>App Component</p>
</dd>
<dt><a href="#HeaderComponent">HeaderComponent()</a></dt>
<dd><p>Header Component</p>
</dd>
<dt><a href="#LoginForm">LoginForm()</a></dt>
<dd><p>LoginForm Component</p>
</dd>
<dt><a href="#CarouselItem">CarouselItem(title, body, imgUrl)</a></dt>
<dd><p>CarouselItem Component</p>
</dd>
<dt><a href="#LoginForm">LoginForm()</a></dt>
<dd><p>LoginForm Component</p>
</dd>
<dt><a href="#ProfileForm">ProfileForm()</a></dt>
<dd><p>ProfileForm Component</p>
</dd>
<dt><a href="#RegisterForm">RegisterForm()</a></dt>
<dd><p>RegisterForm Component</p>
</dd>
<dt><a href="#Sidebar">Sidebar()</a></dt>
<dd><p>Sidebar Componet</p>
</dd>
<dt><a href="#findOne">findOne(haystack, needles)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines if an array contains one or more items from another array</p>
</dd>
</dl>

<a name="mdc.module_pages"></a>

## pages
All MDC templates

<a name="pdfBuilder.module_mdc"></a>

## mdc
The pieces that make up the various pdf templates are broken down to 'components' in
order to make templating PDFs a little bit easier. These components are then used to put
together a document definition and create a PDF. This also exposes those components
and make them reusable.

<a name="pdfBuilder.module_mdc.makePdf"></a>

### mdc.makePdf(title, content)
Generates and returns a pdfMake Object (PDF)

**Kind**: static method of [<code>mdc</code>](#pdfBuilder.module_mdc)  

| Param | Type | Description |
| --- | --- | --- |
| title | <code>string</code> | Page/filename |
| content | <code>array</code> | An array of makePDF content |

<a name="Login"></a>

## Login
Login (Main) Component

**Kind**: global class  
<a name="EventList"></a>

## EventList
EventList Component

**Kind**: global class  
<a name="new_EventList_new"></a>

### new EventList(activeOnly)

| Param | Type | Description |
| --- | --- | --- |
| activeOnly | <code>bool</code> | Will filter out inactive events on render |

<a name="HeaderCarousel"></a>

## HeaderCarousel
HeaderCarousel Component

**Kind**: global class  
<a name="new_HeaderCarousel_new"></a>

### new HeaderCarousel(fetchSlides, slides)

| Param | Type | Description |
| --- | --- | --- |
| fetchSlides | <code>function</code> | Function used for getting slides |
| slides | <code>array</code> | An array of slides to display |

<a name="ProfileDashboard"></a>

## ProfileDashboard
ProfileDashboard

**Kind**: global class  
<a name="LoginStep"></a>

## LoginStep
LoginStep (Main) Component

**Kind**: global class  
<a name="ProfileStep"></a>

## ProfileStep
ProfileStep (Main) Component

**Kind**: global class  
<a name="Register"></a>

## Register
Register Component

**Kind**: global class  
<a name="frontPage - MDC Frontpage Definition"></a>

## frontPage - MDC Frontpage Definition : <code>object</code>
Standard 132nd MDC Frontpage

**Kind**: global namespace  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| frontpage.title | <code>string</code> | Human-readable page name |
| frontpage.allowMultiple | <code>bool</code> | Will allow multiple instances of the |

<a name="API_ROOT"></a>

## API\_ROOT
This needs to point at the API root. Updating this to i.e /api/v2/ will change all connected Actions

**Kind**: global constant  
<a name="registerUser"></a>

## registerUser ⇒ <code>Promise</code>
Register User Action

**Kind**: global constant  
<a name="setEventsLoading"></a>

## setEventsLoading
EVENTS(S) LOADING

**Kind**: global constant  
<a name="getAllEvents"></a>

## getAllEvents
GET ALL EVENTS

**Kind**: global constant  

| Param | Type | Description |
| --- | --- | --- |
| limit | <code>string</code> | Number of events to return |
| desc | <code>bool</code> | If true, orders the returned data in descending order by id |

<a name="getEvent"></a>

## getEvent
GET EVENT

**Kind**: global constant  

| Param | Type | Description |
| --- | --- | --- |
| eventId | <code>\*</code> | ID of event to return |

<a name="setMissionsLoading"></a>

## setMissionsLoading
MISSION(S) LOADING

**Kind**: global constant  
<a name="getAllMissions"></a>

## getAllMissions
GET ALL MISSIONS

**Kind**: global constant  

| Param | Type | Description |
| --- | --- | --- |
| limit | <code>string</code> | Number of missions to return |
| desc | <code>bool</code> | If true, orders the returned data in descending order by id |

<a name="getMission"></a>

## getMission
GET MISSION

**Kind**: global constant  

| Param | Type | Description |
| --- | --- | --- |
| missionID | <code>\*</code> | ID of mission to return |

<a name="WrappedLoginForm"></a>

## WrappedLoginForm
WrappedLoginForm - For enabling AntD Form decorators on LoginForm

**Kind**: global constant  
<a name="WrappedLoginForm"></a>

## WrappedLoginForm
WrappedLoginForm - For enabling AntD Form decorators on LoginForm

**Kind**: global constant  
<a name="WrappedProfileForm"></a>

## WrappedProfileForm
WrappedProfileForm - For enabling AntD Form decorators on LoginForm

**Kind**: global constant  
<a name="WrappedRegisterForm"></a>

## WrappedRegisterForm
WrappedRegisterForm - For enabling AntD Form decorators on LoginForm

**Kind**: global constant  
<a name="defaultData"></a>

## defaultData
Default Data-object for a MDC to use as default values when generating an MDC
It is important that each key/value pair has a value of either int, string or an array of objects!

**Kind**: global constant  
<a name="App"></a>

## App()
App Component

**Kind**: global function  
<a name="HeaderComponent"></a>

## HeaderComponent()
Header Component

**Kind**: global function  
<a name="LoginForm"></a>

## LoginForm()
LoginForm Component

**Kind**: global function  
<a name="CarouselItem"></a>

## CarouselItem(title, body, imgUrl)
CarouselItem Component

**Kind**: global function  

| Param | Type |
| --- | --- |
| title | <code>string</code> | 
| body | <code>string</code> | 
| imgUrl | <code>string</code> | 

<a name="LoginForm"></a>

## LoginForm()
LoginForm Component

**Kind**: global function  
<a name="ProfileForm"></a>

## ProfileForm()
ProfileForm Component

**Kind**: global function  
<a name="RegisterForm"></a>

## RegisterForm()
RegisterForm Component

**Kind**: global function  
<a name="Sidebar"></a>

## Sidebar()
Sidebar Componet

**Kind**: global function  
<a name="findOne"></a>

## findOne(haystack, needles) ⇒ <code>boolean</code>
Determines if an array contains one or more items from another array

**Kind**: global function  
**Returns**: <code>boolean</code> - true|false if haystack contains at least one item from needles  

| Param | Type | Description |
| --- | --- | --- |
| haystack | <code>array</code> | > The array to search |
| needles | <code>array</code> | > The array providing items to check for in the heystack |

