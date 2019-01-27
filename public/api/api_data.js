define({ "api": [
  {
    "version": "0.1.0",
    "type": "get",
    "url": "/api/v1/posts/",
    "title": "Get posts by ID (public)",
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
            "description": "<p>Array containing all posts</p>"
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
            "description": "<p>With a positive message</p>"
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
