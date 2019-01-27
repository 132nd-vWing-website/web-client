<a name="Posts_ Test Endpoint"></a>

## Posts: Test Endpoint
<h5>Route:</h5>
                            <table class="params">
                            <thead><tr><th>Method</th><th class="last">Path</th></tr></thead>
                            <tr>
                            <td class="type">GET</td>
                            <td class="name last">api/v1/posts/test</td>
                            </tr>
                            </table>
                            
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

**Kind**: route member  
<a name="Posts_ Get all Posts"></a>

## Posts: Get all Posts
<h5>Route:</h5>
                            <table class="params">
                            <thead><tr><th>Method</th><th class="last">Path</th></tr></thead>
                            <tr>
                            <td class="type">GET</td>
                            <td class="name last">api/v1/posts/</td>
                            </tr>
                            </table>
                            <pre class="prettyprint source"><code>                      &lt;h5>Authentication&lt;/h5>
                      &lt;p>None required&lt;/p></code></pre>

**Kind**: route member  
<a name="Posts_ Get a post by ID"></a>

## Posts: Get a post by ID
<h5>Route:</h5>
                            <table class="params">
                            <thead><tr><th>Method</th><th class="last">Path</th></tr></thead>
                            <tr>
                            <td class="type">GET</td>
                            <td class="name last">api/posts/:id</td>
                            </tr>
                            </table>
                            <pre class="prettyprint source"><code>                      &lt;h5>Authentication&lt;/h5>
                      &lt;p>None required&lt;/p></code></pre>
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
            
            
            <td class="description last"><p>is the unique identifier for the post to get.</p></td>
          </tr>
          </table>

**Kind**: route member  

| Param | Type | Description |
| --- | --- | --- |
| :id |  | <p>is the unique identifier for the post to get.</p> |

<a name="Posts_ Add a new post"></a>

## Posts: Add a new post
<h5>Route:</h5>
                            <table class="params">
                            <thead><tr><th>Method</th><th class="last">Path</th></tr></thead>
                            <tr>
                            <td class="type">POST</td>
                            <td class="name last">api/v1/posts/</td>
                            </tr>
                            </table>
                            <pre class="prettyprint source"><code>                      &lt;h5>Authentication&lt;/h5>
                      &lt;p>Requires a Bearer Token (JWT) to be submitted in the header&lt;/p></code></pre>
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
