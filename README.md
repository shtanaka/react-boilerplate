# react-boilerplate
React boilerplate using Webpack + Babel

## For starting application
- Install last stable npm version
- `npm install`
- `npm start`

## For prod
Since we use React Router, we need to redirect all routes to SPA so refresh won't break. Managed to do this in nginx:

```
location / {
  if (!-e $request_filename){
    rewrite ^(.*)$ /index.html break;
  }
}
```

Found similar solution for express (NOT TESTED):

```
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'path/to/your/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})
```
