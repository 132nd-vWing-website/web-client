define({ "api": [
  {
    "version": "0.1.0",
    "type": "get",
    "url": "/api/v1/airfields:id",
    "title": "Get an airfields by its ID or ICAO code",
    "name": "get_airfields_by_id_or_icao_public",
    "group": "Airfields__Public_",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>ID of airfield to retrieve</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "icao",
            "description": "<p>ICAO code of airfield to retrieve</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "metadata",
            "description": "<p>as array of objects, containing the airfield</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n     [\n         {\n             \"airfield_id\": 39,\n             \"af_icao\": \"XRMF\",\n             \"af_name\": \"MOZDOK\",\n             \"af_rwy\": \"8\",\n             \"af_ils\": \"-\",\n             \"af_gnd\": 137.1,\n             \"af_twr\": 137.2,\n             \"af_ctrl\": null,\n             \"af_mag\": \"82\",\n             \"af_elev\": 508,\n             \"af_rwy_length\": 10235,\n             \"af_tcn\": \"-\",\n             \"af_theater_id\": 1\n         },\n         {\n             (... more if ICAO was used, and the airfield has several runways)\n         }\n     ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/routes/api/airfields.js",
    "groupTitle": "Airfields__Public_"
  },
  {
    "version": "0.1.0",
    "type": "get",
    "url": "/api/v1/airfields",
    "title": "Get all airfields",
    "name": "get_airfields_public",
    "group": "Airfields__Public_",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "metadata",
            "description": "<p>as array of objects, containing all airfields</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n     [\n       {\n         \"airfield_id\": 39,\n         \"af_icao\": \"XRMF\",\n         \"af_name\": \"MOZDOK\",\n         \"af_rwy\": \"8\",\n         \"af_ils\": \"-\",\n         \"af_gnd\": 137.1,\n         \"af_twr\": 137.2,\n         \"af_ctrl\": null,\n         \"af_mag\": \"82\",\n         \"af_elev\": 508,\n         \"af_rwy_length\": 10235,\n         \"af_tcn\": \"-\",\n         \"af_theater_id\": 1\n       },\n       {\n        ...etc\n      },\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/routes/api/airfields.js",
    "groupTitle": "Airfields__Public_"
  },
  {
    "version": "0.1.0",
    "type": "get",
    "url": "/api/v1/airfields",
    "title": "Test endpoint",
    "name": "test_public",
    "group": "Airfields__Public_",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "metadata.msg",
            "description": "<p>as a string with an OK message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Airfields Works!\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/routes/api/airfields.js",
    "groupTitle": "Airfields__Public_"
  },
  {
    "version": "0.1.0",
    "type": "delete",
    "url": "/api/v1/posts/:id",
    "title": "Delete a post by ID",
    "name": "get_posts_by_id_public",
    "group": "Posts__Private_",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>ID of post to retrieve</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authentication",
            "description": "<p>as Bearer token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "metadata.post",
            "description": "<p>as a post (object)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   {\n     \"_id\": \"5b6f57c1cd0b100012cb4f71\",\n     \"type\": \"notam\",\n     \"title\": \"A notam #1\",\n     \"text\": \"Text here..\",\n     \"user\": \"5b462250c01a7e0d3c0f6323\",\n     \"likes\": [],\n     \"comments\": [],\n     \"date\": \"2018-08-11T21:40:17.248Z\",\n     \"__v\": 0\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/routes/api/posts.js",
    "groupTitle": "Posts__Private_"
  },
  {
    "version": "0.1.0",
    "type": "post",
    "url": "/api/v1/posts/",
    "title": "Post a new posts",
    "name": "post_post",
    "group": "Posts__Private_",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authentication",
            "description": "<p>as Bearer token</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>as application/x-www-form-urlencoded*</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authentication\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...\",\n  \"Content-Type\": \"application/x-www-form-urlencoded\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "metadata.post",
            "description": "<p>Object the posts</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   {\n     \"_id\": \"5b6f57c1cd0b100012cb4f71\",\n     \"type\": \"notam\",\n     \"title\": \"A notam #1\",\n     \"text\": \"Text here..\",\n     \"user\": \"5b462250c01a7e0d3c0f6323\",\n     \"likes\": [],\n     \"comments\": [],\n     \"date\": \"2018-08-11T21:40:17.248Z\",\n     \"__v\": 0\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/routes/api/posts.js",
    "groupTitle": "Posts__Private_"
  },
  {
    "version": "0.1.0",
    "type": "get",
    "url": "/api/v1/posts/:id",
    "title": "Get posts by ID",
    "name": "get_posts_by_id_public",
    "group": "Posts__Public_",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>ID of post to retrieve</p>"
          }
        ]
      }
    },
    "filename": "api/routes/api/posts.js",
    "groupTitle": "Posts__Public_"
  },
  {
    "version": "0.1.0",
    "type": "get",
    "url": "/api/v1/posts/",
    "title": "Get all posts",
    "name": "get_posts_public",
    "group": "Posts__Public_",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "metadata",
            "description": "<p>as array of objects, containing all posts</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  [\n   {\n     \"_id\": \"5b6f57c1cd0b100012cb4f71\",\n     \"type\": \"notam\",\n     \"title\": \"A notam #1\",\n     \"text\": \"Text here..\",\n     \"user\": \"5b462250c01a7e0d3c0f6323\",\n     \"likes\": [],\n     \"comments\": [],\n     \"date\": \"2018-08-11T21:40:17.248Z\",\n     \"__v\": 0\n   },\n   {\n     \"_id\": \"5b576d936dba280014b1d5a4\",\n     \"type\": \"notam\",\n     \"title\": \"Another Notam!\",\n     \"text\": \"Important text here...\",\n     \"user\": \"5b576c046dba280014b1d5a2\",\n     \"likes\": [],\n     \"comments\": [],\n     \"date\": \"2018-07-24T18:18:59.339Z\",\n     \"__v\": 0\n   }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/routes/api/posts.js",
    "groupTitle": "Posts__Public_"
  },
  {
    "version": "0.1.0",
    "type": "get",
    "url": "/api/v1/posts/test",
    "title": "Test endpoint",
    "name": "test_posts_public",
    "group": "Posts__Public_",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "metadata.msg",
            "description": "<p>as a string with an OK message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Posts Works!\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/routes/api/posts.js",
    "groupTitle": "Posts__Public_"
  }
] });
