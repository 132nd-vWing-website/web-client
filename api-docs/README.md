<a name="Posts"></a>

## Posts
<h5>Route:</h5>
                            <table class="params">
                            <thead><tr><th>Method</th><th class="last">Path</th></tr></thead>
                            <tr>
                            <td class="type">GET</td>
                            <td class="name last">api/v1/posts/test</td>
                            </tr>
                            </table>
                            Test the posts endpoint
                            <h5>Response:</h5>
          <table class="params">
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Attributes</th>
                <th>Default</th>
                <th class="last">Description</th>
              </tr>
            </thead>
            <tr>
            <td class="name">msg</td>
            <td class="type">string</td>
            <td class="attributes">optional</td>
            <td class="default">Posts Works!</td>
            <td class="description last">metadata.msg</td>
          </tr>
          </table>
                            <h5>Response Code:</h5>
          <table class="params">
            <thead>
              <tr>
                
                <th>Type</th>
                
                
                <th class="last">Description</th>
              </tr>
            </thead>
            <tr>
            
            <td class="type">200</td>
            
            
            <td class="description last">if the request is successful</td>
          </tr>
          </table>

**Kind**: route member  
<a name="Posts"></a>

## Posts
<h5>Route:</h5>
                            <table class="params">
                            <thead><tr><th>Method</th><th class="last">Path</th></tr></thead>
                            <tr>
                            <td class="type">GET</td>
                            <td class="name last">api/v1/posts/</td>
                            </tr>
                            </table>
                            Get all posts
                          <h5>Authentication</h5>
                          <p>None required</p>

**Kind**: route member  
<a name="Posts"></a>

## Posts
<h5>Route:</h5>
                            <table class="params">
                            <thead><tr><th>Method</th><th class="last">Path</th></tr></thead>
                            <tr>
                            <td class="type">GET</td>
                            <td class="name last">api/posts/:id</td>
                            </tr>
                            </table>
                            Get post by ID
                          <h5>Authentication</h5>
                          <p>None required</p>
                            <h5>Route Parameters:</h5>
          <table class="params">
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                
                
                <th class="last">Description</th>
              </tr>
            </thead>
            <tr>
            <td class="name">:id</td>
            <td class="type">String</td>
            
            
            <td class="description last">is the unique identifier for the post to get.</td>
          </tr>
          </table>

**Kind**: route member  

| Param | Type | Description |
| --- | --- | --- |
| :id |  | is the unique identifier for the post to get. |

<a name="Posts"></a>

## Posts
<h5>Route:</h5>
                            <table class="params">
                            <thead><tr><th>Method</th><th class="last">Path</th></tr></thead>
                            <tr>
                            <td class="type">POST</td>
                            <td class="name last">api/v1/posts/</td>
                            </tr>
                            </table>
                            Add a new post
                          <h5>Authentication</h5>
                          <p>Requires a Bearer Token (JWT) to be submitted in the header</p>
                            <h5>Header Parameters:</h5>
          <table class="params">
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                
                
                <th class="last">Description</th>
              </tr>
            </thead>
            <tr>
            <td class="name">Authentication</td>
            <td class="type">string</td>
            
            
            <td class="description last">as 'Bearer <jwt-token>'</td>
          </tr><tr>
            <td class="name">Content-Type</td>
            <td class="type">string</td>
            
            
            <td class="description last">as application/x-www-form-urlencoded</td>
          </tr>
          </table>

**Kind**: route member  
