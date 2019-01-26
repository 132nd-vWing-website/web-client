# client

## Modules

[pages](client.md#mdc.module_pages)

All MDC templates[mdc](client.md#pdfBuilder.module_mdc)

The pieces that make up the various pdf templates are broken down to 'components' in order to make templating PDFs a little bit easier. These components are then used to put together a document definition and create a PDF. This also exposes those components and make them reusable.

## Classes

[Login](client.md#Login)

Login \(Main\) Component[EventList](client.md#EventList)

EventList Component[HeaderCarousel](client.md#HeaderCarousel)

HeaderCarousel Component[ProfileDashboard](client.md#ProfileDashboard)

ProfileDashboard[LoginStep](client.md#LoginStep)

LoginStep \(Main\) Component[ProfileStep](client.md#ProfileStep)

ProfileStep \(Main\) Component[Register](client.md#Register)

Register Component

## Objects

[frontPage - MDC Frontpage Definition](client.md#frontPage%20-%20MDC%20Frontpage%20Definition) : `object`

Standard 132nd MDC Frontpage

## Constants

[API\_ROOT](client.md#API_ROOT)

This needs to point at the API root. Updating this to i.e /api/v2/ will change all connected Actions[registerUser](client.md#registerUser) ⇒ `Promise`

Register User Action[setEventsLoading](client.md#setEventsLoading)

EVENTS\(S\) LOADING[getAllEvents](client.md#getAllEvents)

GET ALL EVENTS[getEvent](client.md#getEvent)

GET EVENT[setMissionsLoading](client.md#setMissionsLoading)

MISSION\(S\) LOADING[getAllMissions](client.md#getAllMissions)

GET ALL MISSIONS[getMission](client.md#getMission)

GET MISSION[WrappedLoginForm](client.md#WrappedLoginForm)

WrappedLoginForm - For enabling AntD Form decorators on LoginForm[WrappedLoginForm](client.md#WrappedLoginForm)

WrappedLoginForm - For enabling AntD Form decorators on LoginForm[WrappedProfileForm](client.md#WrappedProfileForm)

WrappedProfileForm - For enabling AntD Form decorators on LoginForm[WrappedRegisterForm](client.md#WrappedRegisterForm)

WrappedRegisterForm - For enabling AntD Form decorators on LoginForm[defaultData](client.md#defaultData)

Default Data-object for a MDC to use as default values when generating an MDC It is important that each key/value pair has a value of either int, string or an array of objects!

## Functions

[App\(\)](client.md#App)

App Component[HeaderComponent\(\)](client.md#HeaderComponent)

Header Component[LoginForm\(\)](client.md#LoginForm)

LoginForm Component[CarouselItem\(title, body, imgUrl\)](client.md#CarouselItem)

CarouselItem Component[LoginForm\(\)](client.md#LoginForm)

LoginForm Component[ProfileForm\(\)](client.md#ProfileForm)

ProfileForm Component[RegisterForm\(\)](client.md#RegisterForm)

RegisterForm Component[Sidebar\(\)](client.md#Sidebar)

Sidebar Componet[findOne\(haystack, needles\)](client.md#findOne) ⇒ `boolean`

Determines if an array contains one or more items from another array

## pages

All MDC templates

## mdc

The pieces that make up the various pdf templates are broken down to 'components' in order to make templating PDFs a little bit easier. These components are then used to put together a document definition and create a PDF. This also exposes those components and make them reusable.

### mdc.makePdf\(title, content\)

Generates and returns a pdfMake Object \(PDF\)

**Kind**: static method of [`mdc`](client.md#pdfBuilder.module_mdc)

| Param | Type | Description |
| :--- | :--- | :--- |
| title | `string` | Page/filename |
| content | `array` | An array of makePDF content |

## Login

Login \(Main\) Component

**Kind**: global class  


## EventList

EventList Component

**Kind**: global class  


### new EventList\(activeOnly\)

| Param | Type | Description |
| :--- | :--- | :--- |
| activeOnly | `bool` | Will filter out inactive events on render |

## HeaderCarousel

HeaderCarousel Component

**Kind**: global class  


### new HeaderCarousel\(fetchSlides, slides\)

| Param | Type | Description |
| :--- | :--- | :--- |
| fetchSlides | `function` | Function used for getting slides |
| slides | `array` | An array of slides to display |

## ProfileDashboard

ProfileDashboard

**Kind**: global class  


## LoginStep

LoginStep \(Main\) Component

**Kind**: global class  


## ProfileStep

ProfileStep \(Main\) Component

**Kind**: global class  


## Register

Register Component

**Kind**: global class  


## frontPage - MDC Frontpage Definition : `object`

Standard 132nd MDC Frontpage

**Kind**: global namespace  
**Properties**

| Name | Type | Description |
| :--- | :--- | :--- |
| frontpage.title | `string` | Human-readable page name |
| frontpage.allowMultiple | `bool` | Will allow multiple instances of the |

## API\_ROOT

This needs to point at the API root. Updating this to i.e /api/v2/ will change all connected Actions

**Kind**: global constant  


## registerUser ⇒ `Promise`

Register User Action

**Kind**: global constant  


## setEventsLoading

EVENTS\(S\) LOADING

**Kind**: global constant  


## getAllEvents

GET ALL EVENTS

**Kind**: global constant

| Param | Type | Description |
| :--- | :--- | :--- |
| limit | `string` | Number of events to return |
| desc | `bool` | If true, orders the returned data in descending order by id |

## getEvent

GET EVENT

**Kind**: global constant

| Param | Type | Description |
| :--- | :--- | :--- |
| eventId | `*` | ID of event to return |

## setMissionsLoading

MISSION\(S\) LOADING

**Kind**: global constant  


## getAllMissions

GET ALL MISSIONS

**Kind**: global constant

| Param | Type | Description |
| :--- | :--- | :--- |
| limit | `string` | Number of missions to return |
| desc | `bool` | If true, orders the returned data in descending order by id |

## getMission

GET MISSION

**Kind**: global constant

| Param | Type | Description |
| :--- | :--- | :--- |
| missionID | `*` | ID of mission to return |

## WrappedLoginForm

WrappedLoginForm - For enabling AntD Form decorators on LoginForm

**Kind**: global constant  


## WrappedLoginForm

WrappedLoginForm - For enabling AntD Form decorators on LoginForm

**Kind**: global constant  


## WrappedProfileForm

WrappedProfileForm - For enabling AntD Form decorators on LoginForm

**Kind**: global constant  


## WrappedRegisterForm

WrappedRegisterForm - For enabling AntD Form decorators on LoginForm

**Kind**: global constant  


## defaultData

Default Data-object for a MDC to use as default values when generating an MDC It is important that each key/value pair has a value of either int, string or an array of objects!

**Kind**: global constant  


## App\(\)

App Component

**Kind**: global function  


## HeaderComponent\(\)

Header Component

**Kind**: global function  


## LoginForm\(\)

LoginForm Component

**Kind**: global function  


## CarouselItem\(title, body, imgUrl\)

CarouselItem Component

**Kind**: global function

| Param | Type |
| :--- | :--- |
| title | `string` |
| body | `string` |
| imgUrl | `string` |

## LoginForm\(\)

LoginForm Component

**Kind**: global function  


## ProfileForm\(\)

ProfileForm Component

**Kind**: global function  


## RegisterForm\(\)

RegisterForm Component

**Kind**: global function  


## Sidebar\(\)

Sidebar Componet

**Kind**: global function  


## findOne\(haystack, needles\) ⇒ `boolean`

Determines if an array contains one or more items from another array

**Kind**: global function  
**Returns**: `boolean` - true\|false if haystack contains at least one item from needles

| Param | Type | Description |
| :--- | :--- | :--- |
| haystack | `array` | &gt; The array to search |
| needles | `array` | &gt; The array providing items to check for in the heystack |

