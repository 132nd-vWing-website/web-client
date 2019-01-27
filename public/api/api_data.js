define({ "api": [
  {
    "type": "get",
    "url": "/api/v1/posts/test",
    "title": "/posts/test",
    "name": "TestPosts",
    "group": "Posts",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "metadata.msg",
            "description": "<p>'Posts Workds!'</p>"
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
    "version": "0.0.0",
    "filename": "api/routes/api/posts.js",
    "groupTitle": "Posts"
  }
] });
